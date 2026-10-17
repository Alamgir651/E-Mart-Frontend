export const AdminProductsTabs = ({
  activeTab,
  onTabChange,
  vendorsCount,
  allProductsCount = '2,480',
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-1">
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] -mb-[1px]">
        {/* Tab 1: Products by Vendor */}
        <button
          type="button"
          onClick={() => onTabChange('by-vendor')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'by-vendor'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <span>Products by Vendor</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
              activeTab === 'by-vendor'
                ? 'bg-white/20 text-white'
                : 'bg-slate-200 text-slate-700'
            }`}
          >
            {vendorsCount}
          </span>
        </button>

        {/* Tab 2: All Products (Marketplace View) */}
        <button
          type="button"
          onClick={() => onTabChange('all')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'all'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <span>All Products</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
              activeTab === 'all'
                ? 'bg-white/20 text-white'
                : 'bg-slate-200 text-slate-700'
            }`}
          >
            {allProductsCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminProductsTabs;
