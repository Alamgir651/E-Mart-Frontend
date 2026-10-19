import { CheckIcon, LockIcon } from '@/icons';
import {
  PERMISSION_MODULES,
  PERMISSION_ACTIONS,
} from '@/mock/admin/adminSettings.mock';

export const PermissionsMatrixTable = ({
  role,
  permissions = {},
  onTogglePermission,
}) => {
  if (!role) return null;

  const isOwner = role.isOwner;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Role Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-2 border-b border-slate-100">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {role.name}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            {role.description}
          </p>
        </div>

        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold self-start shrink-0 border ${
            role.type === 'System role'
              ? 'bg-slate-100 text-slate-600 border-slate-200'
              : 'bg-orange-50 text-orange-600 border-orange-200/60'
          }`}
        >
          {role.type}
        </span>
      </div>

      {/* Legend line */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <span className="w-4 h-4 rounded bg-orange-500 text-white flex items-center justify-center shrink-0">
          <CheckIcon size={11} strokeWidth={3} animateOnHover={false} />
        </span>
        <span>Checked = allowed · Empty = not allowed · Lock = owner-only</span>
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[560px]">
          <thead>
            <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50/50">
              <th className="py-2.5 px-4 text-left">Module</th>
              {PERMISSION_ACTIONS.map((action) => (
                <th key={action} className="py-2.5 px-3 text-center">
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {PERMISSION_MODULES.map((moduleName) => {
              const isSettingsModule = moduleName === 'Settings & admin access';
              const modulePerms = permissions[moduleName] || {};

              return (
                <tr
                  key={moduleName}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  <td className="py-2.5 px-4 font-medium text-slate-700">
                    {moduleName}
                  </td>

                  {PERMISSION_ACTIONS.map((action) => {
                    if (isSettingsModule) {
                      return (
                        <td key={action} className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center">
                            <LockIcon
                              size={13}
                              className="text-slate-400"
                              animateOnHover={false}
                            />
                          </div>
                        </td>
                      );
                    }

                    const isChecked = Boolean(modulePerms[action]);

                    return (
                      <td key={action} className="py-2.5 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <button
                            type="button"
                            disabled={isOwner}
                            onClick={() =>
                              !isOwner &&
                              onTogglePermission(moduleName, action)
                            }
                            className={`w-4.5 h-4.5 rounded-md flex items-center justify-center transition-all ${
                              isOwner
                                ? 'cursor-not-allowed opacity-90'
                                : 'cursor-pointer hover:scale-105 active:scale-95'
                            } ${
                              isChecked
                                ? 'bg-orange-500 text-white shadow-2xs'
                                : 'border border-slate-300 bg-white hover:border-orange-400'
                            }`}
                          >
                            {isChecked && (
                              <CheckIcon
                                size={12}
                                strokeWidth={3}
                                animateOnHover={false}
                              />
                            )}
                          </button>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Explanatory Footnotes */}
      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
        <p className="text-slate-400 leading-relaxed">
          Manage covers module-level approvals and configuration. It never grants settings or admin access. Unchecked modules are hidden for this role.
        </p>
        <p className="text-slate-500 font-medium leading-relaxed">
          {role.assignedText}
        </p>
      </div>
    </div>
  );
};

export default PermissionsMatrixTable;
