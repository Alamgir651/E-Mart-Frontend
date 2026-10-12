import { useState } from 'react';
import { XIcon, CheckIcon } from '@/icons';

const DEFAULT_SETTINGS = [
  { id: 'orders', title: 'New Orders', desc: 'Get notified immediately when a customer places an order', enabled: true },
  { id: 'stock', title: 'Low Stock Alerts', desc: 'Receive warnings when inventory falls below minimum threshold', enabled: true },
  { id: 'payouts', title: 'Payout Updates', desc: 'Alerts when earnings are transferred to your bank account', enabled: true },
  { id: 'admin', title: 'Admin Actions', desc: 'Critical alerts regarding product status or account updates', enabled: true },
  { id: 'reviews', title: 'Customer Reviews', desc: 'Feedback and ratings submitted by buyers', enabled: false },
];

export const NotificationSettingsModal = ({ isOpen, onClose, onSave }) => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  if (!isOpen) return null;

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Notification Settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="divide-y divide-slate-100">
            {settings.map((item) => (
              <div key={item.id} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {item.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleSetting(item.id)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                    item.enabled ? 'bg-orange-500' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`block w-5 h-5 bg-white rounded-full shadow-xs transition-transform absolute top-0.5 ${
                      item.enabled ? 'left-5.5' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onSave?.(settings)}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsModal;
