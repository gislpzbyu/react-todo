import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="app">
        <h1>My To-Do List</h1>

        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`task-item ${task.completed ? "completed" : ""}`}
              onClick={() => toggleTask(index)}
            >
              <span>{task.text}</span>
              <button onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}>❌</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;