import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import MarketplaceOrderRow from './MarketplaceOrderRow';

export const MarketplaceOrdersTable = ({
  orders = [],
  currentPage = 1,
  pageSize = 10,
  totalOrders = 52,
  onPageChange,
  onViewOrder,
}) => {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const totalPages = Math.ceil(totalOrders / pageSize) || 6;

  const isAllSelected =
    orders.length > 0 && orders.every((o) => selectedIds.has(o.id));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(orders.map((o) => o.id)));
    }
  };

  const handleToggleSelect = (id) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <th className="py-3.5 pl-4 pr-2 w-10">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleToggleSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-3 font-semibold">Order ID</th>
              <th className="py-3.5 px-3 font-semibold">Customer</th>
              <th className="py-3.5 px-3 font-semibold">Vendor / Store</th>
              <th className="py-3.5 px-3 font-semibold">Items</th>
              <th className="py-3.5 px-3 font-semibold">Amount</th>
              <th className="py-3.5 px-3 font-semibold">Status</th>
              <th className="py-3.5 px-3 font-semibold">Rider</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400">
                  No orders found matching criteria.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <MarketplaceOrderRow
                  key={order.id}
                  order={order}
                  isSelected={selectedIds.has(order.id)}
                  onToggleSelect={handleToggleSelect}
                  onViewOrder={onViewOrder}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
        <div>
          Showing <span className="font-semibold text-slate-700">{(currentPage - 1) * pageSize + 1}</span> to{' '}
          <span className="font-semibold text-slate-700">{Math.min(currentPage * pageSize, totalOrders)}</span> of{' '}
          <span className="font-semibold text-slate-700">{totalOrders}</span> orders
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeftIcon animateOnHover={false} size={14} />
          </button>

          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
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
                onClick={() => onPageChange(totalPages)}
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
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
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

export default MarketplaceOrdersTable;
