import { useState } from 'react';
import { toast } from '@/utils/toast';
import { INITIAL_ACTIVE_SESSIONS } from '@/mock/admin/adminSettings.mock';

const MonitorIcon = () => (
  <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
  </svg>
);

export const ActiveSessionsCard = () => {
  const [sessions, setSessions] = useState(INITIAL_ACTIVE_SESSIONS);

  const handleRevoke = (sessionId, deviceName) => {
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    toast.success(`Session for ${deviceName} has been revoked`);
  };

  const handleSignOutOther = () => {
    setSessions((prev) => prev.filter((s) => s.isCurrent));
    toast.success('Signed out of all other sessions');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Active sessions
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {sessions.length} sessions · Review devices signed in to your account.
          </p>
        </div>

        {/* Sessions List */}
        <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-white">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {session.type === 'mobile' ? (
                    <SmartphoneIcon />
                  ) : (
                    <MonitorIcon />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                    {session.device}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {session.location}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {session.time}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                {session.isCurrent ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    This device
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRevoke(session.id, session.device)}
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                  >
                    Revoke
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="space-y-2 pt-4 border-t border-slate-100 mt-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSignOutOther}
            disabled={sessions.length <= 1}
            className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-2xs"
          >
            Sign out other sessions
          </button>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Revoking a session requires confirmation and signs out that device only. Your current session is not affected.
        </p>
      </div>
    </div>
  );
};

export default ActiveSessionsCard;
