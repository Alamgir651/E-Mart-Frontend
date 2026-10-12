const STATUS_STYLES = {
  Open: 'bg-rose-50 text-rose-600 border-rose-200/80',
  'In Progress': 'bg-amber-50 text-amber-600 border-amber-200/80',
  Resolved: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
  Closed: 'bg-slate-100 text-slate-600 border-slate-200/80',
};

const PRIORITY_STYLES = {
  High: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Urgent: 'bg-rose-50 text-rose-700 border-rose-200/80',
  Medium: 'bg-slate-100 text-slate-700 border-slate-200/80',
  Low: 'bg-slate-100 text-slate-600 border-slate-200/80',
};

export const TicketMetaCard = ({ ticket }) => {
  const statusClass = STATUS_STYLES[ticket.status] || STATUS_STYLES.Open;
  const priorityClass = PRIORITY_STYLES[ticket.priority] || PRIORITY_STYLES.Medium;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-2 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Ticket ID
          </span>
          <p className="text-sm font-semibold text-slate-900 mt-1">
            #{ticket.id}
          </p>
        </div>

        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Category
          </span>
          <p className="text-sm font-semibold text-slate-800 mt-1">
            {ticket.category}
          </p>
        </div>

        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Status
          </span>
          <span
            className={`inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${statusClass}`}
          >
            {ticket.status}
          </span>
        </div>

        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Priority
          </span>
          <span
            className={`inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${priorityClass}`}
          >
            {ticket.priority || 'Medium'}
          </span>
        </div>

        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Created
          </span>
          <p className="text-sm font-semibold text-slate-800 mt-1">
            {ticket.createdAt}
          </p>
        </div>

        <div>
          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Last Updated
          </span>
          <p className="text-sm font-semibold text-slate-800 mt-1">
            {ticket.updatedAt || ticket.createdAt}
          </p>
        </div>
      </div>

      <div>
        <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Subject
        </span>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mt-1">
          {ticket.subject}
        </h3>
      </div>
    </div>
  );
};

export default TicketMetaCard;
