import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import { taskService } from '../services/taskService';
import './EditTask.css';

function EditTask({ updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadTask() {
      try {
        setLoading(true);
        setError(null);
        const data = await taskService.getById(id);
        if (active) {
          setTask(data);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTask();

    return () => {
      active = false;
    };
  }, [id]);

  const handleUpdateTask = async (taskData) => {
    await updateTask(id, {
      ...taskData,
      completed: task.completed,
    });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    taskService
      .getById(id)
      .then((data) => setTask(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <LoadingSpinner message="Carregando tarefa..." />;
  }

  if (error) {
    return <ErrorAlert message={`Erro ao carregar tarefa: ${error}`} onRetry={handleRetry} />;
  }

  return (
    <div className="edit-task-page fade-in">
      <header className="page-header">
        <h2>Editar Tarefa</h2>
        <p>Atualize os dados da tarefa selecionada.</p>
      </header>

      <TaskForm
        key={task.id}
        onSubmit={handleUpdateTask}
        initialData={task}
        mode="edit"
      />
    </div>
  );
}

export default EditTask;
