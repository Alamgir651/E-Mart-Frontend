import CategoryTableRow from './CategoryTableRow';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';

export const CategoryTable = ({
  categories = [],
  onToggleStatus,
  onEdit,
  onDelete,
  currentPage = 1,
  pageSize = 10,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil((totalItems || categories.length) / pageSize) || 1;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <th className="py-3.5 px-4 font-semibold">Category</th>
              <th className="py-3.5 px-4 font-semibold">Products</th>
              <th className="py-3.5 px-4 font-semibold">Status</th>
              <th className="py-3.5 px-4 pr-6 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
            {categories.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-12 text-center text-slate-400">
                  No categories found.
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <CategoryTableRow
                  key={cat.id}
                  category={cat}
                  onToggleStatus={onToggleStatus}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-700">1</span> to{' '}
          <span className="font-semibold text-slate-700">{categories.length}</span> of{' '}
          <span className="font-semibold text-slate-700">{totalItems || categories.length}</span> categories
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeftIcon animateOnHover={false} size={14} />
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx + 1}
              type="button"
              onClick={() => onPageChange?.(idx + 1)}
              className={`w-8 h-8 rounded-lg font-medium transition-colors cursor-pointer ${
                currentPage === idx + 1
                  ? 'bg-orange-600 text-white shadow-2xs font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 border border-transparent'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronRightIcon animateOnHover={false} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
