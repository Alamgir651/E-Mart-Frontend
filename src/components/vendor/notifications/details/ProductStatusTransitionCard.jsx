import { ArrowRightIcon } from '@/icons';

export const ProductStatusTransitionCard = ({
  fromStatus = 'Active',
  toStatus = 'Inactive',
  note = 'Your units are still recorded in inventory. This listing cannot receive new orders while inactive.',
}) => {
  const isToRemoved = toStatus === 'Removed';

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        Product status
      </h3>

      <div className="flex items-center gap-2">
        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/60">
          {fromStatus}
        </span>
        <ArrowRightIcon size={14} className="text-slate-400" />
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
            isToRemoved
              ? 'bg-rose-100 text-rose-600 border border-rose-200/60'
              : 'bg-amber-100 text-amber-700 border border-amber-200/60'
          }`}
        >
          {toStatus}
        </span>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        {note}
      </p>
    </div>
  );
};

export default ProductStatusTransitionCard;
