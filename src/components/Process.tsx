import React from 'react';
import { GitCommit, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenBooking: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your local business, margins, ideal customers, and 90-day growth targets.',
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Build a channel plan, content calendar, high-converting offer, and creative scripts.',
    },
    {
      num: '03',
      title: 'Launch',
      desc: 'Go live with hyper-targeted ads, daily content, video reels, and WhatsApp chatbots.',
    },
    {
      num: '04',
      title: 'Optimize',
      desc: 'A/B test creatives, cut losing ad sets, refine lead flows, and improve weekly CAC.',
    },
    {
      num: '05',
      title: 'Report & Scale',
      desc: '100% transparent monthly ROI reporting, rupee-for-rupee metrics, and scaling plan.',
    },
  ];

  return (
    <section id="process" className="py-28 bg-ink border-t border-line relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="font-mono text-xs text-gold uppercase tracking-[0.18em] mb-3 flex items-center gap-2 font-bold">
            <GitCommit className="w-4 h-4 text-gold" />
            HOW WE WORK
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-paper tracking-tight leading-tight">
            Five steps, one straight line to launch
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-lt leading-relaxed">
            From our initial discovery call to ongoing monthly scaling — the exact disciplined protocol every single time.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-ink border-2 border-gold flex items-center justify-center font-mono text-sm font-bold text-gold mb-6 shadow-glow-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-lg text-paper mb-2 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-lt leading-relaxed">
                  {step.desc}
                </p>

                {/* Step index badge on mobile */}
                <div className="lg:hidden mt-4 pt-2 text-[11px] font-mono text-gold flex items-center gap-1">
                  <span>STEP {idx + 1} OF 5</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 rounded-lg bg-ink-2 border border-line flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl text-paper mb-1">
              Ready to begin Step 01 with Raju?
            </h4>
            <p className="text-sm text-muted-lt">
              We audit your existing presence and formulate your custom 90-day growth roadmap at zero cost.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap flex items-center gap-2"
          >
            <span>Book 30-Min Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
