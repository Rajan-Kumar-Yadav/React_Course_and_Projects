import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/ApppName";
import TodoItem from "./Components/TodoItem";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { todoName: itemName, date: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(newTodoItems);
  };
  const defaultValue = [{ todoName: "Buy Ghee", date: "01/12/2025" }];
  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />

          <TodoItem />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
