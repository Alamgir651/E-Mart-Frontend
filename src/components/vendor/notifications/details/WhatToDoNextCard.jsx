import { ArrowRightIcon } from '@/icons';

export const WhatToDoNextCard = ({
  steps = [],
  paragraphs = [],
  primaryBtnText = 'View inactive product',
  onPrimaryClick,
  secondaryBtnText = 'Contact Support',
  onSecondaryClick,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        What to do next
      </h3>

      {steps.length > 0 && (
        <ol className="space-y-2.5 text-xs text-slate-600 list-decimal list-inside leading-relaxed">
          {steps.map((step, idx) => (
            <li key={idx}>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )}

      {paragraphs.length > 0 && (
        <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onPrimaryClick}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
        >
          <span>{primaryBtnText}</span>
          <ArrowRightIcon size={14} />
        </button>

        {secondaryBtnText && (
          <button
            type="button"
            onClick={onSecondaryClick}
            className="px-4 py-2.5 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors rounded-xl cursor-pointer"
          >
            {secondaryBtnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default WhatToDoNextCard;
