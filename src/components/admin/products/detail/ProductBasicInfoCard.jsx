export const ProductBasicInfoCard = ({ product }) => {
  return (
    <div className="space-y-5">
      {/* Basic Information */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Basic Information
        </h3>

        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-400 font-medium block">Product Name</span>
            <span className="font-bold text-slate-900 text-sm mt-0.5 block">
              {product.name}
            </span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Category</span>
            <span className="font-semibold text-slate-800 mt-0.5 block">
              {product.categoryPath || product.category}
            </span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Brand</span>
            <span className="font-semibold text-slate-800 mt-0.5 block">
              {product.brand || 'Fresh Farm'}
            </span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Short Description</span>
            <p className="text-slate-600 mt-0.5 leading-relaxed">
              {product.shortDescription || 'Fresh and organic produce, rich in natural energy.'}
            </p>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Detailed Description</span>
            <p className="text-slate-600 mt-0.5 leading-relaxed">
              {product.detailedDescription ||
                'Our fresh produce is carefully sourced from trusted farms. Naturally ripened, rich in nutrients, and perfect for everyday use.'}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Information */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-2">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Pricing Information
        </h3>
        <div>
          <span className="text-xs text-slate-400 font-medium block">Selling Price</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl font-extrabold text-slate-900">
              {product.price || '$4.50'}
            </span>
            <span className="text-xs text-slate-400 font-medium">per kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBasicInfoCard;
