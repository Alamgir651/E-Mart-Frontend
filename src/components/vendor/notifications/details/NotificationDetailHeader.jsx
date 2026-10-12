import { ArrowLeftIcon } from '@/icons';

export const NotificationDetailHeader = ({ title, subtitle, onBack }) => {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer group"
      >
        <ArrowLeftIcon
          size={16}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        <span>Back to Notifications</span>
      </button>

      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default NotificationDetailHeader;
