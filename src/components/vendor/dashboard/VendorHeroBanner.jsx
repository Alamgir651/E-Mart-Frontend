import { motion } from 'motion/react';
import dashboardBanner from '@/assets/images/dashboard.png';
import { fadeIn, slideRight } from '@/animation/animations';

export const VendorHeroBanner = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-orange-100/60 bg-[#fff5ea] h-36 sm:h-44 md:h-48 flex items-center"
    >
      <img
        src={dashboardBanner}
        alt="Deliver Quality. Build Trust. Grow with Emart."
        className="w-full h-full object-cover object-right"
      />

      <motion.div
        variants={slideRight}
        className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-10 z-10 max-w-[65%] sm:max-w-[55%]"
      >
        <h2 className="text-sm sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
          Deliver Quality. Build <br />
          Trust.{' '}
          <span className="text-orange-500">Grow with Emart.</span>
        </h2>

        <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-slate-600 leading-snug font-medium line-clamp-2 max-w-sm">
          Manage your products, track orders, and reach more customers - all from one place.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VendorHeroBanner;
