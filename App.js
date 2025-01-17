import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, task].sort());
      setTask(""); // Clear input field
    }
  };

  // Delete Task
  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List</h2>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "5px" }}
        />
        <button onClick={addTask} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ display: "flex", marginBottom: "5px" }}>
            <span style={{ flex: 1 }}>{t}</span>
            <button onClick={() => deleteTask(t)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
