import { useLocation } from 'react-router-dom';

export const usePortalBase = () => {
  const location = useLocation();
  const isAdminStore = location.pathname.startsWith('/admin/store');
  const basePath = isAdminStore ? '/admin/store' : '/vendor';

  const getRoute = (subPath = '') => {
    if (!subPath) return basePath;
    const cleanSub = subPath.startsWith('/') ? subPath : `/${subPath}`;
    return `${basePath}${cleanSub}`;
  };

  return {
    isAdminStore,
    basePath,
    getRoute,
  };
};

export default usePortalBase;
