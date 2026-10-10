import { XIcon } from '@/icons';

export const OrderCancelledCard = ({ order }) => {
  return (
    <div className="space-y-4">
      <div className="p-5 bg-white rounded-2xl border border-rose-100 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shrink-0">
            <XIcon size={18} />
          </div>

          <div className="space-y-1.5 min-w-0 flex-1">
            <h4 className="text-sm font-bold text-rose-600">
              Order Cancelled by {order.cancelSource || 'Store'}
            </h4>
            <p className="text-xs text-slate-500">
              The {order.cancelSource ? 'customer' : 'store'} cancelled this order.
            </p>

            <div className="pt-2 text-xs">
              <span className="text-slate-400">Cancelled on: </span>
              <span className="font-semibold text-slate-700">
                {order.cancelledAt || 'Sep 22, 2025, 11:15 AM'}
              </span>
            </div>

            {order.cancelReason && (
              <div className="mt-2 p-2.5 rounded-xl bg-rose-50/50 border border-rose-100 text-xs">
                <span className="text-slate-500">Reason: </span>
                <strong className="text-slate-900">"{order.cancelReason}"</strong>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/60 flex items-center gap-2.5 text-xs text-rose-800">
        <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
          !
        </span>
        <p className="text-[11px] leading-snug">
          This order was cancelled. The items have been returned to your inventory automatically.
        </p>
      </div>
    </div>
  );
};

export default OrderCancelledCard;
