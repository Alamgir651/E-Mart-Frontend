import { SearchIcon, CalendarDaysIcon } from '@/icons';

export const PayoutFilterBar = ({
  search,
  onSearchChange,
  vendorFilter,
  onVendorChange,
  statusFilter,
  onStatusChange,
  vendors = [],
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-slate-100">
      {/* Search Bar */}
      <div className="relative flex-1 min-w-[220px] max-w-md">
        <SearchIcon
          animateOnHover={false}
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search vendor or request ID..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50/80 border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 placeholder:text-slate-400 transition-all"
        />
      </div>

      {/* Filters: Vendor, Date, Status */}
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={vendorFilter}
          onChange={(e) => onVendorChange(e.target.value)}
          className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer shadow-2xs"
        >
          <option value="All">All Vendors</option>
          {vendors.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs">
          <CalendarDaysIcon animateOnHover={false} size={14} className="text-slate-400" />
          <span>01 – 30 Sep 2026</span>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer shadow-2xs"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default PayoutFilterBar;
