const listeners = new Set();
let toastIdCounter = 0;

export const toast = {
  notify(message, type = 'info', duration = 4000) {
    const id = ++toastIdCounter;
    const toastItem = { id, message, type, duration };
    listeners.forEach((listener) => listener.add(toastItem));
    return id;
  },

  success(message, duration = 4000) {
    return this.notify(message, 'success', duration);
  },

  error(message, duration = 4000) {
    return this.notify(message, 'error', duration);
  },

  warning(message, duration = 4000) {
    return this.notify(message, 'warning', duration);
  },

  info(message, duration = 4000) {
    return this.notify(message, 'info', duration);
  },

  dismiss(id) {
    listeners.forEach((listener) => listener.remove(id));
  },

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export default toast;
