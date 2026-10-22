import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  INITIAL_ACCOUNT_SETTINGS,
  INITIAL_PAYMENT_SETTINGS,
  INITIAL_NOTIFICATION_PREFERENCES,
} from '@/mock/vendor/vendorSettings.mock';
import SettingsHeader from '@/components/vendor/settings/SettingsHeader';
import AccountSettingsCard from '@/components/vendor/settings/AccountSettingsCard';
import PasswordSecurityCard from '@/components/vendor/settings/PasswordSecurityCard';
import PaymentSettingsCard from '@/components/vendor/settings/PaymentSettingsCard';
import NotificationPreferencesCard from '@/components/vendor/settings/NotificationPreferencesCard';

export const VendorSettingsPage = () => {
  const location = useLocation();
  const isAdminStore =
    location.pathname.startsWith('/admin') ||
    location.pathname.includes('/store/settings');

  const [accountData, setAccountData] = useState(INITIAL_ACCOUNT_SETTINGS);
  const [paymentData, setPaymentData] = useState(INITIAL_PAYMENT_SETTINGS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATION_PREFERENCES);

  const handleAccountChange = (field, value) => {
    setAccountData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const displayedNotifications = isAdminStore
    ? notifications.filter((item) => item.id !== 'payouts' && item.id !== 'messages')
    : notifications;

  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      <SettingsHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        <AccountSettingsCard
          data={accountData}
          onChange={handleAccountChange}
        />

        <PasswordSecurityCard hideCurrentPassword={isAdminStore} />

        {!isAdminStore && (
          <PaymentSettingsCard
            data={paymentData}
            onSave={setPaymentData}
          />
        )}

        <NotificationPreferencesCard
          preferences={displayedNotifications}
          onToggle={handleToggleNotification}
          className={isAdminStore ? 'lg:col-span-2' : ''}
          isGridLayout={isAdminStore}
        />
      </div>
    </div>
  );
};

export default VendorSettingsPage;
