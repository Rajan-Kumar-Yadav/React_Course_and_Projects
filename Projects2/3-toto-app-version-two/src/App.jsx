import "./App.css";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/ApppName";
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem />
      </center>
    </>
  );
}

export default App;
