import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XIcon } from '@/icons';
import { modalBackdrop, modalContent } from '@/animation/animations';

export const VendorRejectModal = ({ isOpen, onClose, onConfirm, vendor }) => {
  const [reason, setReason] = useState('');

  if (!isOpen || !vendor) return null;

  const handleConfirm = () => {
    onConfirm(reason);
    setReason('');
  };

  const handleCancel = () => {
    setReason('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleCancel}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Dialog */}
        <motion.div
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 z-10 text-center space-y-5"
        >
          {/* Top Red X Circle */}
          <div className="mx-auto w-14 h-14 rounded-full bg-rose-500/15 text-rose-500 flex items-center justify-center ring-8 ring-rose-50">
            <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md">
              <XIcon size={20} strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Reject Vendor
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
              Are you sure you want to reject this vendor? The vendor will be notified
              about the rejection. You can also add a reason for rejection.
            </p>
          </div>

          {/* Reason Input Box */}
          <div className="text-left space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
              Reason for Rejection (optional)
            </label>
            <div className="relative">
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value.slice(0, 300))}
                placeholder="Enter reason here..."
                rows={4}
                className="w-full p-3 pb-7 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/90 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"
              />
              <span className="absolute right-3 bottom-2 text-[10px] text-slate-400 font-medium">
                {reason.length}/300
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={handleCancel}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              Reject Vendor
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VendorRejectModal;
