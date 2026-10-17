import {
  StoreIcon,
  StarIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  BoxIcon,
  CircleCheckIcon,
  ShieldAlertIcon,
  BanIcon,
} from '@/icons';

export const VendorProductHeaderCard = ({ vendor }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Vendor Details Left */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
            <StoreIcon animateOnHover={false} size={26} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {vendor.vendorName}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200/60">
                {vendor.vendorCode}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                {vendor.category}
              </span>
            </div>

            {/* Vendor Rating & Location Details */}
            <div className="flex flex-wrap items-center gap-4 mt-2.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                <StarIcon animateOnHover={false} size={13} className="fill-amber-400 text-amber-400" />
                <span>{vendor.rating}</span>
                <span className="text-slate-400 font-normal">({vendor.reviewsCount} reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <PhoneIcon animateOnHover={false} size={12} className="text-slate-400" />
                <span>{vendor.phone}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MailIcon animateOnHover={false} size={12} className="text-slate-400" />
                <span>{vendor.email}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MapPinIcon animateOnHover={false} size={12} className="text-slate-400" />
                <span>{vendor.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics Grid Right */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:border-l lg:border-slate-100 lg:pl-6">
          <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 text-center min-w-[90px]">
            <div className="flex items-center justify-center text-slate-400 mb-1">
              <BoxIcon animateOnHover={false} size={15} />
            </div>
            <span className="text-lg font-extrabold text-slate-900 block leading-tight">
              {vendor.totalProducts}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
              Total Products
            </span>
          </div>

          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-center min-w-[90px]">
            <div className="flex items-center justify-center text-emerald-500 mb-1">
              <CircleCheckIcon animateOnHover={false} size={15} />
            </div>
            <span className="text-lg font-extrabold text-emerald-600 block leading-tight">
              {vendor.activeProducts}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
              Active
            </span>
          </div>

          <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3 text-center min-w-[90px]">
            <div className="flex items-center justify-center text-amber-500 mb-1">
              <ShieldAlertIcon animateOnHover={false} size={15} />
            </div>
            <span className="text-lg font-extrabold text-amber-600 block leading-tight">
              {vendor.lowStockProducts}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
              Low Stock
            </span>
          </div>

          <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3 text-center min-w-[90px]">
            <div className="flex items-center justify-center text-rose-500 mb-1">
              <BanIcon animateOnHover={false} size={15} />
            </div>
            <span className="text-lg font-extrabold text-rose-600 block leading-tight">
              {vendor.outOfStockProducts}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
              Out of Stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProductHeaderCard;
