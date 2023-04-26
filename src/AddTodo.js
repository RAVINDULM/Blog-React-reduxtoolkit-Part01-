import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./StateMGT/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("add todo", text);
    if (text) {
      const newTodo = {
        text: text,
        completed: false,
      };
      console.log("add todo", newTodo);
      dispatch(addTodo(newTodo));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
