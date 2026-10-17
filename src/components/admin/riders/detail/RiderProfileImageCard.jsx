export const RiderProfileImageCard = ({ image, onPreview }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        Profile Image
      </h3>
      <div
        onClick={onPreview}
        className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 group relative cursor-pointer"
      >
        <img
          src={image}
          alt="Rider Profile"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-white/90 text-slate-800 text-xs font-semibold rounded-lg shadow-sm">
            View Photo
          </span>
        </div>
      </div>
    </div>
  );
};

export default RiderProfileImageCard;
