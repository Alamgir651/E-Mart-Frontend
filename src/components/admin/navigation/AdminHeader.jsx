import { BellIcon, MenuIcon } from '@/icons';

export const AdminHeader = ({ onOpenSidebar }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#faf8f5]/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between border-b border-orange-100/60">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-2 rounded-xl text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors lg:hidden cursor-pointer"
        >
          <MenuIcon size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ml-auto">
        {/* Notification Bell */}
        <button
          type="button"
          className="relative p-2 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:text-orange-600 hover:border-orange-200 shadow-2xs transition-all cursor-pointer"
        >
          <BellIcon size={18} />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
            4
          </span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80"
            alt="Super Admin"
            className="w-9 h-9 rounded-full object-cover border border-orange-200 shadow-2xs"
          />
          <div className="hidden sm:block text-left">
            <span className="text-xs font-semibold text-slate-900 block leading-tight">Admin</span>
            <span className="text-[10px] text-slate-400 font-medium block">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
