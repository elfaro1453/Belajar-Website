import React from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

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
