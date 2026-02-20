import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [work, setWork] = useState([]);

  function addTodo() {
    setWork([...work, input]);
    setInput("");
  }

  function deleteTodo(index) {
    const newList = work.filter((_, i) => i !== index);
    setWork(newList);
  }

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      {work.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
