import { useState } from 'react';
import { toast } from '@/utils/toast';
import {
  INITIAL_COMMISSION_SETTINGS,
  INITIAL_COMMISSION_OVERRIDES,
} from '@/mock/admin/adminSettings.mock';
import { VendorCommissionCard } from './VendorCommissionCard';
import { CustomerDeliveryCard } from './CustomerDeliveryCard';
import { RiderCompensationCard } from './RiderCompensationCard';
import { AddOverrideModal } from './AddOverrideModal';

export const CommissionFeesTab = () => {
  const [formData, setFormData] = useState(INITIAL_COMMISSION_SETTINGS);
  const [savedData, setSavedData] = useState(INITIAL_COMMISSION_SETTINGS);
  const [overrides, setOverrides] = useState(INITIAL_COMMISSION_OVERRIDES);
  const [savedOverrides, setSavedOverrides] = useState(INITIAL_COMMISSION_OVERRIDES);

  const [isOverrideModalOpen, setIsOverrideModalOpen] = useState(false);
  const [overrideToEdit, setOverrideToEdit] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenAddOverride = () => {
    setOverrideToEdit(null);
    setIsOverrideModalOpen(true);
  };

  const handleOpenEditOverride = (item) => {
    setOverrideToEdit(item);
    setIsOverrideModalOpen(true);
  };

  const handleSaveOverride = (overrideItem) => {
    setOverrides((prev) => {
      const exists = prev.some((o) => o.id === overrideItem.id);
      if (exists) {
        return prev.map((o) => (o.id === overrideItem.id ? overrideItem : o));
      }
      return [...prev, overrideItem];
    });
    toast.success('Override updated successfully');
  };

  const handleCancel = () => {
    setFormData(savedData);
    setOverrides(savedOverrides);
    toast.info('Changes discarded');
  };

  const handleSave = () => {
    setSavedData(formData);
    setSavedOverrides(overrides);
    toast.success('Fee settings saved successfully!');
  };

  // Calculate live customer delivery fee for 5 km delivery to pass to Rider compensation card
  const includedKm = Number(formData.distanceIncluded) || 0;
  const baseFee = Number(formData.baseDeliveryFee) || 0;
  const extraKmRate = Number(formData.additionalDistanceRate) || 0;
  const minSubtotal = Number(formData.minOrderSubtotal) || 0;
  const isFreeEligible =
    formData.enableFreeDeliveryThreshold && 2000 >= minSubtotal;
  const extraKm = Math.max(0, 5 - includedKm);
  const customerDeliveryFee = isFreeEligible ? 0 : baseFee + extraKm * extraKmRate;

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Commission & Delivery Fees
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/70">
            Marketplace settings
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Set vendor commission and customer delivery pricing independently.
        </p>
      </div>

      {/* Grid: 2 Columns for Vendor Commission & Customer Delivery Fee */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <VendorCommissionCard
          formData={formData}
          onChange={handleChange}
          overrides={overrides}
          onAddOverride={handleOpenAddOverride}
          onEditOverride={handleOpenEditOverride}
        />
        <CustomerDeliveryCard
          formData={formData}
          onChange={handleChange}
        />
      </div>

      {/* Rider Compensation Full-width Card */}
      <RiderCompensationCard
        formData={formData}
        onChange={handleChange}
        customerDeliveryFee={customerDeliveryFee}
      />

      {/* Footer bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Illustrative rates · Saving schedules future pricing, not past orders.
        </p>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors shadow-2xs"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
          >
            Save fee settings
          </button>
        </div>
      </div>

      {/* Add / Edit Override Modal */}
      <AddOverrideModal
        isOpen={isOverrideModalOpen}
        onClose={() => setIsOverrideModalOpen(false)}
        onSave={handleSaveOverride}
        initialData={overrideToEdit}
      />
    </div>
  );
};

export default CommissionFeesTab;
