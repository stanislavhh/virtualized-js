# Virtialized JS 


> Class component for rendering big data scrollable lists using vanilla javascript or typescript


Virtualized JS renders only partials of provided items which fit in window. Thus, there is no overload with huge data lists during the render process.



## Install

```
# npm
npm i --save virtualized-js

# yarn
yarn add virtualized-js
```


## Usage
```javascript
import VirtualizeJS from 'virtualize-js'

const list = new VirtualizeJS({
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

list.init()
```

The code above will attach list with items to a node with `.virtualized` selector.


You can change any of properties by just setting it via `list` like:

```javascript
list.itemHeight = 100
list.paint()
```

The code above will set height of item to 100px. To apply changes you need to call `paint` method.


### List of options

* `containerSelector` - any selector to which the list will be attached
* `height` - height of the list
* `itemHeight` - height of the item in list
* `items` - items array with any data you have
* `renderTemplate` - function that calls for each item that should render in screen. Includes `(item, index)` params and must return correct stringified HTML. 
* `onItemClick` - Function which is called by clicking on item. Includes `item` as argument.


### Testing
 Here is a [code sandbox](https://codesandbox.io/s/virtualized-js-vke92n)