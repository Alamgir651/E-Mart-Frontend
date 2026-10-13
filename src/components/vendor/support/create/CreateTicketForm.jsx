import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { usePortalBase } from '@/utils/usePortalBase';
import { TicketIcon, ChevronDownIcon } from '@/icons';
import { toast } from '@/utils/toast';
import TicketAttachmentsUploader from './TicketAttachmentsUploader';

const CATEGORIES = [
  'Products',
  'Payments & Payouts',
  'Store Management',
  'Account & Security',
  'Technical Issues',
];

const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'];

export const CreateTicketForm = ({ initialCategory = '', onSubmit }) => {
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const [ticketRef, ticketTrigger] = useAnimatedIcon();

  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState(initialCategory || '');
  const [priority, setPriority] = useState('Medium');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([
    { id: 1, name: 'screenshot.png', size: '1.2 MB' },
    { id: 2, name: 'invoice.pdf', size: '2.5 MB' },
    { id: 3, name: 'error.png', size: '800 KB' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim()) {
      toast.error('Please enter a ticket subject');
      return;
    }
    if (!category) {
      toast.error('Please select a category');
      return;
    }
    if (!message.trim()) {
      toast.error('Please describe your issue in the message field');
      return;
    }

    const newTicket = {
      id: String(Math.floor(1000 + Math.random() * 9000)),
      subject,
      category,
      priority,
      message,
      files,
      createdAt: 'Just now',
      status: 'Open',
    };

    onSubmit?.(newTicket);
    toast.success('Support ticket submitted successfully!');
    navigate(getRoute('/support'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      onMouseEnter={ticketTrigger.onMouseEnter}
      onMouseLeave={ticketTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <TicketIcon ref={ticketRef} size={18} animateOnHover={false} />
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Ticket Details
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter a short subject for your issue (e.g. Product not showing, Payout delays, etc.)"
            className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Category <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs cursor-pointer"
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <ChevronDownIcon size={16} animateOnHover={false} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Priority <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs cursor-pointer"
              >
                {PRIORITIES.map((pri) => (
                  <option key={pri} value={pri}>
                    {pri}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <ChevronDownIcon size={16} animateOnHover={false} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Message <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <textarea
              required
              rows={5}
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue or question in detail..."
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs resize-none"
            />
            <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-slate-400">
              {message.length}/2000
            </span>
          </div>
        </div>

        <TicketAttachmentsUploader
          files={files}
          onFilesChange={setFiles}
        />
      </div>

      <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
        <button
          type="button"
          onClick={() => navigate(getRoute('/support'))}
          className="px-4 sm:px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 sm:px-6 py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
        >
          Submit Ticket
        </button>
      </div>
    </form>
  );
};

export default CreateTicketForm;
