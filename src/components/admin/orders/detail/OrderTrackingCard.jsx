export const OrderTrackingCard = ({ tracking = [], defaultVendorName, defaultCustomerName, isCompleted }) => {
  const steps = tracking.length
    ? tracking
    : [
        { text: `Order picked up from ${defaultVendorName || 'Store'}`, time: '10:05 AM', completed: true },
        { text: `On the way to customer ${defaultCustomerName || 'Customer'}`, time: '10:15 AM', completed: true },
        { text: 'Delivered', time: '10:42 AM', completed: isCompleted },
      ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
        Delivery Tracking
      </h3>

      <div className="relative pl-5 space-y-3 text-xs">
        <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200 -translate-x-1/2" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div
              className={`absolute -left-5 top-0.5 w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center ${
                step.completed ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            />
            <div>
              <span className="font-bold text-slate-900 block leading-tight">
                {step.text}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {step.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTrackingCard;
