import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { SettingsIcon } from '@/icons';

export const NotificationsHeader = ({ onOpenSettings }) => {
  const [settingsRef, settingsTrigger] = useAnimatedIcon();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
          Notifications
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Stay updated with your store activity and important updates
        </p>
      </div>

      <button
        type="button"
        onClick={onOpenSettings}
        onMouseEnter={settingsTrigger.onMouseEnter}
        onMouseLeave={settingsTrigger.onMouseLeave}
        className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:border-slate-300 transition-all cursor-pointer self-start sm:self-auto"
      >
        <SettingsIcon ref={settingsRef} size={16} animateOnHover={false} className="text-slate-500" />
        <span>Notification Settings</span>
      </button>
    </div>
  );
};

export default NotificationsHeader;
