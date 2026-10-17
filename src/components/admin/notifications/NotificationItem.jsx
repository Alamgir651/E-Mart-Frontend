import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  CartIcon,
  ScooterIcon,
  ReceiptTextIcon,
  FlagIcon,
  StoreIcon,
  TicketIcon,
  CreditCardIcon,
  ChevronRightIcon,
} from '@/icons';

const getNotificationIcon = (iconType, needsAttention, isRead) => {
  switch (iconType) {
    case 'order':
      return {
        icon: CartIcon,
        boxClass: 'bg-orange-50 text-orange-500 border-orange-100',
      };
    case 'delivery':
      return {
        icon: ScooterIcon,
        boxClass: 'bg-rose-50 text-rose-500 border-rose-100',
      };
    case 'refund':
      return {
        icon: ReceiptTextIcon,
        boxClass: needsAttention
          ? 'bg-rose-50 text-rose-500 border-rose-100'
          : 'bg-slate-100 text-slate-500 border-slate-200',
      };
    case 'report':
      return {
        icon: FlagIcon,
        boxClass: isRead
          ? 'bg-slate-100 text-slate-500 border-slate-200'
          : 'bg-orange-50 text-orange-500 border-orange-100',
      };
    case 'vendor':
      return {
        icon: StoreIcon,
        boxClass: 'bg-orange-50 text-orange-500 border-orange-100',
      };
    case 'ticket':
      return {
        icon: TicketIcon,
        boxClass: 'bg-rose-50 text-rose-500 border-rose-100',
      };
    case 'payment':
    default:
      return {
        icon: CreditCardIcon,
        boxClass: isRead
          ? 'bg-slate-100 text-slate-500 border-slate-200'
          : 'bg-orange-50 text-orange-500 border-orange-100',
      };
  }
};

export const NotificationItem = ({ notification, onViewDetail, onToggleRead }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const { icon: Icon, boxClass } = getNotificationIcon(
    notification.iconType,
    notification.needsAttention,
    notification.isRead
  );

  return (
    <div
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`group relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl transition-all duration-200 ${
        notification.isRead
          ? 'hover:bg-slate-50/80'
          : 'bg-orange-50/20 hover:bg-orange-50/40'
      }`}
    >
      {/* Left content block */}
      <div className="flex items-start gap-3 sm:gap-3.5 flex-1 min-w-0">
        {/* Unread indicator dot */}
        <div className="pt-2">
          {notification.isRead ? (
            <div className="w-2 h-2 rounded-full opacity-0" />
          ) : (
            <span
              className="block w-2 h-2 rounded-full bg-orange-500 shadow-xs shadow-orange-500/50"
              title="Unread notification"
            />
          )}
        </div>

        {/* Icon container */}
        <div
          className={`p-2.5 rounded-xl border shrink-0 transition-transform group-hover:scale-105 ${boxClass}`}
        >
          <Icon ref={iconRef} size={18} animateOnHover={false} />
        </div>

        {/* Text information */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
              {notification.title} ·{' '}
              <span className="font-semibold text-slate-700">{notification.entityId}</span>
            </h4>

            {notification.needsAttention && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-rose-50 text-rose-600 border border-rose-200/60">
                Needs attention
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            {notification.description}
          </p>

          <span className="inline-block text-[11px] font-medium text-slate-400 mt-1">
            {notification.category}
          </span>
        </div>
      </div>

      {/* Right meta and action block */}
      <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-1.5 shrink-0 pl-5 md:pl-0">
        <div className="text-right">
          <div className="text-xs text-slate-400 font-medium">{notification.time}</div>
          <button
            type="button"
            onClick={() => onToggleRead(notification.id)}
            className={`text-[11px] font-medium transition-colors cursor-pointer ${
              notification.isRead
                ? 'text-slate-400 hover:text-slate-600'
                : 'text-orange-600 hover:text-orange-700'
            }`}
          >
            {notification.isRead ? 'Read' : 'Unread'}
          </button>
        </div>

        <button
          type="button"
          onClick={() => onViewDetail(notification)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer group-hover:translate-x-0.5"
        >
          <span>{notification.actionLabel}</span>
          <ChevronRightIcon size={14} animateOnHover={false} />
        </button>
      </div>
    </div>
  );
};

export default NotificationItem;
