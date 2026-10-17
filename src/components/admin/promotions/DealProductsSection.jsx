import { XIcon } from '@/icons';
import { ProductSelectDropdown } from './ProductSelectDropdown';
import { AVAILABLE_PRODUCTS_CATALOG } from '@/mock/admin/promotions.mock';

export const DealProductsSection = ({
  selectedProductIds,
  onToggleProduct,
  onRemoveProduct,
}) => {
  const selectedProducts = AVAILABLE_PRODUCTS_CATALOG.filter((p) =>
    selectedProductIds.includes(p.id)
  );

  return (
    <div className="pt-2 border-t border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Products in this Deal
          </label>
          <span className="text-[11px] text-slate-400">
            {selectedProductIds.length} product{selectedProductIds.length === 1 ? '' : 's'} included
          </span>
        </div>

        {/* Add Products Dropdown Button */}
        <ProductSelectDropdown
          selectedProductIds={selectedProductIds}
          onToggleProduct={onToggleProduct}
        />
      </div>

      {/* Selected Products List with Remove action */}
      {selectedProducts.length > 0 ? (
        <div className="max-h-36 overflow-y-auto space-y-1.5 p-2 bg-slate-50/70 rounded-xl border border-slate-200/70">
          {selectedProducts.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200/60 shadow-2xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-7 h-7 rounded-md object-cover shrink-0"
                />
                <div className="truncate">
                  <span className="text-xs font-semibold text-slate-800 truncate block">
                    {p.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {p.category} · {p.price}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemoveProduct(p.id)}
                className="p-1 text-slate-400 hover:text-rose-500 rounded-md transition-colors cursor-pointer"
                title="Remove product from deal"
              >
                <XIcon size={14} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/50 text-[11px] text-amber-800 leading-relaxed">
          No products selected yet. Click <strong>Add Products</strong> above to open the dropdown and select items for this offer.
        </div>
      )}
    </div>
  );
};

export default DealProductsSection;
