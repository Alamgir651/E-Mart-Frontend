import { motion } from 'motion/react';
import dashboardBanner from '@/assets/images/dashboard.png';
import { fadeIn, slideRight } from '@/animation/animations';

export const VendorHeroBanner = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-orange-100/60 bg-[#ffeada] h-36 sm:h-44 md:h-48 flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={dashboardBanner}
          alt="Deliver Quality. Build Trust. Grow with Emart."
          className="w-full h-full object-cover object-[26%_center] sm:object-center translate-x-8 sm:translate-x-0 scale-105 sm:scale-100 transition-transform"
        />
      </div>

      <div className="absolute inset-y-0 left-0 w-3/4 sm:w-3/5 bg-gradient-to-r from-[#ffeada] via-[#ffeada]/85 to-transparent pointer-events-none z-1" />

      <motion.div
        variants={slideRight}
        className="relative z-10 flex flex-col justify-center px-4 sm:px-8 md:px-10 max-w-[70%] sm:max-w-[55%]"
      >
        <h2 className="text-xs xs:text-sm sm:text-xl md:text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
          Deliver Quality. Build <br />
          Trust.{' '}
          <span className="text-orange-500">Grow with Emart.</span>
        </h2>

        <p className="mt-1 sm:mt-1.5 text-[10px] xs:text-[11px] sm:text-xs text-slate-700 leading-tight font-semibold max-w-xs sm:max-w-sm">
          Manage your products, track orders, and reach more customers - all from one place.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VendorHeroBanner;
