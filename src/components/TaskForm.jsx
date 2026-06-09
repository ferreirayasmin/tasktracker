import { useState } from 'react';
import './TaskForm.css';

const DEFAULT_URGENCY = 'Baixa';

function TaskForm({ onSubmit, initialData = null, mode = 'create' }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [assignee, setAssignee] = useState(initialData?.assignee || '');
  const [urgency, setUrgency] = useState(initialData?.urgency || DEFAULT_URGENCY);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !assignee.trim()) {
      setError('Por favor, preencha o título e o responsável.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      await onSubmit({ title, assignee, urgency });
      setSuccess(true);

      if (mode === 'create') {
        setTitle('');
        setAssignee('');
        setUrgency(DEFAULT_URGENCY);
      }

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || 'Não foi possível salvar a tarefa.');
    } finally {
      setSubmitting(false);
    }
  };

  const isEditMode = mode === 'edit';

  return (
    <div className="task-form-container">
      <h2>{isEditMode ? 'Editar Tarefa' : 'Cadastrar Nova Tarefa'}</h2>

      {error && <div className="alert error">{error}</div>}
      {success && (
        <div className="alert success">
          {isEditMode ? 'Tarefa atualizada com sucesso!' : 'Tarefa cadastrada com sucesso!'}
        </div>
      )}

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

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting
            ? 'Salvando...'
            : isEditMode
              ? 'Salvar Alterações'
              : 'Adicionar Tarefa'}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
