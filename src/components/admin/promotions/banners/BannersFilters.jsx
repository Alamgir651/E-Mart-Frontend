import { SearchIcon } from '@/icons';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { BANNER_PLACEMENTS, BANNER_STATUSES } from '@/mock/admin/banners.mock';

export const BannersFilters = ({
  searchQuery,
  onSearchChange,
  selectedPlacement,
  onPlacementChange,
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
          placeholder="Search by banner title or category..."
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

      {/* Themed SelectDropdown Filters */}
      <div className="flex items-center gap-2.5">
        <SelectDropdown
          value={selectedPlacement}
          options={BANNER_PLACEMENTS}
          onChange={onPlacementChange}
          menuWidth="w-44"
        />

        <SelectDropdown
          value={selectedStatus}
          options={BANNER_STATUSES}
          onChange={onStatusChange}
          menuWidth="w-36"
        />
      </div>
    </div>
  );
};

export default BannersFilters;
