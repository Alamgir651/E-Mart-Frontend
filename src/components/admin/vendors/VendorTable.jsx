import { useState } from 'react';
import VendorTableRow from './VendorTableRow';
import VendorPagination from './VendorPagination';

export const VendorTable = ({ vendors = [] }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const isAllSelected =
    vendors.length > 0 && vendors.every((v) => selectedIds.has(v.id));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(vendors.map((v) => v.id)));
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
              <th className="py-3.5 px-3 font-semibold">#</th>
              <th className="py-3.5 px-3 font-semibold">Vendor / Store</th>
              <th className="py-3.5 px-3 font-semibold">Contact</th>
              <th className="py-3.5 px-3 font-semibold">Category</th>
              <th className="py-3.5 px-3 font-semibold">Location</th>
              <th className="py-3.5 px-3 font-semibold">Status</th>
              <th className="py-3.5 px-3 font-semibold">Join Date</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vendors.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400 text-sm">
                  No vendors found matching criteria.
                </td>
              </tr>
            ) : (
              vendors.map((vendor) => (
                <VendorTableRow
                  key={vendor.id}
                  vendor={vendor}
                  isSelected={selectedIds.has(vendor.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <VendorPagination
        currentPage={currentPage}
        totalItems={186}
        pageSize={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default VendorTable;
