import { useState } from 'react';
import { toast } from '@/utils/toast';
import { INITIAL_NOTIFICATION_SETTINGS } from '@/mock/admin/adminSettings.mock';

export const AdminNotificationSettingsTab = () => {
  const [settings, setSettings] = useState(INITIAL_NOTIFICATION_SETTINGS);

  const handleToggle = (key) => {
    setSettings((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      toast.success('Notification preference updated');
      return updated;
    });
  };

  const notificationItems = [
    {
      key: 'newVendorAlert',
      title: 'New Vendor Registration',
      description: 'Receive immediate alerts when a new vendor submits their store profile and documents.',
    },
    {
      key: 'highValueOrderAlert',
      title: 'High-Value Orders (> PKR 10,000)',
      description: 'Notify operations and risk teams whenever an order exceeds high transaction threshold.',
    },
    {
      key: 'payoutRequestAlert',
      title: 'Vendor Payout Requests',
      description: 'Instant notification when vendors submit withdrawal requests requiring disbursement.',
    },
    {
      key: 'lowStockAlert',
      title: 'Critical Inventory Alerts',
      description: 'Daily alert for items running dangerously low in vendor inventories.',
    },
    {
      key: 'ticketEscalationAlert',
      title: 'Support Ticket Escalation',
      description: 'Alert when a customer complaint is escalated to administrative level.',
    },
    {
      key: 'dailySummaryDigest',
      title: 'Daily Platform Digest',
      description: 'Receive morning executive summary with GMV, completed orders and active rider metrics.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Notifications
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
            System alerts
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Configure administrative alerts, system dispatches and event triggers.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs divide-y divide-slate-100">
        {notificationItems.map((item) => {
          const isEnabled = settings[item.key];
          return (
            <div
              key={item.key}
              className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleToggle(item.key)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isEnabled ? 'bg-orange-500' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    isEnabled ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNotificationSettingsTab;
