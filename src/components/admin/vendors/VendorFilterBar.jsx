import { useDispatch, useSelector } from 'react-redux';
import { SearchIcon } from '@/icons';
import { setFilter } from '@/features/admin/adminVendorSlice';
import SelectDropdown from '@/components/common/SelectDropdown';

const STATUS_OPTIONS = [
  'All Status',
  'Active',
  'Pending',
  'Rejected',
  'Suspended',
];

const CATEGORY_OPTIONS = [
  'All Categories',
  'Groceries',
  'Grocery',
  'Meat & Seafood',
  'Home Essentials',
  'Fruits & Vegetables',
  'General Store',
  'Health & Pharmacy',
  'Baby Products',
  'Electronics',
  'Beauty & Personal Care',
];

const LOCATION_OPTIONS = [
  'All Locations',
  'Lahore, PK',
  'Karachi, PK',
  'Islamabad, PK',
  'Faisalabad, PK',
  'Multan, PK',
];

export const VendorFilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.adminVendors.filters);

  const handleSearchChange = (e) => {
    dispatch(setFilter({ key: 'search', value: e.target.value }));
  };

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ key, value }));
  };

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
          onChange={handleSearchChange}
          placeholder="Search vendors..."
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/90 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
        />
      </div>

      {/* Themed Dropdown Filters */}
      <div className="flex flex-wrap items-center gap-2.5">
        <SelectDropdown
          value={filters.status}
          options={STATUS_OPTIONS}
          onChange={(val) => handleFilterChange('status', val)}
          menuWidth="w-36"
        />

        <SelectDropdown
          value={filters.category}
          options={CATEGORY_OPTIONS}
          onChange={(val) => handleFilterChange('category', val)}
          menuWidth="w-52"
        />

        <SelectDropdown
          value={filters.location}
          options={LOCATION_OPTIONS}
          onChange={(val) => handleFilterChange('location', val)}
          menuWidth="w-44"
        />
      </div>
    </div>
  );
};

export default VendorFilterBar;
