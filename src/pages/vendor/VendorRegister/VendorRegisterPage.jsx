import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@/icons';
import { Button } from '@/components/common/Button';
import { RegistrationStepper } from '@/components/vendor/RegistrationStepper';
import { AccountTypeCard } from '@/components/vendor/AccountTypeCard';
import { BusinessDetailsForm } from '@/components/vendor/BusinessDetailsForm';
import { StoreDetailsForm } from '@/components/vendor/StoreDetailsForm';
import { VendorRegisterHero } from './VendorRegisterHero';
import { ACCOUNT_TYPES } from '@/mock/vendor/vendorRegister.mock';
import { fadeIn, slideUp } from '@/animation/animations';
import { toast } from '@/utils/toast';

export const VendorRegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [selectedType, setSelectedType] = useState('individual');
  const [businessData, setBusinessData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    cnic: '',
    description: '',
  });
  const [storeData, setStoreData] = useState({
    storeName: '',
    category: '',
    description: '',
    addressSearch: '',
    addressLine: '',
    city: '',
    area: '',
    banners: [],
  });

  const handleBusinessChange = (field, value) => {
    setBusinessData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStoreChange = (field, value) => {
    setStoreData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
      toast.success('Business details confirmed.');
    } else if (currentStep === 3) {
      toast.success('Store details saved. Moving to Step 4.');
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const stepTitles = {
    1: { title: 'Create Vendor Account', subtitle: 'Select your business type to get started' },
    2: { title: 'Business Details', subtitle: 'Tell us about your business' },
    3: { title: 'Store Details', subtitle: 'Add your store information and location' },
    4: { title: 'Review Details', subtitle: 'Verify and submit your application' },
  };

  return (
    <main className="h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-[#fff6ed]">
      <section className="w-full lg:w-[35%] xl:w-[32%] h-full bg-[#fff6ed] p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between overflow-hidden relative">
        <VendorRegisterHero />
      </section>

      <section className="w-full lg:w-[65%] xl:w-[68%] h-full bg-white lg:rounded-l-[36px] shadow-2xl shadow-slate-900/10 p-6 sm:p-8 lg:p-12 xl:p-14 flex flex-col justify-between overflow-hidden relative">
        <div className="flex-1 overflow-y-auto pr-1 sm:pr-3">
          <RegistrationStepper currentStep={currentStep} />

          <div className="mt-5 mb-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {stepTitles[currentStep]?.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {stepTitles[currentStep]?.subtitle}
            </p>
          </div>

          {currentStep === 1 && (
            <motion.div
              variants={slideUp}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-6 max-w-4xl"
            >
              {ACCOUNT_TYPES.map((type) => (
                <AccountTypeCard
                  key={type.id}
                  item={type}
                  isSelected={selectedType === type.id}
                  onSelect={setSelectedType}
                />
              ))}
            </motion.div>
          )}

          {currentStep === 2 && (
            <BusinessDetailsForm
              formData={businessData}
              onChange={handleBusinessChange}
            />
          )}

          {currentStep === 3 && (
            <StoreDetailsForm
              storeData={storeData}
              onChange={handleStoreChange}
            />
          )}
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
          {currentStep === 1 ? (
            <div className="text-xs text-slate-500">
              Already have an account?{' '}
              <Link to="/vendor/login" className="font-bold text-orange-600 hover:text-orange-700 ml-1">
                Login
              </Link>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={handleBack}
              className="!w-auto px-6 py-2.5 flex items-center gap-2"
            >
              <ArrowLeftIcon size={15} />
              <span>Back</span>
            </Button>
          )}

          <div className="w-full sm:w-auto ml-auto">
            <Button
              onClick={handleNext}
              className="!w-auto px-9 py-3 flex items-center gap-2"
            >
              <span>Continue</span>
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VendorRegisterPage;
