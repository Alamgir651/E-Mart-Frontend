import { useState } from 'react';
import { INITIAL_STORE_INFO } from '@/mock/vendor/vendorStore.mock';
import StoreHeader from '@/components/vendor/store/StoreHeader';
import StoreBannerUpload from '@/components/vendor/store/StoreBannerUpload';
import StoreLogoUpload from '@/components/vendor/store/StoreLogoUpload';
import StoreDetailsForm from '@/components/vendor/store/StoreDetailsForm';
import StoreActionButtons from '@/components/vendor/store/StoreActionButtons';
import { toast } from '@/utils/toast';

export const VendorStorePage = () => {
  const [formData, setFormData] = useState(INITIAL_STORE_INFO);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setFormData(INITIAL_STORE_INFO);
    toast.info('Changes discarded');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('Store name is required');
      return;
    }
    if (!formData.description.trim()) {
      toast.error('Store description is required');
      return;
    }
    if (!formData.category) {
      toast.error('Store category is required');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Store information updated successfully!');
    }, 400);
  };

  return (
    <div className="space-y-4 sm:space-y-5 w-full">
      <StoreHeader />

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-xs space-y-6"
      >
        <StoreBannerUpload
          bannerUrl={formData.banner}
          onBannerChange={(url) => handleFieldChange('banner', url)}
        />

        <StoreLogoUpload
          logoUrl={formData.logo}
          onLogoChange={(url) => handleFieldChange('logo', url)}
        />

        <StoreDetailsForm
          formData={formData}
          onChange={handleFieldChange}
        />

        <StoreActionButtons
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </form>
    </div>
  );
};

export default VendorStorePage;
