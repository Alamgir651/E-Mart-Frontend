import { motion } from 'motion/react';
import { CheckIcon } from '@/icons';
import { buttonTap } from '@/animation/animations';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const icons = {
  individual: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22V12h6v10" />
    </svg>
  ),
  company: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'multi-branch': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export const AccountTypeCard = ({
  item,
  isSelected,
  onSelect,
}) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <motion.button
      type="button"
      variants={buttonTap}
      whileTap="tap"
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      onClick={() => onSelect(item.id)}
      className={`relative w-full rounded-2xl p-6 text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[220px] ${
        isSelected
          ? 'border-2 border-orange-500 bg-white shadow-md shadow-orange-500/10'
          : 'border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs'
      }`}
    >
      {isSelected && (
        <span className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-xs">
          <CheckIcon ref={iconRef} size={12} className="stroke-[3]" />
        </span>
      )}

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${item.theme.iconBg} ${item.theme.iconColor}`}
      >
        {icons[item.id] || icons.individual}
      </div>

      <div className="space-y-1.5 my-auto">
        <h3 className="font-bold text-slate-900 text-base leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed max-w-[200px] mx-auto">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
};

export default AccountTypeCard;
