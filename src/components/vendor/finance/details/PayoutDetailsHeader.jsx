import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { ArrowLeftIcon, DownloadIcon } from '@/icons';

export const PayoutDetailsHeader = ({ onBack, onDownloadReceipt }) => {
  const [backRef, backTrigger] = useAnimatedIcon();
  const [downloadRef, downloadTrigger] = useAnimatedIcon();

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onBack}
        onMouseEnter={backTrigger.onMouseEnter}
        onMouseLeave={backTrigger.onMouseLeave}
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer group"
      >
        <ArrowLeftIcon
          ref={backRef}
          size={16}
          animateOnHover={false}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        <span>Back to Payouts</span>
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Payout Details
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Payout information, line item breakdowns, and processing timeline
          </p>
        </div>

        <button
          type="button"
          onClick={onDownloadReceipt}
          onMouseEnter={downloadTrigger.onMouseEnter}
          onMouseLeave={downloadTrigger.onMouseLeave}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
        >
          <DownloadIcon ref={downloadRef} size={16} animateOnHover={false} />
          <span>Download Receipt</span>
        </button>
      </div>
    </div>
  );
};

export default PayoutDetailsHeader;
