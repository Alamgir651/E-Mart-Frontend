import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, CheckIcon } from '@/icons';
import { STORE_CATEGORIES } from '@/mock/vendor/vendorStore.mock';

export const StoreDetailsForm = ({
  formData,
  onChange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Store Name <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            required
            maxLength={50}
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Fresh Mart"
            className="w-full px-3.5 py-2.5 sm:py-3 pr-16 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
            {formData.name.length}/50
          </span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Store Description <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <textarea
            required
            rows={4}
            maxLength={200}
            value={formData.description}
            onChange={(e) => onChange('description', e.target.value)}
            placeholder="Enter store description..."
            className="w-full px-3.5 py-2.5 sm:py-3 pb-8 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs resize-none"
          />
          <span className="absolute right-3.5 bottom-2.5 text-xs font-semibold text-slate-400 pointer-events-none">
            {formData.description.length}/200
          </span>
        </div>
      </div>

      <div ref={dropdownRef} className="relative">
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Store Category <span className="text-rose-500">*</span>
        </label>
        <button
          type="button"
          onClick={() => setIsCategoryOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 sm:py-3 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs cursor-pointer text-left"
        >
          <span>{formData.category || 'Select a category'}</span>
          <ChevronDownIcon
            size={16}
            className={`text-slate-400 transition-transform ${
              isCategoryOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isCategoryOpen && (
          <div className="absolute left-0 right-0 top-full mt-1.5 z-30 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-1 max-h-56 overflow-y-auto animate-in fade-in">
            {STORE_CATEGORIES.map((cat) => {
              const isSelected = formData.category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    onChange('category', cat);
                    setIsCategoryOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-left ${
                    isSelected
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat}</span>
                  {isSelected && <CheckIcon size={15} className="text-orange-600" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreDetailsForm;
