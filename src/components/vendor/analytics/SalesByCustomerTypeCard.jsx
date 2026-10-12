import { CUSTOMER_TYPE_DATA } from '@/mock/vendor/vendorAnalytics.mock';
import DonutChart from './DonutChart';

export const SalesByCustomerTypeCard = ({ data = CUSTOMER_TYPE_DATA }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Sales by Customer Type
        </h3>
      </div>

      <DonutChart
        data={data}
        centerPrimary="128"
        centerSecondary="TOTAL ORDERS"
      />
    </div>
  );
};

export default SalesByCustomerTypeCard;
