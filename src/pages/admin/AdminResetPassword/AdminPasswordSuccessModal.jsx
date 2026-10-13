import { motion, AnimatePresence } from 'motion/react';
import { CheckIcon } from '@/icons';
import { Button } from '@/components/common/Button';
import { modalBackdrop, modalContent } from '@/animation/animations';

export const AdminPasswordSuccessModal = ({ isOpen, onLoginContinue }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
      />

      <motion.div
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-sm bg-white rounded-3xl p-8 sm:p-9 shadow-2xl shadow-slate-900/20 text-center border border-slate-100"
      >
        <div className="relative w-24 h-24 mx-auto mb-5 flex items-center justify-center">
          {/* Confetti decorative dots */}
          <span className="absolute top-1 left-3 w-2.5 h-2.5 rounded-sm bg-orange-400 rotate-12" />
          <span className="absolute top-3 right-2 w-2.5 h-2.5 rounded-sm bg-emerald-400 rotate-45" />
          <span className="absolute bottom-2 left-4 w-2.5 h-2.5 rounded-sm bg-amber-500 rotate-45" />
          <span className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-sm bg-emerald-300 rotate-12" />

          <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <CheckIcon size={38} className="stroke-[3]" />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
          All Set!
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
          Your account has been successfully verified. You will now be redirected to the admin dashboard.
        </p>

        <div className="mt-7">
          <Button
            type="button"
            onClick={onLoginContinue}
            className="w-full py-3 sm:py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-orange-600/25 transition-all cursor-pointer"
          >
            Login to Continue
          </Button>
        </div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
};

export default AdminPasswordSuccessModal;
