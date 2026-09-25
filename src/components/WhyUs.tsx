import React from 'react';
import { MapPin, Layers, BarChart3, Zap, Shield } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      num: '01',
      icon: MapPin,
      title: 'Local market specialists',
      desc: 'We understand the exact buyer behavior across Kalyan West, Khadakpada, Badlapur and Tier 2/3 Maharashtra hubs — not detached corporate theories or copy-paste slide decks.',
    },
    {
      num: '02',
      icon: Layers,
      title: 'All-in-one growth partner',
      desc: 'Paid ads, viral content, video production, WhatsApp automation, and web development — one unified team, one direct phone number, zero chaotic freelance vendors to juggle.',
    },
    {
      num: '03',
      icon: BarChart3,
      title: 'Data-driven decisions & ROI',
      desc: 'Every single rupee of ad budget is mapped to tangible calls, bookings, foot traffic, and sales. No fluffy vanity metrics or confusing agency jargon.',
    },
    {
      num: '04',
      icon: Zap,
      title: 'AI-powered speed & workflows',
      desc: 'Our AI video systems and automation engines generate high-converting creative variations 5x faster, and WhatsApp bots reply to leads in under 5 seconds 24/7.',
    },
  ];

  return (
    <section id="why" className="py-28 bg-panel text-ink border-t border-line-lt relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-gold-deep uppercase tracking-[0.18em] mb-3 flex items-center gap-2 font-bold">
            <Shield className="w-4 h-4 text-gold-deep" />
            WHY BEYOND HORIZON
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-tight">
            Not a generic agency playbook
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
            Why growing local businesses in Kalyan choose Raju Sahani and Beyond Horizon over distant freelance agencies.
          </p>
        </div>

        {/* 2x2 Grid with 1px border separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line-lt border border-line-lt rounded-md overflow-hidden shadow-lg">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 md:p-12 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#FAF9F6] transition-colors"
              >
                {/* Number Circle Badge */}
                <div className="w-12 h-12 rounded-full border-2 border-gold-deep text-gold-deep flex items-center justify-center font-mono text-sm font-bold flex-shrink-0 bg-gold/10">
                  {r.num}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-gold-deep" />
                    <h3 className="font-sans font-bold text-lg md:text-xl text-ink">
                      {r.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
