import { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';

const STATUS_BADGES = {
  'In Progress': 'bg-amber-50 text-amber-600 border-amber-200/80',
  Delivered: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Cancelled: 'bg-rose-50 text-rose-600 border-rose-200/80',
};

export const CustomerOrdersTable = ({ orders = [], onViewOrder }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewAll, setIsViewAll] = useState(false);
  const pageSize = 5;

  const totalOrders = orders.length;
  const totalPages = Math.ceil(totalOrders / pageSize) || 1;

  // When not in "View All" mode, show first 5 recent orders. When "View All" is toggled or paginated, slice appropriately.
  const displayedOrders = useMemo(() => {
    if (!isViewAll) {
      return orders.slice(0, 5);
    }
    const start = (currentPage - 1) * pageSize;
    return orders.slice(start, start + pageSize);
  }, [orders, isViewAll, currentPage, pageSize]);

  const handleToggleViewAll = () => {
    setIsViewAll((prev) => !prev);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            {isViewAll ? `All Orders (${totalOrders})` : 'Recent Orders'}
          </h3>
          {isViewAll && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-600 border border-orange-200/80">
              Paginated View
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleToggleViewAll}
          className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
        >
          {isViewAll ? 'Show Recent Only' : 'View All'}
        </button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-3.5 pl-5 pr-3 font-semibold">ORDER ID</th>
              <th className="py-3.5 px-3 font-semibold">DATE</th>
              <th className="py-3.5 px-3 font-semibold">ITEMS</th>
              <th className="py-3.5 px-3 font-semibold">TOTAL</th>
              <th className="py-3.5 px-3 font-semibold">STATUS</th>
              <th className="py-3.5 px-3 font-semibold">VENDOR</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {displayedOrders.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-slate-400">
                  No orders recorded for this customer yet.
                </td>
              </tr>
            ) : (
              displayedOrders.map((order) => {
                const badgeClass =
                  STATUS_BADGES[order.status] ||
                  'bg-slate-100 text-slate-700 border-slate-200';

                return (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Order ID */}
                    <td className="py-3.5 pl-5 pr-3 font-bold text-slate-900 whitespace-nowrap">
                      {order.id}
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">
                      {order.date}
                    </td>

                    {/* Items */}
                    <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
                      {order.itemsCount}
                    </td>

                    {/* Total */}
                    <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
                      {order.total}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeClass}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    {/* Vendor */}
                    <td className="py-3.5 px-3 text-slate-700 font-medium whitespace-nowrap">
                      {order.vendor}
                    </td>

                    {/* Action */}
                    <td className="py-3.5 px-3 pr-5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => onViewOrder?.(order)}
                        className="font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {isViewAll && totalOrders > pageSize && (
        <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
          <div>
            Showing <span className="font-semibold text-slate-700">{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-semibold text-slate-700">{Math.min(currentPage * pageSize, totalOrders)}</span> of{' '}
            <span className="font-semibold text-slate-700">{totalOrders}</span> orders
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeftIcon size={14} />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg font-medium transition-colors cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-orange-600 text-white shadow-2xs font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRightIcon size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerOrdersTable;
