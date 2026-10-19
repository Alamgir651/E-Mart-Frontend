import { ShieldAlertIcon, LockIcon } from '@/icons';

export const TwoFactorAuthCard = ({ onOpenSetup, is2FAEnabled = false }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Two-factor authentication
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Add a second verification step when you sign in.
            </p>
          </div>

          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
              is2FAEnabled
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                : 'bg-amber-50 text-amber-700 border border-amber-200/70'
            }`}
          >
            {is2FAEnabled ? 'Enabled' : 'Not enabled'}
          </span>
        </div>

        {/* Recommended Box */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3">
          <ShieldAlertIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-amber-950">
              Recommended for all admins
            </h4>
            <p className="text-xs text-amber-800/90 mt-0.5">
              Protect marketplace settings and team access with an authenticator app.
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-2 pt-1 text-xs text-slate-600">
          <p>1. Verify your current password.</p>
          <p>2. Connect an authenticator app and confirm a code.</p>
          <p>3. Store your recovery codes in a safe place.</p>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-slate-100 mt-4">
        <button
          type="button"
          onClick={onOpenSetup}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <LockIcon className="w-3.5 h-3.5" />
          <span>Set up two-factor</span>
        </button>
        <span className="text-xs text-slate-400">
          Setup has not started. No keys or codes are shown.
        </span>
      </div>
    </div>
  );
};

export default TwoFactorAuthCard;
