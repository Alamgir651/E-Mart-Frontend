import { useState } from 'react';
import { SUPPORT_TICKETS, FAQ_ITEMS } from '@/mock/vendor/vendorSupport.mock';
import SupportHeroBanner from '@/components/vendor/support/SupportHeroBanner';
import SupportTicketsCard from '@/components/vendor/support/SupportTicketsCard';
import SupportFaqCard from '@/components/vendor/support/SupportFaqCard';

export const VendorSupportPage = () => {
  const [tickets] = useState(SUPPORT_TICKETS);
  const [faqs] = useState(FAQ_ITEMS);

  return (
    <div className="space-y-6 w-full animate-fadeIn">
      <SupportHeroBanner />
      <SupportTicketsCard tickets={tickets} />
      <SupportFaqCard faqs={faqs} />
    </div>
  );
};

export default VendorSupportPage;
