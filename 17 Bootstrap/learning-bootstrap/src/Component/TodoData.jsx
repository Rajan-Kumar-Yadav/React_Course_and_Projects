const TodoData = ({ todos, onDelete }) => {
  return (
    <>
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="todo-empty">No todos yet. Add one!</div>
        ) : (
          <>
            {todos.map((todo) => (
              <div className="Todo_container" key={todo.id}>
                <p>{todo.task}</p>
                <p className="todo_date">{todo.date}</p>
                <button
                  className="delete_button"
                  onClick={() => onDelete(todo.id)}
                >
                  {" "}
                  Delete
                </button>
              </div>
            ))}{" "}
          </>
        )}
      </div>
    </>
  );
};
export default TodoData;
