import { useNavigate } from 'react-router-dom';
import { usePortalBase } from '@/utils/usePortalBase';
import { CheckIcon } from '@/icons';
import { DEACTIVATED_PRODUCT_DATA } from '@/mock/vendor/vendorNotifications.mock';
import NotificationDetailHeader from '@/components/vendor/notifications/details/NotificationDetailHeader';
import DetailBannerBox from '@/components/vendor/notifications/details/DetailBannerBox';
import AffectedProductCard from '@/components/vendor/notifications/details/AffectedProductCard';
import ReasonCard from '@/components/vendor/notifications/details/ReasonCard';
import WhatToDoNextCard from '@/components/vendor/notifications/details/WhatToDoNextCard';
import AdminActionCard from '@/components/vendor/notifications/details/AdminActionCard';
import ProductStatusTransitionCard from '@/components/vendor/notifications/details/ProductStatusTransitionCard';
import { toast } from '@/utils/toast';

export const ProductDeactivatedPage = () => {
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const product = DEACTIVATED_PRODUCT_DATA;

  const nextSteps = [
    'Add a readable ingredients-label photo and the expiry date.',
    'Save your changes and request an admin review.',
    'Keep the product inactive until Emart Admin approves the updated listing. You will receive a notification with the review outcome.',
  ];

  return (
    <div className="space-y-4 sm:space-y-5 w-full">
      <NotificationDetailHeader
        title="Product Deactivated"
        subtitle="Review the admin action and the changes needed for your product."
        onBack={() => navigate(getRoute('/notifications'))}
      />

      <DetailBannerBox
        variant="amber"
        headline="Your product is no longer visible to customers"
        description="Fresh Milk (1L) is inactive, but remains in your inventory. You can update the listing and request an admin review before it can go live again."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
        <div className="lg:col-span-8 space-y-4 sm:space-y-5">
          <AffectedProductCard
            cardTitle="Affected product"
            product={product}
          />

          <ReasonCard
            title="Reason for deactivation"
            headline={product.reasonTitle}
            description={product.reasonText}
            policyLinkText="View product listing guidelines"
            onPolicyClick={() => toast.info('Opening product listing guidelines...')}
          />

          <WhatToDoNextCard
            steps={nextSteps}
            primaryBtnText="View inactive product"
            onPrimaryClick={() => navigate(getRoute('/products'))}
            secondaryBtnText="Contact Support"
            onSecondaryClick={() => navigate(getRoute('/support'))}
          />
        </div>

        <div className="lg:col-span-4 space-y-4 sm:space-y-5">
          <AdminActionCard
            action={product.adminAction}
            performedBy={product.performedBy}
            dateTime={product.dateTime}
            reference={product.reference}
          />

          <ProductStatusTransitionCard
            fromStatus="Active"
            toStatus="Inactive"
            note="Your 48 units are still recorded in inventory. This listing cannot receive new orders while inactive."
          />

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1 px-1">
            <CheckIcon size={14} className="text-slate-400" />
            <span>Notification marked as read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeactivatedPage;
