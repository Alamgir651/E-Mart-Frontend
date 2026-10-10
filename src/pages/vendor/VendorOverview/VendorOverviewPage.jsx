import { useState } from 'react';
import { ChevronDownIcon } from '@/icons';
import VendorHeroBanner from '@/components/vendor/dashboard/VendorHeroBanner';
import VendorStatCards from '@/components/vendor/dashboard/VendorStatCards';
import VendorSalesChart from '@/components/vendor/dashboard/VendorSalesChart';
import VendorRecentOrders from '@/components/vendor/dashboard/VendorRecentOrders';
import VendorTopProducts from '@/components/vendor/dashboard/VendorTopProducts';
import VendorLowStock from '@/components/vendor/dashboard/VendorLowStock';
import VendorQuickActions from '@/components/vendor/dashboard/VendorQuickActions';
import {
  VENDOR_KPIS,
  SALES_CHART_DATA,
  RECENT_ORDERS,
  TOP_SELLING_PRODUCTS,
  LOW_STOCK_PRODUCTS,
} from '@/mock/vendor/vendorDashboard.mock';

export const VendorOverviewPage = () => {
  const [selectedRange, setSelectedRange] = useState('Date Range');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ranges = ['Today', 'Last 7 Days', 'Last 30 Days', 'This Month', 'All Time'];

  return (
    <div className="space-y-4 sm:space-y-6">
      <VendorHeroBanner />

      <div className="flex items-center justify-end relative">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
          >
            <span>{selectedRange}</span>
            <ChevronDownIcon size={14} className="text-slate-400" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-20">
              {ranges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setSelectedRange(range);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <VendorStatCards stats={VENDOR_KPIS} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        <div className="lg:col-span-5">
          <VendorSalesChart data={SALES_CHART_DATA} />
        </div>
        <div className="lg:col-span-7">
          <VendorRecentOrders orders={RECENT_ORDERS} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <VendorTopProducts products={TOP_SELLING_PRODUCTS} />
        <VendorLowStock products={LOW_STOCK_PRODUCTS} />
        <VendorQuickActions />
      </div>
    </div>
  );
};

export default VendorOverviewPage;
