import { NavLink } from 'react-router-dom';
import logoImg from '@/assets/images/logo.png';
import boxImg from '@/assets/images/box.png';
import {
  LayoutGridIcon,
  ReceiptTextIcon,
  BoxesIcon,
  ArchiveIcon,
  WalletIcon,
  ChartColumnIncreasingIcon,
  CartIcon,
  BellIcon,
  SettingsIcon,
  CircleHelpIcon,
  XIcon,
} from '@/icons';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/vendor/dashboard', icon: LayoutGridIcon },
  { label: 'Orders', path: '/vendor/orders', icon: ReceiptTextIcon },
  { label: 'Products', path: '/vendor/products', icon: BoxesIcon },
  { label: 'Inventory', path: '/vendor/inventory', icon: ArchiveIcon },
  { label: 'Finance', path: '/vendor/finance', icon: WalletIcon },
  { label: 'Report & Analytics', path: '/vendor/analytics', icon: ChartColumnIncreasingIcon },
  { label: 'Store Management', path: '/vendor/store', icon: CartIcon },
  { label: 'Notifications', path: '/vendor/notifications', icon: BellIcon, badge: 3 },
  { label: 'Settings', path: '/vendor/settings', icon: SettingsIcon },
  { label: 'Support', path: '/vendor/support', icon: CircleHelpIcon },
];

export const VendorSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-[#fbf9f5] border-r border-slate-200/80 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/50">
          <NavLink to="/vendor/dashboard" className="flex items-center gap-2">
            <img src={logoImg} alt="E-Mart" className="h-10 w-auto object-contain" />
          </NavLink>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden"
          >
            <XIcon size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                      : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className={`transition-colors ${
                          isActive ? 'text-white' : 'text-slate-500 group-hover:text-orange-600'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
                          isActive
                            ? 'bg-white text-orange-600'
                            : 'bg-rose-500 text-white'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4">
          <div className="relative overflow-hidden rounded-2xl bg-amber-50/90 border border-amber-200/60 p-4 shadow-sm">
            <div className="pr-16">
              <h4 className="text-xs font-black text-slate-800 leading-snug">
                Grow Your Business with Emart
              </h4>
              <button
                type="button"
                className="mt-3 px-3 py-1.5 text-[11px] font-bold text-white bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all rounded-lg shadow-xs"
              >
                Add Product
              </button>
            </div>
            <img
              src={boxImg}
              alt="Promo Box"
              className="absolute -right-1 bottom-1 w-20 h-auto object-contain pointer-events-none drop-shadow-md"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default VendorSidebar;
