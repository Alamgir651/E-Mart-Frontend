import { useState, useRef, useEffect } from 'react';
import { SearchIcon, ChevronDownIcon, UploadIcon, DownloadIcon } from '@/icons';
import { PRODUCT_CATEGORIES } from '@/mock/vendor/vendorProducts.mock';

export const ProductsFilterBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onExport,
  onImport,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div className="relative flex-1 max-w-md">
        <SearchIcon
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by ID, product name or phone..."
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-xs"
        />
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-xl hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
          >
            <span>{selectedCategory}</span>
            <ChevronDownIcon size={14} className="text-slate-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-slate-200/90 rounded-xl shadow-lg shadow-slate-200/50 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    onCategoryChange(cat);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-50 text-orange-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onExport}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-xs active:scale-98 transition-all cursor-pointer"
        >
          <UploadIcon size={14} />
          <span>Export</span>
        </button>

        <button
          type="button"
          onClick={onImport}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs active:scale-98 transition-all cursor-pointer"
        >
          <DownloadIcon size={14} />
          <span>Import</span>
        </button>
      </div>
    </div>
  );
};

export default ProductsFilterBar;
