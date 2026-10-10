import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XIcon } from '@/icons';
import { scaleUp } from '@/animation/animations';

const REASONS = [
  'Item out of stock',
  'Store temporarily unavailable',
  'Unable to fulfil order',
  'Other',
];

export const RejectOrderModal = ({ isOpen, order, onClose, onConfirm }) => {
  const [selectedReason, setSelectedReason] = useState('Item out of stock');
  const [note, setNote] = useState('');

  if (!isOpen || !order) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      orderId: order.id,
      reason: selectedReason,
      note: note.trim(),
    });
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
                Reject Order
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Let us know why your store can't fulfil this order.
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

          <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Reason for rejection <span className="text-rose-500">*</span>
              </label>

              <div className="space-y-1.5">
                {REASONS.map((reason) => {
                  const isChecked = selectedReason === reason;
                  return (
                    <label
                      key={reason}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-orange-500 bg-orange-50/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="rejectionReason"
                        checked={isChecked}
                        onChange={() => setSelectedReason(reason)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-xs font-semibold text-slate-800">
                        {reason}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Additional note <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a brief explanation..."
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">
                An explanation is required if you select Other.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-200/50 flex items-start gap-2 text-xs text-amber-900">
              <span className="text-amber-500 font-bold shrink-0">ⓘ</span>
              <p className="text-[10px] leading-relaxed">
                Confirming will cancel this order and notify the customer. This action can't be undone.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Keep Order
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Confirm Rejection
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RejectOrderModal;
