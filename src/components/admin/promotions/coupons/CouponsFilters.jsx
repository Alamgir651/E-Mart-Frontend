import { SearchIcon, ChevronDownIcon } from '@/icons';
import { COUPON_TYPES, COUPON_STATUSES } from '@/mock/admin/coupons.mock';

export const CouponsFilters = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <SearchIcon
          size={16}
          animateOnHover={false}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title or coupon code..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50/70 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500 transition-all shadow-2xs"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Dropdowns */}
      <div className="flex items-center gap-2.5">
        {/* Coupon Type Dropdown */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="appearance-none pl-3.5 pr-8 py-2 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer transition-colors shadow-2xs"
          >
            {COUPON_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            size={14}
            animateOnHover={false}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="appearance-none pl-3.5 pr-8 py-2 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer transition-colors shadow-2xs"
          >
            {COUPON_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            size={14}
            animateOnHover={false}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponsFilters;
