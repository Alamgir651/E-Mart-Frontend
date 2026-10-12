import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { MessageSquareIcon } from '@/icons';

export const ConversationThreadCard = ({ messages = [] }) => {
  const [msgRef, msgTrigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={msgTrigger.onMouseEnter}
      onMouseLeave={msgTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <MessageSquareIcon ref={msgRef} size={18} animateOnHover={false} />
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Conversation Thread
        </h2>
      </div>

      <div className="space-y-4">
        {messages.map((m) => {
          const isAgent = m.isSupport;
          return (
            <div
              key={m.id}
              className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                isAgent
                  ? 'bg-orange-50/40 border-orange-200/60'
                  : 'bg-white border-slate-200/70'
              }`}
            >
              <div className="flex items-start gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                  {m.avatar ? (
                    <img
                      src={m.avatar}
                      alt={m.sender}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-orange-500 text-white flex items-center justify-center text-xs font-semibold">
                      {m.sender.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                        {m.sender}
                      </h4>
                      {isAgent && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-orange-100 text-orange-700">
                          {m.role || 'Support Specialist'}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {m.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed mt-2">
                    {m.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationThreadCard;
