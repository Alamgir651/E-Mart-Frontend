import { motion } from 'motion/react';
import logoImg from '@/assets/images/logo.png';
import storeImg from '@/assets/images/store.png';
import { slideRight, smoothTransition } from '@/animation/animations';

export const VendorRegisterHero = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full relative">
      <div className="z-10">
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="mb-5 sm:mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20">
            <img
              src={logoImg}
              alt="E-Mart Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="space-y-2 sm:space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.15]">
            Become a Vendor <br />
            With E-Mart
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
            Start selling your products and connect with thousands of customers.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="visible"
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="w-full mt-auto pt-4 flex justify-center lg:justify-start items-end"
      >
        <img
          src={storeImg}
          alt="E-Mart 3D Store Illustration"
          className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] xl:max-w-[420px] object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(249,115,22,0.45)]"
        />
      </motion.div>
    </div>
  );
};

export default VendorRegisterHero;
