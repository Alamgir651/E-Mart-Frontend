import { useState, useEffect } from 'react';
import { AdminProfileCard } from './security/AdminProfileCard';
import { TwoFactorAuthCard } from './security/TwoFactorAuthCard';
import { ChangePasswordCard } from './security/ChangePasswordCard';
import { ActiveSessionsCard } from './security/ActiveSessionsCard';
import { TwoFactorModal } from './security/TwoFactorModal';
import { get, post } from '@/services/apiServices';
import { toast } from '@/utils/toast';

export const AccountSecurityTab = () => {
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isDisabling, setIsDisabling] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await get('/auth/admin/2fa/status');
        const data = res?.data || res;
        if (data?.enabled !== undefined) {
          setIs2FAEnabled(Boolean(data.enabled));
        }
      } catch {
        // Fallback or silent if auth pending
      }
    };
    fetchStatus();
  }, []);

  const handleDisable2FA = async () => {
    if (!window.confirm('Are you sure you want to turn off two-factor authentication?')) return;
    setIsDisabling(true);
    try {
      await post('/auth/admin/2fa/disable', {});
      setIs2FAEnabled(false);
      toast.success('Two-factor authentication turned off.');
    } catch (err) {
      toast.error(err?.message || 'Failed to turn off two-factor authentication.');
    } finally {
      setIsDisabling(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="pt-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Account & Security
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/70">
            Your account only
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your profile, sign-in protection and active sessions.
        </p>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <AdminProfileCard />
        <TwoFactorAuthCard
          onOpenSetup={() => setIs2FAModalOpen(true)}
          onDisable2FA={handleDisable2FA}
          is2FAEnabled={is2FAEnabled}
          isLoading={isDisabling}
        />
        <ChangePasswordCard />
        <ActiveSessionsCard />
      </div>

      {/* 2FA Setup Modal */}
      <TwoFactorModal
        isOpen={is2FAModalOpen}
        onClose={() => setIs2FAModalOpen(false)}
        onComplete={() => setIs2FAEnabled(true)}
      />
    </div>
  );
};

export default AccountSecurityTab;
