import { SearchIcon } from '@/icons';

export const CategoryFilterBar = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  totalCategories,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
      <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[260px]">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <SearchIcon
            animateOnHover={false}
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 placeholder:text-slate-400 transition-all"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-slate-50/70 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Counter */}
      <div className="text-xs font-semibold text-slate-500 px-1">
        {totalCategories} {totalCategories === 1 ? 'category' : 'categories'}
      </div>
    </div>
  );
};

export default CategoryFilterBar;
