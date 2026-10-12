import { ArrowLeftIcon } from '@/icons';
import ProductImagesCard from './ProductImagesCard';
import ProductAdditionalInfoCard from './ProductAdditionalInfoCard';
import ProductPublishCard from './ProductPublishCard';

export const ProductImagesPublishStep = ({
  formData,
  onChange,
  onPublish,
  onBack,
}) => {
  return (
    <div className="space-y-6">
      <ProductImagesCard formData={formData} onChange={onChange} />
      <ProductAdditionalInfoCard formData={formData} onChange={onChange} />
      <ProductPublishCard formData={formData} onChange={onChange} />

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon size={14} />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onPublish}
          className="px-7 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
        >
          Publish Product
        </button>
      </div>
    </div>
  );
};

export default ProductImagesPublishStep;
