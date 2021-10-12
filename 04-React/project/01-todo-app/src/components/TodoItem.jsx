import React from "react"
import './styles/TodoItem.css'

function TodoItem(props) {
  let data = props.data
  let listItem = data.map((item) => {
      return <li className="itemlist" key={item.id}>
        <input type="checkbox" checked={item.completed} onChange={() => props.handleChanges(item.id)}/>
        <span className={item.completed ? "completed" : null}>{item.title}</span>
        <button onClick={() => props.deleteData(item.id)}>X</button>
        </li>
  })

  return (
    <React.Fragment>
      {listItem}
    </React.Fragment>
  )
}
export default TodoItem
