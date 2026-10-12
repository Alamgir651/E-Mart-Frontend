export const ProductPublishCard = ({ formData, onChange }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-black text-slate-900">
        Publish Product
      </h3>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-800">
            Product Status
          </h4>
          <p className="text-[11px] text-slate-500">
            Product will be visible on your store immediately after publishing.
          </p>
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.status !== 'Inactive'}
            onChange={(e) => onChange('status', e.target.checked ? 'Active' : 'Inactive')}
            className="w-4 h-4 rounded text-orange-600 accent-orange-600 cursor-pointer"
          />
          <span className="text-xs font-bold text-slate-700">Active</span>
        </label>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
        <input
          type="checkbox"
          id="featuredCheck"
          checked={!!formData.isFeatured}
          onChange={(e) => onChange('isFeatured', e.target.checked)}
          className="w-4 h-4 rounded text-orange-600 accent-orange-600 cursor-pointer"
        />
        <label htmlFor="featuredCheck" className="text-xs font-semibold text-slate-700 cursor-pointer">
          Show this product in featured section
        </label>
      </div>
    </div>
  );
};

export default ProductPublishCard;
