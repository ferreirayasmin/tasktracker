import TaskList from '../components/TaskList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import './Dashboard.css';

function Dashboard({ tasks, loading, error, onRetry, removeTask, toggleTaskStatus }) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const pendingCount = totalCount - completedCount;

  if (loading) {
    return <LoadingSpinner message="Carregando tarefas da API..." />;
  }

  if (error) {
    return (
      <ErrorAlert
        message={`Erro ao carregar tarefas: ${error}. Verifique se o back-end está rodando.`}
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="dashboard-container fade-in">
      <header className="dashboard-header">
        <h2>Dashboard de Tarefas</h2>
        <p>Visão geral do progresso dos projetos da equipe.</p>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total</h3>
          <span className="stat-value">{totalCount}</span>
        </div>
        <div className="stat-card">
          <h3>Pendentes</h3>
          <span className="stat-value warning">{pendingCount}</span>
        </div>
        <div className="stat-card">
          <h3>Concluídas</h3>
          <span className="stat-value success">{completedCount}</span>
        </div>
      </div>

      <section className="tasks-section">
        <h3>Lista de Tarefas</h3>
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      </section>
    </div>
  );
}

export default Dashboard;
