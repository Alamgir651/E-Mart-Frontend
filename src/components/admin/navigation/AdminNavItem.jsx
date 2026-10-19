import { Link } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  LayoutGridIcon,
  UserIcon,
  TruckIcon,
  CartIcon,
  BoxIcon,
  BoxesIcon,
  ArchiveIcon,
  WalletIcon,
  ReceiptTextIcon,
  CreditCardIcon,
  BadgePercentIcon,
  MessageSquareIcon,
  ChartColumnIncreasingIcon,
  BellIcon,
  SettingsIcon,
  DollarSignIcon,
  CircleHelpIcon,
} from '@/icons';

const ICONS_MAP = {
  LayoutDashboardIcon: LayoutGridIcon,
  LayoutGridIcon,
  UserIcon,
  TruckIcon,
  CartIcon,
  BoxIcon,
  BoxesIcon,
  ArchiveIcon,
  WalletIcon,
  ReceiptTextIcon,
  CreditCardIcon,
  BadgePercentIcon,
  MessageSquareIcon,
  ChartColumnIncreasingIcon,
  BellIcon,
  SettingsIcon,
  DollarSignIcon,
  CircleHelpIcon,
};

export const AdminNavItem = ({ item, isActive, onClose }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const Icon = ICONS_MAP[item.icon] || LayoutGridIcon;
  const isDisabled = !!item.disabled;

  if (isDisabled) {
    return (
      <div className="cursor-not-allowed select-none">
        <div
          title={`${item.label} (Disabled)`}
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 opacity-40 pointer-events-none transition-all"
        >
          <div className="flex items-center gap-3 min-w-0">
            <Icon
              size={16}
              className="shrink-0 text-slate-400"
            />
            <span className="truncate">{item.label}</span>
          </div>

          {item.badge && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 bg-slate-200 text-slate-500">
              {item.badge}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      onClick={onClose}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group cursor-pointer ${
        isActive
          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
          : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-600'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon
          ref={iconRef}
          size={16}
          animateOnHover={false}
          className={`shrink-0 transition-colors ${
            isActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-500'
          }`}
        />
        <span className="truncate">{item.label}</span>
      </div>

      {item.badge && (
        <span
          className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
            isActive ? 'bg-white text-orange-600' : 'bg-orange-500 text-white'
          }`}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
};

export default AdminNavItem;
