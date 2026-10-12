import { motion } from 'motion/react';
import {
  CartIcon,
  TruckIcon,
  DollarSignIcon,
  BadgeAlertIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from '@/icons';
import { cardHover } from '@/animation/animations';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const ICON_MAP = {
  sales: {
    icon: CartIcon,
    bg: 'bg-orange-50 text-orange-500 border border-orange-100',
  },
  orders: {
    icon: TruckIcon,
    bg: 'bg-emerald-50 text-emerald-500 border border-emerald-100',
  },
  revenue: {
    icon: DollarSignIcon,
    bg: 'bg-amber-50 text-amber-500 border border-amber-100',
  },
  lowStock: {
    icon: BadgeAlertIcon,
    bg: 'bg-purple-50 text-purple-500 border border-purple-100',
  },
};

const StatCardItem = ({ stat }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const conf = ICON_MAP[stat.id] || ICON_MAP.sales;
  const Icon = conf.icon;
  const isPositive = stat.trend === 'up';

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="p-3.5 sm:p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">{stat.title}</span>
        <div className={`p-1.5 sm:p-2 rounded-xl ${conf.bg}`}>
          <Icon ref={iconRef} size={16} />
        </div>
      </div>

      <div className="mt-2.5 sm:mt-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          {stat.value}
        </h3>

        <div className="flex items-center gap-1.5 mt-1.5 sm:mt-2 text-[11px] sm:text-xs">
          {isPositive ? (
            <TrendingUpIcon size={13} className="text-emerald-500" />
          ) : (
            <TrendingDownIcon size={13} className="text-rose-500" />
          )}
          <span
            className={`font-semibold ${
              isPositive ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {stat.change}
          </span>
          <span className="text-slate-400">vs last week</span>
        </div>
      </div>
    </motion.div>
  );
};

export const VendorStatCards = ({ stats = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <StatCardItem key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default VendorStatCards;
