import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, TrashIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const ProductDetailHeader = ({
  product,
  onRemoveClick,
  onToggleActive,
}) => {
  const navigate = useNavigate();
  const [trashRef, trashTrigger] = useAnimatedIcon();
  const isActive = product.status === 'Active';

  return (
    <div className="space-y-4">
      {/* Back button link */}
      <div>
        <button
          type="button"
          onClick={() => navigate('/admin/products')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon animateOnHover={false} size={15} />
          <span>Back to Products</span>
        </button>
      </div>

      {/* Main title bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {product.name}
            </h1>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                isActive
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                  : 'bg-rose-50 text-rose-600 border-rose-200/80'
              }`}
            >
              {product.status}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Category: <span className="text-slate-600">{product.categoryPath || product.category}</span>
          </p>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-4">
          {/* Active Switch Toggle */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span>Active</span>
            <button
              type="button"
              role="switch"
              aria-checked={isActive}
              onClick={onToggleActive}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                isActive ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isActive ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Remove Product button */}
          <button
            type="button"
            onClick={onRemoveClick}
            onMouseEnter={trashTrigger.onMouseEnter}
            onMouseLeave={trashTrigger.onMouseLeave}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <TrashIcon ref={trashRef} animateOnHover={false} size={15} />
            <span>Remove Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
