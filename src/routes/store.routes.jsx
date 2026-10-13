import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const VendorOverviewPage = lazy(() => import('@/pages/vendor/VendorOverview/VendorOverviewPage'));
const VendorOrdersPage = lazy(() => import('@/pages/vendor/VendorOrders/VendorOrdersPage'));
const VendorOrderDetailPage = lazy(() => import('@/pages/vendor/VendorOrders/VendorOrderDetailPage'));
const VendorProductsPage = lazy(() => import('@/pages/vendor/VendorProducts/VendorProductsPage'));
const AddEditProductPage = lazy(() => import('@/pages/vendor/VendorProducts/AddEditProductPage'));
const VendorInventoryPage = lazy(() => import('@/pages/vendor/VendorInventory/VendorInventoryPage'));
const VendorFinancePage = lazy(() => import('@/pages/vendor/VendorFinance/VendorFinancePage'));
const VendorPayoutDetailsPage = lazy(() => import('@/pages/vendor/VendorFinance/VendorPayoutDetailsPage'));
const VendorAnalyticsPage = lazy(() => import('@/pages/vendor/VendorAnalytics/VendorAnalyticsPage'));
const VendorStorePage = lazy(() => import('@/pages/vendor/VendorStore/VendorStorePage'));
const VendorNotificationsPage = lazy(() => import('@/pages/vendor/VendorNotifications/VendorNotificationsPage'));
const VendorSettingsPage = lazy(() => import('@/pages/vendor/VendorSettings/VendorSettingsPage'));
const AdminStorePosPage = lazy(() => import('@/pages/admin/AdminStore/AdminStorePosPage'));
const AdminStoreCustomersPage = lazy(() => import('@/pages/admin/AdminStore/AdminStoreCustomersPage'));

export const adminStoreRoutes = (
  <Route path="store">
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<VendorOverviewPage />} />
    <Route path="orders" element={<VendorOrdersPage />} />
    <Route path="orders/:id" element={<VendorOrderDetailPage />} />
    <Route path="products" element={<VendorProductsPage />} />
    <Route path="products/new" element={<AddEditProductPage />} />
    <Route path="products/edit/:id" element={<AddEditProductPage />} />
    <Route path="inventory" element={<VendorInventoryPage />} />
    <Route path="customers" element={<AdminStoreCustomersPage />} />
    <Route path="finance" element={<VendorFinancePage />} />
    <Route path="finance/payouts/:id" element={<VendorPayoutDetailsPage />} />
    <Route path="pos" element={<AdminStorePosPage />} />
    <Route path="analytics" element={<VendorAnalyticsPage />} />
    <Route path="management" element={<VendorStorePage />} />
    <Route path="notifications" element={<VendorNotificationsPage />} />
    <Route path="settings" element={<VendorSettingsPage />} />
  </Route>
);

export default adminStoreRoutes;
