import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '@/animation/animations';
import { toast } from '@/utils/toast';
import {
  getCustomerById,
  suspendCustomerMock,
  unsuspendCustomerMock,
  deleteCustomerMock,
} from '@/mock/admin/customers.mock';

import CustomerDetailHeader from '@/components/admin/customers/detail/CustomerDetailHeader';
import CustomerDetailStats from '@/components/admin/customers/detail/CustomerDetailStats';
import CustomerInfoCard from '@/components/admin/customers/detail/CustomerInfoCard';
import CustomerPaymentMethodsCard from '@/components/admin/customers/detail/CustomerPaymentMethodsCard';
import CustomerAddressesCard from '@/components/admin/customers/detail/CustomerAddressesCard';
import CustomerOrdersTable from '@/components/admin/customers/detail/CustomerOrdersTable';
import CustomerOrderDetailModal from '@/components/admin/customers/detail/CustomerOrderDetailModal';
import SuspendCustomerModal from '@/components/admin/customers/detail/SuspendCustomerModal';
import UnsuspendCustomerModal from '@/components/admin/customers/detail/UnsuspendCustomerModal';
import DeleteCustomerModal from '@/components/admin/customers/detail/DeleteCustomerModal';

export const AdminCustomerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(
    () => getCustomerById(id) || getCustomerById('001')
  );

  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isUnsuspendOpen, setIsUnsuspendOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleConfirmSuspend = (reason) => {
    const updated = suspendCustomerMock(customer.id, reason);
    setCustomer({ ...updated });
    toast.warning(`"${customer.name}" has been suspended.`);
    setIsSuspendOpen(false);
  };

  const handleConfirmUnsuspend = (reason) => {
    const updated = unsuspendCustomerMock(customer.id, reason);
    setCustomer({ ...updated });
    toast.success(`"${customer.name}" account access has been restored!`);
    setIsUnsuspendOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteCustomerMock(customer.id);
    toast.error(`"${customer.name}" account has been deleted.`);
    setIsDeleteOpen(false);
    navigate('/admin/customers');
  };

  if (!customer) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Customer Not Found</h2>
        <Link
          to="/admin/customers"
          className="text-sm font-semibold text-orange-600 hover:underline"
        >
          Return to Customers List
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6 pb-8"
    >
      {/* Header Card with Navigation and Status/Actions */}
      <CustomerDetailHeader
        customer={customer}
        onSuspend={() => setIsSuspendOpen(true)}
        onUnsuspend={() => setIsUnsuspendOpen(true)}
        onDelete={() => setIsDeleteOpen(true)}
      />

      {/* Row 1: 4 Stat Cards */}
      <CustomerDetailStats customer={customer} />

      {/* Row 2: Customer Info & Payment Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerInfoCard customer={customer} />
        <CustomerPaymentMethodsCard
          paymentMethods={customer.paymentMethods}
        />
      </div>

      {/* Row 3: Saved Addresses */}
      <CustomerAddressesCard addresses={customer.savedAddresses} />

      {/* Row 4: Recent Orders Table with View All & Pagination */}
      <CustomerOrdersTable
        orders={customer.recentOrders}
        onViewOrder={(order) => setSelectedOrder(order)}
      />

      {/* Modals */}
      <SuspendCustomerModal
        isOpen={isSuspendOpen}
        onClose={() => setIsSuspendOpen(false)}
        onConfirm={handleConfirmSuspend}
        customer={customer}
      />

      <UnsuspendCustomerModal
        isOpen={isUnsuspendOpen}
        onClose={() => setIsUnsuspendOpen(false)}
        onConfirm={handleConfirmUnsuspend}
        customer={customer}
      />

      <DeleteCustomerModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        customer={customer}
      />

      <CustomerOrderDetailModal
        isOpen={Boolean(selectedOrder)}
        onClose={() => setSelectedOrder(null)}
        order={selectedOrder}
      />
    </motion.div>
  );
};

export default AdminCustomerDetailPage;
