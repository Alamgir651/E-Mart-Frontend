import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XIcon, CameraIcon, RefreshCwIcon, CheckIcon } from '@/icons';
import { BarcodeIcon } from '@/icons';
import { toast } from '@/utils/toast';

const playBeep = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {}
};

export const BarcodeScannerModal = ({ isOpen, onClose, onScan }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [cameraError, setCameraError] = useState('');
  const [manualCode, setManualCode] = useState('');
  const [facingMode, setFacingMode] = useState('environment');

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    if (!isOpen) {
      stopStream();
      return;
    }

    let isMounted = true;
    const startCamera = async () => {
      try {
        setCameraError('');
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: facingMode } },
        });
        if (!isMounted) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
        setHasCamera(true);
      } catch (err) {
        if (!isMounted) return;
        setHasCamera(false);
        setCameraError('Camera access unavailable. You can enter or simulate barcode below.');
      }
    };

    startCamera();
    return () => {
      isMounted = false;
      stopStream();
    };
  }, [isOpen, facingMode]);

  const handleApplyBarcode = (code) => {
    const clean = code.trim();
    if (!clean) {
      toast.error('Please enter a valid barcode or SKU');
      return;
    }
    playBeep();
    toast.success(`Barcode scanned: ${clean}`);
    onScan(clean);
    onClose();
  };

  const toggleCamera = () => {
    stopStream();
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <BarcodeIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Scan Product Barcode</h3>
                  <p className="text-[11px] text-slate-500">Hold barcode inside the camera frame</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <XIcon size={16} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="relative w-full aspect-4/3 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
                {hasCamera ? (
                  <>
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative w-52 h-36 border-2 border-orange-500/80 rounded-2xl bg-orange-500/5 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white rounded-br" />
                        <motion.div
                          animate={{ y: [4, 130, 4] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_8px_#f97316]"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={toggleCamera}
                      title="Switch Camera"
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
                    >
                      <RefreshCwIcon size={14} />
                    </button>
                  </>
                ) : (
                  <div className="text-center p-6 text-slate-400 space-y-2">
                    <CameraIcon size={32} className="mx-auto text-slate-500" />
                    <p className="text-xs">{cameraError}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Manual SKU / Barcode Entry:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="e.g. 8901030928114"
                    className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-mono"
                    onKeyDown={(e) => e.key === 'Enter' && handleApplyBarcode(manualCode)}
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyBarcode(manualCode)}
                    className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                  Or test with sample barcodes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['SKU-892104-V', '8901030928114', 'PRD-ORG-9921'].map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => handleApplyBarcode(code)}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-100 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 border border-slate-200/70 rounded-lg text-slate-700 transition-colors"
                    >
                      + {code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BarcodeScannerModal;
