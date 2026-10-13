import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgLogin from '@/assets/images/bgLogin.png';
import AdminLoginHero from '../AdminLogin/AdminLoginHero';
import AdminResetPasswordCard from './AdminResetPasswordCard';
import AdminPasswordSuccessModal from './AdminPasswordSuccessModal';
import { toast } from '@/utils/toast';

export const AdminResetPasswordPage = () => {
  const navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const handleLoginContinue = () => {
    setIsSuccessModalOpen(false);
    toast.success('Password updated successfully. Please login with your new password.');
    navigate('/admin/login');
  };

  return (
    <main className="min-h-screen relative w-full flex items-center justify-center overflow-x-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img
          src={bgLogin}
          alt="E-Mart Admin Background"
          className="w-full h-full object-cover object-center"
        />

        <div className="hidden lg:block absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-white/95 via-white/70 to-transparent pointer-events-none" />

        <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 lg:w-[35%] bg-gradient-to-l from-white/70 via-white/20 to-transparent pointer-events-none" />

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">
        <section className="hidden lg:flex w-full lg:w-7/12 justify-start">
          <AdminLoginHero mode="reset" />
        </section>

        <section className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <AdminResetPasswordCard onSuccess={handleSuccess} />
        </section>
      </div>

      <AdminPasswordSuccessModal
        isOpen={isSuccessModalOpen}
        onLoginContinue={handleLoginContinue}
      />
    </main>
  );
};

export default AdminResetPasswordPage;
