import { BuildingIcon, CircleCheckIcon, ClockIcon, ShieldAlertIcon } from '@/icons';

export const PayoutDetailRightColumn = ({ payout }) => {
  const rec = payout.recipient || {};
  const isCompleted = payout.status === 'Completed';
  const isProcessing = payout.status === 'Processing';

  return (
    <div className="space-y-5">
      {/* Payout Recipient Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3.5">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Payout recipient</h3>
          <p className="text-xs text-slate-400 mt-0.5">Verified vendor bank account</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-600 flex items-center justify-center shrink-0">
              <BuildingIcon animateOnHover={false} size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {rec.accountName || 'Vendor Pvt. Ltd.'}
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                {rec.bankName || 'HBL • Bank transfer'}
              </p>
            </div>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            Verified
          </span>
        </div>

        <div className="flex items-center justify-between text-xs py-1">
          <span className="text-slate-500 font-medium">Account number</span>
          <span className="font-mono font-bold text-slate-900">
            {rec.accountNumber || '**** **** 4821'}
          </span>
        </div>

        <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-100">
          Recipient verified on {rec.verifiedDate || '01 Oct 2026'}. Only masked bank information is shown.
        </p>
      </div>

      {/* Request Timeline Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3.5">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Request timeline</h3>
          <p className="text-xs text-slate-400 mt-0.5">All timestamps in PKT</p>
        </div>

        <div className="space-y-4 pt-2">
          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <CircleCheckIcon animateOnHover={false} size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Request submitted</p>
              <p className="text-[11px] text-slate-400">
                {payout.requestedDate}, {payout.requestedTime}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {payout.vendor} requested PKR {payout.payoutAmount.toLocaleString()}.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isCompleted || isProcessing
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              <ClockIcon animateOnHover={false} size={14} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Awaiting admin review</p>
              <p className="text-xs text-slate-600 mt-0.5">
                {isCompleted || isProcessing
                  ? 'Approved by administrator'
                  : 'Approval required • Review earnings and verified bank details.'}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-700'
                  : isProcessing
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              <BuildingIcon animateOnHover={false} size={13} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Bank transfer</p>
              <p className="text-xs text-slate-600 mt-0.5">
                {isCompleted
                  ? `Completed • Transaction: ${payout.txnId}`
                  : isProcessing
                  ? 'In progress with banking network'
                  : 'Not started • Starts only after approval.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Control Notice Box */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-800 space-y-1">
        <div className="flex items-center gap-1.5 font-bold">
          <ShieldAlertIcon animateOnHover={false} size={14} className="text-amber-600" />
          <span>Payment control</span>
        </div>
        <p className="text-[11px] text-amber-700 leading-relaxed">
          Only a bank-confirmed transfer moves earnings from pending to paid.
        </p>
      </div>
    </div>
  );
};

export default PayoutDetailRightColumn;
