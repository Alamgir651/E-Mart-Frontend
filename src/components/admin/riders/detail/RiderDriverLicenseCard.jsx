export const RiderDriverLicenseCard = ({ image, onPreview }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        Driver License
      </h3>

      <div
        onClick={onPreview}
        className="w-full h-32 sm:h-36 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 group relative cursor-pointer"
      >
        <img
          src={image}
          alt="Driver License"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-white/90 text-slate-800 text-xs font-semibold rounded-lg shadow-sm">
            Inspect License
          </span>
        </div>
      </div>

      <div className="text-center pt-1">
        <button
          type="button"
          onClick={onPreview}
          className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default RiderDriverLicenseCard;
