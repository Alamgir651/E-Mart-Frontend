export const NotificationChannelRow = ({
  category,
  settings,
  onToggle,
}) => {
  const channels = ['inApp', 'email', 'push'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center py-4 px-3 sm:px-4 hover:bg-slate-50/60 transition-colors gap-3 md:gap-0">
      <div className="md:col-span-6 pr-4">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
          {category.title}
        </h4>
        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="md:col-span-6 grid grid-cols-3 gap-2">
        {channels.map((ch) => {
          const isOn = !!settings?.[ch];
          return (
            <div
              key={ch}
              className="flex items-center justify-start md:justify-center gap-2"
            >
              <button
                type="button"
                onClick={() => onToggle(category.id, ch)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isOn ? 'bg-orange-500' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    isOn ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-xs font-medium min-w-[20px] select-none ${
                  isOn ? 'text-slate-800' : 'text-slate-400'
                }`}
              >
                {isOn ? 'On' : 'Off'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationChannelRow;
