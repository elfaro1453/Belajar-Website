import TodoItem from "./TodoItem"
import './styles/Todos.css'

function Todos(props) {
  return(
    <ul id="todos">
      <TodoItem data={props.todos} handleChanges={props.handleChanges}/>
    </ul>
  )
}
export default Todos
