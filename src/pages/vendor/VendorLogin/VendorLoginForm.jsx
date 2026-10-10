import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LockIcon, EyeIcon, EyeOffIcon } from '@/icons';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Checkbox } from '@/components/common/Checkbox';
import { GoogleButton } from '@/components/common/GoogleButton';
import { toast } from '@/utils/toast';
import { slideUp } from '@/animation/animations';

export const VendorLoginForm = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.identifier || !formData.password) {
      toast.error('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Welcome back! Vendor logged in successfully.');
    }, 900);
  };

  const handleGoogleLogin = () => {
    toast.info('Google authentication connected.');
  };

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-10 shadow-2xl shadow-slate-900/15 border border-white/80"
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Login to your vendor account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <Input
          label="Email Address or Phone Number"
          required
          value={formData.identifier}
          onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
          placeholder="Enter email or phone number"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Enter your password"
          icon={<LockIcon size={18} />}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          }
        />

        <div className="flex items-center justify-between text-xs pt-0.5">
          <Checkbox
            label="Remember me"
            checked={formData.rememberMe}
            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
          />
          <a href="#forgot-password" className="font-semibold text-orange-600 hover:text-orange-700">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" isLoading={isLoading}>
          Login
        </Button>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase select-none">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <GoogleButton onClick={handleGoogleLogin} />
      </form>

      <div className="mt-6 text-center text-xs text-slate-500">
        Don&apos;t have an account?{' '}
        <Link to="/vendor/register" className="font-bold text-orange-600 hover:text-orange-700 ml-1">
          Register
        </Link>
      </div>
    </motion.div>
  );
};

export default VendorLoginForm;
