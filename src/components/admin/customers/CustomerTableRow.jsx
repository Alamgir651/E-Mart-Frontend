import { useNavigate } from 'react-router-dom';
import { EyeIcon } from '@/icons';

const STATUS_BADGES = {
  Active: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Inactive: 'bg-rose-50 text-rose-500 border-rose-200/80',
  Suspended: 'bg-amber-50 text-amber-600 border-amber-200/80',
};

export const CustomerTableRow = ({ customer, isSelected, onToggleSelect }) => {
  const navigate = useNavigate();

  const handleOpenDetail = () => {
    navigate(`/admin/customers/${customer.id}`);
  };

  const badgeClass =
    STATUS_BADGES[customer.status] || 'bg-slate-50 text-slate-700 border-slate-200';

  return (
    <tr className="hover:bg-orange-50/20 transition-colors border-b border-slate-100 last:border-b-0 text-xs sm:text-sm">
      {/* Checkbox */}
      <td className="py-3.5 pl-4 pr-2 w-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(customer.id)}
          className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
        />
      </td>

      {/* # Code */}
      <td className="py-3.5 px-3 font-medium text-slate-500 whitespace-nowrap">
        {customer.code}
      </td>

      {/* Customer Name with Avatar and Email */}
      <td className="py-3.5 px-3">
        <button
          type="button"
          onClick={handleOpenDetail}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-200/80 group-hover:ring-2 group-hover:ring-orange-500/30 transition-all shrink-0"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight whitespace-nowrap">
              {customer.name}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {customer.email}
            </span>
          </div>
        </button>
      </td>

      {/* Contact */}
      <td className="py-3.5 px-3 font-medium text-slate-600 whitespace-nowrap">
        {customer.phone}
      </td>

      {/* Location */}
      <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
        {customer.location}
      </td>

      {/* Total Orders */}
      <td className="py-3.5 px-3 font-bold text-slate-900 text-center whitespace-nowrap">
        {customer.totalOrders}
      </td>

      {/* Total Spent */}
      <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
        {customer.totalSpent}
      </td>

      {/* Status Badge */}
      <td className="py-3.5 px-3 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
        >
          {customer.status}
        </span>
      </td>

      {/* Actions Column with Eye Icon */}
      <td className="py-3.5 px-3 text-right pr-5 whitespace-nowrap">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={handleOpenDetail}
            title="View Customer Details"
            className="w-8 h-8 rounded-lg inline-flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all cursor-pointer"
          >
            <EyeIcon size={17} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CustomerTableRow;
