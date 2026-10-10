import { motion } from 'motion/react';
import logoImg from '@/assets/images/logo.png';
import { VENDOR_HERO_FEATURES } from '@/mock/vendor/vendorFeatures.mock';
import { VendorFeatureItem } from '@/components/vendor/VendorFeatureItem';
import { slideRight, staggerContainer, smoothTransition } from '@/animation/animations';

export const VendorHeroSection = () => {
  return (
    <div className="flex flex-col justify-between h-full max-w-xl z-10 py-6 sm:py-10">
      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="visible"
        className="mb-8 sm:mb-12"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24">
          <img
            src={logoImg}
            alt="E-Mart Logo"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </motion.div>

      <div className="space-y-8 my-auto">
        <motion.h1
          variants={slideRight}
          initial="hidden"
          animate="visible"
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
        >
          Grow Your Business <br className="hidden sm:inline" />
          <span className="text-slate-900">With E Mart</span>
        </motion.h1>

        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-5"
        >
          {VENDOR_HERO_FEATURES.map((feature) => (
            <VendorFeatureItem
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>

      
    </div>
  );
};

export default VendorHeroSection;
