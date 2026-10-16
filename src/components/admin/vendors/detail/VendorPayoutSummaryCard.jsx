import { Link } from 'react-router-dom';
import { VENDOR_PAYOUTS_DATA } from '@/mock/admin/vendorApprovedData.mock';

export const VendorPayoutSummaryCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 tracking-tight">
          Payout Summary
        </h3>

        <Link
          to="/admin/payouts"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View all ›
        </Link>
      </div>

      {/* Total Paid Out Highlight Box */}
      <div className="bg-[#fff9f2] rounded-2xl p-4 border border-orange-100/80 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Total Paid Out
          </span>
          <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            {VENDOR_PAYOUTS_DATA.totalPaidOut}
          </h4>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          {VENDOR_PAYOUTS_DATA.completedPayouts} completed payouts
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-2.5 pr-3 font-semibold">Payout ID</th>
              <th className="py-2.5 px-3 font-semibold">Date</th>
              <th className="py-2.5 px-3 text-right font-semibold">Amount</th>
              <th className="py-2.5 pl-3 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {VENDOR_PAYOUTS_DATA.payouts.map((payout) => (
              <tr key={payout.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 pr-3 font-bold text-slate-900">
                  {payout.id}
                </td>
                <td className="py-3 px-3 text-slate-500 font-medium">
                  {payout.date}
                </td>
                <td className="py-3 px-3 text-right font-bold text-slate-900">
                  {payout.amount}
                </td>
                <td className="py-3 pl-3 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    {payout.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorPayoutSummaryCard;
