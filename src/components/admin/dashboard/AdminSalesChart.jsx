import { useState } from 'react';
import { motion } from 'motion/react';
import { SALES_CHART_DATA } from '@/mock/admin/adminDashboard.mock';
import { slideUp } from '@/animation/animations';

export const AdminSalesChart = () => {
  const [activeBar, setActiveBar] = useState(null);

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
          Sales & Orders Overview
        </h3>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span>Orders</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-orange-400 rounded-full" />
            <span>Revenue</span>
          </div>
        </div>
      </div>

      <div className="relative pt-6 pb-2">
        {/* Horizontal grid lines */}
        <div className="absolute inset-x-8 top-6 bottom-10 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-dashed border-slate-100 w-full" />
          ))}
        </div>

        <div className="flex items-end justify-between h-52 sm:h-60 px-4 sm:px-8 relative z-10">
          {/* Left Y Axis */}
          <div className="absolute left-0 inset-y-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium">
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>

          {/* Bars */}
          <div className="flex-1 flex items-end justify-around h-full pl-6 pr-6">
            {SALES_CHART_DATA.map((bar, idx) => (
              <div
                key={bar.date}
                className="flex flex-col items-center h-full justify-end group cursor-pointer relative"
                onMouseEnter={() => setActiveBar(idx)}
                onMouseLeave={() => setActiveBar(null)}
              >
                {activeBar === idx && (
                  <div className="absolute -top-7 bg-slate-900 text-white text-[10px] font-semibold py-1 px-2 rounded-md shadow-md pointer-events-none whitespace-nowrap z-20">
                    {bar.label}
                  </div>
                )}

                <div className="w-5 sm:w-7 bg-orange-100/60 rounded-t-md h-full flex items-end overflow-hidden group-hover:bg-orange-200/60 transition-colors">
                  <div
                    style={{ height: bar.height }}
                    className="w-full bg-orange-500 rounded-t-md group-hover:bg-orange-600 transition-all duration-300"
                  />
                </div>

                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-2 block group-hover:text-slate-800 transition-colors">
                  {bar.date}
                </span>
              </div>
            ))}
          </div>

          {/* Right Y Axis */}
          <div className="absolute right-0 inset-y-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium text-right">
            <span>$20k</span>
            <span>$15k</span>
            <span>$10k</span>
            <span>$5k</span>
            <span>$0</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminSalesChart;
