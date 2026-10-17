import { XIcon } from '@/icons';

export const CustomerOrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Order Details {order.id}
            </h3>
            <span className="text-xs text-slate-400 font-medium">
              {order.vendor} &bull; {order.date}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div className="bg-slate-50 p-3.5 rounded-2xl space-y-1.5 border border-slate-100">
            <div className="flex justify-between text-slate-600">
              <span>Status:</span>
              <span className="font-semibold text-slate-900">{order.status}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Items Count:</span>
              <span className="font-semibold text-slate-900">{order.itemsCount}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Vendor / Store:</span>
              <span className="font-semibold text-slate-900">{order.vendor}</span>
            </div>
          </div>

          <div className="flex justify-between pt-2 font-bold text-sm text-slate-900">
            <span>Total Amount:</span>
            <span className="text-orange-600">{order.total}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomerOrderDetailModal;
