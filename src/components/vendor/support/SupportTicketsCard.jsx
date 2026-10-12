import { Link, useNavigate } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { TicketIcon, PlusIcon } from '@/icons';

const STATUS_CONFIG = {
  Open: 'bg-rose-50 text-rose-600 border-rose-200/80',
  'In Progress': 'bg-amber-50 text-amber-600 border-amber-200/80',
  Resolved: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Closed: 'bg-slate-100 text-slate-600 border-slate-200/80',
};

export const SupportTicketsCard = ({ tickets = [] }) => {
  const navigate = useNavigate();
  const [ticketRef, ticketTrigger] = useAnimatedIcon();
  const [plusRef, plusTrigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={ticketTrigger.onMouseEnter}
      onMouseLeave={ticketTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-5"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <TicketIcon ref={ticketRef} size={18} animateOnHover={false} />
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Support Tickets
          </h2>
        </div>

        <button
          type="button"
          onClick={() => navigate('/vendor/support/new')}
          onMouseEnter={plusTrigger.onMouseEnter}
          onMouseLeave={plusTrigger.onMouseLeave}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
        >
          <PlusIcon ref={plusRef} size={15} animateOnHover={false} />
          <span>New Ticket</span>
        </button>
      </div>

      <div className="overflow-x-auto -mx-5 sm:mx-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-4 sm:px-3 font-semibold">#</th>
              <th className="py-3 px-4 font-semibold">Subject</th>
              <th className="py-3 px-4 font-semibold">Category</th>
              <th className="py-3 px-4 font-semibold text-center">Status</th>
              <th className="py-3 px-4 font-semibold">Created</th>
              <th className="py-3 px-4 sm:px-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700">
            {tickets.map((ticket) => {
              const statusClass = STATUS_CONFIG[ticket.status] || STATUS_CONFIG.Open;
              return (
                <tr
                  key={ticket.id}
                  className="hover:bg-slate-50/70 transition-colors group"
                >
                  <td className="py-3.5 px-4 sm:px-3 text-slate-400 font-semibold">
                    #{ticket.id}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {ticket.subject}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-semibold">
                    {ticket.category}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${statusClass}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-semibold whitespace-nowrap">
                    {ticket.createdAt}
                  </td>
                  <td className="py-3.5 px-4 sm:px-3 text-right">
                    <Link
                      to={`/vendor/support/${ticket.id}`}
                      className="text-orange-600 hover:text-orange-700 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicketsCard;
