import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SETTINGS_TABS } from '@/mock/admin/adminSettings.mock';
import { GeneralBrandingTab } from '@/components/admin/settings/GeneralBrandingTab';
import { TeamAdminsTab } from '@/components/admin/settings/TeamAdminsTab';
import { RolesPermissionsTab } from '@/components/admin/settings/RolesPermissionsTab';
import { CommissionFeesTab } from '@/components/admin/settings/CommissionFeesTab';
import { AdminNotificationSettingsTab } from '@/components/admin/settings/AdminNotificationSettingsTab';
import { AccountSecurityTab } from '@/components/admin/settings/AccountSecurityTab';

const TAB_PARAM_MAP = {
  general: 'General & Branding',
  team: 'Team & Admins',
  roles: 'Roles & Permissions',
  commission: 'Commission & Delivery Fees',
  notifications: 'Notifications',
  security: 'Account & Security',
};

const REVERSE_TAB_PARAM_MAP = {
  'General & Branding': 'general',
  'Team & Admins': 'team',
  'Roles & Permissions': 'roles',
  'Commission & Delivery Fees': 'commission',
  'Notifications': 'notifications',
  'Account & Security': 'security',
};

export const AdminSettingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramTab = searchParams.get('tab');
  const matchedTab = paramTab ? TAB_PARAM_MAP[paramTab.toLowerCase()] : null;

  const [activeTab, setActiveTab] = useState(matchedTab || 'Team & Admins');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    const slug = REVERSE_TAB_PARAM_MAP[tab] || 'team';
    setSearchParams({ tab: slug });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your marketplace, team access and personal preferences.
        </p>
      </div>

      {/* Horizontal Navigation Tabs */}
      <div className="bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1 min-w-max">
          {SETTINGS_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => handleSelectTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-50/90 text-orange-600 shadow-xs border border-orange-200/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab View */}
      {activeTab === 'General & Branding' && <GeneralBrandingTab />}
      {activeTab === 'Team & Admins' && <TeamAdminsTab />}
      {activeTab === 'Roles & Permissions' && <RolesPermissionsTab />}
      {activeTab === 'Commission & Delivery Fees' && <CommissionFeesTab />}
      {activeTab === 'Notifications' && <AdminNotificationSettingsTab />}
      {activeTab === 'Account & Security' && <AccountSecurityTab />}
    </div>
  );
};

export default AdminSettingsPage;
