import { useNavigate } from 'react-router-dom';

const STATUS_BADGES = {
  Completed: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  'Out for Delivery': 'bg-blue-50 text-blue-600 border-blue-200/80',
  Processing: 'bg-amber-50 text-amber-600 border-amber-200/80',
  Pending: 'bg-orange-50 text-orange-600 border-orange-200/80',
  Cancelled: 'bg-rose-50 text-rose-600 border-rose-200/80',
};

export const ProductRecentOrdersCard = ({ orders = [] }) => {
  const navigate = useNavigate();

  const recentList = orders.length
    ? orders
    : [
        {
          id: '#EMT2455',
          customer: 'Sara Ahmed',
          quantity: '1kg x 1',
          total: '$4.50',
          status: 'Completed',
          date: 'Sep 25, 2026',
        },
        {
          id: '#EMT2456',
          customer: 'Ali Khan',
          quantity: '1kg x 2',
          total: '$9.00',
          status: 'Out for Delivery',
          date: 'Sep 25, 2026',
        },
        {
          id: '#EMT2440',
          customer: 'Usman Raza',
          quantity: '500g x 1',
          total: '$3.50',
          status: 'Completed',
          date: 'Sep 24, 2026',
        },
      ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h3 className="text-sm font-bold text-slate-900">
          Recent Orders
        </h3>

        <button
          type="button"
          onClick={() => navigate('/admin/orders')}
          className="text-xs font-semibold text-orange-600 hover:underline cursor-pointer"
        >
          View All Orders
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Total</th>
              <th className="pb-2">Status</th>
              <th className="pb-2 text-right">Order Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {recentList.map((ord, idx) => {
              const badgeClass =
                STATUS_BADGES[ord.status] || 'bg-slate-100 text-slate-600 border-slate-200';
              return (
                <tr key={idx} className="hover:bg-orange-50/20 transition-colors">
                  <td className="py-2.5 font-bold text-slate-900">{ord.id}</td>
                  <td className="py-2.5 text-slate-700">{ord.customer}</td>
                  <td className="py-2.5 text-slate-500">{ord.quantity}</td>
                  <td className="py-2.5 font-bold text-slate-900">{ord.total}</td>
                  <td className="py-2.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badgeClass}`}
                    >
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-slate-400">{ord.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductRecentOrdersCard;
