import { useLocation } from 'react-router-dom';

export const SettingsHeader = () => {
  const location = useLocation();
  const isAdminStore =
    location.pathname.startsWith('/admin') ||
    location.pathname.includes('/store/settings');

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
        Settings
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
        {isAdminStore
          ? 'Manage your account, security, and notification preferences'
          : 'Manage your account, business, payment, and system preferences'}
      </p>
    </div>
  );
};

export default SettingsHeader;
