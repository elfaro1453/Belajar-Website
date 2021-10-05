# Styling Komponen TodoItem

```javascript
import React from "react"
import './styles/TodoItem.css'

function TodoItem(props) {
  let data = props.data
  let listItem = data.map((item) => {
      return <li className="itemlist">{item}</li>
  })

  return (
    <React.Fragment>
      {listItem}
    </React.Fragment>
  )
}
export default TodoItem
```

```css
.itemlist {
  border: 1px solid blueviolet;
  list-style-type: none;
}
```
