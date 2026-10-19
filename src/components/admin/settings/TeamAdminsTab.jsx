import { useState } from 'react';
import { PlusIcon, XIcon, SquarePenIcon, TrashIcon } from '@/icons';
import { toast } from '@/utils/toast';
import { INITIAL_TEAM_ADMINS } from '@/mock/admin/adminSettings.mock';

export const TeamAdminsTab = () => {
  const [team, setTeam] = useState(INITIAL_TEAM_ADMINS);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    name: '',
    email: '',
    role: 'Operations Lead',
  });

  const handleInvite = (e) => {
    e.preventDefault();
    if (!inviteForm.name.trim() || !inviteForm.email.trim()) return;

    const newMember = {
      id: `ADM-${Date.now()}`,
      name: inviteForm.name.trim(),
      email: inviteForm.email.trim(),
      role: inviteForm.role,
      status: 'Pending Invite',
      twoFactor: false,
      lastActive: 'Invited just now',
    };

    setTeam((prev) => [...prev, newMember]);
    setIsInviteOpen(false);
    setInviteForm({ name: '', email: '', role: 'Operations Lead' });
    toast.success(`Invitation sent to ${newMember.email}!`);
  };

  const handleRemove = (id, name) => {
    setTeam((prev) => prev.filter((m) => m.id !== id));
    toast.info(`Removed ${name} from admin team`);
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Team & Admins
            </h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
              Access management
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Invite, manage and audit administrative team members and their permissions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsInviteOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} animateOnHover={false} />
          <span>Invite Admin</span>
        </button>
      </div>

      {/* Team Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Administrative Team
          </h3>
          <span className="text-xs font-medium text-slate-400">
            {team.length} members
          </span>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                <th className="py-3 px-4">Admin Member</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">2FA Security</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {team.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800">
                      {member.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {member.email}
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
                      {member.role}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
                        member.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                          : 'bg-slate-100 text-slate-500 border-slate-200/80'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-xs">
                    {member.twoFactor ? (
                      <span className="text-emerald-600 font-medium">Enabled</span>
                    ) : (
                      <span className="text-slate-400">Disabled</span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {member.lastActive}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {member.role !== 'Super Admin' ? (
                      <button
                        type="button"
                        onClick={() => handleRemove(member.id, member.name)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer"
                        title="Remove admin"
                      >
                        <TrashIcon size={14} animateOnHover={false} />
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-medium italic">
                        Owner
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {isInviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Invite Admin Member
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Send an email invitation with access instructions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsInviteOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <XIcon size={18} />
              </button>
            </div>

            <form onSubmit={handleInvite} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={inviteForm.name}
                  onChange={(e) =>
                    setInviteForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="e.g. Asad Siddiqui"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={inviteForm.email}
                  onChange={(e) =>
                    setInviteForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="asad@emart.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Assigned Role
                </label>
                <select
                  value={inviteForm.role}
                  onChange={(e) =>
                    setInviteForm((p) => ({ ...p, role: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs cursor-pointer"
                >
                  <option value="Operations Lead">Operations Lead</option>
                  <option value="Finance Manager">Finance Manager</option>
                  <option value="Support Lead">Support Lead</option>
                  <option value="Catalog Moderator">Catalog Moderator</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamAdminsTab;
