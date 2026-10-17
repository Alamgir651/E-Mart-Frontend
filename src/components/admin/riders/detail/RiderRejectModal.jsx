import { useState } from 'react';
import { XIcon, PhoneIcon, MailIcon, ChevronDownIcon } from '@/icons';

const REJECTION_REASONS = [
  'Incomplete Documents',
  'Invalid or Expired Driving License',
  'Failed Identity Verification (CNIC)',
  'Vehicle Does Not Meet Platform Standards',
  'Unreachable on Contact Details',
  'Background Check Discrepancy',
  'Other',
];

export const RiderRejectModal = ({
  isOpen,
  onClose,
  onConfirm,
  rider,
}) => {
  const [reason, setReason] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen || !rider) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) {
      setError(true);
      return;
    }
    const finalReason = reason === 'Other' && customNote ? customNote : reason;
    onConfirm(finalReason);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <XIcon size={18} />
        </button>

        {/* Rose Cross Badge */}
        <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 border-4 border-rose-100/70 flex items-center justify-center text-white mb-4">
          <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shadow-xs">
            <XIcon size={22} className="stroke-[3]" />
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Reject Rider
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
          Are you sure you want to reject this rider?
        </p>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          The rider will not get access to the rider app. You can also add a reason for rejection.
        </p>

        {/* Compact Rider Card */}
        <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-left gap-3">
          <div className="flex items-center gap-3">
            <img
              src={rider.avatar}
              alt={rider.name}
              className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
              }}
            />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {rider.name}
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                {rider.riderId || rider.code}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 space-y-0.5 text-right font-medium">
            <div className="flex items-center justify-end gap-1">
              <PhoneIcon size={12} className="text-slate-400" />
              <span>{rider.phone}</span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <MailIcon size={12} className="text-slate-400" />
              <span>{rider.email}</span>
            </div>
          </div>
        </div>

        {/* Rejection Reason Form */}
        <form onSubmit={handleSubmit} className="mt-4 text-left space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Reason for Rejection <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                  setError(false);
                }}
                className={`w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none transition-all pr-9 cursor-pointer ${
                  error
                    ? 'border-rose-400 ring-2 ring-rose-500/20'
                    : 'border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                }`}
              >
                <option value="">Select a reason</option>
                {REJECTION_REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
            {error && (
              <p className="text-[11px] text-rose-500 mt-1 font-medium">
                Please select a reason for rejection.
              </p>
            )}
          </div>

          {reason === 'Other' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Additional Notes
              </label>
              <textarea
                rows={2}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Explain the reason for rejecting this rider..."
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
            </div>
          )}

          {/* Actions */}
          <div className="pt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Reject Rider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RiderRejectModal;
