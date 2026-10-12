import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@/icons';
import { scaleUp, buttonTap } from '@/animation/animations';

const confettiBoxes = [
  { id: 1, color: 'bg-emerald-400', size: 'w-3 h-3', top: '10%', left: '20%', delay: 0.1, rotate: 45 },
  { id: 2, color: 'bg-orange-500', size: 'w-3.5 h-3.5', top: '8%', right: '22%', delay: 0.15, rotate: 15 },
  { id: 3, color: 'bg-emerald-500', size: 'w-3.5 h-3.5', top: '35%', left: '12%', delay: 0.2, rotate: 30 },
  { id: 4, color: 'bg-emerald-400', size: 'w-3 h-3', top: '32%', right: '14%', delay: 0.25, rotate: -20 },
  { id: 5, color: 'bg-orange-500', size: 'w-3.5 h-3.5', bottom: '22%', left: '22%', delay: 0.3, rotate: 45 },
  { id: 6, color: 'bg-orange-400', size: 'w-2.5 h-2.5', bottom: '12%', left: '32%', delay: 0.35, rotate: 12 },
  { id: 7, color: 'bg-orange-400', size: 'w-2.5 h-2.5', bottom: '30%', right: '20%', delay: 0.4, rotate: 45 },
  { id: 8, color: 'bg-emerald-300', size: 'w-2.5 h-2.5', bottom: '15%', right: '30%', delay: 0.45, rotate: -35 },
];

export const AccountApprovedModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLoginContinue = () => {
    if (onClose) onClose();
    navigate('/vendor/login');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 shadow-2xl shadow-slate-950/20 text-center relative border border-white/80"
        >
          <div className="relative w-44 h-44 mx-auto flex items-center justify-center mb-2">
            {confettiBoxes.map((box) => (
              <motion.div
                key={box.id}
                initial={{ scale: 0, opacity: 0, y: 10 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: 1,
                  y: [10, -4, 0],
                  rotate: [0, box.rotate * 1.5, box.rotate],
                }}
                transition={{
                  duration: 0.5,
                  delay: box.delay,
                  ease: 'easeOut',
                }}
                className={`absolute rounded-[3px] shadow-xs ${box.color} ${box.size}`}
                style={{
                  top: box.top,
                  left: box.left,
                  right: box.right,
                  bottom: box.bottom,
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0, rotate: -25 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 22,
                delay: 0.05,
              }}
              className="w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 450, damping: 20 }}
              >
                <CheckIcon size={44} className="stroke-[3.5]" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-2">
              Account Approved!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto mb-7 leading-relaxed">
              Your vendor account has been approved. You can now login and start managing your store.
            </p>
          </motion.div>

          <motion.button
            variants={buttonTap}
            whileTap="tap"
            type="button"
            onClick={handleLoginContinue}
            className="w-full py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
          >
            Login to Continue
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AccountApprovedModal;
