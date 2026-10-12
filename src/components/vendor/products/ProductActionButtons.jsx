import { SquarePenIcon, TrashIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const ProductActionButtons = ({ product, onEdit, onDelete }) => {
  const [editRef, editTrigger] = useAnimatedIcon();
  const [deleteRef, deleteTrigger] = useAnimatedIcon();

  return (
    <div className="flex items-center justify-end gap-1.5">
      <button
        type="button"
        onClick={() => onEdit?.(product)}
        onMouseEnter={editTrigger.onMouseEnter}
        onMouseLeave={editTrigger.onMouseLeave}
        className="p-1.5 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
        title="Edit Product"
      >
        <SquarePenIcon ref={editRef} animateOnHover={false} size={15} />
      </button>

      <button
        type="button"
        onClick={() => onDelete?.(product.id)}
        onMouseEnter={deleteTrigger.onMouseEnter}
        onMouseLeave={deleteTrigger.onMouseLeave}
        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
        title="Delete Product"
      >
        <TrashIcon ref={deleteRef} animateOnHover={false} size={15} />
      </button>
    </div>
  );
};

export default ProductActionButtons;
