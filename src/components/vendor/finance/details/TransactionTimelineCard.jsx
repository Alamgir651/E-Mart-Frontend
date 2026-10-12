import { CheckIcon } from '@/icons';

export const TransactionTimelineCard = ({ timeline = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight mb-5">
        Transaction Timeline
      </h3>

      <div className="relative pl-6 space-y-6">
        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-emerald-500" />

        {timeline.map((step, idx) => (
          <div key={idx} className="relative flex items-start gap-3">
            <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-4 ring-white shadow-xs">
              <CheckIcon size={12} strokeWidth={3} />
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                {step.step}
              </h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                {step.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTimelineCard;
