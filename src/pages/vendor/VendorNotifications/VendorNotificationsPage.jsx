import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortalBase } from '@/utils/usePortalBase';
import {
  NOTIFICATION_TABS,
  INITIAL_NOTIFICATIONS,
} from '@/mock/vendor/vendorNotifications.mock';
import NotificationsHeader from '@/components/vendor/notifications/NotificationsHeader';
import NotificationsFilterTabs from '@/components/vendor/notifications/NotificationsFilterTabs';
import NotificationCardItem from '@/components/vendor/notifications/NotificationCardItem';
import StoreSuspendedModal from '@/components/vendor/notifications/StoreSuspendedModal';
import NotificationSettingsModal from '@/components/vendor/notifications/NotificationSettingsModal';
import { toast } from '@/utils/toast';

export const VendorNotificationsPage = () => {
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const filteredNotifications = useMemo(() => {
    if (activeTab === 'all') return notifications;
    return notifications.filter((n) => n.category === activeTab);
  }, [notifications, activeTab]);

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    toast.success('All notifications marked as read');
  };

  const handleViewDetails = (item) => {
    if (item.detailAction === 'modal') {
      setIsSuspendedModalOpen(true);
    } else if (item.detailAction === 'route' && item.route) {
      const subPath = item.route.replace(/^\/vendor/, '');
      navigate(getRoute(subPath));
    }
  };

  const handleLoadMore = () => {
    toast.info('All caught up! No more older notifications.');
  };

  return (
    <div className="space-y-4 sm:space-y-5 w-full">
      <NotificationsHeader onOpenSettings={() => setIsSettingsModalOpen(true)} />

      <NotificationsFilterTabs
        tabs={NOTIFICATION_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onMarkAllAsRead={handleMarkAllAsRead}
      />

      <div className="space-y-3 sm:space-y-3.5">
        {filteredNotifications.map((item) => (
          <NotificationCardItem
            key={item.id}
            item={item}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
        <span>Showing {filteredNotifications.length} of 26 notifications</span>

        <button
          type="button"
          onClick={handleLoadMore}
          className="px-4 py-2 bg-white border border-slate-200/90 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer self-start sm:self-auto"
        >
          Load more notifications
        </button>
      </div>

      <StoreSuspendedModal
        isOpen={isSuspendedModalOpen}
        onClose={() => setIsSuspendedModalOpen(false)}
        onContactSupport={() => {
          setIsSuspendedModalOpen(false);
          navigate(getRoute('/support'));
        }}
      />

      <NotificationSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        onSave={() => {
          setIsSettingsModalOpen(false);
          toast.success('Notification preferences updated!');
        }}
      />
    </div>
  );
};

export default VendorNotificationsPage;
