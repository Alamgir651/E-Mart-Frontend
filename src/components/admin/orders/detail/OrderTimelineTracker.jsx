import { CheckIcon } from '@/icons';

export const OrderTimelineTracker = ({ order }) => {
  const isCompleted = order.status === 'Completed';

  const steps = order.timeline || [
    { step: 'Order Placed', time: '09:45 AM', completed: true },
    { step: 'Confirmed', time: '09:47 AM', completed: true },
    { step: 'Preparing', time: '09:55 AM', completed: true },
    { step: 'Out for Delivery', time: '10:20 AM', completed: isCompleted },
    { step: 'Delivered', time: '10:42 AM', completed: isCompleted },
  ];

  const progressWidth =
    order.status === 'Completed'
      ? '100%'
      : order.status === 'Out for Delivery'
      ? '75%'
      : order.status === 'Processing'
      ? '50%'
      : '20%';

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs">
      <div className="relative flex items-center justify-between">
        {/* Connecting Progress Bar */}
        <div className="absolute left-6 right-6 top-3.5 h-1 bg-slate-100 -z-0">
          <div
            className="h-full bg-emerald-500 transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Steps */}
        {steps.map((t, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xs ${
                t.completed ? 'bg-emerald-500' : 'bg-slate-200 text-slate-500'
              }`}
            >
              {t.completed ? (
                <CheckIcon animateOnHover={false} size={14} className="stroke-[3]" />
              ) : (
                idx + 1
              )}
            </div>
            <span className="text-xs font-bold text-slate-800 mt-2 block whitespace-nowrap">
              {t.step}
            </span>
            <span className="text-[10px] text-slate-400 font-medium block">
              {t.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimelineTracker;
