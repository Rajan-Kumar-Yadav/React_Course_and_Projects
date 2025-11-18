function TodoItem() {
  const TodoItems = [
    {
      todoName: "Buy Milk",
      date: "14/11/2025",
      id: 1,
    },
    {
      todoName: "Go to college",
      date: "15/11/2025",
      id: 2,
    },
    {
      todoName: "Buy Ghee",
      date: "16/11/2025",
      id: 3,
    },
  ];
  return (
    <>
      {TodoItems.map((todo) => (
        <div className="container text-center todoItems" key={todo.id}>
          <div className="row">
            <div className="col-6 todoName">{todo.todoName}</div>
            <div className="col-4 tododate">{todo.date}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger delete-button">
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
