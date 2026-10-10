export const OrdersHeader = ({
  activeTab = 'all',
  onTabChange,
  counts = { all: 24, new: 5, completed: 18, cancelled: 2 },
}) => {
  const tabs = [
    { id: 'all', label: 'All Orders', count: counts.all },
    { id: 'new', label: 'New Orders', count: counts.new },
    { id: 'completed', label: 'Completed', count: counts.completed },
    { id: 'cancelled', label: 'Cancelled', count: counts.cancelled },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Orders
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Manage and track all your orders in one place.
        </p>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200/80 overflow-x-auto pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 pb-2.5 px-1 sm:px-2 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-orange-600'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tab.count}
              </span>

              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersHeader;
