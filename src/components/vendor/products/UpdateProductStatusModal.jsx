import { useState, useEffect } from 'react';
import { XIcon } from '@/icons';
import { PRODUCT_STATUSES } from '@/mock/vendor/vendorProducts.mock';

export const UpdateProductStatusModal = ({ isOpen, product, onClose, onConfirm }) => {
  const [selectedStatus, setSelectedStatus] = useState('Active');
  const [reason, setReason] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedStatus(product.status || 'Active');
      setReason('');
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      productId: product.id,
      newStatus: selectedStatus,
      reason: reason.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 sm:p-6 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Update Product Status
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <XIcon size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover bg-white border border-slate-200 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                {product.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Current status:{' '}
                <span className="font-semibold text-emerald-600">
                  {product.status}
                </span>
              </p>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
              Select New Status
            </label>

            <div className="space-y-2">
              {PRODUCT_STATUSES.map((item) => {
                const isSelected = selectedStatus === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedStatus(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'border-2 border-orange-500 bg-orange-50/20'
                        : 'border border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 mt-0.5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'border-orange-500'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      )}
                    </div>

                    <div className="text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Reason for Change <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Waiting for shipment delivery on Friday..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
            >
              Update Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductStatusModal;
