import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CalendarDaysIcon, ChevronDownIcon } from '@/icons';

export const AnalyticsHeader = ({ dateRange = 'Sep 1, 2025 - Sep 30, 2025' }) => {
  const [calRef, calTrigger] = useAnimatedIcon();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          Reports & Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Track your store performance and make data-driven decisions
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onMouseEnter={calTrigger.onMouseEnter}
          onMouseLeave={calTrigger.onMouseLeave}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
        >
          <CalendarDaysIcon
            ref={calRef}
            size={16}
            animateOnHover={false}
            className="text-slate-500"
          />
          <span>{dateRange}</span>
          <ChevronDownIcon size={15} className="text-slate-400 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
