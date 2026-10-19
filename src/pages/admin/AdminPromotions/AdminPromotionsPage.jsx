import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROMOTION_TABS } from '@/mock/admin/promotions.mock';
import { DealsTabContent } from '@/components/admin/promotions/DealsTabContent';
import { CouponsTabContent } from '@/components/admin/promotions/coupons/CouponsTabContent';
import { BannerTabContent } from '@/components/admin/promotions/BannerTabContent';

export const AdminPromotionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Determine initial tab from query param if available, defaulting to 'Coupons'
  const paramTab = searchParams.get('tab');
  const matchedTab = paramTab
    ? PROMOTION_TABS.find(
        (t) => t.toLowerCase() === paramTab.trim().toLowerCase()
      )
    : null;

  const [activeTab, setActiveTab] = useState(matchedTab || 'Coupons');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab: tab.toLowerCase() });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Promotions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage store offers, coupon codes and category discounts in one place.
        </p>
      </div>

      {/* Top Tabs: Deals, Coupons, Banner */}
      <div className="flex items-center gap-2">
        {PROMOTION_TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => handleSelectTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-orange-500 text-white shadow-xs shadow-orange-500/25'
                  : 'bg-amber-50/70 hover:bg-amber-100/70 text-slate-700'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      {activeTab === 'Coupons' && <CouponsTabContent />}
      {activeTab === 'Deals' && <DealsTabContent />}
      {activeTab === 'Banner' && <BannerTabContent />}
    </div>
  );
};

export default AdminPromotionsPage;
