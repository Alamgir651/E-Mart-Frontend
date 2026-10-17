import { NotificationStatCard } from './NotificationStatCard';
import { MailIcon, BellIcon, TriangleAlertIcon, ClockIcon } from '@/icons';

export const NotificationStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <NotificationStatCard
        title="All notifications"
        value={stats.total}
        subtitle="Across all operational categories"
        icon={MailIcon}
        iconColor="text-slate-400"
      />
      <NotificationStatCard
        title="Unread"
        value={stats.unread}
        subtitle="New updates since your last visit"
        icon={BellIcon}
        iconColor="text-orange-500"
      />
      <NotificationStatCard
        title="Needs attention"
        value={stats.needsAttention}
        subtitle="Delivery, refund and support alerts"
        icon={TriangleAlertIcon}
        iconColor="text-slate-400 group-hover:text-rose-500"
      />
      <NotificationStatCard
        title="Received today"
        value={stats.receivedToday}
        subtitle="06 Oct 2026 · All times PKT"
        icon={ClockIcon}
        iconColor="text-slate-400"
      />
    </div>
  );
};

export default NotificationStats;
