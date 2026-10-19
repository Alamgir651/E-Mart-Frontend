import { useState } from 'react';
import { toast } from '@/utils/toast';
import { INITIAL_COMMISSION_SETTINGS } from '@/mock/admin/adminSettings.mock';

export const CommissionFeesTab = () => {
  const [formData, setFormData] = useState(INITIAL_COMMISSION_SETTINGS);
  const [savedData, setSavedData] = useState(INITIAL_COMMISSION_SETTINGS);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setFormData(savedData);
    toast.info('Changes discarded');
  };

  const handleSave = () => {
    setSavedData(formData);
    toast.success('Commission & fee structures updated successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Commission & Delivery Fees
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
            Marketplace economics
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Configure platform commission rates, vendor deductions and customer delivery charges.
        </p>
      </div>

      {/* Card 1: Marketplace Commission */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Marketplace Commission
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Default percentage deducted on completed vendor sales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Default Commission Rate
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="100"
                value={formData.defaultCommissionRate}
                onChange={(e) =>
                  handleChange('defaultCommissionRate', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-10"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                %
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Applies across standard grocery vendors.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Min. Commission per Order
            </label>
            <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                PKR
              </span>
              <input
                type="number"
                min="0"
                value={formData.minCommissionPerOrder}
                onChange={(e) =>
                  handleChange('minCommissionPerOrder', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Floor revenue per fulfilled order.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Payout Processing Fee
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="10"
                value={formData.payoutFeePercent}
                onChange={(e) =>
                  handleChange('payoutFeePercent', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-10"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                %
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              0% currently subsidised by platform.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Delivery Fee Calculations */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Delivery Fee Calculations
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Customer delivery rates and free shipping threshold rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Base Delivery Fee
            </label>
            <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                PKR
              </span>
              <input
                type="number"
                min="0"
                value={formData.baseDeliveryFee}
                onChange={(e) =>
                  handleChange('baseDeliveryFee', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Standard 0-5 km order delivery fee.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Free Delivery Threshold
            </label>
            <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                PKR
              </span>
              <input
                type="number"
                min="0"
                value={formData.freeDeliveryThreshold}
                onChange={(e) =>
                  handleChange('freeDeliveryThreshold', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Cart subtotal required for free delivery.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Extra Fee per Additional KM
            </label>
            <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                PKR
              </span>
              <input
                type="number"
                min="0"
                value={formData.perKmRate}
                onChange={(e) =>
                  handleChange('perKmRate', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Charged for deliveries beyond 5 km radius.
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Fee changes take effect immediately for all new incoming orders.
        </p>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionFeesTab;
