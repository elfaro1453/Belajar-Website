import TodoItem from "./TodoItem"

function Todos() {
  let listData = [
    'Item Pertama',
    'Item Kedua',
    'Item Ketiga',
  ]
  return(
    <ul>
      <TodoItem daftar={listData}/>
    </ul>
  )
}
export default Todos
