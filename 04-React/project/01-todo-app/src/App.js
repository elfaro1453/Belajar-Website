import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]);

  const handleChanges = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
      )
    )
  }

  const deleteData = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    )
  }

  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <Todos todos={todos} handleChanges={handleChanges} deleteData={deleteData}/>
    </React.Fragment>
  )
}

export default App;
