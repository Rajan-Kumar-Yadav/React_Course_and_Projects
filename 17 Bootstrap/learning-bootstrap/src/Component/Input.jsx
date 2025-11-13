import { useState } from "react";
import TodoData from "./TodoData";
import { use } from "react";

const Input = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const setTaskhandle = (event) => {
    console.log(event.target.value);
    setTask(event.target.value);
  };
  const setDateHandle = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: task,
      date: date,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDate("");
  };
  const onDelete = (deleteId) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };
  return (
    <>
      <h1 className="heading">Todo App</h1>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter Todo here"
          value={task}
          onChange={setTaskhandle}
        />
        <input type="date" value={date} onChange={setDateHandle} />
        <button className="add_button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoData todos={todos} onDelete={onDelete} />
    </>
  );
};
export default Input;
