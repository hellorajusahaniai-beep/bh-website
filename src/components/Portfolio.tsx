import React from 'react';
import { TrendingUp, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onOpenBooking: (caseName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const caseStudies = [
    {
      title: 'Kalyan Salon — Booked Solid',
      challenge: 'Instagram had 80 followers, bookings were word-of-mouth only.',
      services: ['Instagram Content', 'Google Ads', 'WhatsApp Automation'],
      highlight: '+366% Monthly Revenue',
      before: [
        { label: 'Followers', value: '80' },
        { label: 'Bookings/mo', value: '12' },
        { label: 'Revenue/mo', value: '₹45,000' },
      ],
      after: [
        { label: 'Followers', value: '3,200' },
        { label: 'Bookings/mo', value: '64' },
        { label: 'Revenue/mo', value: '₹2.1 Lakh' },
      ],
    },
    {
      title: 'Local Restaurant — Orders Through Roof',
      challenge: 'Good food, but no digital footprint. Competing with high-commission delivery apps.',
      services: ['Meta Ads', 'Instagram Reels', 'Google Business', 'WhatsApp'],
      highlight: '+241% Dine-in Guests',
      before: [
        { label: 'Dine-in/mo', value: '120' },
        { label: 'Delivery/mo', value: '80' },
        { label: 'Avg Order', value: '₹850' },
      ],
      after: [
        { label: 'Dine-in/mo', value: '410' },
        { label: 'Delivery/mo', value: '280' },
        { label: 'Avg Order', value: '₹1,040' },
      ],
    },
    {
      title: 'Dental Clinic — Calendar 100% Full',
      challenge: 'Patients came inconsistently. Wanted a reliable, predictable patient acquisition flow.',
      services: ['Google Ads', 'Instagram Posts', 'WhatsApp Reminders'],
      highlight: '+180% Inquiries Growth',
      before: [
        { label: 'Appointments', value: '45/mo' },
        { label: 'Retention', value: '38%' },
        { label: 'New Patients', value: 'Baseline' },
      ],
      after: [
        { label: 'Appointments', value: '156/mo' },
        { label: 'Retention', value: '71%' },
        { label: 'New Patients', value: '+180%' },
      ],
    },
    {
      title: 'Retail Boutique — Foot Traffic Converted',
      challenge: 'High foot traffic in Kalyan West but low conversions and zero return marketing.',
      services: ['Instagram Shop', 'Meta Ads', 'Google Business'],
      highlight: '+50% Higher Ticket Size',
      before: [
        { label: 'Phone Checkers', value: '15%' },
        { label: 'Avg Ticket', value: '₹2,800' },
        { label: 'Repeat Rate', value: '22%' },
      ],
      after: [
        { label: 'Phone Checkers', value: '62%' },
        { label: 'Avg Ticket', value: '₹4,200' },
        { label: 'Repeat Rate', value: '48%' },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-28 bg-panel text-ink relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-gold-deep uppercase tracking-[0.18em] mb-3 flex items-center gap-2 font-bold">
            <TrendingUp className="w-4 h-4 text-gold-deep" />
            REAL RESULTS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-tight">
            Proof that works
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            These are actual clients across Kalyan & surrounding hubs — not hypothetical theories or recycled templates. Here is what we actually delivered.
          </p>
        </div>

        {/* 2x2 Grid of Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-line-lt p-8 md:p-10 shadow-md hover:shadow-xl hover:border-gold/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title & Highlight Pill */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight">
                    {study.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold bg-gold/15 text-gold-deep px-3 py-1 rounded-full border border-gold/30">
                    <Sparkles className="w-3 h-3" />
                    {study.highlight}
                  </span>
                </div>

                <p className="text-sm text-muted mb-6 leading-relaxed">
                  <strong className="text-ink">Challenge:</strong> {study.challenge}
                </p>

                {/* Services tags */}
                <div className="mb-8">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-muted mb-2 font-semibold">
                    What We Deployed:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((svc, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-xs font-medium bg-panel text-ink px-2.5 py-1 rounded border border-line-lt"
                      >
                        <CheckCircle className="w-3 h-3 text-gold-deep" />
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Before / After Comparison Grid */}
                <div className="grid grid-cols-2 gap-4 p-5 bg-ink rounded-lg border border-line text-paper mb-6">
                  {/* Before */}
                  <div className="border-r border-line/60 pr-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-lt mb-3 pb-1 border-b border-line">
                      BEFORE MRCOOL
                    </div>
                    <div className="space-y-3">
                      {study.before.map((b, bIdx) => (
                        <div key={bIdx}>
                          <div className="text-[11px] text-muted-lt">{b.label}</div>
                          <div className="font-mono text-sm text-paper font-medium">{b.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="pl-2">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-gold mb-3 pb-1 border-b border-line flex items-center justify-between">
                      <span>AFTER BH AGENCY</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      {study.after.map((a, aIdx) => (
                        <div key={aIdx}>
                          <div className="text-[11px] text-muted-lt">{a.label}</div>
                          <div className="font-mono text-sm text-gold font-bold">{a.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenBooking(study.title)}
                className="w-full btn-ghost-dark py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-line-lt"
              >
                <span>Replicate These Results</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
