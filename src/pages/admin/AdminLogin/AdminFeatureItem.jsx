import { motion } from 'motion/react';
import { CheckIcon } from '@/icons';
import { slideRight } from '@/animation/animations';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const AdminFeatureItem = ({ title, description }) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <motion.div
      variants={slideRight}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="flex items-start gap-3.5 group cursor-pointer"
    >
      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-colors">
        <CheckIcon ref={iconRef} size={11} className="stroke-[3]" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AdminFeatureItem;
