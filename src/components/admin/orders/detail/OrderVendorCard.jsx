import { useNavigate } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, StoreIcon, ExternalLinkIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const OrderVendorCard = ({ vendor }) => {
  const navigate = useNavigate();
  const [extRef, extTrigger] = useAnimatedIcon();

  const handleViewVendor = () => {
    if (vendor?.id) {
      navigate(`/admin/orders/vendor/${vendor.id}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Vendor Information
        </h3>
        <div className="mt-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            <StoreIcon animateOnHover={false} size={18} />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              {vendor?.name}
            </h4>
            <span className="text-[11px] text-slate-400 font-medium block">
              {vendor?.category || 'Supermarket Vendor'}
            </span>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <PhoneIcon animateOnHover={false} size={12} className="text-slate-400" />
            <span>{vendor?.phone || '+92 200 4568794'}</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon animateOnHover={false} size={12} className="text-slate-400" />
            <span>{vendor?.email || 'dailyneeds@gmail.com'}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon animateOnHover={false} size={12} className="text-slate-400" />
            <span>{vendor?.address || 'DHA Phase 6, Lahore'}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleViewVendor}
        onMouseEnter={extTrigger.onMouseEnter}
        onMouseLeave={extTrigger.onMouseLeave}
        className="w-full mt-3 py-2 px-3 bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <ExternalLinkIcon ref={extRef} animateOnHover={false} size={13} />
        <span>View Vendor</span>
      </button>
    </div>
  );
};

export default OrderVendorCard;
