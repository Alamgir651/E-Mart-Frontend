import { useState, useEffect } from 'react';
import { XIcon, ShieldAlertIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';

const REASON_CATEGORIES = [
  'Incomplete settlement documents',
  'Bank details mismatch',
  'Sales discrepancy',
  'Policy violation',
  'Other',
];

export const RejectPayoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  payout,
}) => {
  const [category, setCategory] = useState(REASON_CATEGORIES[0]);
  const [reason, setReason] = useState(
    'Settlement documents are incomplete for the requested earnings period. Please upload the missing sales reconciliation statement and submit a new request.'
  );
  const [notifyVendor, setNotifyVendor] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCategory(REASON_CATEGORIES[0]);
      setReason(
        'Settlement documents are incomplete for the requested earnings period. Please upload the missing sales reconciliation statement and submit a new request.'
      );
      setNotifyVendor(true);
    }
  }, [isOpen]);

  if (!isOpen || !payout) return null;

  const handleConfirm = () => {
    onConfirm(payout.id, { category, reason, notifyVendor });
  };

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
              Rejection reason
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Required • This reason will be shared with <span className="font-semibold text-slate-700">{payout.vendor}</span>.
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

        {/* Reason Category Dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Reason category <span className="text-rose-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 cursor-pointer"
          >
            {REASON_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Reason Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700">
            Reason for rejection <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={3}
            maxLength={500}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 resize-none transition-all"
          />
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Explain what the vendor needs to correct.</span>
            <span>{reason.length} / 500</span>
          </div>
        </div>

        {/* Checkbox: Notify vendor */}
        <label className="flex items-center gap-2 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={notifyVendor}
            onChange={(e) => setNotifyVendor(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
          />
          <span className="text-xs font-semibold text-slate-700">
            Notify the vendor with this rejection reason
          </span>
        </label>

        {/* Info Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-800 space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldAlertIcon animateOnHover={false} size={14} className="text-amber-600" />
            <span>Earnings are not forfeited</span>
          </div>
          <p className="text-[11px] text-amber-700 leading-relaxed">
            The request is rejected, not the vendor&apos;s earnings. No transaction reference or paid date will be created.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
          >
            Confirm rejection
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

export default RejectPayoutModal;
