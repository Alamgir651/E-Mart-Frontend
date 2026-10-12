import { motion, AnimatePresence } from 'motion/react';
import pendingImg from '@/assets/images/pending.png';
import { CheckIcon } from '@/icons';
import { scaleUp } from '@/animation/animations';

export const AccountReviewModal = ({ isOpen, onClose, onGotIt }) => {
  if (!isOpen) return null;

  const handleAction = () => {
    if (onGotIt) {
      onGotIt();
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-950/20 text-center relative border border-white/80"
        >
          <div className="flex justify-center mb-4">
            <img
              src={pendingImg}
              alt="Account Under Review"
              className="w-32 sm:w-36 h-auto object-contain filter drop-shadow-md select-none"
            />
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-1.5">
            Account Under Review
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
            Your vendor account has been submitted and is currently under review by our team.
          </p>

          <div className="space-y-3 text-left max-w-xs mx-auto mb-6">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <CheckIcon size={12} className="stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Account submitted
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Documents under review
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-xs font-semibold text-slate-700">
                You&apos;ll be notified via email & SMS
              </span>
            </div>
          </div>

          <div className="bg-orange-50/70 border border-orange-200/60 rounded-2xl p-3.5 flex items-center gap-2.5 text-xs text-slate-700 mb-6 text-left">
            <span className="text-orange-600 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="text-[11px] sm:text-xs leading-snug">
              This process usually takes <strong className="font-bold text-slate-900">24–48 hours</strong>.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAction}
            className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-orange-600/25 transition-all cursor-pointer"
          >
            Got it, thanks!
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AccountReviewModal;
