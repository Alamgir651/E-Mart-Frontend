import { useState } from 'react';
import { XIcon } from '@/icons';

export const VendorImagesCard = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(null);

  const displayImages = images.slice(0, 3);
  const remainingCount = images.length - 2;

  return (
    <>
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 tracking-tight">
          Store Banner & Images
        </h3>

        {images.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No store images uploaded yet.
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {displayImages.map((img, idx) => {
              const isLastWithMore = idx === 2 && remainingCount > 1;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className="relative group aspect-4/3 rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/70"
                >
                  <img
                    src={img}
                    alt={`Store visual ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {isLastWithMore && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg sm:text-xl tracking-tight">
                      +{remainingCount}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
            >
              <XIcon size={18} />
            </button>
            <img
              src={activeImage}
              alt="Store Preview"
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VendorImagesCard;
