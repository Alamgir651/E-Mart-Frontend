import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';

export const CustomerPagination = ({
  currentPage = 1,
  totalItems = 3420,
  pageSize = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize) || 342;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
      <div>
        Showing <span className="font-semibold text-slate-700">{startItem}</span> to{' '}
        <span className="font-semibold text-slate-700">{endItem}</span> of{' '}
        <span className="font-semibold text-slate-700">{totalItems.toLocaleString()}</span> customers
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeftIcon size={14} />
        </button>

        {[1, 2, 3, 4, 5].map((pageNum) => (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange?.(pageNum)}
            className={`w-8 h-8 rounded-lg font-medium transition-colors cursor-pointer ${
              currentPage === pageNum
                ? 'bg-orange-600 text-white shadow-2xs font-semibold'
                : 'text-slate-600 hover:bg-slate-100 border border-transparent'
            }`}
          >
            {pageNum}
          </button>
        ))}

        {totalPages > 5 && (
          <>
            <span className="px-1 text-slate-400">...</span>
            <button
              type="button"
              onClick={() => onPageChange?.(totalPages)}
              className={`w-8 h-8 rounded-lg font-medium transition-colors cursor-pointer ${
                currentPage === totalPages
                  ? 'bg-orange-600 text-white shadow-2xs font-semibold'
                  : 'text-slate-600 hover:bg-slate-100 border border-transparent'
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          type="button"
          onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronRightIcon size={14} />
        </button>
      </div>
    </div>
  );
};

export default CustomerPagination;
