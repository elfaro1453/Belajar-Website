import React from "react"
import './styles/TodoItem.css'

function TodoItem(props) {
  let data = props.data
  let listItem = data.map((item) => {
      return <li className="itemlist" key={item.id}>{item.title}</li>
  })

  return (
    <React.Fragment>
      {listItem}
    </React.Fragment>
  )
}
export default TodoItem
