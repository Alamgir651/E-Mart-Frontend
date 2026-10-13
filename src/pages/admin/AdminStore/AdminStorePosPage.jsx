import { useState } from 'react';
import { motion } from 'motion/react';
import { SearchIcon, CartIcon, PlusIcon, TrashIcon, CheckIcon } from '@/icons';
import { toast } from '@/utils/toast';
import { slideUp } from '@/animation/animations';

const POS_PRODUCTS = [
  { id: 1, name: 'Fresh Red Apples', price: 4.5, category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=120' },
  { id: 2, name: 'Organic Bananas', price: 2.8, category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120' },
  { id: 3, name: 'Chicken Breast 1kg', price: 9.5, category: 'Meat', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=120' },
  { id: 4, name: 'Tide Detergent 2L', price: 14.0, category: 'Household', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=120' },
  { id: 5, name: 'Coca-Cola 1.5L', price: 1.8, category: 'Beverages', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=120' },
  { id: 6, name: 'Farm Whole Milk 1L', price: 3.2, category: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120' },
];

export const AdminStorePosPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Fresh Red Apples', price: 4.5, qty: 2 },
    { id: 3, name: 'Chicken Breast 1kg', price: 9.5, qty: 1 },
  ]);
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    toast.success(`Added ${product.name}`);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return toast.error('Cart is empty');
    toast.success(`Order completed! Paid $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          Store POS Terminal
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Fast in-store billing and register management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="relative">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products or scan barcode..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {POS_PRODUCTS.filter((p) => !search || p.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <div
                key={item.id}
                onClick={() => addToCart(item)}
                className="bg-white p-3.5 rounded-2xl border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-xl bg-slate-50 mb-2.5" />
                <h4 className="text-xs font-semibold text-slate-900 truncate group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-semibold text-slate-900">${item.price.toFixed(2)}</span>
                  <span className="p-1 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <PlusIcon size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <CartIcon size={16} className="text-orange-600" />
              <h3 className="text-sm font-semibold text-slate-900">Current Order</h3>
            </div>
            <span className="text-xs font-semibold text-slate-500">{cart.length} items</span>
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-xs gap-2">
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-slate-800 block truncate">{item.name}</span>
                  <span className="text-slate-400 text-[11px]">${item.price.toFixed(2)} each</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded-lg bg-slate-100 font-bold hover:bg-slate-200">-</button>
                  <span className="w-5 text-center font-semibold text-slate-800">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded-lg bg-slate-100 font-bold hover:bg-slate-200">+</button>
                </div>
                <span className="font-semibold text-slate-900 w-12 text-right">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-slate-500"><span>Tax (5%)</span><span>${tax.toFixed(2)}</span></div>
            <div className="flex justify-between font-semibold text-slate-900 text-sm pt-1 border-t border-slate-100">
              <span>Total</span><span className="text-orange-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
          >
            Pay & Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStorePosPage;
