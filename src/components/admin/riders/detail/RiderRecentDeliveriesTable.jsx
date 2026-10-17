export const RiderRecentDeliveriesTable = ({ deliveries = [] }) => {
  const defaultDeliveries = [
    {
      id: '#EMT2455',
      customer: 'Sara Ahmed',
      location: 'Johar Town',
      status: 'Delivered',
      date: 'Sep 25, 10:12 AM',
      amount: '$24.50',
    },
    {
      id: '#EMT2454',
      customer: 'Usman Raza',
      location: 'DHA Phase 6',
      status: 'Delivered',
      date: 'Sep 25, 09:45 AM',
      amount: '$18.00',
    },
    {
      id: '#EMT2453',
      customer: 'Ayesha Malik',
      location: 'Gulberg',
      status: 'Delivered',
      date: 'Sep 24, 06:30 PM',
      amount: '$32.00',
    },
    {
      id: '#EMT2452',
      customer: 'Bilal Hussain',
      location: 'Model Town',
      status: 'Cancelled',
      date: 'Sep 24, 05:15 PM',
      amount: '$0.00',
    },
    {
      id: '#EMT2451',
      customer: 'Fiza Ali',
      location: 'Township',
      status: 'Delivered',
      date: 'Sep 24, 04:20 PM',
      amount: '$28.50',
    },
  ];

  const list = deliveries.length > 0 ? deliveries : defaultDeliveries;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Recent Deliveries
        </h3>
        <button
          type="button"
          onClick={() => {}}
          className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-3.5 pl-5 pr-3 font-semibold">#</th>
              <th className="py-3.5 px-3 font-semibold">CUSTOMER</th>
              <th className="py-3.5 px-3 font-semibold">LOCATION</th>
              <th className="py-3.5 px-3 font-semibold">STATUS</th>
              <th className="py-3.5 px-3 font-semibold">DATE</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {list.map((item) => {
              const isDelivered = item.status === 'Delivered';
              return (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  {/* Order ID */}
                  <td className="py-3.5 pl-5 pr-3 font-bold text-orange-600 whitespace-nowrap">
                    {item.id}
                  </td>

                  {/* Customer */}
                  <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
                    {item.customer}
                  </td>

                  {/* Location */}
                  <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
                    {item.location}
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        isDelivered
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                          : 'bg-rose-50 text-rose-600 border-rose-200/80'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    {item.date}
                  </td>

                  {/* Amount */}
                  <td className="py-3.5 px-3 pr-5 text-right font-bold text-slate-900 whitespace-nowrap">
                    {item.amount}
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

export default RiderRecentDeliveriesTable;
