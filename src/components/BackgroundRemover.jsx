import { useState, useRef, useCallback, useEffect } from 'react';
import { removeBackground } from '@imgly/background-removal';
import {
  Upload,
  Download,
  RotateCcw,
  Loader2,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { Button } from './ui/Button';

/* ---------- constants ---------- */
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ACCEPT_STRING = '.jpg,.jpeg,.png,.webp';

/**
 * Generate a small canvas-based sample image (sky gradient + human-like
 * silhouette) so "Try Sample Image" works even without a shipped asset.
 * Returns a Promise<Blob>.
 */
function generateSampleBlob() {
  return new Promise((resolve) => {
    const W = 600;
    const H = 500;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // -- Sky gradient background --
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#38bdf8');
    sky.addColorStop(0.6, '#818cf8');
    sky.addColorStop(1, '#6d28d9');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // -- "Ground" strip --
    ctx.fillStyle = '#64748b';
    ctx.fillRect(0, H - 80, W, 80);

    // -- Human-like silhouette (head + body) --
    const cx = W / 2;
    const skin = '#f59e0b';

    // Head
    ctx.beginPath();
    ctx.arc(cx, 170, 55, 0, Math.PI * 2);
    ctx.fillStyle = skin;
    ctx.fill();

    // Torso
    ctx.beginPath();
    ctx.moveTo(cx - 70, 240);
    ctx.quadraticCurveTo(cx - 80, 400, cx - 50, H - 80);
    ctx.lineTo(cx + 50, H - 80);
    ctx.quadraticCurveTo(cx + 80, 400, cx + 70, 240);
    ctx.closePath();
    ctx.fillStyle = '#3b82f6';
    ctx.fill();

    // Neck
    ctx.fillStyle = skin;
    ctx.fillRect(cx - 18, 220, 36, 28);

    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
}

/* ========================================================
   BackgroundRemover — 4-phase state-machine component
   idle → processing → done  (or → error at any stage)
   ======================================================== */
export default function BackgroundRemover() {
  /* ----- state ----- */
  const [phase, setPhase] = useState('idle'); // idle | processing | done | error
  const [originalUrl, setOriginalUrl] = useState(null);
  const [processedUrl, setProcessedUrl] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  /* ----- refs for object-URL lifecycle ----- */
  const fileInputRef = useRef(null);
  const originalUrlRef = useRef(null);
  const processedUrlRef = useRef(null);

  // Revoke any lingering object URLs on unmount
  useEffect(() => {
    return () => {
      if (originalUrlRef.current) URL.revokeObjectURL(originalUrlRef.current);
      if (processedUrlRef.current) URL.revokeObjectURL(processedUrlRef.current);
    };
  }, []);

  /** Revoke both preview URLs (called before every new run & on reset). */
  const revokeUrls = useCallback(() => {
    if (originalUrlRef.current) {
      URL.revokeObjectURL(originalUrlRef.current);
      originalUrlRef.current = null;
    }
    if (processedUrlRef.current) {
      URL.revokeObjectURL(processedUrlRef.current);
      processedUrlRef.current = null;
    }
  }, []);

  /* ==========================
     Core AI Processing Pipeline
     ========================== */
  const processImage = useCallback(
    async (source, name = 'image') => {
      // 1. Tear down previous run
      revokeUrls();
      setPhase('processing');
      setError(null);
      setProgress(0);
      setShowOriginal(false);
      setStatusMessage('Initializing AI engine…');
      setFileName(name.replace(/\.[^/.]+$/, '') + '_no_bg.png');

      // 2. Create a preview URL for the original
      if (source instanceof Blob) {
        const url = URL.createObjectURL(source);
        originalUrlRef.current = url;
        setOriginalUrl(url);
      } else {
        // source is already a displayable URL string
        setOriginalUrl(source);
      }

      // 3. Run @imgly/background-removal with high-quality config
      try {
        const resultBlob = await removeBackground(source, {
          model: 'large',
          output: {
            format: 'image/png',
            quality: 1,
          },
          progress: (key, current, total) => {
            const pct = total > 0 ? Math.min(1, current / total) : 0;

            if (key.includes('fetch')) {
              // Model download phase (0 → 60 %)
              setStatusMessage(
                `Downloading AI model to cache… ${Math.round(pct * 100)}%`
              );
              setProgress(pct * 0.6);
            } else if (
              key.includes('compute') ||
              key.includes('inference')
            ) {
              // Inference phase (60 → 100 %)
              setStatusMessage('Removing background…');
              setProgress(0.6 + pct * 0.4);
            } else {
              setStatusMessage('Processing…');
            }
          },
        });

        // 4. Store result as an object URL
        const url = URL.createObjectURL(resultBlob);
        processedUrlRef.current = url;
        setProcessedUrl(url);
        setProgress(1);
        setPhase('done');
      } catch (err) {
        console.error('[BackgroundRemover] AI processing failed:', err);
        setError(
          err?.message ||
            'Background removal failed. Please try a different image or refresh the page.'
        );
        setPhase('error');
      }
    },
    [revokeUrls]
  );

  /* ==========================
     File Validation & Intake
     ========================== */
  const handleFile = useCallback(
    (file) => {
      if (!file) return;
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError('Unsupported format. Please upload a JPG, PNG, or WebP image.');
        setPhase('error');
        return;
      }
      processImage(file, file.name);
    },
    [processImage]
  );

  /* ==========================
     Drag-and-Drop Handlers
     ========================== */
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      handleFile(e.dataTransfer?.files?.[0]);
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e) => handleFile(e.target.files?.[0]),
    [handleFile]
  );

  /* ==========================
     Sample Image Loader
     ========================== */
  const handleSampleImage = useCallback(async () => {
    try {
      // Load bundled sample photo from /sample.jpg
      const sampleUrl = new URL('/sample.jpg', window.location.href).href;
      const res = await fetch(sampleUrl);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const blob = await res.blob();
      await processImage(blob, 'sample.jpg');
    } catch (err) {
      console.warn('Could not fetch sample.jpg, using canvas generator:', err);
      try {
        const blob = await generateSampleBlob();
        if (blob) await processImage(blob, 'sample.png');
      } catch (fallbackErr) {
        console.error('Failed to generate fallback sample:', fallbackErr);
        setError('Could not load sample image. Please upload an image directly.');
        setPhase('error');
      }
    }
  }, [processImage]);

  /* ==========================
     Download Handler
     ========================== */
  const handleDownload = useCallback(() => {
    if (!processedUrl) return;
    const anchor = document.createElement('a');
    anchor.href = processedUrl;
    anchor.download = fileName || 'background_removed.png';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, [processedUrl, fileName]);

  /* ==========================
     Reset / Start Over
     ========================== */
  const handleReset = useCallback(() => {
    revokeUrls();
    setPhase('idle');
    setOriginalUrl(null);
    setProcessedUrl(null);
    setStatusMessage('');
    setProgress(0);
    setError(null);
    setShowOriginal(false);
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [revokeUrls]);

  /* ========================================================
     R E N D E R
     ======================================================== */

  /* ---------- PHASE: idle — Upload Zone ---------- */
  if (phase === 'idle') {
    return (
      <div className="w-full max-w-2xl mx-auto px-1 sm:px-0">
        {/* Drop zone */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload an image"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          className={`
            relative cursor-pointer rounded-2xl sm:rounded-3xl border-2 border-dashed
            p-6 sm:p-10 md:p-14 transition-all duration-300 text-center
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#26b0a1] focus-visible:ring-offset-2
            ${
              dragActive
                ? 'border-[#26b0a1] bg-[#f0fbf9] scale-[1.01] shadow-lg ring-4 ring-[#26b0a1]/20'
                : 'border-[#b0ece2] hover:border-[#26b0a1] bg-white hover:bg-[#f0fbf9]/40 shadow-sm hover:shadow-md'
            }
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPT_STRING}
            onChange={handleInputChange}
            className="hidden"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-3.5 sm:gap-5">
            <div
              className={`rounded-2xl p-3.5 sm:p-5 transition-colors duration-300 ${
                dragActive
                  ? 'bg-[#d6f5f0] text-[#1e9387]'
                  : 'bg-[#f0fbf9] text-[#26b0a1] border border-[#b0ece2]/70'
              }`}
            >
              <Upload
                className="h-8 w-8 sm:h-10 sm:w-10 text-[#26b0a1]"
                strokeWidth={1.8}
              />
            </div>

            <div className="px-2">
              <p className="text-base sm:text-xl font-bold text-slate-800">
                {dragActive
                  ? 'Drop your image here'
                  : 'Drag & drop your image here'}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                or tap to browse files · JPG, PNG, WebP
              </p>
            </div>
          </div>
        </div>

        {/* Sample Image CTA */}
        <div className="mt-4 sm:mt-5 text-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSampleImage();
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#1c756d]
                       bg-[#f0fbf9] hover:bg-[#d6f5f0] active:bg-[#b0ece2] border border-[#b0ece2]
                       font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-2xs active:scale-95
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26b0a1]"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#26b0a1]" />
            Try Sample Image
          </button>
        </div>
      </div>
    );
  }

  /* ---------- PHASE: processing — Progress Indicator ---------- */
  if (phase === 'processing') {
    return (
      <div className="w-full max-w-2xl mx-auto px-1 sm:px-0">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
          {/* Dimmed original preview */}
          {originalUrl && (
            <div className="mb-5 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center p-2">
              <img
                src={originalUrl}
                alt="Uploading"
                className="max-h-48 sm:max-h-72 w-auto max-w-full object-contain opacity-30 select-none pointer-events-none"
              />
            </div>
          )}

          {/* Spinner + dynamic status */}
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-3.5 sm:gap-4 text-center"
          >
            <Loader2 className="h-8 w-8 sm:h-10 sm:w-10 text-brand-500 animate-spin" />

            <p className="text-xs sm:text-sm font-medium text-slate-700 px-2">
              {statusMessage}
            </p>

            {/* Progress bar */}
            <div className="w-full max-w-xs sm:max-w-sm mx-auto">
              <div
                role="progressbar"
                aria-valuenow={Math.round(progress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                className="bg-slate-100 rounded-full h-2 sm:h-2.5 overflow-hidden"
              >
                <div
                  className="bg-gradient-to-r from-brand-400 to-brand-500 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-medium">
                {Math.round(progress * 100)}% complete
              </p>
            </div>
          </div>

          {/* First-run hint */}
          <p className="text-[11px] sm:text-xs text-slate-400 text-center mt-5 sm:mt-6 leading-relaxed px-2">
            The first run downloads the AI model (~40 MB) to your browser cache.
            <br className="hidden sm:inline" />
            {' '}Subsequent removals are instant.
          </p>
        </div>
      </div>
    );
  }

  /* ---------- PHASE: error — Error State ---------- */
  if (phase === 'error') {
    return (
      <div className="w-full max-w-2xl mx-auto px-1 sm:px-0">
        <div className="rounded-2xl sm:rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8 shadow-sm text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl bg-red-100 p-3.5 sm:p-4">
              <AlertCircle className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" />
            </div>

            <div>
              <p className="text-sm sm:text-base font-semibold text-red-800">
                Something went wrong
              </p>
              <p className="text-xs sm:text-sm text-red-600 mt-1 max-w-md mx-auto">
                {error}
              </p>
            </div>

            <Button variant="secondary" size="md" onClick={handleReset} className="w-full sm:w-auto">
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- PHASE: done — Preview + Export ---------- */
  return (
    <div className="w-full max-w-2xl mx-auto px-1 sm:px-0">
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image preview on checkered transparency background */}
        <div className="relative bg-checkered flex items-center justify-center min-h-[220px] sm:min-h-[340px] max-h-[55vh] sm:max-h-[65vh] p-3 sm:p-6 overflow-hidden">
          <img
            src={showOriginal ? originalUrl : processedUrl}
            alt={showOriginal ? 'Original image' : 'Background removed'}
            className="max-h-[48vh] sm:max-h-[28rem] w-auto max-w-full object-contain select-none transition-all duration-200"
          />

          {/* Status badge */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-slate-900/75 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full select-none shadow-xs">
              {showOriginal ? (
                <>
                  <Eye className="h-3 w-3" />
                  Original
                </>
              ) : (
                <>
                  <Sparkles className="h-3 w-3 text-amber-300" />
                  Background Removed
                </>
              )}
            </span>
          </div>
        </div>

        {/* Action bar (Responsive: stacked on mobile with full width buttons, row on tablet/desktop) */}
        <div className="p-3.5 sm:p-5 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 border-t border-slate-100 bg-slate-50/50">
          {/* Secondary actions */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowOriginal((prev) => !prev)}
              className="w-full sm:w-auto justify-center text-xs sm:text-sm py-2"
            >
              {showOriginal ? (
                <>
                  <EyeOff className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Show Result
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Original
                </>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="w-full sm:w-auto justify-center text-xs sm:text-sm py-2 bg-white sm:bg-transparent border border-slate-200 sm:border-transparent"
            >
              <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              New Image
            </Button>
          </div>

          {/* Primary CTA: Prominent Download PNG */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleDownload}
            className="w-full sm:w-auto justify-center py-2.5 sm:py-3 shadow-md hover:shadow-lg"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            Download PNG
          </Button>
        </div>
      </div>
    </div>
  );
}
