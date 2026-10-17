import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import VendorProductsTableRow from './VendorProductsTableRow';

export const VendorProductsTable = ({ vendors = [] }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalVendors = vendors.length;
  const totalPages = Math.ceil(totalVendors / pageSize) || 1;

  const paginatedVendors = vendors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const isAllSelected =
    paginatedVendors.length > 0 &&
    paginatedVendors.every((v) => selectedIds.has(v.vendorId));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedVendors.map((v) => v.vendorId)));
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
              <th className="py-3.5 px-3 font-semibold">Vendor ID</th>
              <th className="py-3.5 px-3 font-semibold">Vendor Name</th>
              <th className="py-3.5 px-3 font-semibold text-center">Total Products</th>
              <th className="py-3.5 px-3 font-semibold text-center">Active</th>
              <th className="py-3.5 px-3 font-semibold text-center">Out of Stock</th>
              <th className="py-3.5 px-3 font-semibold">Rating</th>
              <th className="py-3.5 px-3 font-semibold">Location</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {paginatedVendors.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400">
                  No vendors found.
                </td>
              </tr>
            ) : (
              paginatedVendors.map((vendor) => (
                <VendorProductsTableRow
                  key={vendor.vendorId}
                  vendor={vendor}
                  isSelected={selectedIds.has(vendor.vendorId)}
                  onToggleSelect={handleToggleSelect}
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
          <span className="font-semibold text-slate-700">{Math.min(currentPage * pageSize, totalVendors)}</span> of{' '}
          <span className="font-semibold text-slate-700">{totalVendors}</span> vendors
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeftIcon animateOnHover={false} size={14} />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx + 1}
                type="button"
                onClick={() => setCurrentPage(idx + 1)}
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
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200/90 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRightIcon animateOnHover={false} size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProductsTable;
