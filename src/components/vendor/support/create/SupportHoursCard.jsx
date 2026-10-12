import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { ClockIcon } from '@/icons';

export const SupportHoursCard = () => {
  const [clockRef, clockTrigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={clockTrigger.onMouseEnter}
      onMouseLeave={clockTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <ClockIcon ref={clockRef} size={16} animateOnHover={false} />
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
            Support Hours
          </h3>
          <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">
            Our support team is available
          </p>
        </div>
      </div>

      <div className="space-y-2.5 text-xs font-semibold text-slate-700">
        <div className="flex items-center justify-between py-1 border-b border-slate-100">
          <span className="text-slate-500">Monday - Friday</span>
          <span className="text-slate-900">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex items-center justify-between py-1 border-b border-slate-100">
          <span className="text-slate-500">Saturday - Sunday</span>
          <span className="text-slate-900">10:00 AM - 4:00 PM</span>
        </div>
      </div>

      <p className="text-[11px] font-semibold text-slate-400 text-center pt-1">
        Average Response Time:{' '}
        <span className="text-slate-700 font-semibold">Within 24 Hours</span>
      </p>
    </div>
  );
};

export default SupportHoursCard;
