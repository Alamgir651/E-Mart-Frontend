import { Link } from 'react-router-dom';
import { ShieldAlertIcon, CheckIcon } from '@/icons';

export const AdminOverviewPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
        <ShieldAlertIcon size={32} />
      </div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
        Admin Dashboard
      </h1>
      <p className="text-slate-500 text-sm max-w-md mt-2">
        Welcome to the E-Mart Central Administration Console. You have successfully authenticated through Two-Factor Authentication.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link
          to="/admin/login"
          className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Back to Admin Login
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckIcon size={14} className="stroke-[3]" />
          <span>Session Authenticated</span>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
