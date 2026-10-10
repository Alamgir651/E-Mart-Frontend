import { motion } from 'motion/react';
import { CheckIcon } from '@/icons';
import { slideRight } from '@/animation/animations';

export const VendorFeatureItem = ({ title, description }) => {
  return (
    <motion.div
      variants={slideRight}
      className="flex items-start gap-3"
    >
      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center border border-orange-200">
        <CheckIcon size={11} className="stroke-[3]" />
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
