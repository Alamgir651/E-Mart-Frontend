import { useRef } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CameraIcon, UploadIcon } from '@/icons';

export const StoreBannerUpload = ({ bannerUrl, onBannerChange }) => {
  const fileInputRef = useRef(null);
  const [cameraRef, cameraTrigger] = useAnimatedIcon();
  const [uploadRef, uploadTrigger] = useAnimatedIcon();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onBannerChange(event.target.result);
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
        Store Banner
      </label>

      <div className="relative w-full h-44 sm:h-52 md:h-60 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-inner group">
        <img
          src={bannerUrl}
          alt="Store Banner"
          className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10">
          <button
            type="button"
            onClick={handleOpenPicker}
            onMouseEnter={cameraTrigger.onMouseEnter}
            onMouseLeave={cameraTrigger.onMouseLeave}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/95 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-xl shadow-md backdrop-blur-xs transition-all cursor-pointer active:scale-95"
          >
            <CameraIcon ref={cameraRef} size={16} animateOnHover={false} />
            <span>Change Banner</span>
          </button>
        </div>

        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10">
          <button
            type="button"
            onClick={handleOpenPicker}
            onMouseEnter={uploadTrigger.onMouseEnter}
            onMouseLeave={uploadTrigger.onMouseLeave}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <UploadIcon ref={uploadRef} size={16} animateOnHover={false} />
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <p className="text-[11px] text-slate-400 font-medium">
        Recommended size: 1200 × 300px (JPG, PNG)
      </p>
    </div>
  );
};

export default StoreBannerUpload;
