export interface Observer<S> {
  name: string
  update: (data: S) => void
}

export type Timer = ReturnType<typeof setTimeout> | undefined

export interface EnhancedTimeout {
  getTimer: () => Timer
  clearTimer: Function
  setTimer: Function
}

export type RenderTemplate<I> = (item: I, index: number) => string

export interface IVirtualizedListProps<I> {
  height: number
  items: I[]
  itemHeight: number
  containerSelector: string
  renderTemplate: RenderTemplate<I>
  onItemClick?: (item: I) => void
}
