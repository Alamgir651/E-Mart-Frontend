import { useState } from 'react';
import { motion } from 'motion/react';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon, MailCheckIcon, ChevronDownIcon } from '@/icons';
import { Input } from '@/components/common/Input';
import { sanitizeName, sanitizePhone, sanitizeCNIC, sanitizeEmail } from '@/utils/validators';
import { slideUp } from '@/animation/animations';

export const BusinessDetailsForm = ({ formData, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-4"
    >
      <div className="space-y-3.5">
        <Input
          label="Full Name *"
          required
          value={formData.fullName}
          onChange={(e) => onChange('fullName', sanitizeName(e.target.value))}
          placeholder="Enter your full name"
          icon={<UserIcon size={18} />}
        />

        <Input
          label="Email Address *"
          type="email"
          required
          value={formData.email}
          onChange={(e) => onChange('email', sanitizeEmail(e.target.value))}
          placeholder="Enter your email address"
          icon={<MailCheckIcon size={18} />}
        />

        <div className="group">
          <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors group-hover:text-slate-900">
            Phone Number *
          </label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 select-none group-hover:border-slate-300 transition-colors">
              <span>🇵🇰</span>
              <span>+92</span>
              <ChevronDownIcon size={12} className="text-slate-400 group-hover:text-slate-600" />
            </div>
            <input
              type="tel"
              required
              maxLength={11}
              value={formData.phone}
              onChange={(e) => onChange('phone', sanitizePhone(e.target.value))}
              placeholder="300 1234567"
              className="flex-1 px-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        <Input
          label="Password *"
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          placeholder="Enter your password"
          icon={<LockIcon size={18} />}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          }
        />
      </div>

      <div className="space-y-3.5 flex flex-col">
        <Input
          label="CNIC / National ID *"
          required
          maxLength={15}
          value={formData.cnic}
          onChange={(e) => onChange('cnic', sanitizeCNIC(e.target.value))}
          placeholder="XXXXX-XXXXXXX-X"
        />

        <div className="flex-1 flex flex-col group">
          <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors group-hover:text-slate-900">
            Business Description (Optional)
          </label>
          <div className="relative flex-1 flex flex-col">
            <textarea
              maxLength={300}
              rows={4}
              value={formData.description}
              onChange={(e) => onChange('description', e.target.value)}
              placeholder="Tell us about your business"
              className="w-full flex-1 p-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
            />
            <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-slate-400">
              {formData.description?.length || 0}/300
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessDetailsForm;
