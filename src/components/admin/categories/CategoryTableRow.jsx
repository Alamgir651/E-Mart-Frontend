import { SquarePenIcon, TrashIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';

export const CategoryTableRow = ({
  category,
  onToggleStatus,
  onEdit,
  onDelete,
}) => {
  const isActive = category.status === 'Active';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors border-b border-slate-100 last:border-0">
      {/* Category Info with Thumbnail */}
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-3.5">
          <img
            src={category.image}
            alt={category.name}
            className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
          />
          <div className="min-w-0">
            <h4 className="font-bold text-slate-900 text-sm tracking-tight truncate">
              {category.name}
            </h4>
            <p className="text-xs text-slate-400 font-normal truncate mt-0.5">
              {category.description}
            </p>
          </div>
        </div>
      </td>

      {/* Products Count */}
      <td className="py-3.5 px-4 font-bold text-slate-800 text-sm whitespace-nowrap">
        {category.productsCount?.toLocaleString() || 0}
      </td>

      {/* Status Toggle Switch */}
      <td className="py-3.5 px-4 whitespace-nowrap">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            role="switch"
            aria-checked={isActive}
            onClick={() => onToggleStatus(category.id)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${
              isActive ? 'bg-orange-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                isActive ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span
            className={`text-xs font-semibold ${
              isActive ? 'text-slate-800' : 'text-slate-400'
            }`}
          >
            {category.status}
          </span>
        </div>
      </td>

      {/* Actions */}
      <td className="py-3.5 px-4 text-right pr-6 whitespace-nowrap">
        <div className="flex items-center justify-end gap-1">
          <OrderActionButton
            icon={SquarePenIcon}
            title="Edit Category"
            onClick={() => onEdit(category)}
            iconSize={16}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          />
          <OrderActionButton
            icon={TrashIcon}
            title="Delete Category"
            onClick={() => onDelete(category)}
            iconSize={16}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
          />
        </div>
      </td>
    </tr>
  );
};

export default CategoryTableRow;
