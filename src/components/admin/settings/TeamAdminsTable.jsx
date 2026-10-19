import { useState, useRef, useEffect } from 'react';
import { SearchIcon, LockIcon, MoreVerticalIcon } from '@/icons';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { TEAM_ROLES, TEAM_STATUSES } from '@/mock/admin/adminSettings.mock';

const getStatusBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
    case 'Invited':
      return 'bg-amber-50 text-amber-600 border-amber-200/80';
    case 'Suspended':
    default:
      return 'bg-slate-100 text-slate-500 border-slate-200/80';
  }
};

const getAvatarBg = (initials) => {
  switch (initials) {
    case 'AD':
      return 'bg-amber-100 text-amber-800';
    case 'BA':
      return 'bg-blue-100 text-blue-800';
    case 'SA':
      return 'bg-orange-100 text-orange-800';
    case 'HN':
      return 'bg-emerald-100 text-emerald-800';
    case 'NH':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

export const TeamAdminsTable = ({
  team,
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedStatus,
  onStatusChange,
  onChangeRole,
  onResendInvite,
  onToggleSuspend,
  onRemoveMember,
}) => {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-4">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <SearchIcon
            size={16}
            animateOnHover={false}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or email"
            className="w-full pl-10 pr-4 py-2 bg-slate-50/70 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500 transition-all shadow-2xs"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <SelectDropdown
            value={selectedRole}
            options={TEAM_ROLES}
            onChange={onRoleChange}
            menuWidth="w-48"
          />

          <SelectDropdown
            value={selectedStatus}
            options={TEAM_STATUSES}
            onChange={onStatusChange}
            menuWidth="w-36"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Member</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Last activity</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {team.length > 0 ? (
              team.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  {/* Member info */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${getAvatarBg(
                          member.initials
                        )}`}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {member.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-3.5 px-4 text-slate-700 font-medium">
                    {member.role}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(
                        member.status
                      )}`}
                    >
                      {member.status}
                    </span>
                  </td>

                  {/* Last Activity */}
                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {member.lastActive}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right relative">
                    {member.isOwner ? (
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <LockIcon size={13} className="text-slate-400" />
                        <span>Protected owner</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-end gap-2">
                        {member.status === 'Invited' ? (
                          <button
                            type="button"
                            onClick={() => onResendInvite(member)}
                            className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                          >
                            Resend invite
                          </button>
                        ) : member.status === 'Suspended' ? (
                          <button
                            type="button"
                            onClick={() => onChangeRole(member)}
                            className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                          >
                            Review access
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => onChangeRole(member)}
                            className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                          >
                            Change role
                          </button>
                        )}

                        {/* More menu trigger */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMenuId(
                                activeMenuId === member.id ? null : member.id
                              )
                            }
                            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
                          >
                            <MoreVerticalIcon size={14} />
                          </button>

                          {activeMenuId === member.id && (
                            <div
                              ref={menuRef}
                              className="absolute right-0 top-full mt-1 w-40 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-30 text-left text-xs"
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMenuId(null);
                                  onChangeRole(member);
                                }}
                                className="w-full px-3 py-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer text-left font-medium"
                              >
                                Change role
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMenuId(null);
                                  onToggleSuspend(member.id);
                                }}
                                className="w-full px-3 py-1.5 text-slate-700 hover:bg-slate-50 cursor-pointer text-left font-medium"
                              >
                                {member.status === 'Suspended'
                                  ? 'Activate account'
                                  : 'Suspend access'}
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMenuId(null);
                                  onRemoveMember(member.id, member.name);
                                }}
                                className="w-full px-3 py-1.5 text-rose-600 hover:bg-rose-50 cursor-pointer text-left font-medium"
                              >
                                Remove member
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-slate-400 text-sm"
                >
                  No team members match your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
        <div>Showing all {team.length} team members</div>
        <div>Illustrative accounts · All times PKT</div>
      </div>
    </div>
  );
};

export default TeamAdminsTable;
