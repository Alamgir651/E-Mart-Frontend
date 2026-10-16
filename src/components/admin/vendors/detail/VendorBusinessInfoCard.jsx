export const VendorBusinessInfoCard = ({ vendor }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-5">
      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        Business Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Business Name
          </span>
          <span className="font-semibold text-slate-900">{vendor.storeName}</span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Owner Name
          </span>
          <span className="font-semibold text-slate-900">{vendor.ownerName}</span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Email
          </span>
          <span className="font-semibold text-slate-900">{vendor.email}</span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Phone
          </span>
          <span className="font-semibold text-slate-900">{vendor.phone}</span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Business Type
          </span>
          <span className="font-semibold text-slate-900">{vendor.businessType || 'Individual'}</span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Category
          </span>
          <span className="font-semibold text-slate-900">{vendor.category}</span>
        </div>

        <div className="sm:col-span-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            CNIC Number
          </span>
          <span className="font-semibold text-slate-900 font-mono">{vendor.cnic || '988-0887763-0'}</span>
        </div>

        <div className="sm:col-span-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Store Description
          </span>
          <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
            {vendor.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorBusinessInfoCard;
