# Styling Komponen Todos

```javascript
import TodoItem from "./TodoItem"
import './styles/Todos.css'

function Todos() {
  let listData = [
    'Item Pertama',
    'Item Kedua',
    'Item Ketiga'
  ]
  return(
    <ul id="todos">
      <TodoItem data={listData} />
    </ul>
  )
}
export default Todos
```

```css
#todos {
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0px;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}
```