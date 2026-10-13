import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldAlertIcon, ArrowRightIcon } from '@/icons';
import { Button } from '@/components/common/Button';
import { toast } from '@/utils/toast';
import { slideUp } from '@/animation/animations';

export const AdminTwoFactorCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const flow = location.state?.flow || 'login';
  const email = location.state?.email || 'admin@emart.com';

  const [otp, setOtp] = useState(['4', '8', '2', '9', '1', '0']);
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const newOtp = pasted.split('').concat(Array(6).fill('')).slice(0, 6);
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleResend = () => {
    setTimer(30);
    toast.success(`New 6-digit code sent to ${email}`);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) {
      toast.error('Please enter the complete 6-digit verification code.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (flow === 'forgot-password') {
        toast.success('Code verified! Please set a new password.');
        navigate('/admin/reset-password', { state: { email } });
      } else {
        toast.success('Admin identity verified! Entering dashboard.');
        navigate('/admin/dashboard');
      }
    }, 700);
  };

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-10 shadow-2xl shadow-slate-900/10 border border-slate-100/80 text-center"
    >
      <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 mx-auto">
        <ShieldAlertIcon size={26} />
      </div>

      <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
        Enter Verification Code
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
        We've sent a 6-digit code to{' '}
        <span className="font-semibold text-orange-600">{email}</span>
      </p>

      <form onSubmit={handleVerify} className="mt-8 space-y-6">
        <div className="flex items-center justify-center gap-2 sm:gap-2.5" onPaste={handlePaste}>
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputRefs.current[idx] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e.key)}
              className="w-11 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-semibold text-slate-900 bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          ))}
        </div>

        <div className="text-xs text-slate-500">
          Didn't receive the code?{' '}
          {timer > 0 ? (
            <span className="font-semibold text-orange-600">
              Resend in 00:{timer < 10 ? `0${timer}` : timer}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
            >
              Resend Code
            </button>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full py-3 sm:py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-orange-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Verify Code</span>
          <ArrowRightIcon size={16} />
        </Button>
      </form>
    </motion.div>
  );
};

export default AdminTwoFactorCard;
