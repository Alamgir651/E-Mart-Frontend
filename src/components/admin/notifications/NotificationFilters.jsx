import { SearchIcon } from '@/icons';
import { NOTIFICATION_CATEGORIES } from '@/mock/admin/adminNotifications.mock';

export const NotificationFilters = ({
  activeTab,
  onTabChange,
  unreadCount,
  totalCount,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Top row: Tab pills & Date indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onTabChange('all')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-orange-50 text-orange-600 ring-1 ring-orange-200'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>All</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {totalCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('unread')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'unread'
                ? 'bg-orange-50 text-orange-600 ring-1 ring-orange-200'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>Unread</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'unread'
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {unreadCount}
            </span>
          </button>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          06 Oct 2026 · All times PKT
        </div>
      </div>

      {/* Middle row: Search Bar */}
      <div className="relative">
        <SearchIcon
          size={16}
          animateOnHover={false}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search notifications by order, vendor, ticket or report ID"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-2xs"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Bottom row: Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {NOTIFICATION_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-orange-500 text-white shadow-xs shadow-orange-500/25'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-slate-200/60'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationFilters;
