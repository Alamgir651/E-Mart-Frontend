import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { ChevronRightIcon } from '@/icons';

export const PayoutHelpCard = ({ onContactSupport }) => {
  const [chevronRef, chevronTrigger] = useAnimatedIcon();

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        Need help with this payout?
      </h3>
      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
        Most transfers arrive instantly but can take up to 3 business days to clear depending on your financial institution.
      </p>

      <button
        type="button"
        onClick={onContactSupport}
        onMouseEnter={chevronTrigger.onMouseEnter}
        onMouseLeave={chevronTrigger.onMouseLeave}
        className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 mt-4 cursor-pointer group"
      >
        <span>Contact Partner Support</span>
        <ChevronRightIcon
          ref={chevronRef}
          size={14}
          animateOnHover={false}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
};

export default PayoutHelpCard;
