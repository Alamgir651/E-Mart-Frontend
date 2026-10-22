/**
 * Centralized API Routes Configuration
 * Maps application modules to backend endpoints
 */
export const apiRoutes = {
  auth: {
    login: '/auth/login',
    adminLogin: '/auth/admin/login',
    adminVerify2fa: '/auth/admin/2fa/verify',
    admin2faStatus: '/auth/admin/2fa/status',
    admin2faSetup: '/auth/admin/2fa/setup',
    admin2faEnable: '/auth/admin/2fa/enable',
    admin2faDisable: '/auth/admin/2fa/disable',
    changePassword: '/auth/password/change',
    logout: '/auth/logout',
  },
  user: {
    me: '/me',
    updateProfile: '/me',
    notificationPreferences: '/me/notification-preferences',
  },
  files: {
    upload: '/files/upload',
  },
  store: {
    settings: '/vendor/store',
    updateSettings: '/vendor/store',
    logo: '/vendor/store/logo',
    banner: '/vendor/store/banner',
  },
  admin: {
    settings: '/admin/settings',
    supportContact: '/admin/settings/support',
  },
};

export default apiRoutes;
