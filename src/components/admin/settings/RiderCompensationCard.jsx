export const RiderCompensationCard = ({
  formData,
  onChange,
  customerDeliveryFee = 150,
}) => {
  const riderBase = Number(formData.riderBaseCompensation) || 0;
  const riderDistance = Number(formData.riderDistanceIncluded) || 3;
  const riderExtraRate = Number(formData.riderAdditionalRate) || 0;

  const totalKm = 5;
  const extraKm = Math.max(0, totalKm - riderDistance);
  const extraCompensation = extraKm * riderExtraRate;
  const riderTotal = riderBase + extraCompensation;
  const difference = Math.max(0, riderTotal - customerDeliveryFee);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      <div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          Rider compensation
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          What Emart pays the rider per completed delivery; not the customer fee.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Base compensation · First {riderDistance} km
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={formData.riderBaseCompensation}
              onChange={(e) =>
                onChange('riderBaseCompensation', Number(e.target.value))
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
            Each additional kilometre
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={formData.riderAdditionalRate}
              onChange={(e) =>
                onChange('riderAdditionalRate', Number(e.target.value))
              }
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs pr-20"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
              PKR / km
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed pt-1">
        For the same {totalKm} km delivery: PKR {riderBase.toLocaleString()} + ({extraKm} × PKR {riderExtraRate}) = PKR {riderTotal.toLocaleString()} paid to the rider. Emart covers the PKR {difference.toLocaleString()} difference before other adjustments.
      </p>
    </div>
  );
};

export default RiderCompensationCard;
