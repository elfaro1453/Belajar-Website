import React from 'react'

function AddTodo() {
  return (
    <React.Fragment>
    <input type="text" name="todo" placeholder="Add Todo.."/>
    <input type="submit" value="submit"/>
    </React.Fragment>
  )
}
export default AddTodo
