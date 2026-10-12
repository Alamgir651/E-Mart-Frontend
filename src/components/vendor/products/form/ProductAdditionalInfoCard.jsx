import { useState } from 'react';
import { XIcon } from '@/icons';

export const ProductAdditionalInfoCard = ({ formData, onChange }) => {
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const currentTags = formData.tags || [];
      if (!currentTags.includes(tagInput.trim())) {
        onChange('tags', [...currentTags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onChange(
      'tags',
      (formData.tags || []).filter((t) => t !== tagToRemove)
    );
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
        Additional Information
      </h3>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          Product Tags <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="flex flex-wrap items-center gap-2 p-2 bg-white border border-slate-200/90 rounded-xl focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500">
          {(formData.tags || []).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="hover:text-rose-600 cursor-pointer"
              >
                <XIcon size={12} />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Type tag and press Enter..."
            className="text-xs flex-1 outline-none min-w-[120px] px-1"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          Country of Origin <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={formData.countryOfOrigin || ''}
          onChange={(e) => onChange('countryOfOrigin', e.target.value)}
          placeholder="e.g. Pakistan, Italy, USA"
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          Storage Instructions <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={formData.storageInstructions || ''}
          onChange={(e) => onChange('storageInstructions', e.target.value)}
          placeholder="e.g. Keep at room temperature. For longer freshness, refrigerate."
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl outline-none"
        />
      </div>
    </div>
  );
};

export default ProductAdditionalInfoCard;
