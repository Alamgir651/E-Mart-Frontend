export const PayoutStatusFilterTabs = ({
  activeTab,
  onTabChange,
  stats,
}) => {
  const tabs = [
    { id: 'All', label: 'All Payouts', count: stats.totalCount },
    { id: 'Pending', label: 'Pending', count: stats.pendingCount },
    { id: 'Processing', label: 'Processing', count: stats.processingCount },
    { id: 'Completed', label: 'Completed', count: stats.completedCount },
    { id: 'Rejected', label: 'Rejected', count: stats.rejectedCount },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              isActive
                ? 'bg-orange-600 text-white shadow-2xs font-bold'
                : 'bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-xs px-1.5 py-0.2 rounded-full ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PayoutStatusFilterTabs;
