import { PlusIcon } from '@/icons';

const TABS = [
  { id: 'all', label: 'All Products', countKey: 'all' },
  { id: 'active', label: 'Active', countKey: 'active' },
  { id: 'inactive', label: 'Inactive', countKey: 'inactive' },
  { id: 'low-stock', label: 'Low Stock', countKey: 'lowStock' },
  { id: 'out-of-stock', label: 'Out of Stock', countKey: 'outOfStock' },
];

export const ProductsHeader = ({ activeTab, onTabChange, counts, onAddProduct }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Products
        </h1>

        <button
          onClick={onAddProduct}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} strokeWidth={2.5} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-slate-200/80">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = counts[tab.countKey] ?? 0;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 pb-3 px-1 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-orange-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-200/80 text-slate-600'
                }`}
              >
                {count}
              </span>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsHeader;
