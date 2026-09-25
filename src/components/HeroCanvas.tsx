import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroCanvasProps {
  onOpenBooking: () => void;
}

const TOTAL_FRAMES = 300;

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentRenderedFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Progressive Preloading of 300 frames
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const padZero = (num: number) => String(num).padStart(3, '0');

    // Priority load first 15 frames for instant display
    const priorityCount = 15;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/images/ezgif-frame-${padZero(index)}.jpg`;
        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount >= priorityCount && !isLoaded) {
            setIsLoaded(true);
          }
          resolve(img);
        };
        img.onerror = () => {
          if (!isMounted) return;
          loadedCount++;
          resolve(img);
        };
        images[index - 1] = img;
      });
    };

    const loadAllImages = async () => {
      // Step 1: Load first batch
      const initialBatch = [];
      for (let i = 1; i <= Math.min(priorityCount, TOTAL_FRAMES); i++) {
        initialBatch.push(loadSingleImage(i));
      }
      await Promise.all(initialBatch);

      if (isMounted) {
        imagesRef.current = images;
        // Draw the very first frame immediately
        drawFrame(0);
      }

      // Step 2: Load remaining frames in batches of 20 to avoid network congestion
      const batchSize = 20;
      for (let i = priorityCount + 1; i <= TOTAL_FRAMES; i += batchSize) {
        if (!isMounted) break;
        const batch = [];
        for (let j = i; j < i + batchSize && j <= TOTAL_FRAMES; j++) {
          batch.push(loadSingleImage(j));
        }
        await Promise.all(batch);
      }
    };

    loadAllImages();

    return () => {
      isMounted = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Draw frame on canvas with object-fit: cover logic
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate object-fit: cover aspect ratio
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth = canvasWidth;
    let renderHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

    // Subtle dark vignette gradient overlay to ensure text readability
    const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    gradient.addColorStop(0, 'rgba(14, 14, 14, 0.7)');
    gradient.addColorStop(0.5, 'rgba(14, 14, 14, 0.35)');
    gradient.addColorStop(1, 'rgba(14, 14, 14, 0.85)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }, []);

  // Handle resize for crisp HiDPI canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }

      drawFrame(currentRenderedFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Smooth Render Loop using requestAnimationFrame & Lerp
  useEffect(() => {
    let running = true;

    const renderLoop = () => {
      if (!running) return;

      const target = targetFrameRef.current;
      const current = currentRenderedFrameRef.current;

      // Smooth interpolation for 60fps scrubbing
      const diff = target - current;
      if (Math.abs(diff) > 0.05) {
        const next = current + diff * 0.18; // smooth lerp factor
        currentRenderedFrameRef.current = next;
        const roundedIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(next))
        );
        drawFrame(roundedIndex);
        setCurrentFrameIndex(roundedIndex + 1);
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      running = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [drawFrame]);

  // Scroll event listener: Map container scroll position to frame 0..299
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Calculate target frame
      const frameTarget = progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = frameTarget;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[400vh] bg-ink"
      id="hero-scroll-container"
    >
      {/* Sticky Canvas & UI Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* Background Canvas (300 Frame Video Scrubber) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Ambient Character Glow & Overlay Accent */}
        <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] animate-pulse-glow" />
        </div>

        {/* Loading Indicator Bar */}
        {loadProgress < 100 && (
          <div className="absolute top-20 right-8 z-30 flex items-center gap-3 bg-ink/90 border border-line px-3 py-1.5 rounded-full text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-muted-lt">Casting 300 Frames:</span>
            <span className="text-gold font-bold">{loadProgress}%</span>
          </div>
        )}

        {/* Interactive Frame Counter Badge */}
        <div className="absolute top-24 left-8 z-30 hidden sm:flex items-center gap-2 bg-ink/70 backdrop-blur-md border border-line/60 px-3 py-1 rounded text-[11px] font-mono text-muted-lt">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>FRAME: {String(currentFrameIndex).padStart(3, '0')} / 300</span>
          <span className="text-gold">| SCROLL INTERACTIVE</span>
        </div>

        {/* Main Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 md:px-8 pt-32 pb-12 flex flex-col items-center justify-center text-center my-auto">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6 backdrop-blur-sm animate-in fade-in duration-500">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold">
              Kalyan West · Khadakpada
            </span>
          </div>

          {/* H1 Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white leading-[1.05] tracking-tight max-w-5xl uppercase drop-shadow-2xl">
            Local business has a ceiling.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#ffd280] to-gold">
              We build past it.
            </span>
          </h1>

          {/* Lede / Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-lt max-w-2xl font-normal leading-relaxed">
            Hi, I'm <strong className="text-paper font-semibold">Raju Sahani (MrCool)</strong>. I run high-ROI paid ads, social media, AI content, automation and web for businesses in Kalyan West — <span className="text-paper">one team, one number to call</span>, no vendors to juggle.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <button
              onClick={onOpenBooking}
              className="btn-gold px-8 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Book a Strategy Call</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
            <a
              href="#services"
              className="btn-ghost px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-md"
            >
              See what we do ↓
            </a>
          </div>

          {/* Highlights Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs font-mono text-muted-lt">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold" /> ₹5K-50K Local Budgets
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Full WhatsApp Automation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Transparent ROI Tracking
            </span>
          </div>
        </div>

        {/* Bottom Scroll Prompt Bar */}
        <div className="relative z-10 pb-8 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-lt group-hover:text-gold transition-colors">
              Scroll to scrub the experience & explore services
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-lt/40 flex items-start justify-center p-1 group-hover:border-gold transition-colors">
              <div className="w-1.5 h-2.5 bg-gold rounded-full animate-bounce mt-1" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
