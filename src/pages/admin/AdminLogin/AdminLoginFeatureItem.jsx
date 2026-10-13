import { motion } from 'motion/react';
import { ShieldAlertIcon, LockIcon, CircleCheckIcon } from '@/icons';
import { slideRight } from '@/animation/animations';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const FEATURE_ICONS = {
  encryption: LockIcon,
  kyc: ShieldAlertIcon,
  telemetry: CircleCheckIcon,
};

export const AdminLoginFeatureItem = ({ id, title, description }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const IconComponent = FEATURE_ICONS[id] || LockIcon;

  return (
    <motion.div
      variants={slideRight}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-orange-500/30 hover:bg-slate-900/70 transition-all group cursor-pointer"
    >
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
        <IconComponent ref={iconRef} size={15} />
      </div>
      <div>
        <h3 className="font-semibold text-slate-100 text-sm leading-snug group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AdminLoginFeatureItem;
