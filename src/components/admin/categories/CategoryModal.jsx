import { useState, useEffect } from 'react';
import { XIcon, CheckIcon } from '@/icons';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';
import CategoryImageUpload from './CategoryImageUpload';
import applesImg from '@/assets/images/products/apples.jpg';

export const CategoryModal = ({
  isOpen,
  onClose,
  onSubmit,
  categoryToEdit = null,
}) => {
  const isEditing = Boolean(categoryToEdit);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Active');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (categoryToEdit) {
        setName(categoryToEdit.name || '');
        setDescription(categoryToEdit.description || '');
        setStatus(categoryToEdit.status || 'Active');
        setImage(categoryToEdit.image || null);
      } else {
        setName('');
        setDescription('');
        setStatus('Active');
        setImage(null);
      }
      setError('');
    }
  }, [isOpen, categoryToEdit]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Category name is required.');
      return;
    }

    onSubmit({
      name: name.trim(),
      description: description.trim(),
      status,
      image: image || applesImg,
    });
    onClose();
  };

  const isActive = status === 'Active';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-5"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {isEditing ? 'Edit Category' : 'Add Category'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {isEditing
                ? 'Update category information and store visibility.'
                : "Create a category to organize your store's products."}
            </p>
          </div>

          <OrderActionButton
            icon={XIcon}
            title="Close"
            onClick={onClose}
            iconSize={18}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Category name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. Bakery & Breads"
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400 ${
                error ? 'border-rose-400 ring-1 ring-rose-400' : 'border-slate-200'
              }`}
            />
            {error && <p className="text-[11px] font-semibold text-rose-500">{error}</p>}
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Description <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Freshly baked breads, pastries and everyday bakery essentials."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-800 placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* Category Image Dropzone */}
          <CategoryImageUpload image={image} onImageChange={setImage} />

          {/* Status Toggle Switch */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <p className="text-xs font-bold text-slate-800">Status</p>
              <p className="text-[11px] text-slate-400">Visible to customers when active.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                role="switch"
                aria-checked={isActive}
                onClick={() => setStatus(isActive ? 'Inactive' : 'Active')}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isActive ? 'bg-orange-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                    isActive ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-bold ${isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                {status}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2.5 px-5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <CheckIcon animateOnHover={false} size={15} />
              <span>{isEditing ? 'Save Changes' : 'Add Category'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
