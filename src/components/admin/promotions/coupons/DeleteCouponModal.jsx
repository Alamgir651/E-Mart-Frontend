import { TrashIcon, XIcon } from '@/icons';

export const DeleteCouponModal = ({ isOpen, onClose, onConfirm, coupon }) => {
  if (!isOpen || !coupon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-slate-100 overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500 border border-rose-100">
            <TrashIcon size={20} animateOnHover={false} />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <XIcon size={16} />
          </button>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900">
            Delete Coupon
          </h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Are you sure you want to delete coupon{' '}
            <span className="font-semibold text-slate-800">
              "{coupon.code}"
            </span>{' '}
            ({coupon.title})? This action cannot be undone.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm(coupon.id);
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs shadow-rose-600/20 active:scale-95 transition-all cursor-pointer"
          >
            Delete Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCouponModal;
