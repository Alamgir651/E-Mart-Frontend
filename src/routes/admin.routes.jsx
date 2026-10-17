import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { adminStoreRoutes } from './store.routes';

const AdminLoginPage = lazy(() => import('@/pages/admin/AdminLogin/AdminLoginPage'));
const AdminTwoFactorPage = lazy(() => import('@/pages/admin/AdminTwoFactor/AdminTwoFactorPage'));
const AdminResetPasswordPage = lazy(() => import('@/pages/admin/AdminResetPassword/AdminResetPasswordPage'));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const AdminOverviewPage = lazy(() => import('@/pages/admin/AdminOverview/AdminOverviewPage'));
const AdminVendorsPage = lazy(() => import('@/pages/admin/AdminVendors/AdminVendorsPage'));
const AdminVendorDetailPage = lazy(() => import('@/pages/admin/AdminVendors/AdminVendorDetailPage'));
const AdminRidersPage = lazy(() => import('@/pages/admin/AdminRiders/AdminRidersPage'));
const AdminRiderDetailPage = lazy(() => import('@/pages/admin/AdminRiders/AdminRiderDetailPage'));
const AdminCustomersPage = lazy(() => import('@/pages/admin/AdminCustomers/AdminCustomersPage'));
const AdminCustomerDetailPage = lazy(() => import('@/pages/admin/AdminCustomers/AdminCustomerDetailPage'));
const AdminOrdersPage = lazy(() => import('@/pages/admin/AdminOrders/AdminOrdersPage'));
const AdminVendorOrdersPage = lazy(() => import('@/pages/admin/AdminOrders/AdminVendorOrdersPage'));

export const adminRoutes = (
  <>
    <Route path="/admin/login" element={<AdminLoginPage />} />
    <Route path="/admin/2fa" element={<AdminTwoFactorPage />} />
    <Route path="/admin/reset-password" element={<AdminResetPasswordPage />} />
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="dashboard" element={<AdminOverviewPage />} />
      <Route path="vendors" element={<AdminVendorsPage />} />
      <Route path="vendors/:id" element={<AdminVendorDetailPage />} />
      <Route path="riders" element={<AdminRidersPage />} />
      <Route path="riders/:id" element={<AdminRiderDetailPage />} />
      <Route path="customers" element={<AdminCustomersPage />} />
      <Route path="customers/:id" element={<AdminCustomerDetailPage />} />
      <Route path="orders" element={<AdminOrdersPage />} />
      <Route path="orders/vendor/:vendorId" element={<AdminVendorOrdersPage />} />
      {adminStoreRoutes}

      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Route>
  </>
);


export default adminRoutes;
