import { Link, useLocation } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  LayoutGridIcon,
  UserIcon,
  CartIcon,
  BoxIcon,
  BoxesIcon,
  ArchiveIcon,
  DollarSignIcon,
  ChartColumnIncreasingIcon,
  CreditCardIcon,
  BellIcon,
  SettingsIcon,
  CircleHelpIcon,
} from '@/icons';

const STORE_ICONS_MAP = {
  LayoutDashboardIcon: LayoutGridIcon,
  LayoutGridIcon,
  CartIcon,
  BoxIcon,
  ArchiveIcon,
  UserIcon,
  DollarSignIcon,
  CreditCardIcon,
  ChartColumnIncreasingIcon,
  BoxesIcon,
  BellIcon,
  SettingsIcon,
  CircleHelpIcon,
};

export const AdminStoreMenuItem = ({ item, onClose }) => {
  const location = useLocation();
  const [iconRef, trigger] = useAnimatedIcon();
  const Icon = STORE_ICONS_MAP[item.icon] || BoxesIcon;
  const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

  return (
    <Link
      to={item.path}
      onClick={onClose}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors group cursor-pointer ${
        isActive
          ? 'bg-orange-50 text-orange-600 font-semibold'
          : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-600'
      }`}
    >
      <Icon
        ref={iconRef}
        size={15}
        animateOnHover={false}
        className={`shrink-0 transition-colors ${
          isActive ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-500'
        }`}
      />
      <span className="truncate">{item.label}</span>
    </Link>
  );
};

export default AdminStoreMenuItem;
