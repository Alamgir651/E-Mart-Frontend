import { useState } from 'react';
import { ChevronDownIcon, CameraIcon } from '@/icons';
import { BarcodeIcon } from '@/icons';
import { usePortalBase } from '@/utils/usePortalBase';
import BarcodeScannerModal from './BarcodeScannerModal';

export const InventoryCard = ({ formData, onChange }) => {
  const { isAdminStore } = usePortalBase();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
        Inventory Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {isAdminStore && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs sm:text-sm font-semibold text-slate-800">
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
          <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
            Stock Qty <span className="text-orange-600">*</span>
          </label>
          <input
            type="number"
            value={formData.stock || ''}
            onChange={(e) => onChange('stock', e.target.value)}
            placeholder="50"
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
            Low Stock Alert <span className="text-orange-600">*</span>
          </label>
          <input
            type="number"
            value={formData.lowStockAlert || ''}
            onChange={(e) => onChange('lowStockAlert', e.target.value)}
            placeholder="10"
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
          Stock Status
        </label>
        <div className="relative max-w-sm">
          <select
            value={formData.stockStatus || 'Active'}
            onChange={(e) => onChange('stockStatus', e.target.value)}
            className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer"
          >
            <option value="Active">Active</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Inactive">Inactive</option>
          </select>
          <ChevronDownIcon size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
            Allow Purchase
          </h4>
          <p className="text-[11px] text-slate-500">
            Product will be available for purchase on your store.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onChange('allowPurchase', formData.allowPurchase !== false ? false : true)}
          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
            formData.allowPurchase !== false ? 'bg-orange-600' : 'bg-slate-200'
          }`}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-xs ${
              formData.allowPurchase !== false ? 'right-0.5' : 'left-0.5'
            }`}
          />
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

export default InventoryCard;
