import { useState, useEffect } from 'react';
import { TrashIcon, XIcon, SendIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const PRESET_REASONS = [
  'Quality complaints',
  'Damaged packaging',
  'Policy violation',
  'Expired product',
];

export const RemoveProductModal = ({
  isOpen,
  onClose,
  onConfirm,
  product,
}) => {
  const [trashRef, trashTrigger] = useAnimatedIcon();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setMessage('');
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    onConfirm?.(product.id, message || 'Product removed by platform administrator.');
  };

  const handleSelectPreset = (reason) => {
    setMessage(`This product is being removed due to ${reason.toLowerCase()}. Please contact support if you have questions.`);
  };

  const vendorName = product.vendor || product.vendorDetails?.name || 'Vendor';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-4"
      >
        {/* Top header */}
        <div className="flex items-start justify-between">
          <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shadow-2xs">
            <TrashIcon animateOnHover={false} size={20} />
          </div>

          <OrderActionButton
            icon={XIcon}
            title="Close"
            onClick={onClose}
            iconSize={18}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Delete Product
          </h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Specify the removal reason. A message will be sent to <span className="font-semibold text-slate-700">{vendorName}</span>.
          </p>
        </div>

        {/* Product Card Preview */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80">
          <img
            src={product.image}
            alt={product.name}
            className="w-11 h-11 rounded-xl object-cover border border-slate-200 shrink-0 bg-white"
          />
          <div className="min-w-0">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
              {product.name}
            </h4>
            <p className="text-[11px] text-slate-400 font-medium truncate">
              {product.code} • {vendorName}
            </p>
          </div>
        </div>

        {/* Preset Reason Chips */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Quick Reason Presets
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PRESET_REASONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleSelectPreset(r)}
                className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors cursor-pointer border border-slate-200/60"
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <SendIcon animateOnHover={false} size={11} className="text-slate-400" />
            <span>Message to Vendor</span>
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message explaining why this product is being deleted from the store..."
            className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 placeholder:text-slate-400 resize-none transition-all"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            onMouseEnter={trashTrigger.onMouseEnter}
            onMouseLeave={trashTrigger.onMouseLeave}
            className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <TrashIcon ref={trashRef} animateOnHover={false} size={15} />
            <span>Delete Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveProductModal;
