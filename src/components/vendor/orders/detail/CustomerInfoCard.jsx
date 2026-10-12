import { MapPinIcon, PhoneIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const CustomerInfoCard = ({ customer, phone, address }) => {
  const [phoneRef, phoneTrigger] = useAnimatedIcon();
  const [mapRef, mapTrigger] = useAnimatedIcon();

  const handleSectionEnter = () => {
    phoneTrigger.onMouseEnter();
    mapTrigger.onMouseEnter();
  };

  const handleSectionLeave = () => {
    phoneTrigger.onMouseLeave();
    mapTrigger.onMouseLeave();
  };

  const initials = customer
    ? customer
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'AK';

  return (
    <div
      onMouseEnter={handleSectionEnter}
      onMouseLeave={handleSectionLeave}
      className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">
        Customer Information
      </h3>

      <div className="flex items-start gap-3.5">
        <div className="w-11 h-11 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm flex items-center justify-center shrink-0">
          {initials}
        </div>

        <div className="space-y-1.5 min-w-0">
          <h4 className="text-sm font-semibold text-slate-900">{customer}</h4>

          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <PhoneIcon
              ref={phoneRef}
              animateOnHover={false}
              size={13}
              className="text-slate-500 shrink-0"
            />
            <span className="truncate">{phone}</span>
          </div>

          <div className="flex items-start gap-1.5 text-xs text-slate-600 leading-snug">
            <MapPinIcon
              ref={mapRef}
              animateOnHover={false}
              size={13}
              className="text-slate-500 shrink-0 mt-0.5"
            />
            <span>{address}</span>
          </div>

          <div className="pt-1.5">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
            >
              <MapPinIcon size={13} animateOnHover={false} />
              <span>View on Map</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoCard;
