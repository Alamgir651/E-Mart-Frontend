export const AdminOrdersTabs = ({
  activeTab,
  onTabChange,
  vendorsCount,
  tabCounts,
}) => {
  const tabs = [
    { id: 'by-vendor', label: 'Orders by Vendor', count: vendorsCount },
    { id: 'all', label: 'All Orders', count: tabCounts.allCount },
    { id: 'new', label: 'New Orders', count: tabCounts.newCount },
    { id: 'completed', label: 'Completed', count: tabCounts.completedCount },
    { id: 'cancelled', label: 'Cancelled', count: tabCounts.cancelledCount },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-1">
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] -mb-[1px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AdminOrdersTabs;
