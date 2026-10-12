import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import {
  ClockIcon,
  BoxesIcon,
  CreditCardIcon,
  CartIcon,
  UserIcon,
  ShieldAlertIcon,
} from '@/icons';

const TOPIC_ICONS = {
  boxes: BoxesIcon,
  creditCard: CreditCardIcon,
  store: CartIcon,
  user: UserIcon,
  alert: ShieldAlertIcon,
};

const TopicItem = ({ topic, onSelect }) => {
  const [iconRef, trigger] = useAnimatedIcon();
  const Icon = TOPIC_ICONS[topic.icon] || BoxesIcon;

  return (
    <div
      onClick={() => onSelect?.(topic.category)}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-orange-50/50 hover:border-orange-200/80 transition-all cursor-pointer flex items-center gap-3.5 group"
    >
      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 text-slate-500 group-hover:text-orange-500 group-hover:border-orange-200 transition-colors flex items-center justify-center shrink-0 shadow-2xs">
        <Icon ref={iconRef} size={17} animateOnHover={false} />
      </div>
      <div className="min-w-0">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
          {topic.title}
        </h4>
        <p className="text-[11px] font-semibold text-slate-400 truncate mt-0.5">
          {topic.desc}
        </p>
      </div>
    </div>
  );
};

export const CommonTopicsCard = ({ topics = [], onSelectCategory }) => {
  const [clockRef, clockTrigger] = useAnimatedIcon();

  return (
    <div
      onMouseEnter={clockTrigger.onMouseEnter}
      onMouseLeave={clockTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <ClockIcon ref={clockRef} size={16} animateOnHover={false} />
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
            Common Topics
          </h3>
          <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
            Quick links to popular help topics
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {topics.map((t) => (
          <TopicItem key={t.id} topic={t} onSelect={onSelectCategory} />
        ))}
      </div>
    </div>
  );
};

export default CommonTopicsCard;
