import PayoutFilterBar from './PayoutFilterBar';
import PayoutTableRow from './PayoutTableRow';

export const PayoutTable = ({
  payouts = [],
  onApprove,
  onReject,
  onViewDetails,
  search,
  onSearchChange,
  vendorFilter,
  onVendorChange,
  statusFilter,
  onStatusChange,
  vendors = [],
  pendingCount = 0,
  pendingAmount = 0,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      {/* Table Subheader */}
      <div className="px-5 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Payout requests & recent payments
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Earnings period: 01 – 30 Sep 2026
          </p>
        </div>

        <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-full">
          {pendingCount} awaiting review • PKR {pendingAmount.toLocaleString()} requested
        </span>
      </div>

      {/* Filter Bar */}
      <PayoutFilterBar
        search={search}
        onSearchChange={onSearchChange}
        vendorFilter={vendorFilter}
        onVendorChange={onVendorChange}
        statusFilter={statusFilter}
        onStatusChange={onStatusChange}
        vendors={vendors}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <th className="py-3.5 px-4 font-semibold">Vendor / Request ID</th>
              <th className="py-3.5 px-4 font-semibold">Requested / Paid on</th>
              <th className="py-3.5 px-4 font-semibold">Payout (PKR)</th>
              <th className="py-3.5 px-4 font-semibold">Unpaid (PKR)</th>
              <th className="py-3.5 px-4 font-semibold">Status</th>
              <th className="py-3.5 px-4 pr-6 text-right font-semibold">Actions / Payment evidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
            {payouts.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400">
                  No payout requests match your criteria.
                </td>
              </tr>
            ) : (
              payouts.map((payout) => (
                <PayoutTableRow
                  key={payout.id}
                  payout={payout}
                  onApprove={onApprove}
                  onReject={onReject}
                  onViewDetails={onViewDetails}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
        <div>
          Showing all <span className="font-semibold text-slate-700">{payouts.length}</span> requests • Earnings period 01 – 30 Sep 2026
        </div>

        <div className="flex items-center gap-1.5 font-semibold">
          <button
            type="button"
            disabled
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50"
          >
            Previous
          </button>
          <span className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center shadow-2xs font-bold">
            1
          </span>
          <button
            type="button"
            disabled
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayoutTable;
