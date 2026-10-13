import { Link } from 'react-router-dom';
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
  ChartColumnIncreasingIcon,
  BoxesIcon,
  BellIcon,
  SettingsIcon,
  CircleHelpIcon,
};

export const AdminStoreMenuItem = ({ item, onClose }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const Icon = STORE_ICONS_MAP[item.icon] || BoxesIcon;

  return (
    <Link
      to={item.path}
      onClick={onClose}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors group cursor-pointer"
    >
      <Icon
        ref={iconRef}
        size={15}
        animateOnHover={false}
        className="shrink-0 text-slate-400 group-hover:text-orange-500 transition-colors"
      />
      <span className="truncate">{item.label}</span>
    </Link>
  );
};

export default AdminStoreMenuItem;
