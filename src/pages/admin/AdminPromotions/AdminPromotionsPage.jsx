import { useState, useMemo } from 'react';
import { PlusIcon } from '@/icons';
import { PROMOTION_TABS, INITIAL_DEALS } from '@/mock/admin/promotions.mock';
import { PromotionsKPIs } from '@/components/admin/promotions/PromotionsKPIs';
import { PromotionsFilters } from '@/components/admin/promotions/PromotionsFilters';
import { PromotionsTable } from '@/components/admin/promotions/PromotionsTable';
import { DealModal } from '@/components/admin/promotions/DealModal';
import { DeleteDealModal } from '@/components/admin/promotions/DeleteDealModal';

export const AdminPromotionsPage = () => {
  const [deals, setDeals] = useState(INITIAL_DEALS);
  const [activeTab, setActiveTab] = useState('Deals');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All deal types');
  const [selectedStatus, setSelectedStatus] = useState('All statuses');

  // Modal states
  const [isDealModalOpen, setIsDealModalOpen] = useState(false);
  const [editingDeal, setEditingDeal] = useState(null);
  const [deletingDeal, setDeletingDeal] = useState(null);

  // Toggle publish state
  const handleTogglePublish = (id) => {
    setDeals((prev) =>
      prev.map((deal) =>
        deal.id === id ? { ...deal, published: !deal.published } : deal
      )
    );
  };

  // Save deal (create or edit)
  const handleSaveDeal = (savedDeal) => {
    setDeals((prev) => {
      const exists = prev.some((d) => d.id === savedDeal.id);
      if (exists) {
        return prev.map((d) => (d.id === savedDeal.id ? savedDeal : d));
      }
      return [savedDeal, ...prev];
    });
  };

  // Delete deal
  const handleDeleteDeal = (id) => {
    setDeals((prev) => prev.filter((d) => d.id !== id));
  };

  // Filtered deals
  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      if (selectedType !== 'All deal types' && deal.dealType !== selectedType) return false;
      if (selectedStatus !== 'All statuses' && deal.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!deal.title.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [deals, selectedType, selectedStatus, searchQuery]);

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
              onClick={() => setActiveTab(tab)}
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

      {/* Deals Section Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Deals</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Create and manage flash deals, new arrivals and top offers for your store.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingDeal(null);
            setIsDealModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} animateOnHover={false} />
          <span>Add New Deal</span>
        </button>
      </div>

      {/* 3 KPI Cards */}
      <PromotionsKPIs deals={deals} />

      {/* Deal List Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">Deal List</h3>
          <span className="text-xs font-medium text-slate-400">
            {deals.length} deals · 3 deal types
          </span>
        </div>

        {/* Filter bar */}
        <PromotionsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        {/* Table (Without + Add Products button in actions column) */}
        <PromotionsTable
          deals={filteredDeals}
          onEdit={(deal) => {
            setEditingDeal(deal);
            setIsDealModalOpen(true);
          }}
          onDelete={(deal) => setDeletingDeal(deal)}
          onTogglePublish={handleTogglePublish}
        />

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
          <div>
            Showing 1-{filteredDeals.length} of {deals.length} deals · 5 per page
          </div>
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              disabled
              className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-300 cursor-not-allowed text-xs"
            >
              ‹
            </button>
            <span className="px-3 py-1 rounded-lg bg-orange-500 text-white font-semibold text-xs shadow-2xs">
              1
            </span>
            <button
              type="button"
              disabled
              className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-300 cursor-not-allowed text-xs"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Deal Modal with inline product select dropdown */}
      <DealModal
        isOpen={isDealModalOpen}
        onClose={() => {
          setIsDealModalOpen(false);
          setEditingDeal(null);
        }}
        onSave={handleSaveDeal}
        editingDeal={editingDeal}
      />

      {/* Delete Deal Confirmation Modal */}
      <DeleteDealModal
        isOpen={Boolean(deletingDeal)}
        onClose={() => setDeletingDeal(null)}
        onConfirm={handleDeleteDeal}
        deal={deletingDeal}
      />
    </div>
  );
};

export default AdminPromotionsPage;
