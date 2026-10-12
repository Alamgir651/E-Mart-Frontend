export const PricingCard = ({ formData, onChange }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
      <h3 className="text-sm sm:text-base font-black text-slate-900">
        Pricing Information
      </h3>

      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Selling Price <span className="text-orange-600">*</span>
        </label>
        <div className="relative max-w-md">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
            $
          </span>
          <input
            type="number"
            step="0.01"
            value={formData.price || ''}
            onChange={(e) => onChange('price', e.target.value)}
            placeholder="0.00"
            className="w-full pl-8 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all font-bold"
          />
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-800">
              Discount (Optional)
            </h4>
            <p className="text-[11px] text-slate-500">
              Apply special promotional price
            </p>
          </div>
          <button
            type="button"
            onClick={() => onChange('hasDiscount', !formData.hasDiscount)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
              formData.hasDiscount ? 'bg-orange-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-xs ${
                formData.hasDiscount ? 'right-0.5' : 'left-0.5'
              }`}
            />
          </button>
        </div>

        {formData.hasDiscount && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100 animate-in fade-in">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Discount Type</label>
              <select
                value={formData.discountType || 'Percentage'}
                onChange={(e) => onChange('discountType', e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none"
              >
                <option value="Percentage">Percentage</option>
                <option value="Fixed">Fixed Amount</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Value</label>
              <input
                type="text"
                value={formData.discountValue || ''}
                onChange={(e) => onChange('discountValue', e.target.value)}
                placeholder="10%"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Start Date</label>
              <input
                type="text"
                value={formData.discountStartDate || ''}
                onChange={(e) => onChange('discountStartDate', e.target.value)}
                placeholder="Sep 20, 2026"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">End Date</label>
              <input
                type="text"
                value={formData.discountEndDate || ''}
                onChange={(e) => onChange('discountEndDate', e.target.value)}
                placeholder="Sep 30, 2026"
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
