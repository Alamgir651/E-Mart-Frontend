import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminLoginPage = lazy(() => import('@/pages/admin/AdminLogin/AdminLoginPage'));
const AdminTwoFactorPage = lazy(() => import('@/pages/admin/AdminTwoFactor/AdminTwoFactorPage'));
const AdminResetPasswordPage = lazy(() => import('@/pages/admin/AdminResetPassword/AdminResetPasswordPage'));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const AdminOverviewPage = lazy(() => import('@/pages/admin/AdminOverview/AdminOverviewPage'));

export const adminRoutes = (
  <>
    <Route path="/admin/login" element={<AdminLoginPage />} />
    <Route path="/admin/2fa" element={<AdminTwoFactorPage />} />
    <Route path="/admin/reset-password" element={<AdminResetPasswordPage />} />
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="dashboard" element={<AdminOverviewPage />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Route>
  </>
);

export default adminRoutes;
