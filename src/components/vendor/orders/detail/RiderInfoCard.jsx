import { PhoneIcon, MessageSquareIcon, MapPinIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { toast } from '@/utils/toast';

export const RiderInfoCard = ({ rider }) => {
  const [chatRef, chatTrigger] = useAnimatedIcon();
  const [mapRef, mapTrigger] = useAnimatedIcon();
  const [phoneRef, phoneTrigger] = useAnimatedIcon();

  if (!rider) return null;

  return (
    <div
      onMouseEnter={phoneTrigger.onMouseEnter}
      onMouseLeave={phoneTrigger.onMouseLeave}
      className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">
        Rider Information
      </h3>

      <div className="flex items-start gap-3.5 mb-4">
        <img
          src={rider.avatar}
          alt={rider.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-100 shrink-0"
        />

        <div className="space-y-1 min-w-0">
          <h4 className="text-sm font-semibold text-slate-900">{rider.name}</h4>

          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <PhoneIcon
              ref={phoneRef}
              animateOnHover={false}
              size={13}
              className="text-slate-500 shrink-0"
            />
            <span>{rider.phone}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="text-amber-500 font-semibold">★ {rider.rating}</span>
            <span className="text-slate-400">({rider.deliveries} deliveries)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={() => toast.info(`Starting chat with ${rider.name}...`)}
          onMouseEnter={chatTrigger.onMouseEnter}
          onMouseLeave={chatTrigger.onMouseLeave}
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-orange-50/80 hover:bg-orange-100 text-orange-600 text-xs font-bold transition-colors cursor-pointer"
        >
          <MessageSquareIcon ref={chatRef} animateOnHover={false} size={14} />
          <span>Chat with Rider</span>
        </button>

        <button
          type="button"
          onClick={() => toast.info(`Tracking rider on live map...`)}
          onMouseEnter={mapTrigger.onMouseEnter}
          onMouseLeave={mapTrigger.onMouseLeave}
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-orange-50/80 hover:bg-orange-100 text-orange-600 text-xs font-bold transition-colors cursor-pointer"
        >
          <MapPinIcon ref={mapRef} animateOnHover={false} size={14} />
          <span>View on Map</span>
        </button>
      </div>
    </div>
  );
};

export default RiderInfoCard;
