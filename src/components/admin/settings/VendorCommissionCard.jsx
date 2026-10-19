import { PlusIcon } from '@/icons';

export const VendorCommissionCard = ({
  formData,
  onChange,
  overrides,
  onAddOverride,
  onEditOverride,
}) => {
  const rate = Number(formData.defaultCommissionRate) || 0;
  const exampleSubtotal = 2000;
  const commissionAmount = Math.round((exampleSubtotal * rate) / 100);
  const vendorProceeds = exampleSubtotal - commissionAmount;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Vendor commission
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Marketplace revenue from external vendor sales only.
          </p>
        </div>

        {/* Default Commission Rate */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Default commission rate
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              value={formData.defaultCommissionRate}
              onChange={(e) =>
                onChange('defaultCommissionRate', Number(e.target.value))
              }
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-10"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
              %
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            Applied to net item subtotal after discounts, excluding tax and delivery.
          </p>
        </div>

        {/* Category & Vendor Overrides */}
        <div className="pt-2">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Category & vendor overrides
            </span>
            <button
              type="button"
              onClick={() => onChange('enableOverrides', !formData.enableOverrides)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                formData.enableOverrides ? 'bg-orange-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                  formData.enableOverrides ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {formData.enableOverrides && (
            <div className="space-y-3">
              <div className="border border-slate-200/80 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 px-3.5 py-2 bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-400">
                  <span>Override</span>
                  <span className="text-right">Rate / Action</span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {overrides.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-2 items-center px-3.5 py-2.5 hover:bg-slate-50/50 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-medium text-slate-800 leading-snug">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {item.type}
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-xs font-bold text-slate-900">
                          {item.rate}%
                        </span>
                        <button
                          type="button"
                          onClick={() => onEditOverride(item)}
                          className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={onAddOverride}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer transition-colors shrink-0"
                >
                  <PlusIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Add override</span>
                </button>
                <span className="text-[11px] text-slate-400">
                  Vendor rate takes priority, then category, then default.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Calculation Preview Box */}
        <div className="bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border border-slate-200/60 space-y-2 mt-4">
          <p className="text-xs font-semibold text-slate-800">
            Example · Vendor with no override
          </p>
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Net item subtotal</span>
              <span className="font-medium text-slate-700">
                PKR {exampleSubtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Commission - {rate}%</span>
              <span className="font-medium text-slate-700">
                PKR {commissionAmount.toLocaleString()}
              </span>
            </div>
            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-900">Vendor item proceeds</span>
              <span className="text-sm font-bold text-orange-600">
                PKR {vendorProceeds.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
        Own-store sales do not incur vendor commission. No payout-to-yourself is created. Other vendor adjustments are not included in this preview.
      </p>
    </div>
  );
};

export default VendorCommissionCard;
