import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink border-t border-line text-muted-lt py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-line/50">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-black/60 border border-line flex items-center justify-center p-0.5 overflow-hidden">
              <img
                src="/logo.png"
                alt="Beyond Horizon Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display text-paper text-sm tracking-tight block">
                BEYOND HORIZON MEDIA
              </span>
              <span className="text-[11px] font-mono text-muted-lt">
                Raju Sahani (MrCool) · Kalyan West, Khadakpada
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
            <a href="#process" className="hover:text-gold transition-colors">Process</a>
            <a href="#why" className="hover:text-gold transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded border border-line flex items-center justify-center text-muted-lt hover:text-gold hover:border-gold transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p>
            © {new Date().getFullYear()} Beyond Horizon Media Agency. All rights reserved.
          </p>
          <p className="text-muted">
            Crafted for high ROI & local business domination.
          </p>
        </div>

      </div>
    </footer>
  );
};
