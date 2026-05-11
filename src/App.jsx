import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/CreateTask';
import About from './pages/About';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Requirement: Load saved tasks from localStorage on start
  useEffect(() => {
    const savedTasks = localStorage.getItem('agile_tasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Erro ao carregar tarefas do localStorage:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Requirement: Save to localStorage whenever the tasks array is updated
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('agile_tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks, 
      { 
        ...newTask, 
        id: crypto.randomUUID(), 
        completed: false,
        createdAt: new Date().toISOString() 
      }
    ]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus} />} />
            <Route path="/create" element={<CreateTask addTask={addTask} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
