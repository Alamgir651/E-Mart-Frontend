import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePortalBase } from '@/utils/usePortalBase';
import { PAYOUT_HISTORY } from '@/mock/vendor/vendorFinance.mock';
import PayoutDetailsHeader from '@/components/vendor/finance/details/PayoutDetailsHeader';
import PayoutReferenceCard from '@/components/vendor/finance/details/PayoutReferenceCard';
import PayoutBreakdownCard from '@/components/vendor/finance/details/PayoutBreakdownCard';
import TransactionTimelineCard from '@/components/vendor/finance/details/TransactionTimelineCard';
import PayoutHelpCard from '@/components/vendor/finance/details/PayoutHelpCard';
import { toast } from '@/utils/toast';

export const VendorPayoutDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();

  const payout = useMemo(() => {
    return PAYOUT_HISTORY.find((item) => item.id === id) || PAYOUT_HISTORY[0];
  }, [id]);

  const handleDownloadReceipt = () => {
    toast.success(`Downloading receipt for payout ${payout.id}...`);
  };

  const handleContactSupport = () => {
    navigate(getRoute('/support'));
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      <PayoutDetailsHeader
        onBack={() => navigate(getRoute('/finance'))}
        onDownloadReceipt={handleDownloadReceipt}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
        <div className="lg:col-span-2 space-y-4 sm:space-y-5">
          <PayoutReferenceCard payout={payout} />
          <PayoutBreakdownCard
            breakdown={payout.breakdown}
            total={payout.amount}
          />
        </div>

        <div className="lg:col-span-1 space-y-4 sm:space-y-5">
          <TransactionTimelineCard timeline={payout.timeline} />
          <PayoutHelpCard onContactSupport={handleContactSupport} />
        </div>
      </div>
    </div>
  );
};

export default VendorPayoutDetailsPage;
