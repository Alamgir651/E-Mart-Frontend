import bgLogin from '@/assets/images/bgLogin.png';
import VendorHeroSection from './VendorHeroSection';
import VendorLoginForm from './VendorLoginForm';

export const VendorLoginPage = () => {
  return (
    <main className="min-h-screen relative w-full flex items-center justify-center overflow-x-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src={bgLogin}
          alt="E-Mart Vendor Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40 lg:from-white/85 lg:via-white/70 lg:to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <section className="w-full lg:w-7/12 flex justify-center lg:justify-start">
          <VendorHeroSection />
        </section>

        <section className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <VendorLoginForm />
        </section>
      </div>
    </main>
  );
};

export default VendorLoginPage;
