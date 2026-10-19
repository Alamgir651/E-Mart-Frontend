import { SquarePenIcon, TrashIcon } from '@/icons';
import { formatCouponDate } from '@/mock/admin/coupons.mock';

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
    case 'Scheduled':
      return 'bg-sky-50 text-sky-600 border-sky-200/80';
    case 'Disabled':
    case 'Expired':
    default:
      return 'bg-slate-100 text-slate-500 border-slate-200/80';
  }
};

const renderDiscountDisplay = (coupon) => {
  const { discountType, discountAmount, minPurchase, maxDiscount } = coupon;

  let mainText = '';
  if (discountType === 'Free delivery') {
    mainText = 'Free delivery';
  } else if (discountType === 'Percent') {
    mainText = `${discountAmount}% off`;
  } else {
    mainText = `PKR ${Number(discountAmount || 0).toLocaleString()} off`;
  }

  let subText = '';
  if (minPurchase) {
    subText = `Min. PKR ${Number(minPurchase).toLocaleString()}`;
  } else if (maxDiscount) {
    subText = `Max. PKR ${Number(maxDiscount).toLocaleString()}`;
  }

  return (
    <div>
      <div className="font-semibold text-slate-800">{mainText}</div>
      {subText && (
        <div className="text-[11px] text-slate-400 mt-0.5">{subText}</div>
      )}
    </div>
  );
};

export const CouponsTable = ({
  coupons,
  onEdit,
  onDelete,
  onToggleEnabled,
}) => {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-left border-collapse min-w-[760px]">
        <thead>
          <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
            <th className="py-3 px-4">Coupon</th>
            <th className="py-3 px-4">Coupon type</th>
            <th className="py-3 px-4">Discount</th>
            <th className="py-3 px-4">Validity</th>
            <th className="py-3 px-4">Usage / user limit</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
          {coupons.length > 0 ? (
            coupons.map((coupon) => {
              const isEnabled = Boolean(coupon.enabled);

              return (
                <tr
                  key={coupon.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {/* Coupon (Code & Title) */}
                  <td className="py-3.5 px-4">
                    <button
                      type="button"
                      onClick={() => onEdit(coupon)}
                      className="text-left cursor-pointer group-hover:opacity-90 block"
                    >
                      <div className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                        {coupon.code}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                        {coupon.title}
                      </div>
                    </button>
                  </td>

                  {/* Coupon Type */}
                  <td className="py-3.5 px-4 text-slate-700 font-medium">
                    {coupon.couponType}
                  </td>

                  {/* Discount details */}
                  <td className="py-3.5 px-4">
                    {renderDiscountDisplay(coupon)}
                  </td>

                  {/* Validity */}
                  <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">
                    <div>{formatCouponDate(coupon.startDate)}</div>
                    <div className="text-slate-400 text-[11px]">
                      to {formatCouponDate(coupon.expireDate)}
                    </div>
                  </td>

                  {/* Usage / user limit */}
                  <td className="py-3.5 px-4 text-xs leading-relaxed">
                    <div className="font-medium text-slate-800">
                      {coupon.totalUsed ?? 0} used
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      {coupon.limitPerUser} per user
                    </div>
                  </td>

                  {/* Status Badge & Toggle */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col items-start gap-1.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getStatusBadgeClass(
                          coupon.status
                        )}`}
                      >
                        {coupon.status}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => onToggleEnabled(coupon.id)}
                          className={`relative inline-flex h-4 w-7 sm:h-4.5 sm:w-8 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            isEnabled ? 'bg-orange-500' : 'bg-slate-300'
                          }`}
                          title={isEnabled ? 'Disable coupon' : 'Enable coupon'}
                        >
                          <span
                            className={`pointer-events-none inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                              isEnabled ? 'translate-x-3.5 sm:translate-x-3.5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {isEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(coupon)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-orange-600 hover:text-orange-700 hover:bg-orange-50 transition-all cursor-pointer"
                        title="Edit coupon"
                      >
                        <SquarePenIcon size={13} animateOnHover={false} />
                        <span>Edit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(coupon)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                        title="Delete coupon"
                      >
                        <TrashIcon size={14} animateOnHover={false} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                No coupons match your search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CouponsTable;
