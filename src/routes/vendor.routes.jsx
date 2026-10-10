import { lazy } from 'react';
import { Route } from 'react-router-dom';

const VendorLoginPage = lazy(() => import('@/pages/vendor/VendorLogin/VendorLoginPage'));
const VendorRegisterPage = lazy(() => import('@/pages/vendor/VendorRegister/VendorRegisterPage'));

export const vendorRoutes = (
  <>
    <Route path="/vendor/login" element={<VendorLoginPage />} />
    <Route path="/vendor/register" element={<VendorRegisterPage />} />
  </>
);

export default vendorRoutes;
