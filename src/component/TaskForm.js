import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskTitle);
    setTaskTitle("");
  };

  return (
  
    
    <form onSubmit={handleSubmit}>
    <h2>My Task</h2> 
      <input
        type="text"
        placeholder="New task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
      />
      <button type="submit" class="btn btn-success">Add Item</button>
    </form>
    
  );
};

export default TaskForm;
