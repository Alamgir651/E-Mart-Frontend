import {
  BoxIcon,
  ShieldAlertIcon,
  TrendingUpIcon,
  DollarSignIcon,
} from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const MetricPillItem = ({ label, value, icon: Icon, iconBg, iconColor }) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5 cursor-pointer"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${iconColor} border border-current/15 shrink-0`}>
        <Icon ref={iconRef} animateOnHover={false} size={18} />
      </div>
      <div>
        <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
          {label}
        </span>
        <span className="text-base sm:text-lg font-extrabold text-slate-900 block mt-0.5">
          {value}
        </span>
      </div>
    </div>
  );
};

export const ProductMetricPills = ({ product }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <MetricPillItem
        label="Total Stock"
        value={product.totalStockKg || `${product.stock} kg`}
        icon={BoxIcon}
        iconBg="bg-blue-50"
        iconColor="text-blue-600"
      />
      <MetricPillItem
        label="Low Stock Alert"
        value={product.lowStockAlertKg || '10 kg'}
        icon={ShieldAlertIcon}
        iconBg="bg-amber-50"
        iconColor="text-amber-600"
      />
      <MetricPillItem
        label="Total Sales"
        value={product.totalSales || 320}
        icon={TrendingUpIcon}
        iconBg="bg-emerald-50"
        iconColor="text-emerald-600"
      />
      <MetricPillItem
        label="Total Revenue"
        value={product.totalRevenue || '$1,440.00'}
        icon={DollarSignIcon}
        iconBg="bg-orange-50"
        iconColor="text-orange-600"
      />
    </div>
  );
};

export default ProductMetricPills;
