import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@/icons';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { usePortalBase } from '@/utils/usePortalBase';
import { INITIAL_PRODUCTS } from '@/mock/vendor/vendorProducts.mock';
import ProductStepIndicator from '@/components/vendor/products/form/ProductStepIndicator';
import ProductBasicInfoStep from '@/components/vendor/products/form/ProductBasicInfoStep';
import ProductPricingInventoryStep from '@/components/vendor/products/form/ProductPricingInventoryStep';
import ProductImagesPublishStep from '@/components/vendor/products/form/ProductImagesPublishStep';
import UploadSuccessModal from '@/components/vendor/products/form/UploadSuccessModal';
import UploadErrorModal from '@/components/vendor/products/form/UploadErrorModal';

const DEFAULT_BLANK_PRODUCT = {
  name: '',
  sku: '',
  barcode: '',
  unit: '1kg',
  category: 'Fruits & Vegetables',
  brand: '',
  shortDescription: '',
  detailedDescription: '',
  price: '',
  hasDiscount: false,
  discountType: 'Percentage',
  discountValue: '',
  discountStartDate: '',
  discountEndDate: '',
  stock: '',
  lowStockAlert: '10',
  stockStatus: 'Active',
  allowPurchase: true,
  variants: [],
  variantTab: 'Weight',
  images: [],
  tags: ['fresh', 'organic'],
  countryOfOrigin: 'Pakistan',
  storageInstructions: '',
  status: 'Active',
  isFeatured: false,
};

export const AddEditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const [backRef, backTrigger] = useAnimatedIcon();
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const isEditing = Boolean(id);
  const existingProduct = useMemo(() => {
    return isEditing ? INITIAL_PRODUCTS.find((p) => p.id === id) : null;
  }, [id, isEditing]);

  const [formData, setFormData] = useState(() => {
    if (existingProduct) {
      return {
        ...DEFAULT_BLANK_PRODUCT,
        ...existingProduct,
        images: existingProduct.image ? [existingProduct.image] : [],
      };
    }
    return DEFAULT_BLANK_PRODUCT;
  });

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateProduct = () => {
    const missing = [];
    if (!formData.name?.trim()) missing.push('Product Name');
    if (!formData.unit?.trim()) missing.push('Unit');
    if (!formData.category?.trim()) missing.push('Category');
    if (!formData.shortDescription?.trim()) missing.push('Short Description');
    if (!formData.price || Number(formData.price) <= 0) missing.push('Selling Price');
    if (formData.stock === '' || formData.stock === undefined) missing.push('Stock Quantity');
    if (formData.lowStockAlert === '' || formData.lowStockAlert === undefined) missing.push('Low Stock Alert');
    if (!formData.images || formData.images.length === 0) missing.push('At least one Product Image');
    return missing;
  };

  const handlePublish = () => {
    const missing = validateProduct();
    if (missing.length > 0) {
      setMissingFields(missing);
      setShowErrorModal(true);
      return;
    }
    setShowSuccessModal(true);
  };

  const handleFixErrors = () => {
    setShowErrorModal(false);
    if (!formData.name?.trim() || !formData.unit?.trim() || !formData.shortDescription?.trim()) {
      setStep(1);
    } else if (!formData.price || formData.stock === '') {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5 max-w-5xl mx-auto pb-10">
      <div>
        <Link
          to={getRoute('/products')}
          onMouseEnter={backTrigger.onMouseEnter}
          onMouseLeave={backTrigger.onMouseLeave}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors mb-2 cursor-pointer"
        >
          <ArrowLeftIcon ref={backRef} animateOnHover={false} size={14} />
          <span>Back to Products</span>
        </Link>

        <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          {isEditing ? `Edit Product: ${existingProduct?.name || ''}` : 'Add New Product'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          {isEditing ? 'Modify pricing, inventory, and product details.' : 'Fill in the basic information about your product'}
        </p>
      </div>

      <ProductStepIndicator currentStep={step} onSelectStep={setStep} />

      {step === 1 && (
        <ProductBasicInfoStep
          formData={formData}
          onChange={handleFieldChange}
          onNext={() => setStep(2)}
          onCancel={() => navigate(getRoute('/products'))}
        />
      )}

      {step === 2 && (
        <ProductPricingInventoryStep
          formData={formData}
          onChange={handleFieldChange}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onCancel={() => navigate(getRoute('/products'))}
        />
      )}

      {step === 3 && (
        <ProductImagesPublishStep
          formData={formData}
          onChange={handleFieldChange}
          onPublish={handlePublish}
          onBack={() => setStep(2)}
        />
      )}

      <UploadSuccessModal
        isOpen={showSuccessModal}
        product={formData}
        onAddAnother={() => {
          setFormData(DEFAULT_BLANK_PRODUCT);
          setStep(1);
          setShowSuccessModal(false);
        }}
        onBackToProducts={() => {
          setShowSuccessModal(false);
          navigate(getRoute('/products'));
        }}
      />

      <UploadErrorModal
        isOpen={showErrorModal}
        missingFields={missingFields}
        onClose={() => setShowErrorModal(false)}
        onFixErrors={handleFixErrors}
      />
    </div>
  );
};

export default AddEditProductPage;
