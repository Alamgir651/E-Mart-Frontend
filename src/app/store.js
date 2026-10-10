import { configureStore } from '@reduxjs/toolkit';
import vendorRegisterReducer from '@/features/vendor/vendorRegisterSlice';

export const store = configureStore({
  reducer: {
    vendorRegister: vendorRegisterReducer,
  },
});