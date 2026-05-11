import React from 'react';
import './TaskList.css';

function TaskList({ tasks, removeTask, toggleTaskStatus }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa cadastrada no momento.</p>
        <span className="empty-icon">📋</span>
      </div>
    );
  }

  const getUrgencyClass = (urgency) => {
    switch (urgency) {
      case 'Alta': return 'urgency-high';
      case 'Média': return 'urgency-medium';
      case 'Baixa': return 'urgency-low';
      default: return '';
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
          <div className="task-header">
            <h3 className="task-title">{task.title}</h3>
            <span className={`task-urgency ${getUrgencyClass(task.urgency)}`}>
              {task.urgency}
            </span>
          </div>
          
          <div className="task-body">
            <p><strong>Responsável:</strong> {task.assignee}</p>
            <p className="task-date">Adicionada em: {new Date(task.createdAt).toLocaleDateString('pt-BR')}</p>
          </div>
          
          <div className="task-actions">
            <button 
              className={`status-btn ${task.completed ? 'btn-undo' : 'btn-complete'}`}
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button 
              className="delete-btn"
              onClick={() => removeTask(task.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
