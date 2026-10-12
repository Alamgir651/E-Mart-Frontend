import { useRef } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CameraIcon } from '@/icons';

export const StoreLogoUpload = ({ logoUrl, onLogoChange }) => {
  const fileInputRef = useRef(null);
  const [cameraRef, cameraTrigger] = useAnimatedIcon();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onLogoChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenPicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-slate-700">
        Store Logo
      </label>

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={logoUrl}
            alt="Store Logo"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <div className="space-y-1.5">
          <button
            type="button"
            onClick={handleOpenPicker}
            onMouseEnter={cameraTrigger.onMouseEnter}
            onMouseLeave={cameraTrigger.onMouseLeave}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-orange-50 hover:bg-orange-100/80 text-orange-600 border border-orange-200/70 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer active:scale-95 shadow-2xs"
          >
            <CameraIcon ref={cameraRef} size={15} animateOnHover={false} />
            <span>Change Logo</span>
          </button>
          <p className="text-[11px] text-slate-400 font-medium">
            Recommended size: 500 × 500px (JPG, PNG)
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default StoreLogoUpload;
