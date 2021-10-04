function TodoItem(props) {
  let data = props.daftar
  return (
    data.map((item) => {
      return <li>{item}</li>
    })
  )
}
export default TodoItem
