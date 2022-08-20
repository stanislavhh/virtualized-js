import VirtualizeJS from './src/index'
import './styles.css'

interface ListItem {
    title: string
    description: string
}

const listItems = (length: number = 1000) => Array
    .from({ length })
    .map((i, id): ListItem => ({ title: 'Title' + id, description: 'Big Description' + id }))


const virtualizeJS = new VirtualizeJS<ListItem>({
    containerSelector: '.virtualized',
    height: 400,
    items: listItems(),
    itemHeight: 60,
    renderTemplate: (item: ListItem, index) => `
        <div class="list-item">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>    
    `
})


virtualizeJS.init()

const setClickHandlerButton = document.querySelector('#click-handler') as HTMLButtonElement
const increaseIteHeightButton = document.querySelector('#increase-item-height') as HTMLButtonElement
const increaseWindowHeightButton = document.querySelector('#increase-window-height') as HTMLButtonElement
const changeTemplateButton = document.querySelector('#change-template') as HTMLButtonElement
const addItemsButton = document.querySelector('#add-1k-items') as HTMLButtonElement


setClickHandlerButton.onclick = () => {
    virtualizeJS.onItemClick = (item: ListItem) => {
        console.log(item)
    }

    virtualizeJS.paint()
}

increaseIteHeightButton.onclick = () => {
    virtualizeJS.itemHeight = 80

    virtualizeJS.paint()
}

increaseWindowHeightButton.onclick = () => {
    virtualizeJS.height = 600

    virtualizeJS.paint()
}

changeTemplateButton.onclick = () => {
    virtualizeJS.renderTemplate = () => `
    <div class="list-item">
        <p>Item Changed!</p>
    </div>    
`

    virtualizeJS.paint()
}

addItemsButton.onclick = () => {
    virtualizeJS.items = listItems(2000)

    virtualizeJS.paint()
}

