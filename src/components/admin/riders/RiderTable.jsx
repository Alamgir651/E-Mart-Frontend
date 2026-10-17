import { useState } from 'react';
import RiderTableRow from './RiderTableRow';
import RiderPagination from './RiderPagination';

export const RiderTable = ({
  riders = [],
  currentPage = 1,
  pageSize = 10,
  totalCount = 52,
  onPageChange,
}) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const isAllSelected =
    riders.length > 0 && riders.every((r) => selectedIds.has(r.id));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(riders.map((r) => r.id)));
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
              <th className="py-3.5 px-3 font-semibold">Rider Name</th>
              <th className="py-3.5 px-3 font-semibold">Contact</th>
              <th className="py-3.5 px-3 font-semibold">Vehicle</th>
              <th className="py-3.5 px-3 font-semibold">Zone / City</th>
              <th className="py-3.5 px-3 font-semibold">Status</th>
              <th className="py-3.5 px-3 font-semibold">Join Date</th>
              <th className="py-3.5 px-3 font-semibold text-center">Orders</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {riders.length === 0 ? (
              <tr>
                <td colSpan={10} className="py-12 text-center text-slate-400 text-sm">
                  No riders found matching your search and filter criteria.
                </td>
              </tr>
            ) : (
              riders.map((rider) => (
                <RiderTableRow
                  key={rider.id}
                  rider={rider}
                  isSelected={selectedIds.has(rider.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <RiderPagination
        currentPage={currentPage}
        totalItems={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default RiderTable;
