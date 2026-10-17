const STATUS_BADGES = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Processing: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Rejected: 'bg-rose-50 text-rose-700 border-rose-200/80',
};

export const PayoutDetailLeftColumn = ({ payout }) => {
  const badgeClass = STATUS_BADGES[payout.status] || STATUS_BADGES.Pending;
  const initials = payout.vendor
    ? payout.vendor
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'VN';

  const bd = payout.breakdown || {};
  const bal = payout.balances || {};

  return (
    <div className="space-y-5">
      {/* Vendor & Request Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3.5">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Vendor & request
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            {payout.id} • Submitted {payout.requestedDate}, {payout.requestedTime}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-orange-100/70 border border-orange-200/60 text-orange-700 font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs">
              {initials}
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">
                {payout.vendor}
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                {payout.vendorId} • {payout.category} • {payout.settledOrders} orders
              </p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}>
            {payout.status}
          </span>
        </div>
      </div>

      {/* Earnings Breakdown Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Earnings breakdown</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Earnings period: {bd.period || '01 – 30 Sep 2026'} • {payout.settledOrders} settled orders
          </p>
        </div>

        <div className="space-y-3 text-xs sm:text-[13px]">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Gross sales</p>
              <p className="text-[11px] text-slate-400">Before refunds and deductions</p>
            </div>
            <span className="font-bold text-slate-900">
              PKR {(bd.grossSales || 120000).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Refunds</p>
              <p className="text-[11px] text-slate-400">Refunded orders excluded from fee bases</p>
            </div>
            <span className="font-bold text-rose-600">
              – PKR {(bd.refunds || 5000).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Eligible sales</p>
              <p className="text-[11px] text-slate-400">Gross sales minus refunds</p>
            </div>
            <span className="font-bold text-slate-900">
              PKR {(bd.eligibleSales || 115000).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Vendor commission</p>
              <p className="text-[11px] text-slate-400">10% × eligible sales</p>
            </div>
            <span className="font-bold text-rose-600">
              – PKR {(bd.commission || 11500).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Platform fee</p>
              <p className="text-[11px] text-slate-400">2% × eligible sales - separate deduction</p>
            </div>
            <span className="font-bold text-rose-600">
              – PKR {(bd.platformFee || 2300).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Other adjustments</p>
              <p className="text-[11px] text-slate-400">No additional credits or deductions</p>
            </div>
            <span className="font-bold text-slate-900">PKR 0</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900">Net vendor earnings</span>
          <span className="text-lg font-black text-slate-900 tracking-tight">
            PKR {(bd.netEarnings || 101200).toLocaleString()}
          </span>
        </div>

        <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
          Commission and platform fee are deducted once above. No fee is deducted again from this payout.
        </p>
      </div>

      {/* Vendor Earnings & Balances Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3.5">
        <h3 className="text-sm font-bold text-slate-900">Vendor earnings & balances</h3>

        <div className="space-y-3 text-xs sm:text-[13px]">
          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Already paid earnings</p>
              <p className="text-[11px] text-slate-400">Previous completed payouts for this period</p>
            </div>
            <span className="font-bold text-slate-900">
              PKR {(bal.alreadyPaid || 40000).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Pending / unpaid earnings</p>
              <p className="text-[11px] text-slate-400">Net earnings – already paid earnings</p>
            </div>
            <span className="font-bold text-slate-900">
              PKR {(bal.pendingUnpaid || 61200).toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div>
              <p className="font-semibold text-slate-800">Available to request</p>
              <p className="text-[11px] text-slate-400">Reserved for pending request</p>
            </div>
            <span className="font-bold text-slate-900">
              PKR {(bal.availableToRequest || 11200).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900">Requested payout</span>
          <span className="text-xl font-black text-slate-900 tracking-tight">
            PKR {payout.payoutAmount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayoutDetailLeftColumn;
