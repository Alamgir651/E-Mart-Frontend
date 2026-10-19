import { useState, useMemo, useEffect } from 'react';
import { INITIAL_BANNERS } from '@/mock/admin/banners.mock';
import { BannersKPIs } from './banners/BannersKPIs';
import { BannersFilters } from './banners/BannersFilters';
import { BannersTable } from './banners/BannersTable';
import { BannerModal } from './banners/BannerModal';

export const BannerTabContent = ({
  isCreateModalOpen = false,
  setIsCreateModalOpen = null,
}) => {
  const [banners, setBanners] = useState(INITIAL_BANNERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlacement, setSelectedPlacement] = useState('All placements');
  const [selectedStatus, setSelectedStatus] = useState('All statuses');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);

  useEffect(() => {
    if (isCreateModalOpen) {
      setEditingBanner(null);
      setIsModalOpen(true);
      setIsCreateModalOpen?.(false);
    }
  }, [isCreateModalOpen, setIsCreateModalOpen]);

  // Toggle enabled state
  const handleToggleEnabled = (id) => {
    setBanners((prev) =>
      prev.map((banner) => {
        if (banner.id !== id) return banner;
        const nextEnabled = !banner.enabled;
        return {
          ...banner,
          enabled: nextEnabled,
          status: nextEnabled ? 'Active' : 'Disabled',
        };
      })
    );
  };

  // Save banner (create or edit)
  const handleSaveBanner = (savedBanner) => {
    setBanners((prev) => {
      const exists = prev.some((b) => b.id === savedBanner.id);
      if (exists) {
        return prev.map((b) => (b.id === savedBanner.id ? savedBanner : b));
      }
      return [savedBanner, ...prev];
    });
  };

  // Filter banners
  const filteredBanners = useMemo(() => {
    return banners.filter((banner) => {
      if (
        selectedPlacement !== 'All placements' &&
        banner.placement.toLowerCase() !== selectedPlacement.toLowerCase()
      ) {
        return false;
      }
      if (
        selectedStatus !== 'All statuses' &&
        banner.status.toLowerCase() !== selectedStatus.toLowerCase()
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = banner.title?.toLowerCase().includes(q);
        const matchesCategory = banner.category?.toLowerCase().includes(q);
        const matchesDesc = banner.description?.toLowerCase().includes(q);
        const matchesPlacement = banner.placement?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesPlacement) {
          return false;
        }
      }
      return true;
    });
  }, [banners, selectedPlacement, selectedStatus, searchQuery]);

  const uniquePlacementsCount = useMemo(() => {
    const placements = new Set(banners.map((b) => b.placement));
    return placements.size;
  }, [banners]);

  return (
    <div className="space-y-6">
      {/* 3 KPI Cards */}
      <BannersKPIs banners={banners} />

      {/* Banner List Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Banner List
          </h3>
          <span className="text-xs font-medium text-slate-400">
            {banners.length} banners · {uniquePlacementsCount} placements
          </span>
        </div>

        {/* Filter bar */}
        <BannersFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedPlacement={selectedPlacement}
          onPlacementChange={setSelectedPlacement}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        {/* Banners Table */}
        <BannersTable
          banners={filteredBanners}
          onEdit={(banner) => {
            setEditingBanner(banner);
            setIsModalOpen(true);
          }}
          onToggleEnabled={handleToggleEnabled}
        />

        {/* Table Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
          <div>
            Showing 1–{filteredBanners.length} of {banners.length} banners
          </div>
          <div>
            Use Edit to change image, content or CTA.
          </div>
        </div>
      </div>

      {/* Add / Edit Banner Modal */}
      <BannerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingBanner(null);
        }}
        onSave={handleSaveBanner}
        editingBanner={editingBanner}
      />
    </div>
  );
};

export default BannerTabContent;
