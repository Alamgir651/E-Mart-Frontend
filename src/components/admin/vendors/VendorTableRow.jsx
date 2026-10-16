import { useNavigate } from 'react-router-dom';
import { EyeIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const STATUS_BADGES = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Rejected: 'bg-rose-50 text-rose-700 border-rose-200/80',
  Suspended: 'bg-orange-50 text-orange-700 border-orange-200/80',
};

export const VendorTableRow = ({ vendor, isSelected, onToggleSelect }) => {
  const navigate = useNavigate();
  const [eyeRef, eyeTrigger] = useAnimatedIcon();

  const handleOpenDetail = () => {
    navigate(`/admin/vendors/${vendor.id}`);
  };

  const badgeClass =
    STATUS_BADGES[vendor.status] || 'bg-slate-50 text-slate-700 border-slate-200';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors border-b border-slate-100 last:border-b-0 text-xs sm:text-sm">
      {/* Checkbox */}
      <td className="py-3.5 pl-4 pr-2 w-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(vendor.id)}
          className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
        />
      </td>

      {/* # Code */}
      <td className="py-3.5 px-3 font-medium text-slate-400 whitespace-nowrap">
        {vendor.code}
      </td>

      {/* Vendor / Store (NO ICON as requested by user) */}
      <td className="py-3.5 px-3">
        <button
          type="button"
          onClick={handleOpenDetail}
          className="font-semibold text-slate-900 hover:text-orange-600 transition-colors text-left cursor-pointer tracking-tight"
        >
          {vendor.storeName}
        </button>
      </td>

      {/* Contact (Owner & Email) */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800">{vendor.ownerName}</span>
          <span className="text-[11px] text-slate-400">{vendor.email}</span>
        </div>
      </td>

      {/* Category */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {vendor.category}
      </td>

      {/* Location */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {vendor.location}
      </td>

      {/* Status Badge */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeClass}`}
        >
          {vendor.status}
        </span>
      </td>

      {/* Join Date */}
      <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">
        {vendor.joinDate}
      </td>

      {/* Action Column with Eye Icon */}
      <td className="py-3.5 px-3 text-right pr-5">
        <button
          type="button"
          onClick={handleOpenDetail}
          onMouseEnter={eyeTrigger.onMouseEnter}
          onMouseLeave={eyeTrigger.onMouseLeave}
          title="View Vendor Details"
          className="w-8 h-8 rounded-lg inline-flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all cursor-pointer"
        >
          <EyeIcon ref={eyeRef} size={17} animateOnHover={false} />
        </button>
      </td>
    </tr>
  );
};

export default VendorTableRow;
