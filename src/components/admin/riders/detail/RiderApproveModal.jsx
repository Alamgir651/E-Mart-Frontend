import { XIcon, CheckIcon, PhoneIcon, MailIcon } from '@/icons';

export const RiderApproveModal = ({
  isOpen,
  onClose,
  onConfirm,
  rider,
}) => {
  if (!isOpen || !rider) return null;

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

        {/* Emerald Checkmark Badge */}
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-4 border-emerald-100/70 flex items-center justify-center text-white mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-xs">
            <CheckIcon size={22} className="stroke-[3]" />
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Approve Rider
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
          Are you sure you want to approve this rider?
        </p>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          Once approved, the rider will get access to the rider app and can start accepting and delivering orders.
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

        {/* Permissions Green Card */}
        <div className="mt-4 p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-left space-y-2">
          <h5 className="text-xs font-bold text-emerald-800">
            After approval, the rider will be able to:
          </h5>
          <div className="space-y-1.5 text-xs text-emerald-700 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckIcon size={10} className="stroke-[3]" />
              </div>
              <span>Login to rider app</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckIcon size={10} className="stroke-[3]" />
              </div>
              <span>Accept delivery orders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckIcon size={10} className="stroke-[3]" />
              </div>
              <span>View assigned deliveries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <CheckIcon size={10} className="stroke-[3]" />
              </div>
              <span>Track earnings and payouts</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Approve Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiderApproveModal;
