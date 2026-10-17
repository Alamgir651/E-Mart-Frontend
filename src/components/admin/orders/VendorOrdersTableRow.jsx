import { useNavigate } from 'react-router-dom';
import { EyeIcon, StarIcon, StoreIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import OrderActionButton from './OrderActionButton';

export const VendorOrdersTableRow = ({
  vendor,
  isSelected,
  onToggleSelect,
}) => {
  const navigate = useNavigate();
  const [storeRef, storeTrigger] = useAnimatedIcon();

  const handleNavigate = () => {
    navigate(`/admin/orders/vendor/${vendor.vendorId}`);
  };

  return (
    <tr className="hover:bg-orange-50/20 transition-colors">
      {/* Checkbox */}
      <td className="py-3.5 pl-4 pr-2 w-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(vendor.vendorId)}
          className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
        />
      </td>

      {/* Vendor ID */}
      <td className="py-3.5 px-3 font-medium text-slate-500 whitespace-nowrap">
        {vendor.vendorCode}
      </td>

      {/* Vendor Name */}
      <td className="py-3.5 px-3">
        <button
          type="button"
          onClick={handleNavigate}
          onMouseEnter={storeTrigger.onMouseEnter}
          onMouseLeave={storeTrigger.onMouseLeave}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100/70 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0">
            <StoreIcon ref={storeRef} animateOnHover={false} size={17} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight whitespace-nowrap">
              {vendor.vendorName}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {vendor.category}
            </span>
          </div>
        </button>
      </td>

      {/* Total Orders */}
      <td className="py-3.5 px-3 font-bold text-slate-900 text-center whitespace-nowrap">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800">
          {vendor.totalOrders} orders
        </span>
      </td>

      {/* In Progress */}
      <td className="py-3.5 px-3 font-bold text-center whitespace-nowrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {vendor.activeOrders ?? vendor.inProgressOrders ?? 0} active
        </span>
      </td>

      {/* Rating */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
            <StarIcon animateOnHover={false} size={13} className="fill-amber-400 text-amber-400" />
            <span>{vendor.rating}</span>
          </div>
          <span className="text-[11px] text-slate-400">
            ({vendor.reviewsCount})
          </span>
        </div>
      </td>

      {/* Location */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {vendor.location}
      </td>

      {/* Actions */}
      <td className="py-3.5 px-3 text-right pr-5 whitespace-nowrap">
        <OrderActionButton
          icon={EyeIcon}
          title="View Vendor Orders"
          onClick={handleNavigate}
          iconSize={17}
          className="w-8 h-8 rounded-lg text-slate-400 hover:text-orange-600 hover:bg-orange-50"
        />
      </td>
    </tr>
  );
};

export default VendorOrdersTableRow;
