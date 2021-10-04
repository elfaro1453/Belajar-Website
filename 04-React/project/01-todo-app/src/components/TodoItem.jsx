function TodoItem(props) {
  let data = props.data
  return (
    data.map((item) => {
      return <li>{item}</li>
    })
  )
}
export default TodoItem
