import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { usePortalBase } from '@/utils/usePortalBase';
import { ArrowLeftIcon } from '@/icons';
import { SUPPORT_TICKETS } from '@/mock/vendor/vendorSupport.mock';
import TicketMetaCard from '@/components/vendor/support/details/TicketMetaCard';
import ConversationThreadCard from '@/components/vendor/support/details/ConversationThreadCard';
import WriteReplyCard from '@/components/vendor/support/details/WriteReplyCard';

export const TicketDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const [backRef, backTrigger] = useAnimatedIcon();

  const foundTicket = SUPPORT_TICKETS.find((t) => t.id === id) || SUPPORT_TICKETS[0];
  const [ticket, setTicket] = useState(foundTicket);

  const handleSendReply = ({ text }) => {
    const newMsg = {
      id: Date.now(),
      sender: 'Fresh Mart (You)',
      role: 'vendor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      time: 'Just now',
      text,
    };

    setTicket((prev) => ({
      ...prev,
      updatedAt: 'Just now',
      messages: [...(prev.messages || []), newMsg],
    }));
  };

  return (
    <div className="space-y-6 w-full animate-fadeIn">
      <div className="flex items-start gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => navigate(getRoute('/support'))}
          onMouseEnter={backTrigger.onMouseEnter}
          onMouseLeave={backTrigger.onMouseLeave}
          className="mt-1 w-9 h-9 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all cursor-pointer shadow-2xs shrink-0 active:scale-95"
          aria-label="Back to support"
        >
          <ArrowLeftIcon ref={backRef} size={18} animateOnHover={false} />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            Ticket Details
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
            View and manage progress on support request ticket #{ticket.id}
          </p>
        </div>
      </div>

      <TicketMetaCard ticket={ticket} />
      <ConversationThreadCard messages={ticket.messages || []} />
      <WriteReplyCard onSendReply={handleSendReply} />
    </div>
  );
};

export default TicketDetailsPage;
