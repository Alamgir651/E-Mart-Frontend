import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  TrendingUpIcon,
  BadgePercentIcon,
  WalletIcon,
  ClockIcon,
} from '@/icons';

const METRIC_CARDS = [
  {
    key: 'totalSales',
    title: 'Total Sales',
    value: '$5,420.00',
    icon: TrendingUpIcon,
    iconBg: 'bg-sky-50 text-sky-500 border-sky-100',
    badgeText: '↑ 12% from last month',
    badgeColor: 'text-emerald-600',
  },
  {
    key: 'commissionFee',
    title: 'Commission Fee',
    value: '$542.00',
    icon: BadgePercentIcon,
    iconBg: 'bg-amber-50 text-amber-500 border-amber-100',
    badgeText: '10% of sales',
    badgeColor: 'text-slate-500',
  },
  {
    key: 'netEarnings',
    title: 'Net Earnings',
    value: '$4,878.00',
    icon: WalletIcon,
    iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    badgeText: '↑ 15% from last month',
    badgeColor: 'text-emerald-600',
  },
  {
    key: 'pendingPayout',
    title: 'Pending Payout',
    value: '$1,250.00',
    icon: ClockIcon,
    iconBg: 'bg-rose-50 text-rose-500 border-rose-100',
    badgeText: 'Next payout: Sep 30',
    badgeColor: 'text-slate-500',
  },
];

const FinanceMetricCardItem = ({ card }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const Icon = card.icon;

  return (
    <div
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm font-medium text-slate-500">
          {card.title}
        </span>
        <div
          className={`w-9 h-9 rounded-xl border flex items-center justify-center ${card.iconBg}`}
        >
          <Icon ref={iconRef} size={18} animateOnHover={false} />
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          {card.value}
        </p>
        <p className={`text-xs mt-1 font-semibold ${card.badgeColor}`}>
          {card.badgeText}
        </p>
      </div>
    </div>
  );
};

export const FinanceMetricsGrid = ({ metrics = METRIC_CARDS }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
      {metrics.map((card) => (
        <FinanceMetricCardItem key={card.key} card={card} />
      ))}
    </div>
  );
};

export default FinanceMetricsGrid;
