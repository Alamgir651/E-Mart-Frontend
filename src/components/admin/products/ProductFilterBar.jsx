import { SearchIcon } from '@/icons';
import {
  CATEGORIES_LIST,
  VENDORS_LIST,
  STATUS_LIST,
} from '@/mock/admin/products.mock';

export const ProductFilterBar = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  vendor,
  onVendorChange,
  status,
  onStatusChange,
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
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400 shadow-2xs"
        />
      </div>

      {/* Categories Dropdown */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer shadow-2xs"
      >
        {CATEGORIES_LIST.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Vendors Dropdown */}
      <select
        value={vendor}
        onChange={(e) => onVendorChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer shadow-2xs"
      >
        {VENDORS_LIST.map((ven) => (
          <option key={ven} value={ven}>
            {ven}
          </option>
        ))}
      </select>

      {/* Status Dropdown */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium bg-white border border-slate-200/90 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer shadow-2xs"
      >
        {STATUS_LIST.map((st) => (
          <option key={st} value={st}>
            {st}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilterBar;
