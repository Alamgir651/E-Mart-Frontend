import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@/icons';
import { Button } from '@/components/common/Button';
import { RegistrationStepper } from '@/components/vendor/RegistrationStepper';
import { AccountTypeCard } from '@/components/vendor/AccountTypeCard';
import { VendorRegisterHero } from './VendorRegisterHero';
import { ACCOUNT_TYPES } from '@/mock/vendor/vendorRegister.mock';
import { fadeIn, slideUp } from '@/animation/animations';
import { toast } from '@/utils/toast';

export const VendorRegisterPage = () => {
  const [selectedType, setSelectedType] = useState('individual');
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    toast.success('Account type confirmed: Individual Store');
  };

  return (
    <main className="h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-[#fff6ed]">
      <section className="w-full lg:w-[35%] xl:w-[32%] h-full bg-[#fff6ed] p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between overflow-hidden relative">
        <VendorRegisterHero />
      </section>

      <section className="w-full lg:w-[65%] xl:w-[68%] h-full bg-white lg:rounded-l-[36px] shadow-2xl shadow-slate-900/10 p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between overflow-hidden relative">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col">
          <RegistrationStepper currentStep={currentStep} />

          <div className="mt-8 lg:mt-10 mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Create Vendor Account
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your business type to get started
            </p>
          </div>

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
        </motion.div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <div className="text-xs text-slate-500">
            Already have an account?{' '}
            <Link
              to="/vendor/login"
              className="font-bold text-orange-600 hover:text-orange-700 ml-1"
            >
              Login
            </Link>
          </div>

          <div className="w-full sm:w-auto">
            <Button
              onClick={handleContinue}
              className="!w-auto px-9 py-3.5 flex items-center gap-2"
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
