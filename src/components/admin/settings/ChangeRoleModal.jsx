import { useState, useEffect } from 'react';
import { XIcon, CheckIcon, LockIcon } from '@/icons';
import { SelectDropdown } from '@/components/common/SelectDropdown';
import { ROLE_PERMISSIONS_PREVIEW } from '@/mock/admin/adminSettings.mock';

const ASSIGNABLE_ROLES = [
  'Operations staff',
  'Admin',
  'Support staff',
  'Finance staff',
];

export const ChangeRoleModal = ({ isOpen, onClose, member, onSaveRole }) => {
  const [selectedRole, setSelectedRole] = useState('Operations staff');

  useEffect(() => {
    if (member) {
      setSelectedRole(member.role === 'Owner / Super Admin' ? 'Admin' : member.role);
    }
  }, [member]);

  if (!isOpen || !member) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveRole(member.id, selectedRole);
    onClose();
  };

  const previewInfo =
    ROLE_PERMISSIONS_PREVIEW[selectedRole] ||
    ROLE_PERMISSIONS_PREVIEW['Operations staff'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">Change Role</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Update permissions for <span className="font-semibold text-slate-800">{member.name}</span>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Assign New Role
            </label>
            <SelectDropdown
              value={selectedRole}
              options={ASSIGNABLE_ROLES}
              onChange={setSelectedRole}
              fullWidth
            />
          </div>

          {/* Access preview */}
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

          <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
            >
              Update Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeRoleModal;
