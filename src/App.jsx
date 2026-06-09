import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import About from './pages/About';
import { useTasks } from './hooks/useTasks';
import './App.css';

function App() {
  const {
    tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    updateTask,
    removeTask,
    toggleTaskStatus,
  } = useTasks();

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  tasks={tasks}
                  loading={loading}
                  error={error}
                  onRetry={fetchTasks}
                  removeTask={removeTask}
                  toggleTaskStatus={toggleTaskStatus}
                />
              }
            />
            <Route path="/create" element={<CreateTask addTask={addTask} />} />
            <Route
              path="/edit/:id"
              element={<EditTask updateTask={updateTask} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
