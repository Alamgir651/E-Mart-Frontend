import { PlusIcon, TrashIcon } from '@/icons';

const VARIANT_TABS = ['Weight', 'Size', 'Color', 'Pack'];

export const VariantsCard = ({ formData, onChange }) => {
  const handleAddVariant = () => {
    const newVariant = {
      id: Date.now(),
      option: '',
      price: formData.price || '0.00',
      stock: '10',
    };
    onChange('variants', [...(formData.variants || []), newVariant]);
  };

  const handleRemoveVariant = (id) => {
    onChange(
      'variants',
      (formData.variants || []).filter((v) => v.id !== id)
    );
  };

  const handleUpdateVariant = (id, field, value) => {
    onChange(
      'variants',
      (formData.variants || []).map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
        Product Variants <span className="text-slate-400 font-normal text-xs">(Optional)</span>
      </h3>

      <div className="flex items-center gap-2">
        {VARIANT_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onChange('variantTab', tab)}
            className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              (formData.variantTab || 'Weight') === tab
                ? 'border-orange-600 text-orange-600 bg-orange-50/50'
                : 'border-slate-200 text-slate-500 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-2 pt-2">
        {(formData.variants || []).map((variant) => (
          <div
            key={variant.id}
            className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs"
          >
            <input
              type="text"
              value={variant.option}
              onChange={(e) => handleUpdateVariant(variant.id, 'option', e.target.value)}
              placeholder="e.g. 250g, XL, Red"
              className="font-bold text-slate-800 bg-transparent outline-none flex-1"
            />
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700">${variant.price}</span>
              <span className="text-slate-500">{variant.stock} in stock</span>
              <button
                type="button"
                onClick={() => handleRemoveVariant(variant.id)}
                className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <TrashIcon size={14} />
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddVariant}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 pt-1 cursor-pointer"
        >
          <PlusIcon size={14} />
          <span>Add Another Option</span>
        </button>
      </div>
    </div>
  );
};

export default VariantsCard;
