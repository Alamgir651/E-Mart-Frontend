import { useNavigate } from 'react-router-dom';
import { EyeIcon, ShieldAlertIcon, TrashIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';

const STATUS_BADGES = {
  Active: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  'Low Stock': 'bg-amber-50 text-amber-600 border-amber-200/80',
  'Out of Stock': 'bg-rose-50 text-rose-600 border-rose-200/80',
  Inactive: 'bg-slate-100 text-slate-600 border-slate-200',
};

export const ProductTableRow = ({
  product,
  isSelected,
  onToggleSelect,
  onViewProduct,
  onDeleteProduct,
}) => {
  const navigate = useNavigate();

  const handleOpenDetail = () => {
    navigate(`/admin/products/${product.id}`);
  };

  const badgeClass =
    STATUS_BADGES[product.status] || 'bg-slate-100 text-slate-700 border-slate-200';
  const reportsCount = product.reportsCount ?? product.reports?.length ?? 0;

  return (
    <tr className="hover:bg-orange-50/20 transition-colors">
      {/* Checkbox */}
      <td className="py-3.5 pl-4 pr-2 w-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(product.id)}
          className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
        />
      </td>

      {/* Code */}
      <td className="py-3.5 px-3 font-medium text-slate-500 whitespace-nowrap">
        {product.code}
      </td>

      {/* Product with thumbnail and name */}
      <td className="py-3.5 px-3">
        <button
          type="button"
          onClick={() => (onViewProduct ? onViewProduct(product) : handleOpenDetail())}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-9 h-9 rounded-xl object-cover border border-slate-200 shrink-0 group-hover:ring-2 group-hover:ring-orange-500/30 transition-all"
          />
          <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight whitespace-nowrap">
            {product.name}
          </span>
        </button>
      </td>

      {/* Category */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {product.category}
      </td>

      {/* Vendor */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {product.vendor}
      </td>

      {/* Price */}
      <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
        {product.price}
      </td>

      {/* Stock */}
      <td className="py-3.5 px-3 font-medium text-slate-600 whitespace-nowrap">
        {product.stock}
      </td>

      {/* Status */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
        >
          {product.status}
        </span>
      </td>

      {/* Reports */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        {reportsCount > 0 ? (
          <button
            type="button"
            onClick={() => onViewProduct?.(product)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200/80 hover:bg-rose-100 transition-colors cursor-pointer group"
          >
            <ShieldAlertIcon
              animateOnHover={false}
              size={13}
              className="text-rose-500 group-hover:scale-110 transition-transform"
            />
            <span>
              {reportsCount} {reportsCount === 1 ? 'Report' : 'Reports'}
            </span>
          </button>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200/60">
            0 Reports
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="py-3.5 px-3 text-right pr-5 whitespace-nowrap">
        <div className="flex items-center justify-end gap-1">
          <OrderActionButton
            icon={EyeIcon}
            title="View Product Reports"
            onClick={() => (onViewProduct ? onViewProduct(product) : handleOpenDetail())}
            iconSize={16}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50"
          />
          <OrderActionButton
            icon={TrashIcon}
            title="Delete Product"
            onClick={() => onDeleteProduct?.(product)}
            iconSize={16}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductTableRow;
