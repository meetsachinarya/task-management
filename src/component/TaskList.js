import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
            <button onClick={() => toggleTask(index)} className="btn btn-info ">
              Complete
            </button>
            <button onClick={() => deleteTask(index)} className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
