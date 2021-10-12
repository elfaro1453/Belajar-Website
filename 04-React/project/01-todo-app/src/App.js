import React from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

var state = {
  todos: [
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
  ]
 };

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <Todos />
    </React.Fragment>
  )
}

export default App;
