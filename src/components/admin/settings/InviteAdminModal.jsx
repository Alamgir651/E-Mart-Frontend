import { useState } from 'react';
import { XIcon, SendIcon, CheckIcon, LockIcon, MailIcon } from '@/icons';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { ROLE_PERMISSIONS_PREVIEW } from '@/mock/admin/adminSettings.mock';

const ASSIGNABLE_ROLES = [
  'Operations staff',
  'Admin',
  'Support staff',
  'Finance staff',
];

export const InviteAdminModal = ({ isOpen, onClose, onInvite }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Operations staff');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    const initials = fullName
      .trim()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AD';

    const newMember = {
      id: `ADM-${Date.now()}`,
      initials,
      name: fullName.trim(),
      email: email.trim(),
      role,
      status: 'Invited',
      lastActive: 'Not signed in yet',
      isOwner: false,
    };

    onInvite(newMember);
    onClose();
    setFullName('');
    setEmail('');
    setRole('Operations staff');
  };

  const previewInfo = ROLE_PERMISSIONS_PREVIEW[role] || ROLE_PERMISSIONS_PREVIEW['Operations staff'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Invite / Add Admin
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Send an invitation with only the access this person needs.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Body */}
        <form
          id="invite-admin-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-4"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ayesha Khan"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ayesha@emart.example"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              They'll use this email to accept the invitation and sign in.
            </p>
          </div>

          {/* Assign existing role */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Assign existing role
            </label>
            <SelectDropdown
              value={role}
              options={ASSIGNABLE_ROLES}
              onChange={setRole}
              fullWidth
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Owner / Super Admin is not available for invitations.
            </p>
          </div>

          {/* Access preview card */}
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800">
                Access preview
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/60 text-slate-600">
                {previewInfo.badge}
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckIcon size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{previewInfo.permissions[0]}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{previewInfo.permissions[1]}</span>
              </div>
              <div className="flex items-start gap-2">
                <LockIcon size={13} className="text-slate-400 shrink-0 mt-0.5" />
                <span>{previewInfo.permissions[2]}</span>
              </div>
            </div>
          </div>

          {/* Invitation only callout */}
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-3.5 flex items-start gap-2.5">
            <MailIcon size={16} className="text-orange-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-slate-800">
                Invitation only
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Access starts after acceptance. The link expires in 7 days. This is an illustrative invitation; nothing is sent.
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2.5 px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="invite-admin-form"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
          >
            <SendIcon size={13} animateOnHover={false} />
            <span>Send invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteAdminModal;
