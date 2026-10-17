import { TrashIcon, XIcon, CircleCheckIcon, ShieldAlertIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const DeleteCategoryModal = ({
  isOpen,
  onClose,
  onConfirm,
  category,
}) => {
  const [trashRef, trashTrigger] = useAnimatedIcon();

  if (!isOpen || !category) return null;

  const hasProducts = (category.productsCount || 0) > 0;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-4"
      >
        {/* Top Header */}
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
            Delete Category?
          </h2>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            This action permanently removes the selected category.
          </p>
        </div>

        {/* Category Card Preview */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="w-10 h-10 rounded-xl bg-rose-100/70 border border-rose-200/60 flex items-center justify-center text-rose-600 shrink-0">
            <TrashIcon animateOnHover={false} size={18} />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-slate-900 text-sm truncate">
              {category.name}
            </h4>
            <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
              {category.productsCount || 0} products • {category.status}
            </p>
          </div>
        </div>

        {/* Condition Alert Box */}
        {hasProducts ? (
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-800">
            <ShieldAlertIcon animateOnHover={false} size={16} className="shrink-0 mt-0.5 text-amber-600" />
            <p className="leading-relaxed">
              This category currently contains <span className="font-bold">{category.productsCount} products</span>. Deleting it will leave those products uncategorized.
            </p>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-xs text-emerald-800">
            <CircleCheckIcon animateOnHover={false} size={16} className="shrink-0 mt-0.5 text-emerald-600" />
            <p className="leading-relaxed">
              This category is empty and can be safely deleted. No product reassignment is needed.
            </p>
          </div>
        )}

        {/* Disclaimer Note */}
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Only &quot;{category.name}&quot; will be removed. Products and order history will not be deleted. This cannot be undone.
        </p>

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
            onClick={() => onConfirm(category.id)}
            onMouseEnter={trashTrigger.onMouseEnter}
            onMouseLeave={trashTrigger.onMouseLeave}
            className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <TrashIcon ref={trashRef} animateOnHover={false} size={15} />
            <span>Delete Category</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
