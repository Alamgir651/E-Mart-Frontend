import { useState } from 'react';
import ProductTableRow from './ProductTableRow';
import ProductPagination from './ProductPagination';

export const ProductTable = ({
  products = [],
  currentPage = 1,
  pageSize = 10,
  totalItems = 2480,
  onPageChange,
  onViewProduct,
  onDeleteProduct,
}) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const isAllSelected =
    products.length > 0 && products.every((p) => selectedIds.has(p.id));

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(products.map((p) => p.id)));
    }
  };

  const handleToggleSelect = (id) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <th className="py-3.5 pl-4 pr-2 w-10">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleToggleSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-3 font-semibold">#</th>
              <th className="py-3.5 px-3 font-semibold">Product</th>
              <th className="py-3.5 px-3 font-semibold">Category</th>
              <th className="py-3.5 px-3 font-semibold">Vendor</th>
              <th className="py-3.5 px-3 font-semibold">Price</th>
              <th className="py-3.5 px-3 font-semibold">Stock</th>
              <th className="py-3.5 px-3 font-semibold">Status</th>
              <th className="py-3.5 px-3 font-semibold">Reports</th>
              <th className="py-3.5 px-3 pr-5 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {products.length === 0 ? (
              <tr>
                <td colSpan={10} className="py-12 text-center text-slate-400">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <ProductTableRow
                  key={product.id}
                  product={product}
                  isSelected={selectedIds.has(product.id)}
                  onToggleSelect={handleToggleSelect}
                  onViewProduct={onViewProduct}
                  onDeleteProduct={onDeleteProduct}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <ProductPagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductTable;
