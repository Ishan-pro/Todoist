import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState(" ");

  const [todo, setTodo] = useState("");

  const handleNewTodo = () => {
    setTodoList((prev) => prev + '--sfsf--' + todo);
    setTodo('')
  };

  return (
    <>
      <h1>My items</h1>
      <h2>Todos</h2>
      {todoList.split("--sfsf--").map((todo) => (
        <p>{todo}</p>
      ))}
      <input
        placeholder="new Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      ></input>
      <button onClick={handleNewTodo}>Create Todo</button>
    </>
  );
}

export default App;
