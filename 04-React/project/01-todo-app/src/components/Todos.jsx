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
