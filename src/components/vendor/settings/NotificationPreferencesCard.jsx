import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  BellIcon,
  CartIcon,
  RefreshCwIcon,
  WalletIcon,
  BadgeAlertIcon,
  MailCheckIcon,
  MegaphoneIcon,
  SettingsIcon,
} from '@/icons';
import { toast } from '@/utils/toast';

const ICON_MAP = {
  cart: CartIcon,
  refresh: RefreshCwIcon,
  wallet: WalletIcon,
  alert: BadgeAlertIcon,
  mail: MailCheckIcon,
  megaphone: MegaphoneIcon,
  settings: SettingsIcon,
};

const NotificationPrefRowItem = ({ item, onToggle, variant = 'list' }) => {
  const [rowRef, rowTrigger] = useAnimatedIcon();
  const Icon = ICON_MAP[item.icon] || BellIcon;

  if (variant === 'card') {
    return (
      <div
        onMouseEnter={rowTrigger.onMouseEnter}
        onMouseLeave={rowTrigger.onMouseLeave}
        className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-orange-50/20 hover:border-orange-200/50 transition-all flex items-center justify-between gap-3 group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/60 text-slate-500 group-hover:text-orange-500 transition-colors flex items-center justify-center shrink-0 shadow-2xs">
            <Icon ref={rowRef} size={16} animateOnHover={false} />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
              {item.title}
            </h4>
            <p className="text-[11px] text-slate-400 font-medium truncate">
              {item.desc}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onToggle(item.id);
            toast.success(`${item.title} ${!item.enabled ? 'enabled' : 'disabled'}`);
          }}
          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
            item.enabled ? 'bg-orange-500' : 'bg-slate-200'
          }`}
        >
          <span
            className={`block w-5 h-5 bg-white rounded-full shadow-xs transition-transform absolute top-0.5 ${
              item.enabled ? 'left-5.5' : 'left-0.5'
            }`}
          />
        </button>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={rowTrigger.onMouseEnter}
      onMouseLeave={rowTrigger.onMouseLeave}
      className="pt-3.5 first:pt-0 flex items-center justify-between gap-4 cursor-pointer group"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 group-hover:text-orange-500 transition-colors flex items-center justify-center shrink-0">
          <Icon ref={rowRef} size={16} animateOnHover={false} />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
            {item.title}
          </h4>
          <p className="text-[11px] text-slate-400 font-medium">
            {item.desc}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          onToggle(item.id);
          toast.success(`${item.title} ${!item.enabled ? 'enabled' : 'disabled'}`);
        }}
        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
          item.enabled ? 'bg-orange-500' : 'bg-slate-200'
        }`}
      >
        <span
          className={`block w-5 h-5 bg-white rounded-full shadow-xs transition-transform absolute top-0.5 ${
            item.enabled ? 'left-5.5' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  );
};

export const NotificationPreferencesCard = ({
  preferences,
  onToggle,
  className = '',
  isGridLayout = false,
}) => {
  const [bellRef, bellTrigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={bellTrigger.onMouseEnter}
      onMouseLeave={bellTrigger.onMouseLeave}
      className={`bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6 flex flex-col justify-between ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-500 flex items-center justify-center shrink-0">
          <BellIcon ref={bellRef} size={20} animateOnHover={false} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Notification Settings
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Choose what notifications you want to receive
          </p>
        </div>
      </div>

      {isGridLayout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {preferences.map((item) => (
            <NotificationPrefRowItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              variant="card"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4 divide-y divide-slate-100">
          {preferences.map((item) => (
            <NotificationPrefRowItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              variant="list"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationPreferencesCard;
