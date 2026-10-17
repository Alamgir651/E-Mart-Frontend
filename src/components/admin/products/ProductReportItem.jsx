import { ClockIcon, CheckIcon, ShieldAlertIcon, CircleCheckIcon } from '@/icons';

const STATUS_CLASSES = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/80',
  'Under Review': 'bg-blue-50 text-blue-700 border-blue-200/80',
  Resolved: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
};

export const ProductReportItem = ({ report, onUpdateStatus }) => {
  const isResolved = report.status === 'Resolved';
  const badgeStyle = STATUS_CLASSES[report.status] || STATUS_CLASSES.Pending;

  const initials = report.user
    ? report.user
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'CU';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-3.5 hover:border-orange-200/80 transition-all">
      {/* Top Header: User Info & Status */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100/70 border border-orange-200/60 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">{report.user}</h4>
              {report.orderId && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                  Order {report.orderId}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">
              {report.email} {report.phone ? `• ${report.phone}` : ''}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <ClockIcon animateOnHover={false} size={13} className="text-slate-400" />
            <span>
              {report.date} {report.time ? `at ${report.time}` : ''}
            </span>
          </div>

          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyle}`}
          >
            {report.status}
          </span>
        </div>
      </div>

      {/* Middle: Reason Badge & Feedback Note */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/70">
            <ShieldAlertIcon animateOnHover={false} size={13} className="text-rose-500" />
            {report.reason}
          </span>
        </div>

        <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-100 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
          "{report.note}"
        </div>
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
        <span className="text-[11px] font-medium text-slate-400">
          Report ID: <span className="font-semibold text-slate-600">{report.id}</span>
        </span>

        {isResolved ? (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <CircleCheckIcon animateOnHover={false} size={14} className="text-emerald-500" />
              Resolved by Admin
            </span>
            <button
              type="button"
              onClick={() => onUpdateStatus(report.id, 'Pending')}
              className="text-[11px] text-slate-400 hover:text-slate-700 underline cursor-pointer"
            >
              Reopen
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onUpdateStatus(report.id, 'Resolved')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 transition-colors shadow-2xs cursor-pointer"
          >
            <CheckIcon animateOnHover={false} size={13} />
            <span>Mark as Resolved</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductReportItem;
