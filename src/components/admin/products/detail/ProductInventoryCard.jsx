export const ProductInventoryCard = ({ product }) => {
  const variants = product.variants || [
    { variant: '250g', price: '$2.50', stock: 30 },
    { variant: '500g', price: '$3.50', stock: 25 },
    { variant: '1kg', price: '$4.50', stock: 50 },
  ];

  return (
    <div className="space-y-5">
      {/* Inventory Information */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Inventory Information
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Current Stock</span>
            <span className="font-bold text-slate-900">
              {product.totalStockKg || `${product.stock} kg`}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Low Stock Alert</span>
            <span className="font-semibold text-slate-800">
              {product.lowStockAlertKg || '10 kg'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Stock Status</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
              In Stock
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Allow Purchase</span>
            <span className="font-semibold text-slate-800">Yes</span>
          </div>
        </div>
      </div>

      {/* Variants Table */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Variants
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                <th className="pb-2">Variant</th>
                <th className="pb-2 text-center">Price</th>
                <th className="pb-2 text-right">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {variants.map((v, idx) => (
                <tr key={idx}>
                  <td className="py-2 font-semibold text-slate-900">{v.variant}</td>
                  <td className="py-2 text-center">{v.price}</td>
                  <td className="py-2 text-right">{v.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductInventoryCard;
