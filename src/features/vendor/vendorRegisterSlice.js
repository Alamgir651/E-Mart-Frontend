import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  selectedAccountType: 'individual',
  businessDetails: {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    cnic: '',
    description: '',
  },
  storeDetails: {
    storeName: '',
    category: '',
    description: '',
    addressSearch: '',
    addressLine: '',
    city: '',
    area: '',
    banners: [],
    logo: null,
  },
  isReviewModalOpen: false,
  isApprovedModalOpen: false,
  isSubmitted: false,
};

export const vendorRegisterSlice = createSlice({
  name: 'vendorRegister',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 4) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    setAccountType: (state, action) => {
      state.selectedAccountType = action.payload;
    },
    setBusinessField: (state, action) => {
      const { field, value } = action.payload;
      state.businessDetails[field] = value;
    },
    setStoreField: (state, action) => {
      const { field, value } = action.payload;
      state.storeDetails[field] = value;
    },
    setReviewModalOpen: (state, action) => {
      state.isReviewModalOpen = action.payload;
    },
    setApprovedModalOpen: (state, action) => {
      state.isApprovedModalOpen = action.payload;
    },
    submitRegistration: (state) => {
      state.isSubmitted = true;
      state.isReviewModalOpen = true;
    },
    resetRegistration: () => initialState,
  },
});

export const {
  setStep,
  nextStep,
  prevStep,
  setAccountType,
  setBusinessField,
  setStoreField,
  setReviewModalOpen,
  setApprovedModalOpen,
  submitRegistration,
  resetRegistration,
} = vendorRegisterSlice.actions;

export default vendorRegisterSlice.reducer;
