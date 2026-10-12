import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { SquarePenIcon } from '@/icons';

export const BankAccountCard = ({ bankAccount, onEdit }) => {
  const [editRef, editTrigger] = useAnimatedIcon();
  const initialLetter = bankAccount?.bankName?.[0] || 'B';

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Bank Account
        </h3>
        <button
          type="button"
          onClick={onEdit}
          onMouseEnter={editTrigger.onMouseEnter}
          onMouseLeave={editTrigger.onMouseLeave}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 rounded-xl transition-all cursor-pointer border border-slate-200/70"
        >
          <SquarePenIcon ref={editRef} size={14} animateOnHover={false} />
          <span>Edit</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50/60 border border-slate-200/60">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-sky-100/80 border border-sky-200 text-sky-700 font-semibold text-lg flex items-center justify-center shrink-0">
            {initialLetter}
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              {bankAccount?.bankName || 'Allied Bank'}
            </h4>
            <p className="text-xs text-slate-500 font-mono tracking-wider mt-0.5">
              {bankAccount?.accountNumber || '**** **** **** 4242'}
            </p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wide mt-1">
              ACCOUNT TITLE:{' '}
              <span className="text-slate-600 font-medium normal-case">
                {bankAccount?.accountTitle || 'Fresh Mart (Pvt) Ltd'}
              </span>
            </p>
          </div>
        </div>

        {bankAccount?.isVerified && (
          <span className="self-start sm:self-center px-2.5 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full">
            Verified
          </span>
        )}
      </div>
    </div>
  );
};

export default BankAccountCard;
