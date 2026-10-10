import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

const VendorLoginPage = lazy(() => import('@/pages/vendor/VendorLogin/VendorLoginPage'));
const VendorRegisterPage = lazy(() => import('@/pages/vendor/VendorRegister/VendorRegisterPage'));
const VendorLayout = lazy(() => import('@/layouts/VendorLayout'));
const VendorOverviewPage = lazy(() => import('@/pages/vendor/VendorOverview/VendorOverviewPage'));

export const vendorRoutes = (
  <>
    <Route path="/vendor/login" element={<VendorLoginPage />} />
    <Route path="/vendor/register" element={<VendorRegisterPage />} />
    <Route path="/vendor" element={<VendorLayout />}>
      <Route index element={<Navigate to="/vendor/dashboard" replace />} />
      <Route path="dashboard" element={<VendorOverviewPage />} />
      <Route path="*" element={<Navigate to="/vendor/dashboard" replace />} />
    </Route>
  </>
);

export default vendorRoutes;

