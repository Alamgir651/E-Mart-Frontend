import { useState } from 'react';
import { toast } from '@/utils/toast';
import { XIcon, LockIcon } from '@/icons';

export const TwoFactorModal = ({ isOpen, onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const handleVerifyPassword = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error('Please enter your password');
      return;
    }
    setStep(2);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.length < 6) {
      toast.error('Please enter a 6-digit verification code');
      return;
    }
    toast.success('Two-factor authentication enabled successfully!');
    onComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600">
              <LockIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Set Up Two-Factor Auth
              </h3>
              <p className="text-xs text-slate-500">
                Step {step} of 2
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Verify current password */}
        {step === 1 && (
          <form onSubmit={handleVerifyPassword} className="p-6 space-y-4">
            <p className="text-xs text-slate-600">
              To proceed with two-factor setup, please confirm your current administrator password.
            </p>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 transition-all cursor-pointer"
              >
                Continue
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Code confirmation */}
        {step === 2 && (
          <form onSubmit={handleVerifyCode} className="p-6 space-y-4">
            <p className="text-xs text-slate-600">
              Scan the secret key in your authenticator app (e.g. Google Authenticator) and enter the 6-digit code.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-mono text-sm tracking-widest text-slate-800">
              EMART-AUTH-8821-X99Q
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                6-Digit Authenticator Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                placeholder="123456"
                className="w-full px-3.5 py-2.5 text-center font-mono tracking-widest text-base bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 transition-all cursor-pointer"
              >
                Enable 2FA
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TwoFactorModal;
