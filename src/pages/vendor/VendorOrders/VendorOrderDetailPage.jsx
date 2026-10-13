import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { usePortalBase } from '@/utils/usePortalBase';
import { INITIAL_ORDERS } from '@/mock/vendor/vendorOrders.mock';
import CustomerInfoCard from '@/components/vendor/orders/detail/CustomerInfoCard';
import RiderInfoCard from '@/components/vendor/orders/detail/RiderInfoCard';
import OrderSummaryCard from '@/components/vendor/orders/detail/OrderSummaryCard';
import OrderItemsCard from '@/components/vendor/orders/detail/OrderItemsCard';
import OrderStatusStepper from '@/components/vendor/orders/detail/OrderStatusStepper';
import DeliveryProofCard from '@/components/vendor/orders/detail/DeliveryProofCard';
import OrderCancelledCard from '@/components/vendor/orders/detail/OrderCancelledCard';
import { toast } from '@/utils/toast';

const STATUS_PILLS = {
  Completed: 'bg-[#ebf8ee] text-[#16a34a] border-[#bbf7d0]',
  Cancelled: 'bg-rose-50 text-rose-500 border-rose-200',
  'New Order': 'bg-amber-50 text-amber-700 border-amber-200',
  Processing: 'bg-blue-50 text-blue-600 border-blue-200',
  'Ready for Pickup': 'bg-sky-50 text-sky-600 border-sky-200',
  'Out for Delivery': 'bg-orange-50 text-orange-600 border-orange-200',
};

export const VendorOrderDetailPage = () => {
  const { id } = useParams();
  const { getRoute } = usePortalBase();
  const [backRef, backTrigger] = useAnimatedIcon();

  const formattedId = id?.startsWith('#') ? id : `#${id}`;
  const [order, setOrder] = useState(() => {
    return INITIAL_ORDERS.find((o) => o.id === formattedId) || INITIAL_ORDERS[0];
  });
  const isCancelled = order.status === 'Cancelled';

  const handleStatusChange = (newStatus) => {
    setOrder((prev) => ({ ...prev, status: newStatus }));
    toast.success(`Order ${order.id} status updated to: ${newStatus}`);
  };

  const defaultRider = {
    name: 'Usman Khan (R-21)',
    phone: '+92 335 4450667',
    rating: '4.8',
    deliveries: 320,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
  };

  const defaultDeliveryProof = {
    photos: [
      'https://images.unsplash.com/photo-1584473457406-6240486418e9?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b4?w=300&auto=format&fit=crop&q=80',
    ],
    completedAt: '08:15 PM, Sep 22, 2026',
    riderNote: "Please leave the package at the front door near the mailbox. Ring the doorbell once and don't wait. Thank you!",
  };

  return (
    <div className="space-y-4">
      <div>
        <Link
          to={getRoute('/orders')}
          onMouseEnter={backTrigger.onMouseEnter}
          onMouseLeave={backTrigger.onMouseLeave}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors mb-2 cursor-pointer"
        >
          <ArrowLeftIcon ref={backRef} animateOnHover={false} size={14} />
          <span>Back to Orders</span>
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            Order {order.id}
          </h1>

          <span
            className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${
              STATUS_PILLS[order.status] || STATUS_PILLS.Completed
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <CustomerInfoCard
              customer={order.customer}
              phone={order.phone}
              address={order.address}
            />

            {isCancelled ? (
              <OrderCancelledCard order={order} />
            ) : (
              <RiderInfoCard rider={order.rider || defaultRider} />
            )}
          </div>

          <OrderItemsCard items={order.items || []} />

          {!isCancelled && (
            <DeliveryProofCard deliveryProof={order.deliveryProof || defaultDeliveryProof} />
          )}
        </div>

        <div className="lg:col-span-4 space-y-5">
          <OrderSummaryCard order={order} />

          {!isCancelled && (
            <OrderStatusStepper
              currentStatus={order.status}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorOrderDetailPage;
