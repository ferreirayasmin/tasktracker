import React from 'react';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css';

function CreateTask({ addTask }) {
  const navigate = useNavigate();

  const handleAddTask = (taskData) => {
    addTask(taskData);
    // Opcional: Redirecionar para o dashboard após um breve momento
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="create-task-page fade-in">
      <header className="page-header">
        <h2>Adicionar Nova Tarefa</h2>
        <p>Preencha os detalhes para atribuir uma nova atividade.</p>
      </header>
      
      <TaskForm addTask={handleAddTask} />
    </div>
  );
}

export default CreateTask;
