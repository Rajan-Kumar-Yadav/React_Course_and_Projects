import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem() {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((todo) => (
        <div className="container text-center todoItems" key={todo.todoName}>
          <div className="row">
            <div className="col-6 todoName">{todo.todoName}</div>
            <div className="col-4 tododate">{todo.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger delete-button"
                onClick={() => deleteItem(todo.todoName)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default TodoItem;
