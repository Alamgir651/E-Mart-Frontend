import { motion } from 'motion/react';
import {
  BoxIcon,
  CircleCheckIcon,
  ShieldAlertIcon,
  BanIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from '@/icons';
import { slideUp, staggerContainer } from '@/animation/animations';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const ICONS = {
  BoxIcon,
  CircleCheckIcon,
  ShieldAlertIcon,
  BanIcon,
};

const StatCardItem = ({ card }) => {
  const IconComponent = ICONS[card.icon] || BoxIcon;
  const [iconRef, trigger] = useAnimatedIcon();
  const isUp = card.trendUp;

  return (
    <motion.div
      variants={slideUp}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${card.borderColor} border-l-[3.5px]`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconBg} border border-current/15`}>
          <IconComponent ref={iconRef} animateOnHover={false} size={20} />
        </div>
        <div className="text-right">
          <span className="text-[12px] font-medium text-slate-500 block">
            {card.title}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            {card.value}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1.5 text-xs">
        <span
          className={`inline-flex items-center gap-0.5 font-semibold ${
            isUp ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isUp ? (
            <TrendingUpIcon animateOnHover={false} size={13} />
          ) : (
            <TrendingDownIcon animateOnHover={false} size={13} />
          )}
          <span>{card.trend}</span>
        </span>
        <span className="text-slate-400">vs last month</span>
      </div>
    </motion.div>
  );
};

export const ProductStatCards = ({ stats = [] }) => {
  return (
    <motion.div
      variants={staggerContainer(0.08, 0.05)}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
    >
      {stats.map((card) => (
        <StatCardItem key={card.id} card={card} />
      ))}
    </motion.div>
  );
};

export default ProductStatCards;
