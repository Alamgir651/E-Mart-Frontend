import { useState } from 'react';
import { motion } from 'motion/react';
import { LockIcon, EyeIcon, EyeOffIcon, CheckIcon, ArrowRightIcon } from '@/icons';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { toast } from '@/utils/toast';
import { slideUp } from '@/animation/animations';

export const AdminResetPasswordCard = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRules = [
    { id: 'length', label: 'At least 8 characters', met: formData.password.length >= 8 },
    { id: 'uppercase', label: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { id: 'number', label: 'One number', met: /\d/.test(formData.password) },
    { id: 'special', label: 'One special character', met: /[^A-Za-z0-9]/.test(formData.password) },
  ];

  const allRulesMet = passwordRules.every((r) => r.met);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.error('Please enter and confirm your new password.');
      return;
    }
    if (!allRulesMet) {
      toast.error('Password does not meet all security requirements.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess?.();
    }, 600);
  };

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-10 shadow-2xl shadow-slate-900/10 border border-slate-100/80"
    >
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <Input
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter new password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          icon={<LockIcon size={18} />}
          required
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          }
        />

        <Input
          label="Confirm Password"
          type={showConfirm ? 'text' : 'password'}
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          icon={<LockIcon size={18} />}
          required
          rightElement={
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              tabIndex={-1}
            >
              {showConfirm ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          }
        />

        <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100/70 space-y-2">
          {passwordRules.map((rule) => (
            <div key={rule.id} className="flex items-center gap-2.5 text-xs">
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  rule.met
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                <CheckIcon size={10} className="stroke-[3]" />
              </span>
              <span
                className={`font-medium transition-colors ${
                  rule.met ? 'text-slate-700' : 'text-slate-400'
                }`}
              >
                {rule.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full py-3 sm:py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-orange-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminResetPasswordCard;
