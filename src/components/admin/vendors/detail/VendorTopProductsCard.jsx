import { Link } from 'react-router-dom';
import { TOP_PRODUCTS_BY_ORDERS } from '@/mock/admin/vendorApprovedData.mock';

export const VendorTopProductsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Top Products by Orders
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Since joining • Sep 25 – Oct 3, 2026
          </p>
        </div>

        <Link
          to="/admin/reports"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View all ›
        </Link>
      </div>

      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-1 border-b border-slate-100">
          <span>Product</span>
          <span>Orders</span>
        </div>

        {TOP_PRODUCTS_BY_ORDERS.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                    item.rank === 1
                      ? 'bg-orange-500 text-white shadow-2xs'
                      : 'bg-orange-50 text-orange-600 border border-orange-200/60'
                  }`}
                >
                  {item.rank}
                </span>
                <span className="font-bold text-slate-800">{item.name}</span>
              </div>
              <span className="font-extrabold text-slate-900">{item.orders}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorTopProductsCard;
