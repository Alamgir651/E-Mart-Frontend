import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CartIcon, BoxIcon, TrendingUpIcon } from '@/icons';

const METRIC_CARDS = [
  {
    key: 'totalSales',
    title: 'Total Sales',
    value: '$5,420.00',
    icon: CartIcon,
    iconBg: 'bg-orange-50 text-orange-500 border-orange-100',
    changeText: '↑ +12% from last month',
  },
  {
    key: 'totalOrders',
    title: 'Total Orders',
    value: '128',
    icon: BoxIcon,
    iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    changeText: '↑ +18% from last month',
  },
  {
    key: 'avgOrderValue',
    title: 'Avg. Order Value',
    value: '$42.35',
    icon: TrendingUpIcon,
    iconBg: 'bg-amber-50 text-amber-500 border-amber-100',
    changeText: '↑ +8% from last month',
  },
];

const MetricCardItem = ({ card }) => {
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
        <p className="text-xs mt-1 font-semibold text-emerald-600">
          {card.changeText}
        </p>
      </div>
    </div>
  );
};

export const AnalyticsMetricsGrid = ({ metrics = METRIC_CARDS }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
      {metrics.map((card) => (
        <MetricCardItem key={card.key} card={card} />
      ))}
    </div>
  );
};

export default AnalyticsMetricsGrid;
