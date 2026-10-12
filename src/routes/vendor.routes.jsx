import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const VendorLoginPage = lazy(() => import('@/pages/vendor/VendorLogin/VendorLoginPage'));
const VendorRegisterPage = lazy(() => import('@/pages/vendor/VendorRegister/VendorRegisterPage'));
const VendorLayout = lazy(() => import('@/layouts/VendorLayout'));
const VendorOverviewPage = lazy(() => import('@/pages/vendor/VendorOverview/VendorOverviewPage'));
const VendorOrdersPage = lazy(() => import('@/pages/vendor/VendorOrders/VendorOrdersPage'));
const VendorOrderDetailPage = lazy(() => import('@/pages/vendor/VendorOrders/VendorOrderDetailPage'));
const VendorProductsPage = lazy(() => import('@/pages/vendor/VendorProducts/VendorProductsPage'));
const AddEditProductPage = lazy(() => import('@/pages/vendor/VendorProducts/AddEditProductPage'));
const VendorInventoryPage = lazy(() => import('@/pages/vendor/VendorInventory/VendorInventoryPage'));

export const vendorRoutes = (
  <>
    <Route path="/vendor/login" element={<VendorLoginPage />} />
    <Route path="/vendor/register" element={<VendorRegisterPage />} />
    <Route path="/vendor" element={<VendorLayout />}>
      <Route index element={<Navigate to="/vendor/dashboard" replace />} />
      <Route path="dashboard" element={<VendorOverviewPage />} />
      <Route path="orders" element={<VendorOrdersPage />} />
      <Route path="orders/:id" element={<VendorOrderDetailPage />} />
      <Route path="products" element={<VendorProductsPage />} />
      <Route path="products/new" element={<AddEditProductPage />} />
      <Route path="products/edit/:id" element={<AddEditProductPage />} />
      <Route path="inventory" element={<VendorInventoryPage />} />
      <Route path="*" element={<Navigate to="/vendor/dashboard" replace />} />
    </Route>
  </>
);

export default vendorRoutes;

