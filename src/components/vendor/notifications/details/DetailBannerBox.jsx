import { BadgeAlertIcon, TrashIcon } from '@/icons';

export const DetailBannerBox = ({
  variant = 'amber',
  headline,
  description,
}) => {
  const isRose = variant === 'rose';

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 ${
        isRose
          ? 'bg-rose-50/70 border-rose-200/70'
          : 'bg-amber-50/70 border-amber-200/70'
      }`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
          isRose ? 'bg-rose-100 text-rose-500' : 'bg-amber-100 text-amber-600'
        }`}
      >
        {isRose ? <TrashIcon size={18} /> : <BadgeAlertIcon size={18} />}
      </div>

      <div>
        <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
          {headline}
        </h3>
        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DetailBannerBox;
