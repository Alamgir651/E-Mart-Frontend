import AnalyticsHeader from '@/components/vendor/analytics/AnalyticsHeader';
import AnalyticsMetricsGrid from '@/components/vendor/analytics/AnalyticsMetricsGrid';
import SalesOrdersTrendChart from '@/components/vendor/analytics/SalesOrdersTrendChart';
import SalesByCategoryCard from '@/components/vendor/analytics/SalesByCategoryCard';
import SalesByPaymentMethodCard from '@/components/vendor/analytics/SalesByPaymentMethodCard';
import SalesByCustomerTypeCard from '@/components/vendor/analytics/SalesByCustomerTypeCard';

export const VendorAnalyticsPage = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      <AnalyticsHeader />

      <AnalyticsMetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        <div className="lg:col-span-7 flex flex-col">
          <SalesOrdersTrendChart />
        </div>
        <div className="lg:col-span-5 flex flex-col">
          <SalesByCategoryCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
        <SalesByPaymentMethodCard />
        <SalesByCustomerTypeCard />
      </div>
    </div>
  );
};

export default VendorAnalyticsPage;
