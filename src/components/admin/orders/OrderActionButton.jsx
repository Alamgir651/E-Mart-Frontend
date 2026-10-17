import { useAnimatedIcon } from '@/utils/useAnimatedIcon';

export const OrderActionButton = ({
  icon: Icon,
  title,
  onClick,
  className = '',
  iconSize = 16,
  children,
  type = 'button',
}) => {
  const [iconRef, trigger] = useAnimatedIcon();

  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      onMouseEnter={trigger.onMouseEnter}
      onMouseLeave={trigger.onMouseLeave}
      className={`inline-flex items-center justify-center transition-all cursor-pointer ${className}`}
    >
      {Icon && <Icon ref={iconRef} animateOnHover={false} size={iconSize} />}
      {children}
    </button>
  );
};

export default OrderActionButton;
