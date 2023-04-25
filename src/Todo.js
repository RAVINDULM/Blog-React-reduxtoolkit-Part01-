import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, toggleTodo, deleteTodo } from "./StateMGT/todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.items);
  const status = useSelector((state) => state.todo.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error fetching todos</div>}
      {status === "succeeded" &&
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Todo;
