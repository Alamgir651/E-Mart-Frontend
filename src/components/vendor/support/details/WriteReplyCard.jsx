import { useState, useRef } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { PaperclipIcon, SendIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const WriteReplyCard = ({ onSendReply }) => {
  const [replyText, setReplyText] = useState('');
  const [clipRef, clipTrigger] = useAnimatedIcon();
  const [sendRef, sendTrigger] = useAnimatedIcon();
  const fileInputRef = useRef(null);
  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size exceeds 5MB limit');
        return;
      }
      setAttachedFile(file.name);
      toast.success(`Attached ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) {
      toast.error('Please type a reply message');
      return;
    }

    onSendReply?.({
      text: replyText.trim(),
      attachment: attachedFile,
    });

    setReplyText('');
    setAttachedFile(null);
    toast.success('Reply sent successfully!');
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
        Write a Reply
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rounded-2xl border border-slate-200 p-3.5 sm:p-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all shadow-2xs">
          <textarea
            rows={4}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply..."
            className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none resize-none"
          />

          {attachedFile && (
            <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-700">
              <span>📎</span>
              <span>{attachedFile}</span>
              <button
                type="button"
                onClick={() => setAttachedFile(null)}
                className="ml-1 text-orange-400 hover:text-orange-700 cursor-pointer"
              >
                ×
              </button>
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              onMouseEnter={clipTrigger.onMouseEnter}
              onMouseLeave={clipTrigger.onMouseLeave}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors cursor-pointer"
            >
              <PaperclipIcon ref={clipRef} size={15} animateOnHover={false} />
              <span>Max file size: 5MB</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="submit"
              onMouseEnter={sendTrigger.onMouseEnter}
              onMouseLeave={sendTrigger.onMouseLeave}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
            >
              <span>Send Reply</span>
              <SendIcon ref={sendRef} size={14} animateOnHover={false} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteReplyCard;
