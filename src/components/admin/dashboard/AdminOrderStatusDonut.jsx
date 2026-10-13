import { motion } from 'motion/react';
import { ORDER_STATUS_DISTRIBUTION } from '@/mock/admin/adminDashboard.mock';
import { slideUp } from '@/animation/animations';

export const AdminOrderStatusDonut = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between"
    >
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        Order Status
      </h3>

      {/* Donut Chart */}
      <div className="relative w-36 h-36 mx-auto flex items-center justify-center my-2">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" stroke="#e2e8f0" strokeWidth="11" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#3b82f6"
            strokeWidth="11"
            strokeDasharray="62 238"
            strokeDashoffset="0"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#f97316"
            strokeWidth="11"
            strokeDasharray="52 238"
            strokeDashoffset="-62"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#8b5cf6"
            strokeWidth="11"
            strokeDasharray="40 238"
            strokeDashoffset="-114"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#10b981"
            strokeWidth="11"
            strokeDasharray="50 238"
            strokeDashoffset="-154"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#06b6d4"
            strokeWidth="11"
            strokeDasharray="29 238"
            strokeDashoffset="-204"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#ef4444"
            strokeWidth="11"
            strokeDasharray="5 238"
            strokeDashoffset="-233"
            fill="none"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-lg font-bold text-slate-900 leading-none">1,248</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Total Orders</span>
        </div>
      </div>

      {/* Legend list */}
      <div className="space-y-1.5 pt-1 text-xs">
        {ORDER_STATUS_DISTRIBUTION.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-600 truncate">{item.label}</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-semibold text-slate-800">{item.count}</span>
              <span className="text-slate-400 text-[11px] w-7 text-right">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminOrderStatusDonut;
