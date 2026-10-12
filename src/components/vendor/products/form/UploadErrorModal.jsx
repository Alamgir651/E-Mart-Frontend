import { XIcon, BadgeAlertIcon } from '@/icons';

export const UploadErrorModal = ({
  isOpen,
  missingFields = [],
  onClose,
  onFixErrors,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 text-center animate-in fade-in zoom-in-95 duration-150">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <XIcon size={16} />
        </button>

        <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mb-3 shadow-xs">
          <span className="text-2xl font-black leading-none">!</span>
        </div>

        <h3 className="text-xl font-black text-slate-900">Upload Error</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
          Your product could not be uploaded. Please fill in all required fields before publishing.
        </p>

        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
            <BadgeAlertIcon size={15} className="text-rose-500" />
            <span>Missing Required Information:</span>
          </div>

          <div className="space-y-1.5 mt-2 pl-2">
            {missingFields.map((field) => (
              <div
                key={field}
                className="flex items-center gap-2 text-xs font-semibold text-rose-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>{field}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 mt-3 pt-2.5 border-t border-slate-200/60 font-medium">
            💡 <strong className="text-slate-700">No need to start over:</strong> Your entered product details are preserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onFixErrors}
            className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
          >
            Fix Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadErrorModal;
