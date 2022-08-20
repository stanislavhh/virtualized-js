import { IVirtualizedListProps } from './types'
import debounce from './debounce'
import Subject from './Subject'

type RenderSubjects<I> = number

interface IVirtualizedList<I> extends IVirtualizedListProps<I> {}

export default class VirtualizedList<I> implements IVirtualizedList<I> {
  static KEY_NAME = 'virtualized-key'
  static parser = new DOMParser()

  itemHeight
  items
  height
  containerSelector
  renderTemplate
  onItemClick

  private index: Subject<number>
  private previousIndex: number | undefined
  private renderSubjects: Subject<RenderSubjects<I>>[]
  private fullHeightWindow: HTMLDivElement | undefined

  constructor({ height, items, itemHeight, containerSelector, renderTemplate, onItemClick }: IVirtualizedListProps<I>) {
    // State
    this.itemHeight = itemHeight
    this.items = items
    this.height = height
    this.containerSelector = containerSelector
    this.renderTemplate = renderTemplate
    this.onItemClick = onItemClick
    this.index = new Subject(0)

    // Subjects
    this.renderSubjects = [this.index]

    // Methods
    this.onScroll = debounce(this.onScroll.bind(this), 60)
    this.render = this.render.bind(this)
    this.paint = this.paint.bind(this)

    this.previousIndex = undefined
  }

  private get fullHeight() {
    return this.itemHeight * this.itemsLength
  }

  private get visibleItemsLength() {
    return Math.round(this.height / this.itemHeight)
  }

  private get itemsLength() {
    return this.items.length
  }

  private get containerNode() {
    const selector = this.containerSelector
    const container = document.querySelector<HTMLDivElement>(selector)

    if (!container) {
      throw new Error(`Container with provided selector ${selector} is not found`)
    }

    return container
  }

  private getPrevIndex() {
    return this.previousIndex || 0
  }

  init() {
    this.renderSubjects.forEach((subject, i) => subject.subscribe({ name: 'render' + i, update: this.render }))

    this.paint()
  }

  paint() {
    this.containerNode.scrollTop = 0
    this.previousIndex = undefined
    this.setupContainer()
    this.index.update(0)
  }

  private setupContainer() {
    this.fullHeightWindow?.remove()

    this.containerNode.style.height = this.height + 'px'
    this.containerNode.style.overflowY = 'scroll'
    this.containerNode.style.position = 'relative'

    this.fullHeightWindow = document.createElement('div')
    this.fullHeightWindow.style.height = this.fullHeight + 'px'
    this.fullHeightWindow.style.width = '100%'

    this.containerNode.append(this.fullHeightWindow)

    this.removeOnScroll()
    this.containerNode.addEventListener('scroll', this.onScroll)
  }

  private onScroll() {
    const itemHeight = this.itemHeight
    const index = Math.floor(this.containerNode.scrollTop / itemHeight)
    this.index.update(index)
  }

  private removeOnScroll() {
    this.containerNode.removeEventListener('scroll', this.onScroll)
  }

  private isRenderedFirstTime() {
    return this.previousIndex === undefined
  }

  private isItemAlreadyRendered(index: number) {
    return (
      !this.isRenderedFirstTime() &&
      index >= this.getPrevIndex() &&
      index < this.getPrevIndex() + this.visibleItemsLength
    )
  }

  render() {
    const index = this.index.get()

    this.unmountPreviousItems()
    this.mountItems()

    this.previousIndex = index
  }

  private mountItems() {
    const { items, itemHeight, visibleItemsLength, fullHeightWindow, previousIndex } = this
    const index = this.index.get()

    for (let i = index; i < visibleItemsLength + index; i++) {
      if (this.isItemAlreadyRendered(i)) {
        continue
      }

      const template = this.renderTemplate(items[i], i)
      const tree = VirtualizedList.parser.parseFromString(template, 'text/html')
      const itemNode = tree.body.firstChild as HTMLElement

      if (itemNode) {
        itemNode.style.position = 'absolute'
        itemNode.style.height = itemHeight + 'px'
        itemNode.style.top = Math.floor(i * itemHeight) + 'px'
        itemNode.setAttribute(VirtualizedList.KEY_NAME, String(i))
        itemNode.addEventListener('click', () => this.onItemClick?.(items[i]))
      }

      fullHeightWindow?.[!this.isRenderedFirstTime() && i < this.getPrevIndex() ? 'prepend' : 'appendChild'](itemNode)
    }
  }

  private unmountPreviousItems() {
    if (!this.isRenderedFirstTime()) {
      const currentStart = this.index.get()
      const children = this.fullHeightWindow ? [...this.fullHeightWindow.children] : []
      const prevIndex = this.getPrevIndex()

      for (let i = prevIndex; i < this.visibleItemsLength + prevIndex; i++) {
        if (i < currentStart || i >= currentStart + this.visibleItemsLength) {
          const node = children.find((child) => child.getAttribute(VirtualizedList.KEY_NAME) === String(i))
          node?.remove()
        }
      }
    }
  }

  private destroy() {
    this.removeOnScroll()

    this.renderSubjects.forEach((subject, i) => subject.unsubscribe('render' + i))

    this.index.update(0)
    this.previousIndex = undefined

    this.containerNode.innerHTML = ''
  }
}
