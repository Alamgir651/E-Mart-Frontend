import OrderDetailHeader from './detail/OrderDetailHeader';
import OrderTimelineTracker from './detail/OrderTimelineTracker';
import OrderInfoCard from './detail/OrderInfoCard';
import OrderItemsCard from './detail/OrderItemsCard';
import OrderVendorCard from './detail/OrderVendorCard';
import OrderCustomerCard from './detail/OrderCustomerCard';
import OrderTrackingCard from './detail/OrderTrackingCard';
import OrderRiderCard from './detail/OrderRiderCard';
import OrderProofCard from './detail/OrderProofCard';
import OrderPaymentCard from './detail/OrderPaymentCard';

export const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#fbf9f6] rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-6 max-h-[92vh] overflow-y-auto [scrollbar-width:thin]"
      >
        {/* Top Header Card */}
        <OrderDetailHeader order={order} onClose={onClose} />

        {/* Progress Tracker Bar */}
        <OrderTimelineTracker order={order} />

        {/* Row 1: Order Information | Items | Vendor Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <OrderInfoCard order={order} />
          <OrderItemsCard items={order.items} />
          <OrderVendorCard vendor={order.vendor} />
        </div>

        {/* Row 2: Customer Information | Delivery Tracking | Rider Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <OrderCustomerCard customer={order.customer} />
          <OrderTrackingCard
            tracking={order.deliveryTracking}
            defaultVendorName={order.vendor?.name}
            defaultCustomerName={order.customer?.name}
            isCompleted={order.status === 'Completed'}
          />
          <OrderRiderCard rider={order.rider} />
        </div>

        {/* Row 3: Delivery Proof & Payment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <OrderProofCard deliveryProof={order.deliveryProof} />
          <OrderPaymentCard order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
