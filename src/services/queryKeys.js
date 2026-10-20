/**
 * Standardized Query Key Factory for TanStack Query Caching.
 * Using structured keys prevents cache collision and enables precise invalidation.
 */
export const QUERY_KEYS = {
  AUTH: {
    USER: ['auth', 'user'],
    PROFILE: ['auth', 'profile'],
  },
  PRODUCTS: {
    ALL: ['products'],
    LIST: (filters = {}) => ['products', 'list', filters],
    DETAIL: (id) => ['products', 'detail', id],
  },
  ORDERS: {
    ALL: ['orders'],
    LIST: (filters = {}) => ['orders', 'list', filters],
    DETAIL: (id) => ['orders', 'detail', id],
  },
  CATEGORIES: {
    ALL: ['categories'],
    DETAIL: (id) => ['categories', 'detail', id],
  },
  VENDORS: {
    ALL: ['vendors'],
    DETAIL: (id) => ['vendors', 'detail', id],
  },
  CUSTOMERS: {
    ALL: ['customers'],
    DETAIL: (id) => ['customers', 'detail', id],
  },
  SETTINGS: {
    COMMISSION: ['settings', 'commission'],
    GENERAL: ['settings', 'general'],
    NOTIFICATIONS: ['settings', 'notifications'],
  },
};

export default QUERY_KEYS;
