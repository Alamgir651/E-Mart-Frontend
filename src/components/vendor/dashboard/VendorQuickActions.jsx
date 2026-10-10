import { useNavigate } from 'react-router-dom';
import {
  PlusIcon,
  BoxesIcon,
  SettingsIcon,
  ReceiptTextIcon,
  BadgePercentIcon,
} from '@/icons';

const ACTIONS = [
  {
    label: 'Add Product',
    icon: PlusIcon,
    bg: 'bg-orange-50/80 hover:bg-orange-100/70 text-orange-600 border border-orange-200/50',
    path: '/vendor/products/new',
  },
  {
    label: 'Manage Stock',
    icon: BoxesIcon,
    bg: 'bg-purple-50/80 hover:bg-purple-100/70 text-purple-600 border border-purple-200/50',
    path: '/vendor/inventory',
  },
  {
    label: 'Store Settings',
    icon: SettingsIcon,
    bg: 'bg-amber-50/80 hover:bg-amber-100/70 text-amber-600 border border-amber-200/50',
    path: '/vendor/settings',
  },
  {
    label: 'View order',
    icon: ReceiptTextIcon,
    bg: 'bg-blue-50/80 hover:bg-blue-100/70 text-blue-600 border border-blue-200/50',
    path: '/vendor/orders',
  },
];

export const VendorQuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Quick Actions
        </h3>
      </div>

      <div className="space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                type="button"
                onClick={() => navigate(action.path)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all active:scale-95 cursor-pointer text-center ${action.bg}`}
              >
                <div className="p-1.5 rounded-lg bg-white/70 shadow-2xs mb-1.5">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-bold leading-tight">{action.label}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => navigate('/vendor/finance')}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-50/80 hover:bg-rose-100/70 text-rose-600 border border-rose-200/50 font-bold text-xs transition-all active:scale-98 cursor-pointer"
        >
          <BadgePercentIcon size={16} />
          <span>View Finance Report</span>
        </button>
      </div>
    </div>
  );
};

export default VendorQuickActions;
