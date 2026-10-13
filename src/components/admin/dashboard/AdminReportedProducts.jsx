import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { REPORTED_PRODUCTS } from '@/mock/admin/adminDashboard.mock';
import { slideUp } from '@/animation/animations';

export const AdminReportedProducts = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
          Reported Products
        </h3>
        <Link
          to="/admin/products"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-2.5 px-3 w-12">#</th>
              <th className="py-2.5 px-3">Product</th>
              <th className="py-2.5 px-3">Vendor</th>
              <th className="py-2.5 px-3">Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {REPORTED_PRODUCTS.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/60 transition-colors group">
                <td className="py-3 px-3 text-slate-400 font-medium">{item.id}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.product}
                      className="w-9 h-9 rounded-xl object-cover bg-slate-50 border border-slate-200/70 shrink-0"
                    />
                    <span className="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors truncate max-w-[150px] sm:max-w-[200px]">
                      {item.product}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600 font-medium truncate max-w-[140px]">
                  {item.vendor}
                </td>
                <td className="py-3 px-3 text-slate-500 font-medium">
                  <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[11px] border border-amber-200/60 inline-block truncate max-w-[160px]">
                    {item.reason}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminReportedProducts;
