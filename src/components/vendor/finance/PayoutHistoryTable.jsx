export const PayoutHistoryTable = ({ payouts = [], onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div className="p-4 sm:p-6 pb-2 sm:pb-3">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Payout History
        </h3>
      </div>

      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4 sm:px-6">PAYOUT ID</th>
              <th className="py-3 px-4 sm:px-6">DATE</th>
              <th className="py-3 px-4 sm:px-6">AMOUNT</th>
              <th className="py-3 px-4 sm:px-6">STATUS</th>
              <th className="py-3 px-4 sm:px-6 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payouts.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-orange-50/20 transition-colors"
              >
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                  {row.id}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500 font-medium">
                  {row.date}
                </td>
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                  ${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className="py-3.5 px-4 sm:px-6">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/50">
                    {row.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-right">
                  <button
                    type="button"
                    onClick={() => onViewDetails(row)}
                    className="text-orange-600 hover:text-orange-700 font-semibold text-xs sm:text-sm cursor-pointer transition-colors"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutHistoryTable;
