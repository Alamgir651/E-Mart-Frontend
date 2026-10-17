import { EyeIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';

const STATUS_BADGES = {
  'Out for Delivery': 'bg-blue-50 text-blue-600 border-blue-200/80',
  Completed: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Processing: 'bg-amber-50 text-amber-600 border-amber-200/80',
  Pending: 'bg-orange-50 text-orange-600 border-orange-200/80',
  Cancelled: 'bg-rose-50 text-rose-600 border-rose-200/80',
};

const PAYMENT_BADGES = {
  Paid: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Pending: 'bg-amber-50 text-amber-600 border-amber-200/80',
  Refunded: 'bg-rose-50 text-rose-600 border-rose-200/80',
};

export const VendorOrderDetailRow = ({ order, onViewOrder }) => {
  const deliveryBadge =
    STATUS_BADGES[order.status] || 'bg-slate-100 text-slate-700 border-slate-200';
  const paymentBadge =
    PAYMENT_BADGES[order.paymentStatus] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors">
      {/* Order ID */}
      <td className="py-3.5 pl-5 pr-3 font-bold text-slate-900 whitespace-nowrap">
        {order.orderId || order.id}
      </td>

      {/* Customer Name */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <div className="flex items-center gap-2.5">
          <img
            src={
              order.customer?.avatar ||
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
            }
            alt={order.customer?.name}
            className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80';
            }}
          />
          <div>
            <span className="font-semibold text-slate-900 block leading-tight">
              {order.customer?.name}
            </span>
            <span className="text-[11px] text-slate-400 block font-normal">
              {order.customer?.phone}
            </span>
          </div>
        </div>
      </td>

      {/* Rider */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        {order.rider ? (
          <div className="flex items-center gap-2">
            <img
              src={order.rider.avatar}
              alt={order.rider.name}
              className="w-6 h-6 rounded-full object-cover border border-slate-200 shrink-0"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80';
              }}
            />
            <div className="flex flex-col">
              <span className="font-medium text-slate-800">
                {order.rider.name}
              </span>
              <span className="text-[10px] text-slate-400 truncate max-w-[120px]">
                {order.rider.vehicle}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-slate-400 font-semibold">—</span>
        )}
      </td>

      {/* Delivery Status */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${deliveryBadge}`}
        >
          {order.status}
        </span>
      </td>

      {/* Payment Status */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${paymentBadge}`}
        >
          {order.paymentStatus}
        </span>
      </td>

      {/* Amount */}
      <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
        {order.totalAmount || order.amount}
      </td>

      {/* Date */}
      <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap text-xs">
        {order.date}
      </td>

      {/* Actions */}
      <td className="py-3.5 px-3 pr-5 text-right whitespace-nowrap">
        <OrderActionButton
          icon={EyeIcon}
          title="View Order Details Modal"
          onClick={() => onViewOrder(order)}
          iconSize={17}
          className="w-8 h-8 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50"
        />
      </td>
    </tr>
  );
};

export default VendorOrderDetailRow;
