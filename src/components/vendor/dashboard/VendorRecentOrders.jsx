import { Link } from 'react-router-dom';

const STATUS_STYLES = {
  warning: 'bg-orange-50 text-orange-600 border border-orange-200/60',
  success: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60',
  danger: 'bg-rose-50 text-rose-500 border border-rose-200/60',
};

export const VendorRecentOrders = ({ orders = [] }) => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Recent Orders
        </h3>
        <Link
          to="/vendor/orders"
          className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold">
              <th className="pb-3 font-semibold">#Order ID</th>
              <th className="pb-3 font-semibold">Customer</th>
              <th className="pb-3 text-center font-semibold">Items</th>
              <th className="pb-3 font-semibold">Total</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 text-right font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order) => {
              const badgeStyle = STATUS_STYLES[order.statusType] || STATUS_STYLES.warning;

              return (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/70 transition-colors group cursor-pointer"
                >
                  <td className="py-3 font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {order.id}
                  </td>
                  <td className="py-3 text-slate-600 font-medium">{order.customer}</td>
                  <td className="py-3 text-center text-slate-500">{order.items}</td>
                  <td className="py-3 font-bold text-slate-900">{order.total}</td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeStyle}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-right text-slate-400 font-medium">
                    {order.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorRecentOrders;
