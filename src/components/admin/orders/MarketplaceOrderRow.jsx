import { EyeIcon } from '@/icons';
import OrderActionButton from './OrderActionButton';

const STATUS_BADGES = {
  'Out for Delivery': 'bg-blue-50 text-blue-600 border-blue-200/80',
  Completed: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Processing: 'bg-amber-50 text-amber-600 border-amber-200/80',
  Pending: 'bg-orange-50 text-orange-600 border-orange-200/80',
  Cancelled: 'bg-rose-50 text-rose-600 border-rose-200/80',
};

export const MarketplaceOrderRow = ({
  order,
  isSelected,
  onToggleSelect,
  onViewOrder,
}) => {
  const badgeClass =
    STATUS_BADGES[order.status] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors">
      {/* Checkbox */}
      <td className="py-3.5 pl-4 pr-2 w-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(order.id)}
          className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
        />
      </td>

      {/* Order ID */}
      <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
        {order.id}
      </td>

      {/* Customer */}
      <td className="py-3.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
        {order.customer?.name}
      </td>

      {/* Vendor / Store */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {order.vendor?.name}
      </td>

      {/* Items */}
      <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">
        {order.itemsCount}
      </td>

      {/* Amount */}
      <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
        {order.amount}
      </td>

      {/* Status */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
        >
          {order.status}
        </span>
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
            <span className="font-medium text-slate-700">
              {order.rider.name}
            </span>
          </div>
        ) : (
          <span className="text-slate-400 font-semibold">—</span>
        )}
      </td>

      {/* Actions */}
      <td className="py-3.5 px-3 text-right pr-5 whitespace-nowrap">
        <div className="flex items-center justify-end gap-1.5">
          <OrderActionButton
            icon={EyeIcon}
            title="View Order Details"
            onClick={() => onViewOrder(order)}
            iconSize={16}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50"
          />
          <button
            type="button"
            onClick={() => onViewOrder(order)}
            className="px-2.5 py-1 text-xs font-bold text-slate-700 hover:text-orange-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            View
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MarketplaceOrderRow;
