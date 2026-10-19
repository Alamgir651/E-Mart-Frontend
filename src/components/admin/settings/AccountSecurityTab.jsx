import { useState } from 'react';
import { toast } from '@/utils/toast';

export const AccountSecurityTab = () => {
  const [passForm, setPassForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passForm.currentPassword || !passForm.newPassword) {
      toast.error('Please fill in required password fields');
      return;
    }
    if (passForm.newPassword !== passForm.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    toast.success('Password updated successfully!');
    setPassForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleToggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast.success(`Two-factor authentication ${!twoFactorEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Account & Security
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
            Current administrator
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Manage your personal credentials, sign-in sessions and two-factor verification.
        </p>
      </div>

      {/* Card 1: Admin Profile */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Profile Information
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Your system identity and verified email address.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <span className="block text-xs font-medium text-slate-400 mb-1">
              Admin Name
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Admin
            </span>
          </div>

          <div>
            <span className="block text-xs font-medium text-slate-400 mb-1">
              Work Email
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              admin@emart.com
            </span>
          </div>

          <div>
            <span className="block text-xs font-medium text-slate-400 mb-1">
              Platform Role
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200/80">
              Super Admin
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Password Update */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Change Password
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Ensure your account is using a long, random password for security.
          </p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              value={passForm.currentPassword}
              onChange={(e) =>
                setPassForm((p) => ({ ...p, currentPassword: e.target.value }))
              }
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                New Password
              </label>
              <input
                type="password"
                value={passForm.newPassword}
                onChange={(e) =>
                  setPassForm((p) => ({ ...p, newPassword: e.target.value }))
                }
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Confirm New Password
              </label>
              <input
                type="password"
                value={passForm.confirmPassword}
                onChange={(e) =>
                  setPassForm((p) => ({ ...p, confirmPassword: e.target.value }))
                }
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Card 3: Two-Factor Authentication */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex items-center justify-between gap-4">
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
            Two-Factor Authentication (2FA)
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Protect your admin account with an extra verification code upon signing in.
          </p>
        </div>

        <button
          type="button"
          onClick={handleToggle2FA}
          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            twoFactorEnabled ? 'bg-orange-500' : 'bg-slate-300'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
              twoFactorEnabled ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default AccountSecurityTab;
