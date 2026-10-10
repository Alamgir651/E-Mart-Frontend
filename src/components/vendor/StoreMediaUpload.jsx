import { useRef, useState } from 'react';
import { UploadIcon, XIcon } from '@/icons';

export const StoreMediaUpload = ({ banners: initialBanners = [], onBannerChange }) => {
  const [banners, setBanners] = useState([
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=200&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=200&auto=format&fit=crop&q=60',
  ]);
  const [logoPreview, setLogoPreview] = useState(null);

  const bannerInputRef = useRef(null);
  const logoInputRef = useRef(null);

  const handleBannerUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newUrls = files.map((file) => URL.createObjectURL(file));
    setBanners((prev) => [...newUrls, ...prev]);
    if (onBannerChange) onBannerChange([...newUrls, ...banners]);
  };

  const handleRemoveBanner = (idx) => {
    setBanners((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-4 pt-2">
      <input
        ref={bannerInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        multiple
        className="hidden"
        onChange={handleBannerUpload}
      />
      <input
        ref={logoInputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
        onChange={handleLogoUpload}
      />

      <div>
        <label className="block text-xs font-bold text-slate-800 mb-0.5">
          Store Banner <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <p className="text-[11px] text-slate-500 mb-2">
          Upload your 1st photo as a Banner of your store (front view, interior, etc.)
        </p>

        <div
          onClick={() => bannerInputRef.current?.click()}
          className="w-full border-2 border-dashed border-indigo-200/80 bg-indigo-50/20 hover:bg-indigo-50/40 transition-colors rounded-2xl py-4 px-6 flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-1.5">
            <UploadIcon size={18} />
          </div>
          <p className="text-xs font-semibold text-slate-700">
            <span className="text-indigo-600 font-bold hover:underline">Click to upload</span> or drag and drop
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            PNG, JPG, WebP (Max 5MB each)
          </p>
        </div>

        {banners.length > 0 && (
          <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
            {banners.map((imgUrl, idx) => (
              <div key={idx} className="relative w-24 h-16 rounded-xl overflow-hidden border border-slate-200 shadow-xs flex-shrink-0 group">
                <img src={imgUrl} alt={`Store photo ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveBanner(idx);
                  }}
                  className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center text-[9px] cursor-pointer transition-colors"
                >
                  <XIcon size={10} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-800 mb-1.5">
          Store Logo
        </label>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shadow-xs">
            {logoPreview ? (
              <img src={logoPreview} alt="Uploaded logo" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M9 22V12h6v10" />
              </svg>
            )}
          </div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => logoInputRef.current?.click()}
              className="px-3.5 py-1.5 bg-orange-50 hover:bg-orange-100 border border-orange-200/80 rounded-full text-xs font-bold text-orange-600 flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>📷</span>
              <span>Change Logo</span>
            </button>
            <p className="text-[10px] text-slate-400">
              Recommended size: 500 × 500px (JPG, PNG, WebP)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreMediaUpload;
