import { SearchIcon } from '@/icons';

export const AdminOrdersVendorToolbar = ({
  vendorSearch,
  onSearchChange,
  vendorFilterStatus,
  onFilterStatusChange,
  totalInProgress,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3 flex-1">
        <div className="relative w-full sm:w-72">
          <SearchIcon
            animateOnHover={false}
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search vendor name or ID..."
            value={vendorSearch}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <select
          value={vendorFilterStatus}
          onChange={(e) => onFilterStatusChange(e.target.value)}
          className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
        >
          <option value="all">All Vendors</option>
          <option value="in-progress">In Progress Orders Only</option>
        </select>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50/90 border border-amber-200/70 text-amber-800 text-xs font-semibold self-start sm:self-auto shrink-0">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span>Total In Progress:</span>
        <span className="font-extrabold text-amber-900">{totalInProgress} orders</span>
      </div>
    </div>
  );
};

export default AdminOrdersVendorToolbar;
