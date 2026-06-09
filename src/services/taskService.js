import { apiRequest } from './api';

export const taskService = {
  getAll() {
    return apiRequest('/tasks');
  },

  getById(id) {
    return apiRequest(`/tasks/${id}`);
  },

  create(task) {
    return apiRequest('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
  },

  update(id, task) {
    return apiRequest(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    });
  },

  delete(id) {
    return apiRequest(`/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};
