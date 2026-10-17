import { NotificationItem } from './NotificationItem';

export const NotificationGroup = ({
  groupDate,
  items,
  onViewDetail,
  onToggleRead,
}) => {
  if (!items || items.length === 0) return null;

  const total = items.length;
  const unreadCount = items.filter((item) => !item.isRead).length;

  const subtitle =
    unreadCount > 0
      ? `${total} notification${total > 1 ? 's' : ''} · ${unreadCount} unread`
      : `${total} notification${total > 1 ? 's' : ''} · All read`;

  return (
    <div className="space-y-2">
      {/* Group header */}
      <div className="flex items-center justify-between px-2 pt-3 pb-1 border-b border-slate-100">
        <h3 className="text-xs font-semibold text-slate-800 tracking-tight">
          {groupDate}
        </h3>
        <span className="text-[11px] font-medium text-slate-400">
          {subtitle}
        </span>
      </div>

      {/* Group notifications list */}
      <div className="divide-y divide-slate-100/80">
        {items.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onViewDetail={onViewDetail}
            onToggleRead={onToggleRead}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationGroup;
