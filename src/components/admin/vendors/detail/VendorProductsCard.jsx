import { Link } from 'react-router-dom';
import { VENDOR_PRODUCTS_DATA } from '@/mock/admin/vendorApprovedData.mock';

export const VendorProductsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Vendor Products
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            24 products • 22 active • 2 out of stock
          </p>
        </div>

        <Link
          to="/admin/products"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View all ›
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="py-2.5 pr-3 font-semibold">Product</th>
              <th className="py-2.5 px-3 text-right font-semibold">Price</th>
              <th className="py-2.5 px-3 text-right font-semibold">Stock</th>
              <th className="py-2.5 pl-3 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {VENDOR_PRODUCTS_DATA.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 pr-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200/80 bg-slate-50 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 block truncate">
                        {product.name}
                      </span>
                      <span className="text-[11px] text-slate-400 block truncate">
                        {product.variant}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 text-right font-semibold text-slate-800">
                  {product.price}
                </td>
                <td className="py-3 px-3 text-right text-slate-600 font-medium">
                  {product.stock}
                </td>
                <td className="py-3 pl-3 text-right">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorProductsCard;
