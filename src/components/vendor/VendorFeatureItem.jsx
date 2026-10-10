import { motion } from 'motion/react';
import { CheckIcon } from '@/icons';
import { slideRight } from '@/animation/animations';

export const VendorFeatureItem = ({ title, description }) => {
  return (
    <motion.div
      variants={slideRight}
      className="flex items-start gap-3.5 bg-white/40 backdrop-blur-sm p-2.5 rounded-xl border border-white/50 shadow-xs transition-colors hover:bg-white/60"
    >
      <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center text-orange-600 border border-orange-200">
        <CheckIcon size={14} className="stroke-[3]" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default VendorFeatureItem;
