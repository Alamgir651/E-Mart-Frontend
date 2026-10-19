import { useState } from 'react';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { toast } from '@/utils/toast';
import {
  COUNTRY_OPTIONS,
  CURRENCY_OPTIONS,
  TIMEZONE_OPTIONS,
  INITIAL_GENERAL_SETTINGS,
} from '@/mock/admin/adminSettings.mock';

export const GeneralBrandingTab = () => {
  const [formData, setFormData] = useState(INITIAL_GENERAL_SETTINGS);
  const [savedData, setSavedData] = useState(INITIAL_GENERAL_SETTINGS);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setFormData(savedData);
    toast.info('Changes discarded');
  };

  const handleSave = () => {
    setSavedData(formData);
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Section Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            General & Branding
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
            Marketplace settings
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Set the identity and contact details customers see across Emart.
        </p>
      </div>

      {/* Card 1: Contact & support */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Contact & support
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Help customers and vendors reach your marketplace.
          </p>
        </div>

        {/* Row 1: Support Email & Support Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Support email
            </label>
            <input
              type="email"
              value={formData.supportEmail}
              onChange={(e) => handleChange('supportEmail', e.target.value)}
              placeholder="support@emart.example"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Support phone
            </label>
            <input
              type="text"
              value={formData.supportPhone}
              onChange={(e) => handleChange('supportPhone', e.target.value)}
              placeholder="+92 300 000 0000"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Contact name & Business address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Contact name
            </label>
            <input
              type="text"
              value={formData.contactName}
              onChange={(e) => handleChange('contactName', e.target.value)}
              placeholder="Emart Support Team"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Business address
            </label>
            <input
              type="text"
              value={formData.businessAddress}
              onChange={(e) => handleChange('businessAddress', e.target.value)}
              placeholder="Example Plaza, Main Boulevard"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Row 3: City, Country, Postal code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder="Karachi"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Country
            </label>
            <SelectDropdown
              value={formData.country}
              options={COUNTRY_OPTIONS}
              onChange={(val) => handleChange('country', val)}
              fullWidth
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Postal code
            </label>
            <input
              type="text"
              value={formData.postalCode}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              placeholder="74000"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-400 pt-1">
          Illustrative contact details only. No live contact information is changed in this preview.
        </p>
      </div>

      {/* Card 2: Regional preferences */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Regional preferences
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Defaults for prices, timestamps and marketplace operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Currency
            </label>
            <SelectDropdown
              value={formData.currency}
              options={CURRENCY_OPTIONS}
              onChange={(val) => handleChange('currency', val)}
              fullWidth
            />
            <p className="text-[11px] text-slate-400 mt-1">
              All commission and delivery examples use PKR.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Time zone
            </label>
            <SelectDropdown
              value={formData.timezone}
              options={TIMEZONE_OPTIONS}
              onChange={(val) => handleChange('timezone', val)}
              fullWidth
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Dates and activity are shown in Pakistan Standard Time (PKT).
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Branding stays unchanged until you save your settings.
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

export default GeneralBrandingTab;
