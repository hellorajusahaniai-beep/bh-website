import React from 'react';
import { ArrowUpRight, Phone, Mail, Sparkles, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-32 bg-ink border-t border-line text-paper relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 md:px-8 text-center relative z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest font-semibold">
            GET STARTED TODAY
          </span>
        </div>

        {/* Big Archivo Black Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-paper tracking-tight leading-[1.08] uppercase max-w-4xl mx-auto">
          Let's grow <span className="text-gold">beyond</span><br />
          the horizon.
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-muted-lt max-w-xl mx-auto font-normal leading-relaxed">
          Tell us about your business — we'll come back with an actionable growth blueprint, not a sales pitch.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={onOpenBooking}
            className="btn-gold px-9 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href="https://wa.me/919876543210?text=Hi%20Raju,%20I%20want%20to%20grow%20my%20business%20with%20Beyond%20Horizon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-7 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-line hover:border-gold"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#pricing"
            className="btn-ghost px-7 py-4 text-sm font-bold uppercase tracking-wider"
          >
            See Pricing
          </a>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 pt-12 border-t border-line/60 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-muted-lt">
          <a
            href="mailto:hello@beyondhorizonmedia.in"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>hello@beyondhorizonmedia.in</span>
          </a>
          <span className="hidden sm:inline text-line">•</span>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Khadakpada, Kalyan West, MH</span>
          </a>
        </div>

      </div>
    </section>
  );
};
