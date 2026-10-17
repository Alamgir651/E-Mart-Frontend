import { PhoneIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const OrderRiderCard = ({ rider }) => {
  const [callRef, callTrigger] = useAnimatedIcon();

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Rider Information
        </h3>

        {rider ? (
          <>
            <div className="mt-3 flex items-center gap-3">
              <img
                src={rider.avatar}
                alt={rider.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
              />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {rider.name}
                </h4>
                <span className="text-[11px] text-slate-400 block">
                  {rider.role || 'Standard Delivery Rider'}
                </span>
              </div>
            </div>

            <div className="mt-3 space-y-1.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <PhoneIcon animateOnHover={false} size={12} className="text-slate-400" />
                <span>{rider.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                  <circle cx="5" cy="18" r="3" />
                  <circle cx="19" cy="18" r="3" />
                  <path d="M8 18h8" />
                </svg>
                <span>{rider.vehicle}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-xs text-slate-400 py-4">No rider assigned yet.</p>
        )}
      </div>

      {rider && (
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => alert(`Calling ${rider.name}: ${rider.phone}`)}
            onMouseEnter={callTrigger.onMouseEnter}
            onMouseLeave={callTrigger.onMouseLeave}
            className="flex-1 py-2 px-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <PhoneIcon ref={callRef} animateOnHover={false} size={13} />
            <span>Call Rider</span>
          </button>
          <button
            type="button"
            onClick={() => alert(`Viewing profile of ${rider.name}`)}
            className="flex-1 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            View Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderRiderCard;
