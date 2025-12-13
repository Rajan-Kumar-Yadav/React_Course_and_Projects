import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const onNewItem = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter your Todo Here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success add-button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
