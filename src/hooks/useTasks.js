import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../services/taskService';

const sameId = (a, b) => String(a) === String(b);

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskService.getAll();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    async function loadTasks() {
      try {
        setLoading(true);
        setError(null);
        const data = await taskService.getAll();
        if (active) {
          setTasks(Array.isArray(data) ? data : []);
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

    loadTasks();

    return () => {
      active = false;
    };
  }, []);

  const addTask = async (taskData) => {
    const newTask = await taskService.create({
      ...taskData,
      completed: false,
    });
    setTasks((prev) => [...prev, newTask]);
    return newTask;
  };

  const updateTask = async (taskId, taskData) => {
    const updatedTask = await taskService.update(taskId, taskData);
    setTasks((prev) =>
      prev.map((task) => (sameId(task.id, taskId) ? updatedTask : task))
    );
    return updatedTask;
  };

  const removeTask = async (taskId) => {
    await taskService.delete(taskId);
    setTasks((prev) => prev.filter((task) => !sameId(task.id, taskId)));
  };

  const toggleTaskStatus = async (taskId) => {
    const task = tasks.find((item) => sameId(item.id, taskId));
    if (!task) return;

    await updateTask(taskId, {
      title: task.title,
      assignee: task.assignee,
      urgency: task.urgency,
      completed: !task.completed,
    });
  };

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    updateTask,
    removeTask,
    toggleTaskStatus,
  };
}
