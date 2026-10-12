import { ArchiveIcon } from '@/icons';

export const InventoryDetailsCard = ({ product }) => {
  return (
    <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3.5">
      <div className="flex items-center gap-2">
        <ArchiveIcon size={16} className="text-orange-600" />
        <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
          Inventory Details
        </h3>
      </div>

      <div className="divide-y divide-slate-100 text-xs">
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Current Stock</span>
          <span className="font-black text-slate-800">{product.stock} {product.unit}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Low Stock Alert</span>
          <span className="font-bold text-slate-800">{product.lowStockAlert} {product.unit}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Unit</span>
          <span className="font-bold text-slate-800">{product.unit}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Selling Price</span>
          <span className="font-bold text-slate-800">${product.price.toFixed(2)} per {product.unit}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Total Stock Value</span>
          <span className="font-bold text-slate-800">${(product.stock * product.costPrice).toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Last Stock Added</span>
          <span className="text-slate-700">{product.lastAdded}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500">Last Updated</span>
          <span className="text-slate-700">{product.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsCard;
