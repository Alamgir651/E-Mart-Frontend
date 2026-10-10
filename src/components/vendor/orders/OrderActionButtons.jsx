import { CheckIcon, XIcon, EyeIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

const ActionButton = ({ onClick, title, className, icon: Icon }) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all cursor-pointer active:scale-90 ${className}`}
    >
      <Icon ref={iconRef} animateOnHover={false} size={14} />
    </button>
  );
};

export const OrderActionButtons = ({ isNew, onAccept, onReject, onView }) => {
  return (
    <div className="flex items-center justify-end gap-1.5">
      {isNew && (
        <>
          <ActionButton
            title="Accept Order"
            onClick={onAccept}
            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200/60"
            icon={CheckIcon}
          />
          <ActionButton
            title="Reject Order"
            onClick={onReject}
            className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/60"
            icon={XIcon}
          />
        </>
      )}

      <ActionButton
        title="View Order"
        onClick={onView}
        className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200/60"
        icon={EyeIcon}
      />
    </div>
  );
};

export default OrderActionButtons;
