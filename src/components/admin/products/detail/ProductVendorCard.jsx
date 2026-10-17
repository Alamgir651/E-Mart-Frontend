import { useNavigate } from 'react-router-dom';

export const ProductVendorCard = ({ vendorDetails }) => {
  const navigate = useNavigate();

  const vendor = vendorDetails || {
    name: 'Fresh Mart',
    owner: 'Ahmed Khan',
    email: 'freshmart@gmail.com',
    phone: '+92 300 1234567',
    location: 'Lahore, Pakistan',
    vendorId: '#VDR-001',
  };

  const handleNavigateVendor = () => {
    navigate(`/admin/orders/vendor/VDR-001`);
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Vendor Information
            </h3>
            <p className="text-[11px] text-slate-400">
              Product ownership and vendor details
            </p>
          </div>

          <button
            type="button"
            onClick={handleNavigateVendor}
            className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
          >
            View Vendor
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs mt-3">
          <div>
            <span className="text-slate-400 font-medium block">Vendor Name</span>
            <span className="font-bold text-slate-900 mt-0.5 block">{vendor.name}</span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Owner</span>
            <span className="font-semibold text-slate-800 mt-0.5 block">{vendor.owner}</span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Email</span>
            <span className="font-semibold text-slate-800 mt-0.5 block truncate">{vendor.email}</span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Phone</span>
            <span className="font-semibold text-slate-800 mt-0.5 block">{vendor.phone}</span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Location</span>
            <span className="font-semibold text-slate-800 mt-0.5 block">{vendor.location}</span>
          </div>

          <div>
            <span className="text-slate-400 font-medium block">Vendor ID</span>
            <span className="font-bold text-orange-600 mt-0.5 block">{vendor.vendorId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVendorCard;
