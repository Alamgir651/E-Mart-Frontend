import { MegaphoneIcon, PlusIcon } from '@/icons';

export const BannerTabContent = () => {
  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Promotional Banners
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure homepage banners, category carousels and announcement bars.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} animateOnHover={false} />
          <span>Add New Banner</span>
        </button>
      </div>

      {/* Empty / Placeholder State */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
          <MegaphoneIcon size={26} />
        </div>
        <h3 className="text-base font-bold text-slate-900">
          Banner Promotions
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
          Hero sliders, seasonal campaigns and store-wide promotion banners will appear here.
        </p>
      </div>
    </div>
  );
};

export default BannerTabContent;
