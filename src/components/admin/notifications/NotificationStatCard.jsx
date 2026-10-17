import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const NotificationStatCard = ({ title, value, subtitle, icon: Icon, iconColor = 'text-slate-400' }) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="group bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs transition-all hover:shadow-md hover:border-orange-200 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">{title}</span>
        {Icon && (
          <div className="p-1.5 rounded-lg text-slate-400 transition-colors group-hover:text-orange-500">
            <Icon ref={iconRef} size={18} animateOnHover={false} className={iconColor} />
          </div>
        )}
      </div>

      <div className="my-2.5">
        <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{value}</span>
      </div>

      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  );
};

export default NotificationStatCard;
