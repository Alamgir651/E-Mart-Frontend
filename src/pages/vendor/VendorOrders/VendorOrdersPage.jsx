import { useState, useMemo } from 'react';
import { INITIAL_ORDERS } from '@/mock/vendor/vendorOrders.mock';
import OrdersHeader from '@/components/vendor/orders/OrdersHeader';
import OrdersFilterBar from '@/components/vendor/orders/OrdersFilterBar';
import OrdersTable from '@/components/vendor/orders/OrdersTable';
import AcceptOrderModal from '@/components/vendor/orders/AcceptOrderModal';
import RejectOrderModal from '@/components/vendor/orders/RejectOrderModal';
import { toast } from '@/utils/toast';

export const VendorOrdersPage = () => {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('Date Range');
  const [acceptModal, setAcceptModal] = useState({ isOpen: false, order: null });
  const [rejectModal, setRejectModal] = useState({ isOpen: false, order: null });

  const counts = useMemo(
    () => ({
      all: orders.length,
      new: orders.filter((o) => o.status === 'New Order').length,
      completed: orders.filter((o) => o.status === 'Completed').length,
      cancelled: orders.filter((o) => o.status === 'Cancelled').length,
    }),
    [orders]
  );

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      if (activeTab === 'new' && order.status !== 'New Order') return false;
      if (activeTab === 'completed' && order.status !== 'Completed') return false;
      if (activeTab === 'cancelled' && order.status !== 'Cancelled') return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = order.id.toLowerCase().includes(q);
        const matchesCustomer = order.customer.toLowerCase().includes(q);
        const matchesPhone = order.phone?.includes(q);
        if (!matchesId && !matchesCustomer && !matchesPhone) return false;
      }
      return true;
    });
  }, [orders, activeTab, searchQuery]);

  const handleConfirmAccept = ({ orderId, prepTime }) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: 'Processing', prepTime: prepTime || 20 } : o
      )
    );
    setAcceptModal({ isOpen: false, order: null });
    toast.success(`Order ${orderId} accepted! Moved to Processing.`);
  };

  const handleConfirmReject = ({ orderId, reason, note }) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'Cancelled',
              cancelReason: reason,
              cancelNote: note,
              cancelledAt: 'Just now',
            }
          : o
      )
    );
    setRejectModal({ isOpen: false, order: null });
    toast.info(`Order ${orderId} rejected.`);
  };

  return (
    <div className="space-y-5">
      <OrdersHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={counts}
      />

      <OrdersFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        totalOrders={filteredOrders.length}
      />

      <OrdersTable
        orders={filteredOrders}
        onAccept={(order) => setAcceptModal({ isOpen: true, order })}
        onReject={(order) => setRejectModal({ isOpen: true, order })}
      />

      <AcceptOrderModal
        isOpen={acceptModal.isOpen}
        order={acceptModal.order}
        onClose={() => setAcceptModal({ isOpen: false, order: null })}
        onConfirm={handleConfirmAccept}
      />

      <RejectOrderModal
        isOpen={rejectModal.isOpen}
        order={rejectModal.order}
        onClose={() => setRejectModal({ isOpen: false, order: null })}
        onConfirm={handleConfirmReject}
      />
    </div>
  );
};

export default VendorOrdersPage;
