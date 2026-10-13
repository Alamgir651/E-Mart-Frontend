import AdminHeroBanner from '@/components/admin/dashboard/AdminHeroBanner';
import AdminStatCards from '@/components/admin/dashboard/AdminStatCards';
import AdminSalesChart from '@/components/admin/dashboard/AdminSalesChart';
import AdminTopProducts from '@/components/admin/dashboard/AdminTopProducts';
import AdminReportedProducts from '@/components/admin/dashboard/AdminReportedProducts';
import AdminOrderStatusDonut from '@/components/admin/dashboard/AdminOrderStatusDonut';
import AdminRecentOrders from '@/components/admin/dashboard/AdminRecentOrders';
import AdminRecentVendors from '@/components/admin/dashboard/AdminRecentVendors';

export const AdminOverviewPage = () => {
  return (
    <div className="space-y-6">
      <AdminHeroBanner />
      <AdminStatCards />

      {/* Row 1: Sales & Orders Overview + Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <AdminSalesChart />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <AdminTopProducts />
        </div>
      </div>

      {/* Row 2: Reported Products + Order Status Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <AdminReportedProducts />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <AdminOrderStatusDonut />
        </div>
      </div>

      {/* Row 3: Recent Orders + Recent Vendors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <AdminRecentOrders />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <AdminRecentVendors />
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
