import { CreditCardIcon, ChevronDownIcon } from '@/icons';

export const RequestPayoutMethodCard = ({ bankAccount }) => {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
        Payout Method
      </label>
      <div className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center">
            <CreditCardIcon size={18} />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
              {bankAccount?.bankName || 'Allied Bank'}
            </h4>
            <p className="text-[11px] text-slate-400 font-mono">
              {bankAccount?.accountNumber || '**** **** **** 4242'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-full">
            Verified
          </span>
          <ChevronDownIcon size={16} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default RequestPayoutMethodCard;
