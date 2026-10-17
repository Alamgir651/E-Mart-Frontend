import { useState } from 'react';
import CustomerTableRow from './CustomerTableRow';
import CustomerPagination from './CustomerPagination';

export const CustomerTable = ({
  customers = [],
  currentPage = 1,
  pageSize = 10,
  totalCount = 3420,
  onPageChange,
}) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const isAllSelected =
    customers.length > 0 && customers.every((c) => selectedIds.has(c.id));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(customers.map((c) => c.id)));
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
              <th className="py-3.5 px-3 font-semibold">Customer</th>
              <th className="py-3.5 px-3 font-semibold">Contact</th>
              <th className="py-3.5 px-3 font-semibold">Location</th>
              <th className="py-3.5 px-3 font-semibold text-center">Total Orders</th>
              <th className="py-3.5 px-3 font-semibold">Total Spent</th>
              <th className="py-3.5 px-3 font-semibold">Status</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-slate-400 text-sm">
                  No customers found matching your search and filter criteria.
                </td>
              </tr>
            ) : (
              customers.map((customer) => (
                <CustomerTableRow
                  key={customer.id}
                  customer={customer}
                  isSelected={selectedIds.has(customer.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <CustomerPagination
        currentPage={currentPage}
        totalItems={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CustomerTable;
