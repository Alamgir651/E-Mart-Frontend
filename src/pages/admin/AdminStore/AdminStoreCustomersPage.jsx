import { useState } from 'react';
import { SearchIcon, UserIcon } from '@/icons';

const CUSTOMERS = [
  { id: 'CUST-01', name: 'Ali Khan', email: 'ali.khan@example.com', phone: '+92 300 1234567', orders: 18, spent: '$420.50', status: 'Active' },
  { id: 'CUST-02', name: 'Sara Ahmed', email: 'sara.ahmed@example.com', phone: '+92 321 7654321', orders: 12, spent: '$290.00', status: 'Active' },
  { id: 'CUST-03', name: 'Usman Raza', email: 'usman.raza@example.com', phone: '+92 333 9876543', orders: 24, spent: '$815.20', status: 'Active' },
  { id: 'CUST-04', name: 'Ayesha Malik', email: 'ayesha.m@example.com', phone: '+92 345 1122334', orders: 8, spent: '$165.00', status: 'Active' },
  { id: 'CUST-05', name: 'Bilal Hussain', email: 'bilal.h@example.com', phone: '+92 301 5566778', orders: 5, spent: '$95.00', status: 'Inactive' },
];

export const AdminStoreCustomersPage = () => {
  const [search, setSearch] = useState('');

  const filtered = CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            Store Customers
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your store customer records and purchasing habits
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <SearchIcon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500">
                <th className="py-3 px-4"># ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4 text-center">Orders</th>
                <th className="py-3 px-4 text-right">Total Spent</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 text-slate-400 font-medium">{customer.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0">
                        {customer.name[0]}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block">{customer.name}</span>
                        <span className="text-[11px] text-slate-400 block">{customer.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{customer.phone}</td>
                  <td className="py-3 px-4 text-center font-semibold text-slate-800">{customer.orders}</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-900">{customer.spent}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminStoreCustomersPage;
