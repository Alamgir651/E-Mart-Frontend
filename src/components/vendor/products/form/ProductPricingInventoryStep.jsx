import { ArrowRightIcon, ArrowLeftIcon } from '@/icons';
import PricingCard from './PricingCard';
import InventoryCard from './InventoryCard';
import VariantsCard from './VariantsCard';

export const ProductPricingInventoryStep = ({
  formData,
  onChange,
  onNext,
  onBack,
  onCancel,
}) => {
  return (
    <div className="space-y-6">
      <PricingCard formData={formData} onChange={onChange} />
      <InventoryCard formData={formData} onChange={onChange} />
      <VariantsCard formData={formData} onChange={onChange} />

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon size={14} />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
          >
            <span>Next</span>
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPricingInventoryStep;
