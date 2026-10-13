import { useState } from 'react';
import {
  POS_PRODUCTS,
  POS_BRANCHES,
  INITIAL_CUSTOMERS,
} from '@/mock/admin/adminPos.mock';
import PosProductsSection from '@/components/admin/pos/PosProductsSection';
import PosBillingSection from '@/components/admin/pos/PosBillingSection';
import AddCustomerModal from '@/components/admin/pos/AddCustomerModal';
import { toast } from '@/utils/toast';

export const AdminStorePosPage = () => {
  const [products] = useState(POS_PRODUCTS);
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [branches] = useState(POS_BRANCHES);
  const [category, setCategory] = useState('All Categories');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          unit: product.unit,
          price: product.price,
          originalPrice: product.originalPrice,
          qty: 1,
        },
      ];
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.info('Order cancelled, cart cleared');
  };

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prev) => [newCustomer, ...prev]);
  };

  const handlePlaceOrder = ({ customer, total, paymentMethod }) => {
    if (cart.length === 0) {
      toast.error('Please add products before placing order');
      return;
    }
    toast.success(`Order placed successfully for ${customer}! Total: Rs. ${total.toFixed(2)} (${paymentMethod})`);
    setCart([]);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          POS
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 xl:col-span-7">
          <PosProductsSection
            products={products}
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onAddToCart={handleAddToCart}
          />
        </div>

        <div className="lg:col-span-5 xl:col-span-5">
          <PosBillingSection
            customers={customers}
            branches={branches}
            cart={cart}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onOpenAddCustomer={() => setIsCustomerModalOpen(true)}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>

      <AddCustomerModal
        isOpen={isCustomerModalOpen}
        onClose={() => setIsCustomerModalOpen(false)}
        onAddCustomer={handleAddCustomer}
      />
    </div>
  );
};

export default AdminStorePosPage;
