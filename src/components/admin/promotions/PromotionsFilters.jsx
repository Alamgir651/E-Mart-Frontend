import { SearchIcon } from '@/icons';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { DEAL_TYPES, DEAL_STATUSES } from '@/mock/admin/promotions.mock';

export const PromotionsFilters = ({
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
          placeholder="Search by deal title..."
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
          value={selectedType}
          options={DEAL_TYPES}
          onChange={onTypeChange}
          menuWidth="w-40"
        />

        <SelectDropdown
          value={selectedStatus}
          options={DEAL_STATUSES}
          onChange={onStatusChange}
          menuWidth="w-36"
        />
      </div>
    </div>
  );
};

export default PromotionsFilters;
