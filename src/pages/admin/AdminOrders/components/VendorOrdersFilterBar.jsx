import { SearchIcon } from '@/icons';

export const VendorOrdersFilterBar = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  paymentFilter,
  onPaymentFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="relative flex-1 min-w-[220px] max-w-md">
        <SearchIcon
          animateOnHover={false}
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search order ID, customer or rider..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
        >
          <option value="All">All Delivery Status</option>
          <option value="Completed">Completed</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          value={paymentFilter}
          onChange={(e) => onPaymentFilterChange(e.target.value)}
          className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
        >
          <option value="All">All Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Refunded">Refunded</option>
        </select>
      </div>
    </div>
  );
};

export default VendorOrdersFilterBar;
