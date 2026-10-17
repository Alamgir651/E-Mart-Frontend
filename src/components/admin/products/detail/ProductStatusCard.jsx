import { SquarePenIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const ProductStatusCard = ({ product }) => {
  const [editRef, editTrigger] = useAnimatedIcon();

  return (
    <div className="space-y-5">
      {/* Product Status */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">
            Product Status
          </h3>
          <button
            type="button"
            onMouseEnter={editTrigger.onMouseEnter}
            onMouseLeave={editTrigger.onMouseLeave}
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:underline cursor-pointer"
          >
            <SquarePenIcon ref={editRef} animateOnHover={false} size={12} />
            <span>Edit</span>
          </button>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Status</span>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                product.status === 'Active'
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                  : 'bg-rose-50 text-rose-600 border-rose-200/80'
              }`}
            >
              {product.status}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Featured Product</span>
            <span className="font-semibold text-slate-800">No</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Visibility</span>
            <span className="font-semibold text-slate-800">In Store</span>
          </div>
        </div>
      </div>

      {/* Active Discounts */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Active Discounts
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                <th className="pb-2">Type</th>
                <th className="pb-2 text-center">Value</th>
                <th className="pb-2 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr>
                <td className="py-2">Percentage</td>
                <td className="py-2 text-center font-bold text-slate-900">10%</td>
                <td className="py-2 text-right">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductStatusCard;
