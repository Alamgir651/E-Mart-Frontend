export const AdminActionCard = ({
  action = 'Product deactivated',
  performedBy = 'Emart Admin',
  dateTime = '01 Oct 2026, 10:20 AM (UTC)',
  reference = 'ACT-1042-1020',
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        Admin action
      </h3>

      <div className="space-y-3 text-xs">
        <div>
          <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
            Action
          </span>
          <p className="text-slate-800 font-semibold mt-0.5">{action}</p>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
            Performed by
          </span>
          <p className="text-slate-800 font-semibold mt-0.5">{performedBy}</p>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
            Date & time
          </span>
          <p className="text-slate-800 font-semibold mt-0.5">{dateTime}</p>
        </div>

        <div>
          <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">
            Reference
          </span>
          <p className="text-slate-800 font-mono font-semibold mt-0.5">{reference}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminActionCard;
