import { useState } from 'react';
import { ChevronDownIcon, ArrowRightIcon, CameraIcon } from '@/icons';
import { BarcodeIcon } from '@/icons';
import { usePortalBase } from '@/utils/usePortalBase';
import { PRODUCT_CATEGORIES } from '@/mock/vendor/vendorProducts.mock';
import DetailedDescriptionEditor from './DetailedDescriptionEditor';
import BarcodeScannerModal from './BarcodeScannerModal';

export const ProductBasicInfoStep = ({
  formData,
  onChange,
  onNext,
  onCancel,
}) => {
  const { isAdminStore } = usePortalBase();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Product Name <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Fresh Bananas (1kg)"
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
          />
        </div>

        {isAdminStore && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                SKU / Barcode
              </label>
              <button
                type="button"
                onClick={() => setIsScannerOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-2 py-0.5 rounded-lg transition-colors cursor-pointer"
              >
                <CameraIcon size={13} />
                <span>Scan Barcode</span>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={formData.sku || ''}
                onChange={(e) => onChange('sku', e.target.value)}
                placeholder="e.g. SKU-890124 or scan code"
                className="w-full pl-3.5 pr-20 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setIsScannerOpen(true)}
                title="Open Barcode Camera Scanner"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2.5 py-1.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-semibold rounded-lg shadow-xs shadow-orange-500/20 transition-all cursor-pointer"
              >
                <BarcodeIcon size={14} />
                <span>Scan</span>
              </button>
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Unit <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            value={formData.unit || ''}
            onChange={(e) => onChange('unit', e.target.value)}
            placeholder="e.g. 1kg, 500g, Piece, Dozen"
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Category <span className="text-orange-600">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.category || 'Fruits & Vegetables'}
              onChange={(e) => onChange('category', e.target.value)}
              className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer text-slate-800"
            >
              {PRODUCT_CATEGORIES.filter((c) => c !== 'All Categories').map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              size={14}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Brand
          </label>
          <input
            type="text"
            value={formData.brand || ''}
            onChange={(e) => onChange('brand', e.target.value)}
            placeholder="e.g. Fresh Farm"
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Short Description <span className="text-orange-600">*</span>
        </label>
        <div className="relative">
          <textarea
            rows={3}
            maxLength={500}
            value={formData.shortDescription || ''}
            onChange={(e) => onChange('shortDescription', e.target.value)}
            placeholder="Short product overview for catalog cards..."
            className="w-full p-3.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none pb-6"
          />
          <span className="absolute right-3 bottom-2 text-[10px] text-slate-400 font-medium">
            {(formData.shortDescription || '').length}/500
          </span>
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Detailed Description <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <DetailedDescriptionEditor
          value={formData.detailedDescription}
          onChange={(val) => onChange('detailedDescription', val)}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
        >
          <span>Next</span>
          <ArrowRightIcon size={14} />
        </button>
      </div>

      {isAdminStore && (
        <BarcodeScannerModal
          isOpen={isScannerOpen}
          onClose={() => setIsScannerOpen(false)}
          onScan={(code) => onChange('sku', code)}
        />
      )}
    </div>
  );
};

export default ProductBasicInfoStep;
