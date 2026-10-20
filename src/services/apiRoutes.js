import baseURL from './apiBaseURL';

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${baseURL}/auth/login`,
    REGISTER: `${baseURL}/auth/register`,
    LOGOUT: `${baseURL}/auth/logout`,
    VERIFY_2FA: `${baseURL}/auth/verify-2fa`,
  },
  VENDOR: {
    REGISTER: `${baseURL}/vendor/register`,
    PROFILE: `${baseURL}/vendor/profile`,
    PRODUCTS: `${baseURL}/vendor/products`,
    ORDERS: `${baseURL}/vendor/orders`,
  },
  ADMIN: {
    VENDORS: `${baseURL}/admin/vendors`,
    SETTINGS: `${baseURL}/admin/settings`,
    COMMISSION: `${baseURL}/admin/commission`,
  },
};

export default API_ROUTES;