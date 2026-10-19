import { useState } from 'react';
import { PlusIcon } from '@/icons';
import { toast } from '@/utils/toast';
import {
  INITIAL_ROLES_CONFIG,
  PERMISSION_MODULES,
} from '@/mock/admin/adminSettings.mock';
import { RolesListCard } from './RolesListCard';
import { PermissionsMatrixTable } from './PermissionsMatrixTable';
import { AddCustomRoleModal } from './AddCustomRoleModal';

export const RolesPermissionsTab = () => {
  const [roles, setRoles] = useState(INITIAL_ROLES_CONFIG);
  const [selectedRoleId, setSelectedRoleId] = useState('role-operations');
  const [isAddRoleOpen, setIsAddRoleOpen] = useState(false);

  const selectedRole =
    roles.find((r) => r.id === selectedRoleId) || roles[0];

  const handleTogglePermission = (moduleName, action) => {
    if (selectedRole.isOwner) {
      toast.info('Super Admin permissions cannot be modified');
      return;
    }

    setRoles((prev) =>
      prev.map((role) => {
        if (role.id !== selectedRoleId) return role;

        const currentModPerms = role.permissions[moduleName] || {};
        const isCurrentChecked = Boolean(currentModPerms[action]);

        return {
          ...role,
          permissions: {
            ...role.permissions,
            [moduleName]: {
              ...currentModPerms,
              [action]: !isCurrentChecked,
            },
          },
        };
      })
    );
  };

  const handleCancel = () => {
    const originalRole = INITIAL_ROLES_CONFIG.find(
      (r) => r.id === selectedRoleId
    );
    if (originalRole) {
      setRoles((prev) =>
        prev.map((r) =>
          r.id === selectedRoleId
            ? { ...r, permissions: JSON.parse(JSON.stringify(originalRole.permissions)) }
            : r
        )
      );
    }
    toast.info('Changes discarded');
  };

  const handleSave = () => {
    toast.success(`Permissions for ${selectedRole.name} saved successfully!`);
  };

  const handleCreateCustomRole = ({ name, description, template }) => {
    const templateRole =
      roles.find((r) => r.name.toLowerCase() === template.toLowerCase()) ||
      roles.find((r) => r.id === 'role-operations');

    let newPermissions = {};
    if (template.includes('Blank')) {
      newPermissions = PERMISSION_MODULES.reduce((acc, mod) => {
        acc[mod] = {
          View: false,
          Create: false,
          Edit: false,
          Delete: false,
          Manage: false,
          isLocked: mod === 'Settings & admin access',
        };
        return acc;
      }, {});
    } else if (templateRole) {
      newPermissions = JSON.parse(JSON.stringify(templateRole.permissions));
    }

    const newRole = {
      id: `role-${Date.now()}`,
      name,
      description,
      membersCount: 0,
      memberText: '0 members',
      type: 'Custom role',
      isSystem: false,
      isOwner: false,
      assignedText: 'No members assigned yet. Invite or assign team members in Team & Admins.',
      permissions: newPermissions,
    };

    setRoles((prev) => [...prev, newRole]);
    setSelectedRoleId(newRole.id);
    toast.success(`Role "${name}" created successfully!`);
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Roles & Permissions
            </h2>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
              Marketplace settings
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Define what each role can see and change across Emart.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddRoleOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusIcon size={16} animateOnHover={false} />
          <span>Add custom role</span>
        </button>
      </div>

      {/* Two-Column Master-Detail Layout */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Left Column: Roles list */}
        <div className="w-full lg:w-72 shrink-0">
          <RolesListCard
            roles={roles}
            selectedRoleId={selectedRoleId}
            onSelectRole={setSelectedRoleId}
          />
        </div>

        {/* Right Column: Permissions Matrix Table */}
        <div className="flex-1 min-w-0 w-full">
          <PermissionsMatrixTable
            role={selectedRole}
            permissions={selectedRole.permissions}
            onTogglePermission={handleTogglePermission}
          />
        </div>
      </div>

      {/* Action Footer Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Role changes apply to all assigned members after saving.
        </p>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
          >
            Save permissions
          </button>
        </div>
      </div>

      {/* Add Custom Role Modal */}
      <AddCustomRoleModal
        isOpen={isAddRoleOpen}
        onClose={() => setIsAddRoleOpen(false)}
        onCreateRole={handleCreateCustomRole}
      />
    </div>
  );
};

export default RolesPermissionsTab;
