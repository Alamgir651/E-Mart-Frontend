import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@/icons';
import { REMOVED_PRODUCT_DATA } from '@/mock/vendor/vendorNotifications.mock';
import NotificationDetailHeader from '@/components/vendor/notifications/details/NotificationDetailHeader';
import DetailBannerBox from '@/components/vendor/notifications/details/DetailBannerBox';
import AffectedProductCard from '@/components/vendor/notifications/details/AffectedProductCard';
import ReasonCard from '@/components/vendor/notifications/details/ReasonCard';
import WhatToDoNextCard from '@/components/vendor/notifications/details/WhatToDoNextCard';
import AdminActionCard from '@/components/vendor/notifications/details/AdminActionCard';
import ProductStatusTransitionCard from '@/components/vendor/notifications/details/ProductStatusTransitionCard';
import { toast } from '@/utils/toast';

export const ProductRemovedPage = () => {
  const navigate = useNavigate();
  const product = REMOVED_PRODUCT_DATA;

  const nextParagraphs = [
    'If you believe this removal was made in error, contact Support and include the action reference and any supporting evidence.',
    "To sell this item again, first review Emart's policy. A new, compliant listing must be submitted for admin approval; the removed product cannot simply be switched back to Active.",
  ];

  return (
    <div className="space-y-4 sm:space-y-5 w-full">
      <NotificationDetailHeader
        title="Product Removed"
        subtitle="Review why your listing was removed and the options available to you."
        onBack={() => navigate('/vendor/notifications')}
      />

      <DetailBannerBox
        variant="rose"
        headline="This product has been removed from your catalog"
        description="Organic Honey (500g) is no longer in your sellable inventory or visible to customers. This removed listing cannot be edited or reactivated."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
        <div className="lg:col-span-8 space-y-4 sm:space-y-5">
          <AffectedProductCard
            cardTitle="Removed product"
            product={product}
          />

          <ReasonCard
            title="Reason for removal"
            headline={product.reasonTitle}
            description={product.reasonText}
            policyLinkText="View restricted content policy"
            onPolicyClick={() => toast.info('Opening restricted content policy...')}
          />

          <WhatToDoNextCard
            paragraphs={nextParagraphs}
            primaryBtnText="Contact Support"
            onPrimaryClick={() => navigate('/vendor/support')}
            secondaryBtnText="View removal record"
            onSecondaryClick={() => toast.info(`Viewing removal record for ${product.id}`)}
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
            toStatus="Removed"
            note="The removal record retains the product details and stock snapshot for reference only. No new orders can be placed for this listing."
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

export default ProductRemovedPage;
