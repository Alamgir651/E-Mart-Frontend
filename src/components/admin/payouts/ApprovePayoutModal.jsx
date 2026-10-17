import { CheckIcon, XIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';

export const ApprovePayoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  payout,
}) => {
  if (!isOpen || !payout) return null;

  const remaining = payout.balances?.availableToRequest ?? 11200;
  const alreadyPaid = payout.balances?.alreadyPaid ?? 40000;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-4"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Approve this payout?
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {payout.id} • Requested {payout.requestedDate}, {payout.requestedTime}
            </p>
          </div>

          <OrderActionButton
            icon={XIcon}
            title="Close"
            onClick={onClose}
            iconSize={18}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          />
        </div>

        {/* Transfer Amount Highlight Card */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Amount to transfer
          </p>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            PKR {payout.payoutAmount.toLocaleString()}
          </p>
          <p className="text-xs text-slate-600 font-medium">
            {payout.recipient?.accountName} • {payout.recipient?.bankName} • {payout.recipient?.accountNumber}
          </p>
        </div>

        {/* Remaining Unpaid Info */}
        <div className="flex items-center justify-between py-1 text-xs">
          <span className="text-slate-500 font-medium">Remaining unpaid after successful payment</span>
          <span className="font-bold text-slate-900">PKR {remaining.toLocaleString()}</span>
        </div>

        {/* Disclaimer Notice */}
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Confirming approval sends the request to Processing. Paid earnings remain PKR {alreadyPaid.toLocaleString()} until the bank confirms this transfer.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => onConfirm(payout.id)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckIcon animateOnHover={false} size={15} />
            <span>Confirm approval</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovePayoutModal;
