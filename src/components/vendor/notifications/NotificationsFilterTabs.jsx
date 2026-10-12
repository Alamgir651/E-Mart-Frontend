export const NotificationsFilterTabs = ({
  tabs = [],
  activeTab = 'all',
  onTabChange,
  onMarkAllAsRead,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80">
      <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-orange-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.label}</span>{' '}
              <span className={isActive ? 'text-orange-600' : 'text-slate-400'}>
                ({tab.count})
              </span>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onMarkAllAsRead}
        className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 cursor-pointer pb-2 sm:pb-3 self-end sm:self-auto transition-colors"
      >
        Mark all as read
      </button>
    </div>
  );
};

export default NotificationsFilterTabs;
