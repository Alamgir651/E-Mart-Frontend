import { useState, useMemo } from 'react';
import { PlusIcon } from '@/icons';
import { INITIAL_COUPONS } from '@/mock/admin/coupons.mock';
import { CouponsKPIs } from './CouponsKPIs';
import { CouponsFilters } from './CouponsFilters';
import { CouponsTable } from './CouponsTable';
import { CouponModal } from './CouponModal';
import { DeleteCouponModal } from './DeleteCouponModal';

export const CouponsTabContent = () => {
  const [coupons, setCoupons] = useState(INITIAL_COUPONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All coupon types');
  const [selectedStatus, setSelectedStatus] = useState('All statuses');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [deletingCoupon, setDeletingCoupon] = useState(null);

  // Toggle enabled state
  const handleToggleEnabled = (id) => {
    setCoupons((prev) =>
      prev.map((coupon) => {
        if (coupon.id !== id) return coupon;
        const nextEnabled = !coupon.enabled;
        let nextStatus = 'Disabled';
        if (nextEnabled) {
          const now = new Date();
          const start = new Date(coupon.startDate);
          const end = new Date(coupon.expireDate);
          end.setHours(23, 59, 59, 999);
          if (now < start) nextStatus = 'Scheduled';
          else if (now > end) nextStatus = 'Expired';
          else nextStatus = 'Active';
        }
        return {
          ...coupon,
          enabled: nextEnabled,
          status: nextStatus,
        };
      })
    );
  };

  // Save coupon (create or edit)
  const handleSaveCoupon = (savedCoupon) => {
    setCoupons((prev) => {
      const exists = prev.some((c) => c.id === savedCoupon.id);
      if (exists) {
        return prev.map((c) => (c.id === savedCoupon.id ? savedCoupon : c));
      }
      return [savedCoupon, ...prev];
    });
  };

  // Delete coupon
  const handleDeleteCoupon = (id) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
  };

  // Filter coupons
  const filteredCoupons = useMemo(() => {
    return coupons.filter((coupon) => {
      if (
        selectedType !== 'All coupon types' &&
        coupon.couponType.toLowerCase() !== selectedType.toLowerCase()
      ) {
        return false;
      }
      if (
        selectedStatus !== 'All statuses' &&
        coupon.status.toLowerCase() !== selectedStatus.toLowerCase()
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = coupon.title?.toLowerCase().includes(q);
        const matchesCode = coupon.code?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCode) return false;
      }
      return true;
    });
  }, [coupons, selectedType, selectedStatus, searchQuery]);

  // Pagination calculation
  const totalItems = filteredCoupons.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const paginatedCoupons = filteredCoupons.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="space-y-6">
      {/* Subheader: Coupons Title & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Coupons
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Create and manage discounts customers can apply at checkout.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingCoupon(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} animateOnHover={false} />
          <span>Add New Coupon</span>
        </button>
      </div>

      {/* 3 KPI Cards */}
      <CouponsKPIs coupons={coupons} />

      {/* Coupon List Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Coupon List
          </h3>
          <span className="text-xs font-medium text-slate-400">
            {coupons.length} coupons · All amounts in PKR
          </span>
        </div>

        {/* Filter bar */}
        <CouponsFilters
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          selectedType={selectedType}
          onTypeChange={(t) => {
            setSelectedType(t);
            setCurrentPage(1);
          }}
          selectedStatus={selectedStatus}
          onStatusChange={(s) => {
            setSelectedStatus(s);
            setCurrentPage(1);
          }}
        />

        {/* Coupons Table */}
        <CouponsTable
          coupons={paginatedCoupons}
          onEdit={(coupon) => {
            setEditingCoupon(coupon);
            setIsModalOpen(true);
          }}
          onDelete={(coupon) => setDeletingCoupon(coupon)}
          onToggleEnabled={handleToggleEnabled}
        />

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
          <div>
            Showing {totalItems > 0 ? startIndex + 1 : 0}-
            {Math.min(startIndex + pageSize, totalItems)} of {totalItems} coupons
            · {pageSize} per page
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              disabled={safeCurrentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={`px-2.5 py-1 rounded-lg border text-xs transition-colors ${
                safeCurrentPage <= 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  page === safeCurrentPage
                    ? 'bg-orange-500 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className={`px-2.5 py-1 rounded-lg border text-xs transition-colors ${
                safeCurrentPage >= totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Coupon Modal */}
      <CouponModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCoupon(null);
        }}
        onSave={handleSaveCoupon}
        editingCoupon={editingCoupon}
      />

      {/* Delete Coupon Modal */}
      <DeleteCouponModal
        isOpen={Boolean(deletingCoupon)}
        onClose={() => setDeletingCoupon(null)}
        onConfirm={handleDeleteCoupon}
        coupon={deletingCoupon}
      />
    </div>
  );
};

export default CouponsTabContent;
