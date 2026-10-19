export const TeamAdminsKPIs = ({ team = [] }) => {
  const totalCount = team.length;
  const activeCount = team.filter((m) => m.status === 'Active').length;
  const invitedCount = team.filter((m) => m.status === 'Invited').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Total Team Members */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <span className="text-xs font-medium text-slate-500">
          Team members
        </span>
        <div className="my-2">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {totalCount}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Includes invited and suspended accounts
        </p>
      </div>

      {/* Active Accounts */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <span className="text-xs font-medium text-slate-500">
          Active accounts
        </span>
        <div className="my-2">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {activeCount}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Can sign in with assigned permissions
        </p>
      </div>

      {/* Pending Invitations */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <span className="text-xs font-medium text-slate-500">
          Pending invitation
        </span>
        <div className="my-2">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {invitedCount}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Expires 7 days after it is sent
        </p>
      </div>
    </div>
  );
};

export default TeamAdminsKPIs;
