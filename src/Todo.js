import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./StateMGT/todoSlice";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text: inputValue,
      })
    );
    setInputValue("");
  };

  const handleRemoveTodo = (todo) => {
    dispatch(
      removeTodo({
        id: todo.id,
      })
    );
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
