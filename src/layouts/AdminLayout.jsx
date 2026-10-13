import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/admin/navigation/AdminSidebar';
import AdminHeader from '@/components/admin/navigation/AdminHeader';

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 overflow-x-hidden">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-64 flex flex-col min-h-screen w-full">
        <AdminHeader onOpenSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 p-3 sm:p-5 lg:p-7 max-w-[1550px] w-full mx-auto space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
