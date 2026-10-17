import { CalendarDaysIcon, ShieldAlertIcon, ClockIcon } from '@/icons';

export const RiderAccountInfoCard = ({ rider }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-5">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Account Information
      </h3>

      <div className="space-y-4">
        {/* Application Date */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <CalendarDaysIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Application Date</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {rider.appliedDate || 'Sep 25, 2026, 10:24 AM'}
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <ShieldAlertIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Status</span>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200/80">
              {rider.status === 'Pending' ? 'Pending Approval' : rider.status}
            </span>
          </div>
        </div>

        {/* Last Login */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <ClockIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Last Login</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-400">
              {rider.lastLogin || '—'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderAccountInfoCard;
