import { useState } from 'react';
import { XIcon, PlusIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const AddRiderModal = ({ isOpen, onClose, onAddRider }) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: 'Motorcycle',
    zone: 'Lahore, PK',
    cnic: '',
    brand: 'Honda',
    model: 'CG 125',
    regNo: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please enter rider name and phone number');
      return;
    }

    const randomNum = Math.floor(Math.random() * 900) + 100;
    const newRider = {
      id: `R${randomNum}`,
      code: `#R${randomNum}`,
      riderId: `#RDR-${randomNum}`,
      name: formData.name,
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '')}@email.com`,
      vehicle: formData.vehicle,
      zone: formData.zone,
      location: formData.zone.replace(', PK', ', Pakistan'),
      status: 'Pending',
      joinDate: 'Oct 17, 2026',
      appliedDate: 'Oct 17, 2026, 11:00 AM',
      ordersCount: 0,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      cnic: formData.cnic || '35202-9988776-1',
      lastLogin: '—',
      vehicleDetails: {
        type: formData.vehicle,
        brand: formData.brand,
        model: formData.model,
        registrationNo: formData.regNo || 'LHR-9000',
      },
      deliveryStatus: 'Pending',
      performanceStats: {
        totalDeliveries: 0,
        completed: 0,
        completedRate: '0%',
        cancelled: 0,
        cancelledRate: '0%',
        totalEarnings: '$0.00',
        currentStatus: 'Offline',
      },
      currentDelivery: null,
      recentDeliveries: [],
    };

    onAddRider?.(newRider);
    toast.success(`Rider "${formData.name}" added successfully!`);
    onClose();

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <XIcon size={18} />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
            <PlusIcon size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Add New Rider</h2>
            <p className="text-xs text-slate-500">Register a new delivery rider to the platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Rider Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Tariq Mehmood"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rider@email.com"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                CNIC Number
              </label>
              <input
                type="text"
                value={formData.cnic}
                onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                placeholder="35202-1234567-1"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Zone / City
              </label>
              <select
                value={formData.zone}
                onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              >
                <option value="Lahore, PK">Lahore, PK</option>
                <option value="Karachi, PK">Karachi, PK</option>
                <option value="Islamabad, PK">Islamabad, PK</option>
                <option value="Faisalabad, PK">Faisalabad, PK</option>
                <option value="Multan, PK">Multan, PK</option>
                <option value="Rawalpindi, PK">Rawalpindi, PK</option>
                <option value="Peshawar, PK">Peshawar, PK</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Vehicle Type
              </label>
              <select
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              >
                <option value="Motorcycle">Motorcycle</option>
                <option value="Bicycle">Bicycle</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Add Rider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRiderModal;
