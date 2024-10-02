import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user) {
            const storedTasks = JSON.parse(localStorage.getItem(`tasks_${user.username}`)) || [];
            setTasks(storedTasks);
        }
    }, [user]);

    const saveTasks = (updatedTasks) => {
        setTasks(updatedTasks);
        localStorage.setItem(`tasks_${user.username}`, JSON.stringify(updatedTasks));
    };

    const addTask = (taskTitle) => saveTasks([...tasks, { title: taskTitle, completed: false }]);

    const deleteTask = (index) => saveTasks(tasks.filter((_, i) =>i !== index));

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        saveTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
};
