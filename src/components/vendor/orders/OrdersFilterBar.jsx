import { useState } from 'react';
import { SearchIcon, ChevronDownIcon, DownloadIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const OrdersFilterBar = ({
  searchQuery,
  onSearchChange,
  dateRange,
  onDateRangeChange,
  totalOrders = 0,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ranges = ['Today', 'Last 7 Days', 'Last 30 Days', 'This Month', 'All Time'];

  const handleExport = () => {
    toast.success(`Exporting ${totalOrders} orders to CSV...`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      <div className="relative flex-1 max-w-md">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <SearchIcon size={16} />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by Order ID, product name or phone..."
          className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all shadow-2xs"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="relative flex-1 sm:flex-initial">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2 sm:py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
          >
            <span>{dateRange}</span>
            <ChevronDownIcon size={14} className="text-slate-400" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-20">
              {ranges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    onDateRangeChange(range);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleExport}
          className="flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer shrink-0"
        >
          <DownloadIcon size={16} />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default OrdersFilterBar;
