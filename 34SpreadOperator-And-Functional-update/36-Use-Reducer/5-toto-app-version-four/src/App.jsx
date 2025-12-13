import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/ApppName";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />

          <TodoItem />
        </center>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
