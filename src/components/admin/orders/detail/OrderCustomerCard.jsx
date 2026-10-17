import { PhoneIcon, MailIcon, MapPinIcon, ExternalLinkIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const OrderCustomerCard = ({ customer }) => {
  const [mapRef, mapTrigger] = useAnimatedIcon();

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h3 className="text-sm font-bold text-slate-900">
          Customer Information
        </h3>
        <button
          type="button"
          onMouseEnter={mapTrigger.onMouseEnter}
          onMouseLeave={mapTrigger.onMouseLeave}
          className="text-xs font-semibold text-orange-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <span>View on Map</span>
          <ExternalLinkIcon ref={mapRef} animateOnHover={false} size={11} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={customer?.avatar}
          alt={customer?.name}
          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
            {customer?.name}
          </h4>
          <span className="text-[11px] text-slate-400 block">
            Customer since {customer?.joinedYear || '2024'}
          </span>
        </div>
      </div>

      <div className="space-y-1.5 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <PhoneIcon animateOnHover={false} size={12} className="text-slate-400" />
          <span>{customer?.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MailIcon animateOnHover={false} size={12} className="text-slate-400" />
          <span>{customer?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon animateOnHover={false} size={12} className="text-slate-400 shrink-0" />
          <span className="truncate">{customer?.address}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCustomerCard;
