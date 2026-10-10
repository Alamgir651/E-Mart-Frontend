import { lazy } from 'react';
import { Route } from 'react-router-dom';

const VendorLoginPage = lazy(() => import('@/pages/vendor/VendorLogin/VendorLoginPage'));

export const vendorRoutes = (
  <>
    <Route path="/vendor/login" element={<VendorLoginPage />} />
  </>
);

export default vendorRoutes;
