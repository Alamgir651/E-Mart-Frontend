import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import VendorSidebar from '@/components/vendor/dashboard/VendorSidebar';
import VendorHeader from '@/components/vendor/dashboard/VendorHeader';

export const VendorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5]/70 text-slate-800">
      <VendorSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-64 flex flex-col min-h-screen">
        <VendorHeader
          onOpenSidebar={() => setIsSidebarOpen(true)}
          storeName="Fresh Mart"
          userName="User Name"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
