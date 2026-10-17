import { SearchIcon } from '@/icons';
import { VENDOR_ORDERS_SUMMARY } from '@/mock/admin/orders.mock';

export const AdminOrdersMarketplaceFilters = ({
  orderSearch,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedVendorFilter,
  onVendorFilterChange,
  selectedRiderFilter,
  onRiderFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[220px]">
        <SearchIcon
          animateOnHover={false}
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search orders..."
          value={orderSearch}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400"
        />
      </div>

      {/* All Status Dropdown */}
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
      >
        <option value="All Status">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Processing">Processing</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* All Vendors Dropdown */}
      <select
        value={selectedVendorFilter}
        onChange={(e) => onVendorFilterChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
      >
        <option value="All Vendors">All Vendors</option>
        {VENDOR_ORDERS_SUMMARY.map((v) => (
          <option key={v.vendorId} value={v.vendorName}>
            {v.vendorName}
          </option>
        ))}
      </select>

      {/* All Riders Dropdown */}
      <select
        value={selectedRiderFilter}
        onChange={(e) => onRiderFilterChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer"
      >
        <option value="All Riders">All Riders</option>
        <option value="Imran Haider">Imran Haider</option>
        <option value="Bilal Khan">Bilal Khan</option>
        <option value="Saad Ullah">Saad Ullah</option>
        <option value="Kamran Ali">Kamran Ali</option>
        <option value="Fahad Khan">Fahad Khan</option>
      </select>
    </div>
  );
};

export default AdminOrdersMarketplaceFilters;
