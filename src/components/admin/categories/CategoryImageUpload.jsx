import { useRef } from 'react';
import { UploadIcon } from '@/icons';

export const CategoryImageUpload = ({ image, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onImageChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-slate-700">Category image</label>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      {image ? (
        <div className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-200 bg-slate-50/80">
          <img
            src={image}
            alt="Category Preview"
            className="w-14 h-14 rounded-xl object-cover border border-slate-200 shadow-2xs"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-800 truncate">Image uploaded</p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-semibold text-orange-600 hover:underline cursor-pointer mt-0.5"
            >
              Change image
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-200 hover:border-orange-400 hover:bg-orange-50/20 rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all space-y-1"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto border border-orange-200/60 shadow-2xs">
            <UploadIcon animateOnHover={false} size={18} />
          </div>
          <p className="text-xs font-bold text-orange-600 pt-1">
            Click to upload or drag and drop
          </p>
          <p className="text-[11px] text-slate-400">
            PNG or JPG - Up to 2 MB - Recommended 400 × 400 px
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryImageUpload;
