import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <>
      {todoItems.length === 0 && (
        <p className={style.welcome}>Enjoy Your Day</p>
      )}
    </>
  );
};
export default WelcomeMessage;
