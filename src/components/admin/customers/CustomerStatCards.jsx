import { motion } from 'motion/react';
import {
  UsersIcon,
  UserIcon,
  TicketIcon,
  BellIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from '@/icons';
import { slideUp, staggerContainer } from '@/animation/animations';

const ICONS = {
  UsersIcon,
  UserIcon,
  TicketIcon,
  BellIcon,
};

const StatCardItem = ({ card }) => {
  const IconComponent = ICONS[card.icon] || UserIcon;
  const isUp = card.trendUp;

  return (
    <motion.div
      variants={slideUp}
      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconBg} border border-current/15`}>
          <IconComponent size={20} />
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
          {isUp ? <TrendingUpIcon size={13} /> : <TrendingDownIcon size={13} />}
          <span>{card.trend}</span>
        </span>
        <span className="text-slate-400">{card.subtext || 'vs last month'}</span>
      </div>
    </motion.div>
  );
};

export const CustomerStatCards = ({ stats = [] }) => {
  return (
    <motion.div
      variants={staggerContainer(0.08, 0.05)}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {stats.map((card) => (
        <StatCardItem key={card.id} card={card} />
      ))}
    </motion.div>
  );
};

export default CustomerStatCards;
