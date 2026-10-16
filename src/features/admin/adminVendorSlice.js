import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_VENDORS, VENDOR_STATS } from '@/mock/admin/vendors.mock';

const initialState = {
  vendors: INITIAL_VENDORS,
  stats: VENDOR_STATS,
  filters: {
    search: '',
    status: 'All Status',
    category: 'All Categories',
    location: 'All Locations',
  },
  selectedVendorId: null,
};

export const adminVendorSlice = createSlice({
  name: 'adminVendors',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.filters = {
        search: '',
        status: 'All Status',
        category: 'All Categories',
        location: 'All Locations',
      };
    },
    approveVendor: (state, action) => {
      const vendorId = action.payload;
      const vendor = state.vendors.find(
        (v) => v.id === vendorId || v.vendorId === vendorId
      );
      if (vendor) {
        const prevStatus = vendor.status;
        vendor.status = 'Active';

        if (prevStatus === 'Pending') {
          const pendingStat = state.stats.find((s) => s.id === 'pending');
          const activeStat = state.stats.find((s) => s.id === 'active');
          if (pendingStat) pendingStat.value = String(Math.max(0, Number(pendingStat.value) - 1));
          if (activeStat) activeStat.value = String(Number(activeStat.value) + 1);
        }
      }
    },
    rejectVendor: (state, action) => {
      const { id, reason } = action.payload;
      const vendor = state.vendors.find(
        (v) => v.id === id || v.vendorId === id
      );
      if (vendor) {
        const prevStatus = vendor.status;
        vendor.status = 'Rejected';
        vendor.rejectionReason = reason || '';

        if (prevStatus === 'Pending') {
          const pendingStat = state.stats.find((s) => s.id === 'pending');
          if (pendingStat) pendingStat.value = String(Math.max(0, Number(pendingStat.value) - 1));
        }
      }
    },
  },
});

export const { setFilter, resetFilters, approveVendor, rejectVendor } =
  adminVendorSlice.actions;

export default adminVendorSlice.reducer;
