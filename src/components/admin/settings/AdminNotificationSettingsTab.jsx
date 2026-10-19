import { useState } from 'react';
import { toast } from '@/utils/toast';
import { UserIcon, CircleHelpIcon } from '@/icons';
import {
  OPERATIONAL_NOTIFICATION_CATEGORIES,
  INITIAL_OPERATIONAL_NOTIFICATIONS,
} from '@/mock/admin/adminSettings.mock';
import { NotificationChannelRow } from './notifications/NotificationChannelRow';
import { SecurityAlertsCard } from './notifications/SecurityAlertsCard';

export const AdminNotificationSettingsTab = () => {
  const [channelSettings, setChannelSettings] = useState(
    INITIAL_OPERATIONAL_NOTIFICATIONS
  );
  const [savedSettings, setSavedSettings] = useState(
    INITIAL_OPERATIONAL_NOTIFICATIONS
  );

  const handleToggle = (categoryId, channel) => {
    setChannelSettings((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [channel]: !prev[categoryId]?.[channel],
      },
    }));
  };

  const handleResetDefaults = () => {
    setChannelSettings(INITIAL_OPERATIONAL_NOTIFICATIONS);
    toast.info('Notification preferences reset to defaults');
  };

  const handleCancel = () => {
    setChannelSettings(savedSettings);
    toast.info('Changes discarded');
  };

  const handleSave = () => {
    setSavedSettings(channelSettings);
    toast.success('Notification preferences saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Notification Preferences
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/70">
            Your account only
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Choose how you receive updates. Other admins keep their own preferences.
        </p>
      </div>

      {/* Amber Advisory Banner */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
        <div className="w-8 h-8 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
          <UserIcon className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-amber-950">
            Personal preferences, not marketplace messaging
          </h3>
          <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">
            These controls apply only to Admin (owner@emart.example). Customer and vendor notifications are not changed, and essential security alerts stay on.
          </p>
        </div>
      </div>

      {/* Operational Notifications Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Operational notifications
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Turn optional updates on or off for each channel.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetDefaults}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
          >
            Reset to defaults
          </button>
        </div>

        {/* Matrix Table */}
        <div className="border border-slate-200/80 rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-4 py-2.5 bg-slate-50/80 border-b border-slate-200/80 text-xs font-semibold text-slate-400">
            <span className="col-span-6">Category</span>
            <span className="col-span-2 text-center">In-app</span>
            <span className="col-span-2 text-center">Email</span>
            <span className="col-span-2 text-center">Push</span>
          </div>

          <div className="divide-y divide-slate-100 bg-white">
            {OPERATIONAL_NOTIFICATION_CATEGORIES.map((cat) => (
              <NotificationChannelRow
                key={cat.id}
                category={cat}
                settings={channelSettings[cat.id]}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        {/* Info Note */}
        <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
          <CircleHelpIcon className="w-4 h-4 shrink-0 text-slate-400" />
          <span>
            Email: owner@emart.example · Push: enabled on this browser. Channel choices never expand your role&apos;s access.
          </span>
        </div>
      </div>

      {/* Essential Security Alerts Card */}
      <SecurityAlertsCard />

      {/* Action Footer Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Only your account&apos;s notification preferences will be updated.
        </p>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors shadow-2xs"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationSettingsTab;
