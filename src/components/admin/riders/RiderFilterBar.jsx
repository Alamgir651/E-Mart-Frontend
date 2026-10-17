import { SearchIcon } from '@/icons';
import SelectDropdown from '@/components/common/SelectDropdown';

const STATUS_OPTIONS = [
  'All Status',
  'Pending',
  'Active',
  'Suspended',
  'Rejected',
];

const ZONE_OPTIONS = [
  'All Zones',
  'Lahore, PK',
  'Karachi, PK',
  'Islamabad, PK',
  'Faisalabad, PK',
  'Multan, PK',
  'Rawalpindi, PK',
  'Peshawar, PK',
];

const VEHICLE_OPTIONS = [
  'All Vehicles',
  'Motorcycle',
  'Bicycle',
];

export const RiderFilterBar = ({
  filters = {
    search: '',
    status: 'All Status',
    zone: 'All Zones',
    vehicle: 'All Vehicles',
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
          placeholder="Search riders..."
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
          value={filters.zone}
          options={ZONE_OPTIONS}
          onChange={(val) => onFilterChange?.('zone', val)}
          menuWidth="w-44"
        />

        <SelectDropdown
          value={filters.vehicle}
          options={VEHICLE_OPTIONS}
          onChange={(val) => onFilterChange?.('vehicle', val)}
          menuWidth="w-40"
        />
      </div>
    </div>
  );
};

export default RiderFilterBar;
