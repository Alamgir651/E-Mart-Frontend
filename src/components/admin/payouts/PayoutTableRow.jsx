const STATUS_BADGES = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Processing: 'bg-blue-50 text-blue-700 border-blue-200/80',
  Rejected: 'bg-rose-50 text-rose-700 border-rose-200/80',
};

export const PayoutTableRow = ({
  payout,
  onApprove,
  onReject,
  onViewDetails,
}) => {
  const badgeClass = STATUS_BADGES[payout.status] || STATUS_BADGES.Pending;
  const isPending = payout.status === 'Pending';
  const isCompleted = payout.status === 'Completed';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors border-b border-slate-100 last:border-0">
      {/* Vendor / Request ID */}
      <td className="py-3.5 px-4">
        <div>
          <button
            type="button"
            onClick={() => onViewDetails(payout)}
            className="font-bold text-slate-900 text-sm hover:text-orange-600 transition-colors cursor-pointer text-left"
          >
            {payout.vendor}
          </button>
          <p className="text-xs text-slate-400 font-mono mt-0.5">{payout.id}</p>
        </div>
      </td>

      {/* Requested / Paid on */}
      <td className="py-3.5 px-4 whitespace-nowrap">
        <p className="text-xs font-semibold text-slate-800">{payout.requestedDate}</p>
        <p className="text-[11px] text-slate-400 font-medium">
          {isCompleted ? 'Paid' : 'Requested'} • {payout.requestedTime}
        </p>
      </td>

      {/* Payout (PKR) */}
      <td className="py-3.5 px-4 font-bold text-slate-900 text-sm whitespace-nowrap">
        {payout.payoutAmount.toLocaleString()}
      </td>

      {/* Unpaid (PKR) */}
      <td className="py-3.5 px-4 font-semibold text-slate-600 text-xs sm:text-sm whitespace-nowrap">
        {payout.unpaidAmount.toLocaleString()}
      </td>

      {/* Status */}
      <td className="py-3.5 px-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
        >
          {payout.status}
        </span>
      </td>

      {/* Actions / Payment evidence */}
      <td className="py-3.5 px-4 text-right pr-6 whitespace-nowrap">
        <div className="flex items-center justify-end gap-3">
          {isPending && (
            <>
              <button
                type="button"
                onClick={() => onApprove(payout)}
                className="px-3 py-1 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-2xs"
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => onReject(payout)}
                className="px-2 py-1 rounded-lg text-rose-600 hover:bg-rose-50 font-semibold text-xs transition-colors cursor-pointer"
              >
                Reject
              </button>
            </>
          )}

          {isCompleted && (
            <div className="text-right mr-1">
              <p className="text-xs font-bold text-emerald-600 font-mono tracking-tight">
                {payout.txnId}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Bank-confirmed transfer</p>
            </div>
          )}

          {payout.status === 'Processing' && (
            <p className="text-[11px] text-blue-600 font-medium mr-1">Transfer processing</p>
          )}

          {payout.status === 'Rejected' && (
            <p className="text-[11px] text-rose-500 font-medium mr-1">Rejected</p>
          )}

          <button
            type="button"
            onClick={() => onViewDetails(payout)}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
          >
            View Details
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PayoutTableRow;
