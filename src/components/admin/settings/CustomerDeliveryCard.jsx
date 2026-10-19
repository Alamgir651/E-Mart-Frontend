export const CustomerDeliveryCard = ({ formData, onChange }) => {
  const baseFee = Number(formData.baseDeliveryFee) || 0;
  const includedKm = Number(formData.distanceIncluded) || 0;
  const extraKmRate = Number(formData.additionalDistanceRate) || 0;
  const minSubtotal = Number(formData.minOrderSubtotal) || 0;

  // Calculation for Example: PKR 2,000 order, 5 km delivery
  const totalKm = 5;
  const extraKm = Math.max(0, totalKm - includedKm);
  const extraFee = extraKm * extraKmRate;
  const isFreeEligible =
    formData.enableFreeDeliveryThreshold && 2000 >= minSubtotal;
  const customerFee = isFreeEligible ? 0 : baseFee + extraFee;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Customer delivery fee
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Shown to the customer at checkout, separate from vendor commission.
          </p>
        </div>

        {/* Base fee & Included distance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Base delivery fee
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={formData.baseDeliveryFee}
                onChange={(e) =>
                  onChange('baseDeliveryFee', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-14"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                PKR
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Distance included
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                value={formData.distanceIncluded}
                onChange={(e) =>
                  onChange('distanceIncluded', Number(e.target.value))
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-10"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                km
              </span>
            </div>
          </div>
        </div>

        {/* Additional distance rate */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Additional distance rate
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={formData.additionalDistanceRate}
              onChange={(e) =>
                onChange('additionalDistanceRate', Number(e.target.value))
              }
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-20"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
              PKR / km
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            Charged per additional kilometre beyond the included distance.
          </p>
        </div>

        {/* Free Delivery Threshold Toggle */}
        <div className="pt-2">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Enable free-delivery threshold
            </span>
            <button
              type="button"
              onClick={() =>
                onChange(
                  'enableFreeDeliveryThreshold',
                  !formData.enableFreeDeliveryThreshold
                )
              }
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                formData.enableFreeDeliveryThreshold
                  ? 'bg-orange-500'
                  : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                  formData.enableFreeDeliveryThreshold
                    ? 'translate-x-4'
                    : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {formData.enableFreeDeliveryThreshold && (
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Minimum order subtotal
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  value={formData.minOrderSubtotal}
                  onChange={(e) =>
                    onChange('minOrderSubtotal', Number(e.target.value))
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-14"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                  PKR
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Net item subtotal after discounts. Emart funds the delivery waiver.
              </p>
            </div>
          )}
        </div>

        {/* Calculation Preview Box */}
        <div className="bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border border-slate-200/60 space-y-2 mt-4">
          <p className="text-xs font-semibold text-slate-800">
            Example - PKR 2,000 order, 5 km delivery
          </p>
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Base fee - First {includedKm} km</span>
              <span className="font-medium text-slate-700">
                PKR {baseFee.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>
                Extra {extraKm} km × PKR {extraKmRate}
              </span>
              <span className="font-medium text-slate-700">
                PKR {extraFee.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Free delivery eligible</span>
              <span className="font-medium text-slate-700">
                {isFreeEligible ? (
                  <span className="text-emerald-600 font-semibold">Yes · Free</span>
                ) : (
                  `No · Below PKR ${minSubtotal.toLocaleString()}`
                )}
              </span>
            </div>
            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-900">Customer delivery fee</span>
              <span className="text-sm font-bold text-orange-600">
                PKR {customerFee.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
        At PKR {minSubtotal.toLocaleString()} or more, the customer delivery fee becomes PKR 0. Rider compensation is not reduced by free delivery.
      </p>
    </div>
  );
};

export default CustomerDeliveryCard;
