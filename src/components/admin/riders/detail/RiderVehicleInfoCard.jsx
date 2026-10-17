export const RiderVehicleInfoCard = ({ vehicleDetails }) => {
  const details = vehicleDetails || {
    type: 'Motorcycle',
    brand: 'Honda',
    model: 'CG 125',
    registrationNo: 'LEA-1234',
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Vehicle Information
      </h3>

      <div className="space-y-3.5 text-xs sm:text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Vehicle Type</span>
          <span className="font-bold text-slate-900">{details.type}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Brand</span>
          <span className="font-bold text-slate-900">{details.brand}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Model</span>
          <span className="font-bold text-slate-900">{details.model}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 font-medium">Registration No.</span>
          <span className="font-bold text-slate-900">{details.registrationNo}</span>
        </div>
      </div>
    </div>
  );
};

export default RiderVehicleInfoCard;
