import { useRef } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { UploadIcon, XIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const TicketAttachmentsUploader = ({ files, onFilesChange }) => {
  const fileInputRef = useRef(null);
  const [uploadRef, uploadTrigger] = useAnimatedIcon();

  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files || []);
    if (uploaded.length + files.length > 5) {
      toast.error('You can upload a maximum of 5 files');
      return;
    }
    const newItems = uploaded.map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
    }));
    onFilesChange([...files, ...newItems]);
  };

  const handleRemoveFile = (id) => {
    onFilesChange(files.filter((f) => f.id !== id));
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
        Attachments (Optional)
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        onMouseEnter={uploadTrigger.onMouseEnter}
        onMouseLeave={uploadTrigger.onMouseLeave}
        className="border-2 border-dashed border-orange-200/90 hover:border-orange-400/90 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-orange-50/20 hover:bg-orange-50/40"
      >
        <div className="w-9 h-9 mx-auto rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-2">
          <UploadIcon ref={uploadRef} size={18} animateOnHover={false} />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-orange-600">
          Click to upload <span className="text-slate-600">or drag and drop</span>
        </p>
        <p className="text-[11px] font-semibold text-slate-400 mt-1">
          PNG, JPG, PDF, CSV (Max 5MB each, up to 5 files)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".png,.jpg,.jpeg,.pdf,.csv"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <div className="flex flex-wrap gap-2.5 mt-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-700"
            >
              <span className="text-orange-500">📎</span>
              <span className="truncate max-w-[140px]">{file.name}</span>
              <span className="text-[10px] text-slate-400">{file.size}</span>
              <button
                type="button"
                onClick={() => handleRemoveFile(file.id)}
                className="text-slate-400 hover:text-rose-500 transition-colors p-0.5 cursor-pointer"
              >
                <XIcon size={13} animateOnHover={false} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketAttachmentsUploader;
