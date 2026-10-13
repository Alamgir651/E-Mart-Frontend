import { motion } from 'motion/react';
import logoImg from '@/assets/images/logo.png';
import { ADMIN_HERO_FEATURES } from '@/mock/admin/adminAuth.mock';
import { AdminFeatureItem } from './AdminFeatureItem';
import { slideRight, staggerContainer, smoothTransition } from '@/animation/animations';

export const AdminLoginHero = ({ mode = 'login' }) => {
  return (
    <div className="flex flex-col justify-between h-full max-w-xl z-10 py-6 sm:py-10">
      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="visible"
        className="mb-8 sm:mb-10"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24">
          <img
            src={logoImg}
            alt="E-Mart Logo"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </motion.div>

      <div className="space-y-6 my-auto">
        {mode === 'login' && (
          <>
            <motion.h1
              variants={slideRight}
              initial="hidden"
              animate="visible"
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]"
            >
              Manage Your <br />
              <span className="text-slate-900">Marketplace with Ease</span>
            </motion.h1>

            <motion.div
              variants={staggerContainer(0.12, 0.2)}
              initial="hidden"
              animate="visible"
              className="space-y-4 pt-2"
            >
              {ADMIN_HERO_FEATURES.map((feature) => (
                <AdminFeatureItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>
          </>
        )}

        {mode === '2fa' && (
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Two-Factor <br />
              Authentication
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
              Enter the 6-digit verification code sent to your email address.
            </p>
          </motion.div>
        )}

        {mode === 'reset' && (
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Set a New <br />
              Password
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
              For your account security, please set a new password.
            </p>
          </motion.div>
        )}
      </div>

      <div className="hidden lg:block h-6" />
    </div>
  );
};

export default AdminLoginHero;
