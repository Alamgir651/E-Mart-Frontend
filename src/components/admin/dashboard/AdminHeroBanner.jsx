import { motion } from 'motion/react';
import storeImg from '@/assets/images/store.png';
import { slideUp } from '@/animation/animations';

export const AdminHeroBanner = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#fff3e5] via-[#ffedd5]/80 to-[#fed7aa]/50 border border-orange-200/60 p-6 sm:p-7 shadow-xs"
    >
      <div className="relative z-10 max-w-xl">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-900 tracking-tight">
          Welcome Back, Admin!
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          Here's what's happening with your eMart marketplace today. Keep tracking performance seamlessly.
        </p>
      </div>

      <div className="hidden md:block absolute -right-4 -bottom-6 w-48 sm:w-56 lg:w-64 pointer-events-none select-none">
        <img
          src={storeImg}
          alt="E-Mart Marketplace Overview"
          className="w-full h-auto object-contain filter drop-shadow-md"
        />
      </div>
    </motion.div>
  );
};

export default AdminHeroBanner;
