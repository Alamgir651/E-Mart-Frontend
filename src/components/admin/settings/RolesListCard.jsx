import { LockIcon, ShieldAlertIcon } from '@/icons';

export const RolesListCard = ({
  roles = [],
  selectedRoleId,
  onSelectRole,
}) => {
  return (
    <div className="space-y-4">
      {/* Roles List Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 shadow-xs">
        <div className="px-2 pb-2 text-xs font-semibold text-slate-400">
          {roles.length} roles
        </div>

        <div className="space-y-1.5">
          {roles.map((role) => {
            const isSelected = role.id === selectedRoleId;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => onSelectRole(role.id)}
                className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-orange-50/80 border border-orange-200/90 text-orange-900 shadow-2xs'
                    : 'hover:bg-slate-50 border border-transparent text-slate-700'
                }`}
              >
                <div>
                  <div
                    className={`text-xs sm:text-sm font-semibold ${
                      isSelected ? 'text-orange-600' : 'text-slate-800'
                    }`}
                  >
                    {role.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {role.memberText} · {role.type}
                  </div>
                </div>

                {role.isOwner && (
                  <LockIcon size={14} className="text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Owner-only access callout */}
      <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3">
        <ShieldAlertIcon size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs sm:text-sm font-semibold text-slate-800">
            Owner-only access
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Only the Owner / Super Admin manages marketplace settings, invitations and role assignments. This system role always has full control and cannot be edited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RolesListCard;
