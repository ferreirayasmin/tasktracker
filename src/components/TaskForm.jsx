import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
  // Requirement: Controlled Form using useState for the 3 fields
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [urgency, setUrgency] = useState('Baixa');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Requirement: Prevent empty submissions
    if (!title.trim() || !assignee.trim()) {
      setError('Por favor, preencha o título e o responsável.');
      return;
    }

    // Add task
    addTask({ title, assignee, urgency });
    
    // Reset form
    setTitle('');
    setAssignee('');
    setUrgency('Baixa');
    setError('');
    setSuccess(true);
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="task-form-container">
      <h2>Cadastrar Nova Tarefa</h2>
      
      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">Tarefa cadastrada com sucesso!</div>}

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Título da Tarefa</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ex: Desenvolver API de login"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assignee">Responsável</label>
          <input 
            type="text" 
            id="assignee" 
            value={assignee} 
            onChange={(e) => setAssignee(e.target.value)} 
            placeholder="Ex: João Silva"
          />
        </div>

        <div className="form-group">
          <label htmlFor="urgency">Nível de Urgência</label>
          <select 
            id="urgency" 
            value={urgency} 
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

export default TaskForm;
