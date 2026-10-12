import { useState } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { ShieldAlertIcon, LockIcon, EyeIcon, EyeOffIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const PasswordSecurityCard = () => {
  const [shieldRef, shieldTrigger] = useAnimatedIcon();
  const [lockRef, lockTrigger] = useAnimatedIcon();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  const [twoFactor, setTwoFactor] = useState(false);

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (!passwords.current) {
      toast.error('Please enter your current password');
      return;
    }
    if (passwords.newPass.length < 8) {
      toast.error('New password must be at least 8 characters');
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      toast.error('Passwords do not match');
      return;
    }

    toast.success('Password updated successfully!');
    setPasswords({ current: '', newPass: '', confirm: '' });
  };

  return (
    <div
      onMouseEnter={shieldTrigger.onMouseEnter}
      onMouseLeave={shieldTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6 flex flex-col justify-between"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-500 flex items-center justify-center shrink-0">
          <ShieldAlertIcon ref={shieldRef} size={20} animateOnHover={false} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Password & Security
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Keep your account secure
          </p>
        </div>
      </div>

      <form onSubmit={handleUpdatePassword} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Current Password <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showCurrent ? 'text' : 'password'}
              value={passwords.current}
              onChange={(e) => setPasswords((p) => ({ ...p, current: e.target.value }))}
              placeholder="Enter current password"
              className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowCurrent((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
            >
              {showCurrent ? <EyeOffIcon size={16} animateOnHover={false} /> : <EyeIcon size={16} animateOnHover={false} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            New Password <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showNew ? 'text' : 'password'}
              value={passwords.newPass}
              onChange={(e) => setPasswords((p) => ({ ...p, newPass: e.target.value }))}
              placeholder="Enter new password"
              className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowNew((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
            >
              {showNew ? <EyeOffIcon size={16} animateOnHover={false} /> : <EyeIcon size={16} animateOnHover={false} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Confirm New Password <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              value={passwords.confirm}
              onChange={(e) => setPasswords((p) => ({ ...p, confirm: e.target.value }))}
              placeholder="Confirm new password"
              className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
            >
              {showConfirm ? <EyeOffIcon size={16} animateOnHover={false} /> : <EyeIcon size={16} animateOnHover={false} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer mt-2"
        >
          Update Password
        </button>
      </form>

      <div
        onMouseEnter={lockTrigger.onMouseEnter}
        onMouseLeave={lockTrigger.onMouseLeave}
        className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
            <LockIcon ref={lockRef} size={16} animateOnHover={false} />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
              Two-Factor Authentication
            </h4>
            <p className="text-[11px] text-slate-400 font-medium">
              Add an extra layer of security to your account
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setTwoFactor((p) => !p);
            toast.info(`Two-Factor Authentication ${!twoFactor ? 'enabled' : 'disabled'}`);
          }}
          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
            twoFactor ? 'bg-orange-500' : 'bg-slate-200'
          }`}
        >
          <span
            className={`block w-5 h-5 bg-white rounded-full shadow-xs transition-transform absolute top-0.5 ${
              twoFactor ? 'left-5.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordSecurityCard;
