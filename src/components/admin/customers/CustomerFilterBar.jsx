import { SearchIcon } from '@/icons';
import SelectDropdown from '@/components/common/SelectDropdown';

const STATUS_OPTIONS = [
  'All Status',
  'Active',
  'Inactive',
  'Suspended',
];

const CITY_OPTIONS = [
  'All Cities',
  'Lahore, PK',
  'Karachi, PK',
  'Islamabad, PK',
  'Faisalabad, PK',
  'Multan, PK',
  'Rawalpindi, PK',
  'Peshawar, PK',
];

const JOIN_DATE_OPTIONS = [
  'All Join Dates',
  'This Month',
  'Last 3 Months',
  'Last 6 Months',
  'This Year',
];

export const CustomerFilterBar = ({
  filters = {
    search: '',
    status: 'All Status',
    city: 'All Cities',
    joinDate: 'All Join Dates',
  },
  onSearchChange,
  onFilterChange,
}) => {
  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[200px]">
        <SearchIcon
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder="Search customers..."
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/90 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-2.5">
        <SelectDropdown
          value={filters.status}
          options={STATUS_OPTIONS}
          onChange={(val) => onFilterChange?.('status', val)}
          menuWidth="w-36"
        />

        <SelectDropdown
          value={filters.city}
          options={CITY_OPTIONS}
          onChange={(val) => onFilterChange?.('city', val)}
          menuWidth="w-44"
        />

        <SelectDropdown
          value={filters.joinDate}
          options={JOIN_DATE_OPTIONS}
          onChange={(val) => onFilterChange?.('joinDate', val)}
          menuWidth="w-44"
        />
      </div>
    </div>
  );
};

export default CustomerFilterBar;
