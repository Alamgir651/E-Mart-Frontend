import { FileTextIcon } from '@/icons';

export const ReasonCard = ({
  title = 'Reason for deactivation',
  headline,
  description,
  policyLinkText,
  onPolicyClick,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        {title}
      </h3>

      <div className="space-y-2">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
          {headline}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {policyLinkText && (
        <button
          type="button"
          onClick={onPolicyClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors pt-1 cursor-pointer"
        >
          <FileTextIcon size={14} />
          <span>{policyLinkText}</span>
        </button>
      )}
    </div>
  );
};

export default ReasonCard;
