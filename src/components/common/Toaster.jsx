import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from '@/utils/toast';
import { CircleCheckIcon, XIcon } from '@/icons';

const typeStyles = {
  success: 'bg-emerald-50 text-emerald-900 border-emerald-200/80 shadow-emerald-500/10',
  error: 'bg-rose-50 text-rose-900 border-rose-200/80 shadow-rose-500/10',
  warning: 'bg-amber-50 text-amber-900 border-amber-200/80 shadow-amber-500/10',
  info: 'bg-sky-50 text-sky-900 border-sky-200/80 shadow-sky-500/10',
};

const iconColors = {
  success: 'text-emerald-500',
  error: 'text-rose-500',
  warning: 'text-amber-500',
  info: 'text-sky-500',
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = {
      add: (item) => {
        setToasts((prev) => [...prev, item]);
        if (item.duration > 0) {
          setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== item.id));
          }, item.duration);
        }
      },
      remove: (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      },
    };

    return toast.subscribe(listener);
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl border shadow-xl backdrop-blur-md ${typeStyles[item.type] || typeStyles.info}`}
          >
            <div className={`mt-0.5 flex-shrink-0 ${iconColors[item.type] || iconColors.info}`}>
              <CircleCheckIcon size={18} />
            </div>

            <div className="flex-1 text-xs sm:text-sm font-semibold leading-snug">
              {item.message}
            </div>

            <button
              type="button"
              onClick={() => toast.dismiss(item.id)}
              className="text-slate-400 hover:text-slate-700 transition-colors p-0.5"
            >
              <XIcon size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toaster;
