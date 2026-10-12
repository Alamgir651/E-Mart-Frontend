import { ShieldAlertIcon, XIcon, CircleHelpIcon } from '@/icons';

export const StoreSuspendedModal = ({
  isOpen,
  onClose,
  onContactSupport,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shrink-0">
              <ShieldAlertIcon size={24} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                Store Suspended
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-semibold text-slate-600">Fresh Mart</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-100 text-rose-600">
                  Suspended
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Emart Admin has suspended your store. Review the reason below and contact support for more information.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
            <h4 className="text-xs font-semibold text-slate-800">
              Reason for suspension
            </h4>
            <p className="text-[11px] text-slate-400 font-medium">
              Admin reason placeholder
            </p>
            <p className="text-xs text-slate-600 font-mono pt-1">
              [The suspension reason provided by Emart Admin will appear here.]
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-center gap-2.5 text-xs font-medium text-slate-600">
            <CircleHelpIcon size={16} className="text-sky-500 shrink-0" />
            <span>Your store cannot accept new orders while it is suspended.</span>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onContactSupport}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSuspendedModal;
