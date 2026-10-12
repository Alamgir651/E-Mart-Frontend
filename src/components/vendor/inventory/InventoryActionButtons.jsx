import { PlusIcon, SquarePenIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const InventoryActionButtons = ({ product, onAddStock, onEditProduct }) => {
  const [addRef, addTrigger] = useAnimatedIcon();
  const [editRef, editTrigger] = useAnimatedIcon();

  return (
    <div className="flex items-center justify-end gap-1.5">
      <button
        type="button"
        onClick={() => onAddStock(product)}
        onMouseEnter={addTrigger.onMouseEnter}
        onMouseLeave={addTrigger.onMouseLeave}
        className="p-1.5 sm:p-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-all shadow-2xs active:scale-95 cursor-pointer"
        title="Add / Update Stock"
      >
        <PlusIcon ref={addRef} animateOnHover={false} size={15} />
      </button>

      <button
        type="button"
        onClick={() => onEditProduct(product)}
        onMouseEnter={editTrigger.onMouseEnter}
        onMouseLeave={editTrigger.onMouseLeave}
        className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer"
        title="Edit Product Details"
      >
        <SquarePenIcon ref={editRef} animateOnHover={false} size={15} />
      </button>
    </div>
  );
};

export default InventoryActionButtons;
