import { motion, AnimatePresence } from 'motion/react';
import { CheckIcon } from '@/icons';
import { modalBackdrop, modalContent } from '@/animation/animations';

export const VendorApproveModal = ({ isOpen, onClose, onConfirm, vendor }) => {
  if (!isOpen || !vendor) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
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
          {/* Top Checkmark Circle */}
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center ring-8 ring-emerald-50">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <CheckIcon size={20} strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Approve Vendor
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
              Are you sure you want to approve this vendor? Once approved, the vendor
              will get access to their dashboard and can start managing their store,
              products and orders.
            </p>
          </div>

          {/* Vendor Summary Card */}
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/70 flex items-center gap-3 text-left">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-xs shadow-xs uppercase shrink-0"
              style={{ backgroundColor: vendor.brandColor || '#ef4444' }}
            >
              <span>{vendor.storeName?.slice(0, 5)}</span>
            </div>
            <div className="min-w-0">
              <span className="font-bold text-slate-900 text-xs sm:text-sm block truncate">
                {vendor.storeName}
              </span>
              <span className="text-[11px] text-slate-500 block truncate">
                {vendor.ownerName} • {vendor.email}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
            >
              Approve Vendor
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VendorApproveModal;
