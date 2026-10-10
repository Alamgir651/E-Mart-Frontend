import { BellIcon, MenuIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const VendorHeader = ({ onOpenSidebar, storeName = 'Fresh Mart', userName = 'User Name' }) => {
  const [bellRef, bellTrigger] = useAnimatedIcon();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          type="button"
          className="p-2 -ml-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors lg:hidden"
          aria-label="Open sidebar"
        >
          <MenuIcon size={22} />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Good Morning! {userName}</span>
            <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Here's what's happening with your store today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onMouseEnter={bellTrigger.onMouseEnter}
          onMouseLeave={bellTrigger.onMouseLeave}
          className="relative p-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:border-orange-200 hover:bg-orange-50/40 text-slate-600 hover:text-orange-600 transition-all cursor-pointer"
          aria-label="Notifications"
        >
          <BellIcon ref={bellRef} size={19} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
            alt={storeName}
            className="w-8 h-8 rounded-full object-cover ring-1 ring-orange-200"
          />
          <div className="hidden sm:block text-left leading-none">
            <p className="text-xs font-bold text-slate-800">{storeName}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Seller</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;
