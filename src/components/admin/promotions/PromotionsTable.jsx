import { SquarePenIcon, TrashIcon } from '@/icons';

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

export const PromotionsTable = ({
  deals,
  onEdit,
  onDelete,
  onTogglePublish,
}) => {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Deal Type</th>
            <th className="py-3 px-4">Duration</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Publish state</th>
            <th className="py-3 px-4">Active products</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
          {deals.length > 0 ? (
            deals.map((deal) => {
              const activeCount = deal.activeProductsCount ?? deal.productIds?.length ?? 0;
              return (
                <tr
                  key={deal.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {/* Title */}
                  <td className="py-3.5 px-4">
                    <button
                      type="button"
                      onClick={() => onEdit(deal)}
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors text-left cursor-pointer"
                    >
                      {deal.title}
                    </button>
                  </td>

                  {/* Deal Type */}
                  <td className="py-3.5 px-4 text-slate-600 font-medium">
                    {deal.dealType}
                  </td>

                  {/* Duration */}
                  <td className="py-3.5 px-4 text-slate-500 font-medium text-xs leading-relaxed">
                    {deal.durationDisplay || `${deal.startDate} to ${deal.endDate}`}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${getStatusBadgeClass(
                        deal.status
                      )}`}
                    >
                      {deal.status}
                    </span>
                  </td>

                  {/* Publish State Toggle */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col items-start gap-1">
                      <button
                        type="button"
                        onClick={() => onTogglePublish(deal.id)}
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          deal.published ? 'bg-orange-500' : 'bg-slate-300'
                        }`}
                        title={deal.published ? 'Unpublish deal' : 'Publish deal'}
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            deal.published ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {deal.published ? 'Published' : 'Unpublished'}
                      </span>
                    </div>
                  </td>

                  {/* Active Products Count */}
                  <td className="py-3.5 px-4">
                    <button
                      type="button"
                      onClick={() => onEdit(deal)}
                      className="text-left font-medium text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
                      title="Manage products in modal"
                    >
                      <span className="font-semibold text-slate-800">{activeCount}</span>{' '}
                      <span className="text-slate-500 text-xs">
                        {activeCount === 0 ? 'No products' : 'products'}
                      </span>
                    </button>
                  </td>

                  {/* Actions Column (NO + Add Products button, per user instruction) */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(deal)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-all cursor-pointer"
                        title="Edit deal and manage products"
                      >
                        <SquarePenIcon size={14} animateOnHover={false} />
                        <span>Edit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(deal)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                        title="Delete deal"
                      >
                        <TrashIcon size={15} animateOnHover={false} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                No deals match your search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PromotionsTable;
