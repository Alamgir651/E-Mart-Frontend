import { XIcon } from '@/icons';
import OrderActionButton from '../OrderActionButton';

export const OrderDetailHeader = ({ order, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Order {order.orderId || order.id}
          </h2>
          <span
            className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold border ${
              order.status === 'Completed'
                ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                : order.status === 'Out for Delivery'
                ? 'bg-blue-50 text-blue-600 border-blue-200/80'
                : order.status === 'Cancelled'
                ? 'bg-rose-50 text-rose-600 border-rose-200/80'
                : 'bg-amber-50 text-amber-600 border-amber-200/80'
            }`}
          >
            {order.status}
          </span>
        </div>
        <p className="text-xs text-slate-400 font-medium mt-1">
          Placed on {order.date}
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          <span>Print</span>
        </button>

        <OrderActionButton
          icon={XIcon}
          title="Close modal"
          onClick={onClose}
          iconSize={18}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        />
      </div>
    </div>
  );
};

export default OrderDetailHeader;
