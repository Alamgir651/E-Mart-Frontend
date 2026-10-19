import { useState } from 'react';
import { toast } from '@/utils/toast';

const INITIAL_ROLES = [
  {
    id: 'role-1',
    name: 'Super Admin',
    description: 'Full unrestricted access to all marketplace settings, users, and financials.',
    membersCount: 1,
    permissions: {
      manageVendors: true,
      manageRiders: true,
      manageOrders: true,
      manageProducts: true,
      managePayouts: true,
      managePromotions: true,
      manageSettings: true,
    },
  },
  {
    id: 'role-2',
    name: 'Operations Lead',
    description: 'Can onboard vendors, approve products, manage orders and monitor rider fulfillment.',
    membersCount: 1,
    permissions: {
      manageVendors: true,
      manageRiders: true,
      manageOrders: true,
      manageProducts: true,
      managePayouts: false,
      managePromotions: true,
      manageSettings: false,
    },
  },
  {
    id: 'role-3',
    name: 'Finance Manager',
    description: 'Full access to payout disbursements, marketplace commission and financial reconciliation.',
    membersCount: 1,
    permissions: {
      manageVendors: false,
      manageRiders: false,
      manageOrders: true,
      manageProducts: false,
      managePayouts: true,
      managePromotions: false,
      manageSettings: false,
    },
  },
  {
    id: 'role-4',
    name: 'Support Lead',
    description: 'Dedicated access to customer support tickets, order dispute inquiries and complaints.',
    membersCount: 1,
    permissions: {
      manageVendors: false,
      manageRiders: false,
      manageOrders: true,
      manageProducts: false,
      managePayouts: false,
      managePromotions: false,
      manageSettings: false,
    },
  },
];

export const RolesPermissionsTab = () => {
  const [roles, setRoles] = useState(INITIAL_ROLES);

  const handleTogglePermission = (roleId, permissionKey) => {
    setRoles((prev) =>
      prev.map((r) => {
        if (r.id !== roleId || r.name === 'Super Admin') return r;
        return {
          ...r,
          permissions: {
            ...r.permissions,
            [permissionKey]: !r.permissions[permissionKey],
          },
        };
      })
    );
    toast.success('Role permission updated!');
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Roles & Permissions
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
            Access control
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Configure authority levels and restrict sensitive operations per administrative role.
        </p>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {role.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {role.description}
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                {role.membersCount} member{role.membersCount > 1 ? 's' : ''}
              </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                Permission Scopes
              </span>

              {Object.entries(role.permissions).map(([key, enabled]) => {
                const label = key
                  .replace('manage', 'Manage ')
                  .replace(/([A-Z])/g, ' $1')
                  .trim();

                const isSuperAdmin = role.name === 'Super Admin';

                return (
                  <div
                    key={key}
                    className="flex items-center justify-between py-1 text-xs"
                  >
                    <span className="text-slate-600 font-medium">{label}</span>
                    <button
                      type="button"
                      disabled={isSuperAdmin}
                      onClick={() => handleTogglePermission(role.id, key)}
                      className={`relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        enabled ? 'bg-orange-500' : 'bg-slate-300'
                      } ${isSuperAdmin ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                          enabled ? 'translate-x-3' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesPermissionsTab;
