import { useState } from 'react';
import { ChevronDownIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const ORDER_STEPS = [
  { id: 'placed', label: 'Order Placed', time: 'Sep 22, 10:15 AM' },
  { id: 'accepted', label: 'Accepted by Store', time: 'Sep 22, 10:25 AM' },
  { id: 'preparing', label: 'Preparing Food', time: 'Sep 22, 10:45 AM' },
  { id: 'assigned', label: 'Rider Assigned', time: 'Sep 22, 07:15 PM' },
  { id: 'pickup', label: 'Picked Up by Rider', time: 'Sep 22, 07:40 PM' },
  { id: 'out_delivery', label: 'Out for Delivery', time: 'Sep 22, 08:00 PM' },
  { id: 'delivered', label: 'Delivered', time: 'Sep 22, 08:15 PM' },
];

const STATUS_OPTIONS = [
  'New Order',
  'Processing',
  'Ready for Pickup',
  'Out for Delivery',
  'Completed',
];

export const OrderStatusStepper = ({ currentStatus, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chevronRef, chevronTrigger] = useAnimatedIcon();

  const getStepState = (stepIndex) => {
    if (currentStatus === 'Completed') return 'completed';
    if (currentStatus === 'New Order') return stepIndex === 0 ? 'completed' : 'pending';
    if (currentStatus === 'Processing') return stepIndex <= 2 ? 'completed' : 'pending';
    if (currentStatus === 'Ready for Pickup') return stepIndex <= 4 ? 'completed' : 'pending';
    if (currentStatus === 'Out for Delivery') return stepIndex <= 5 ? 'completed' : 'pending';
    return 'pending';
  };

  return (
    <div
      onMouseEnter={chevronTrigger.onMouseEnter}
      onMouseLeave={chevronTrigger.onMouseLeave}
      className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
          Order Status
        </h3>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-orange-200 bg-orange-50/70 text-orange-600 font-semibold text-xs hover:bg-orange-100 transition-colors cursor-pointer"
          >
            <span>Update Status</span>
            <ChevronDownIcon ref={chevronRef} animateOnHover={false} size={12} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-20">
              {STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onStatusChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                    currentStatus === opt
                      ? 'bg-orange-500 text-white font-bold'
                      : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 relative pl-2">
        <div className="absolute top-2.5 bottom-3 left-[14px] w-0.5 bg-emerald-300 -z-0" />

        {ORDER_STEPS.map((step, idx) => {
          const isDone = getStepState(idx) === 'completed';

          return (
            <div key={step.id} className="relative flex items-start gap-3.5 z-1">
              <div
                className={`w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 transition-all ${
                  isDone
                    ? 'bg-emerald-400 ring-4 ring-emerald-100 shadow-xs'
                    : 'bg-slate-200 ring-2 ring-slate-100'
                }`}
              />

              <div className="min-w-0">
                <p
                  className={`text-xs font-bold leading-tight ${
                    isDone ? 'text-slate-900' : 'text-slate-400'
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">{step.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusStepper;
