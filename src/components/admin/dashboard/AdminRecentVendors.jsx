import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { RECENT_VENDORS } from '@/mock/admin/adminDashboard.mock';
import { slideUp } from '@/animation/animations';

export const AdminRecentVendors = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
          Recent Vendors
        </h3>
        <Link
          to="/admin/vendors"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3 divide-y divide-slate-100">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pb-1">
          <span>Vendor</span>
          <span>Status</span>
        </div>

        {RECENT_VENDORS.map((vendor) => (
          <div
            key={vendor.id}
            className="pt-2.5 first:pt-0 flex items-center justify-between gap-3 text-xs"
          >
            <span className="font-semibold text-slate-800 truncate">
              {vendor.name}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold shrink-0 ${vendor.badgeClass}`}
            >
              {vendor.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminRecentVendors;
