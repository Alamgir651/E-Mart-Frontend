import { useState, useEffect, useRef } from 'react';
import { XIcon, UploadIcon, ChevronDownIcon } from '@/icons';
import { BANNER_CATEGORIES } from '@/mock/admin/banners.mock';

const INITIAL_FORM = {
  placement: 'Homepage',
  category: 'Fruits & Vegetables',
  image: null,
  imageFileName: '',
  imageDimensions: '1200 × 600 px',
  title: '',
  description: '',
  ctaText: '',
  ctaLink: '',
  enabled: true,
};

export const BannerModal = ({
  isOpen,
  onClose,
  onSave,
  editingBanner = null,
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editingBanner) {
      setFormData({
        placement: editingBanner.placement || 'Homepage',
        category: editingBanner.category || 'Fruits & Vegetables',
        image: editingBanner.image || null,
        imageFileName: editingBanner.imageFileName || '',
        imageDimensions: editingBanner.imageDimensions || '1200 × 600 px',
        title: editingBanner.title || '',
        description: editingBanner.description || '',
        ctaText: editingBanner.ctaText || '',
        ctaLink: editingBanner.ctaLink || '',
        enabled: editingBanner.enabled ?? true,
      });
    } else {
      setFormData(INITIAL_FORM);
    }
  }, [editingBanner, isOpen]);

  if (!isOpen) return null;

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
          imageFileName: file.name,
          imageDimensions: '1200 × 600 px',
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const savedBanner = {
      id: editingBanner ? editingBanner.id : `BNR-${Date.now()}`,
      placement: formData.placement,
      category: formData.placement === 'Category Page' ? formData.category : '',
      image: formData.image,
      imageFileName: formData.imageFileName || (formData.placement === 'Homepage' ? 'homepage-fresh.jpg' : 'fruits-vegetables.jpg'),
      imageDimensions: formData.imageDimensions || '1200 × 600 px',
      title: formData.title.trim(),
      description: formData.description.trim(),
      ctaText: formData.ctaText.trim(),
      ctaLink: formData.ctaLink.trim(),
      enabled: formData.enabled,
      status: formData.enabled ? 'Active' : 'Disabled',
    };

    onSave(savedBanner);
    onClose();
  };

  const isCategoryPlacement = formData.placement === 'Category Page';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {editingBanner ? 'Edit Banner' : 'Add New Banner'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose a placement and add the image, message and CTA for your banner.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form
          id="banner-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-5"
        >
          {/* Row 1: Placement & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Placement */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Placement *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {/* Homepage Radio */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData((p) => ({ ...p, placement: 'Homepage' }))
                  }
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    formData.placement === 'Homepage'
                      ? 'border-orange-500 bg-orange-50/30 text-orange-700 ring-1 ring-orange-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.placement === 'Homepage'
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {formData.placement === 'Homepage' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span>Homepage</span>
                </button>

                {/* Category Page Radio */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData((p) => ({ ...p, placement: 'Category Page' }))
                  }
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    formData.placement === 'Category Page'
                      ? 'border-orange-500 bg-orange-50/30 text-orange-700 ring-1 ring-orange-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      formData.placement === 'Category Page'
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {formData.placement === 'Category Page' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  <span>Category Page</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Where this banner will appear in your store.
              </p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Category *
              </label>
              <div className="relative">
                <select
                  disabled={!isCategoryPlacement}
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, category: e.target.value }))
                  }
                  className={`w-full appearance-none px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-800 border focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs transition-colors ${
                    isCategoryPlacement
                      ? 'bg-white border-slate-200 cursor-pointer'
                      : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {BANNER_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  size={15}
                  animateOnHover={false}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {isCategoryPlacement
                  ? 'Required for Category Page. Visible only in this category.'
                  : 'Disabled for Homepage banners.'}
              </p>
            </div>
          </div>

          {/* Row 2: Banner Image */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Banner Image *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              className="hidden"
            />

            {formData.image ? (
              <div className="relative rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 p-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={formData.image}
                    alt="Banner preview"
                    className="w-24 h-14 object-cover rounded-xl border border-slate-200 shrink-0 shadow-2xs"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate">
                      {formData.imageFileName || 'Selected banner image'}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {formData.imageDimensions || '1200 × 600 px'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        image: null,
                        imageFileName: '',
                      }))
                    }
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer transition-colors"
                    title="Remove image"
                  >
                    <XIcon size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-orange-200/90 hover:border-orange-400 bg-orange-50/20 hover:bg-orange-50/40 rounded-2xl p-6 text-center cursor-pointer transition-all group"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <UploadIcon size={20} animateOnHover={false} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                  Click to upload or drag and drop
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  JPG, PNG or WebP · Max 5 MB · Recommended 1200 × 600 px
                </p>
              </div>
            )}
          </div>

          {/* Row 3: Main Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Main Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData((p) => ({ ...p, title: e.target.value }))
              }
              placeholder="Fresh picks for every day"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
            />
          </div>

          {/* Row 4: Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData((p) => ({ ...p, description: e.target.value }))
              }
              placeholder="Bring home seasonal fruits and crisp vegetables, picked fresh and delivered with care."
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs resize-none"
            />
          </div>

          {/* Row 5: CTA button text & CTA link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                CTA button text *
              </label>
              <input
                type="text"
                required
                value={formData.ctaText}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, ctaText: e.target.value }))
                }
                placeholder="Shop fresh picks"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                CTA destination / link *
              </label>
              <input
                type="text"
                required
                value={formData.ctaLink}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, ctaLink: e.target.value }))
                }
                placeholder="/category/fruits-vegetables"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
              />
            </div>
          </div>

          {/* Row 6: Enabled Toggle Card */}
          <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                Enabled
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {isCategoryPlacement
                  ? 'This banner will be visible in the selected category after creation.'
                  : 'This banner will be visible on the homepage after creation.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setFormData((p) => ({ ...p, enabled: !p.enabled }))
              }
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                formData.enabled ? 'bg-orange-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                  formData.enabled ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <span className="text-xs text-slate-400 font-medium">
            * Required fields
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="banner-form"
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
            >
              {editingBanner ? 'Save Changes' : 'Create Banner'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerModal;
