const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db.json");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/todos", (req, res) => {
  console.log("get todos called");
  res.json(db.todos);
});

app.post("/todos", (req, res) => {
  console.log("new todo called");
  const newTodo = req.body;
  newTodo.id = db.todos[db.todos.length - 1].id++;
  console.log("newtodo", db.todos[db.todos.length - 1].id);
  db.todos.push(newTodo);
  res.json(newTodo);
});

app.patch("/todos/:id", (req, res) => {
  console.log("toggle called");
  const id = parseInt(req.params.id, 10);
  const todo = db.todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).send("Todo not found");
  }
  todo.completed = true;
  res.json(todo);
});

const port = process.env.PORT || 3031;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
