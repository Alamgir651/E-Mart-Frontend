import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUpIcon } from '@/icons';
import { TOP_PRODUCTS } from '@/mock/admin/adminDashboard.mock';
import { slideUp } from '@/animation/animations';

export const AdminTopProducts = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
          Top Products
        </h3>
        <Link
          to="/admin/products"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3.5 divide-y divide-slate-100">
        {TOP_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="pt-3.5 first:pt-0 flex items-center justify-between gap-3 group cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 rounded-xl object-cover bg-slate-50 border border-slate-200/80 shrink-0 group-hover:border-orange-300 transition-colors"
              />
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h4>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {product.category}
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs font-semibold text-slate-900 block">
                {product.sold}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 mt-0.5">
                <TrendingUpIcon size={10} />
                <span>{product.trend}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminTopProducts;
