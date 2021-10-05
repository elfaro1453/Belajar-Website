import './styles/AddTodo.css'

function AddTodo() {
  return (
    <form className="form">
      <input type="text" name="todo" placeholder="Add Todo.." id="todo"/>
      <input type="submit" value="submit" id="submit"/>
    </form>
  )
}
export default AddTodo
