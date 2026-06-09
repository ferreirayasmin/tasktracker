import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import './CreateTask.css';

function CreateTask({ addTask }) {
  const navigate = useNavigate();

  const handleAddTask = async (taskData) => {
    await addTask(taskData);
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

      <TaskForm onSubmit={handleAddTask} mode="create" />
    </div>
  );
}

export default CreateTask;
