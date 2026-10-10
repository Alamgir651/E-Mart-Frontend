import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XIcon } from '@/icons';
import { scaleUp } from '@/animation/animations';

export const AcceptOrderModal = ({ isOpen, order, onClose, onConfirm }) => {
  const [prepTime, setPrepTime] = useState('20');

  if (!isOpen || !order) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ orderId: order.id, prepTime: Number(prepTime) || 20 });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl z-10 border border-slate-100 max-h-[92vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Accept Order
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Confirm that your store can prepare this order.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0 -mt-1 -mr-1"
              aria-label="Close"
            >
              <XIcon size={16} />
            </button>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-slate-900">{order.id}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                  New Order
                </span>
              </div>
              <p className="text-xs text-slate-700 font-semibold mt-1">{order.customer}</p>
              <p className="text-[11px] text-slate-400">{order.date || 'Sep 22 at 10:24'}</p>
            </div>

            <div className="text-right">
              <p className="text-base font-black text-slate-900">{order.total}</p>
              <p className="text-[11px] text-slate-500">{order.itemsCount || 3} items</p>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-orange-50/50 border border-orange-200/50 flex items-start gap-2 text-xs text-orange-800">
            <span className="text-orange-500 font-bold shrink-0">ⓘ</span>
            <p className="text-[10px] leading-relaxed">
              Once accepted, this order moves to <strong className="text-orange-900">Processing</strong> so you can start preparing it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-3.5 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Preparation time <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  placeholder="e.g. 20"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
                <span className="absolute right-3.5 text-xs text-slate-400 font-medium">
                  minutes
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Example: 20 minutes. Leave blank if not needed.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Accept Order
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AcceptOrderModal;
