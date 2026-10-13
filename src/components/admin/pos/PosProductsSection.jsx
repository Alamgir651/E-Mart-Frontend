import { useMemo } from 'react';
import { SearchIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@/icons';
import { POS_CATEGORIES } from '@/mock/admin/adminPos.mock';
import PosProductCard from './PosProductCard';

export const PosProductsSection = ({
  products,
  category,
  onCategoryChange,
  search,
  onSearchChange,
  currentPage,
  onPageChange,
  onAddToCart,
}) => {
  const ITEMS_PER_PAGE = 9;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === 'All Categories' || p.category === category;
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const displayedProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-xs flex flex-col justify-between min-h-[720px]">
      <div>
        <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">
          Product Section
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-5">
          <div className="sm:col-span-5 relative">
            <select
              value={category}
              onChange={(e) => {
                onCategoryChange(e.target.value);
                onPageChange(1);
              }}
              className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer text-slate-700"
            >
              {POS_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              size={14}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

          <div className="sm:col-span-7 relative">
            <SearchIcon
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                onSearchChange(e.target.value);
                onPageChange(1);
              }}
              placeholder="Search by product name"
              className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
            {displayedProducts.map((product) => (
              <PosProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 text-xs">
            No products found matching your search.
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-1.5 pt-5 mt-4 border-t border-slate-100">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          <ChevronLeftIcon size={13} />
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNum = idx + 1;
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#f95900] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          <ChevronRightIcon size={13} />
        </button>
      </div>
    </div>
  );
};

export default PosProductsSection;
