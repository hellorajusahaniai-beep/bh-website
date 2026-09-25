import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      price: '₹10,000',
      period: '/month',
      isPopular: false,
      theme: 'light',
      features: [
        'Instagram + Facebook management (12 posts)',
        'Basic content creation & graphics',
        '4 AI videos / reels per month',
        'Google Business Profile setup & optimization',
        'Monthly performance report & review',
      ],
      ctaText: 'Start here',
      ctaClass: 'btn-ghost-dark',
    },
    {
      id: 'growth',
      name: 'GROWTH',
      price: '₹20,000',
      period: '/month',
      isPopular: true,
      theme: 'dark',
      features: [
        'Complete Social Presence (20 high-value posts)',
        'Full Meta Ads setup, targeting & daily optimization',
        '8 AI viral reels & hook-driven scripts',
        'WhatsApp lead capture & auto-replies',
        'Google Search & Map ads management',
        'Bi-weekly strategy call & ROI tracking',
        'Direct VIP WhatsApp line to Raju Sahani',
      ],
      ctaText: 'Choose Growth',
      ctaClass: 'btn-gold',
    },
    {
      id: 'scale',
      name: 'SCALE',
      price: '₹30,000',
      period: '/month',
      isPopular: false,
      theme: 'light',
      features: [
        'Full omni-channel growth engine (Meta + Google + SEO)',
        'Unlimited high-converting ad variations & copy',
        '16 AI videos + on-site video shoot direction',
        'Advanced WhatsApp funnel & lead qualification bot',
        'High-speed website/landing page optimization',
        'Weekly live dashboard & continuous scaling',
      ],
      ctaText: 'Go Scale',
      ctaClass: 'btn-ghost-dark',
    },
  ];

  const addOns = [
    { name: 'Logo + Brand Identity System', price: '₹8,000' },
    { name: 'Website (Basic 5-page, high-converting)', price: '₹20,000' },
    { name: 'Website (Full E-commerce with Gateway)', price: '₹45,000' },
    { name: 'WhatsApp Automation & Chatbot Setup', price: '₹12,000' },
    { name: 'On-Site Video Shoot (Half-day in Kalyan)', price: '₹7,000' },
    { name: 'AI Video Pack (10 Custom Viral Videos)', price: '₹8,000' },
    { name: 'Complete SEO Audit + Local Map Setup', price: '₹7,000' },
    { name: 'Google Business Profile 100% Fix & Rank', price: '₹3,000' },
  ];

  return (
    <section id="pricing" className="py-28 bg-ink border-t border-line text-paper relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 font-mono text-xs text-gold uppercase tracking-[0.18em] mb-3">
            <span className="w-2 h-2 rounded-full bg-gold" />
            PRICING
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-paper tracking-tight leading-tight">
            Built for local budgets
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-lt leading-relaxed">
            Ad spend is always billed directly with zero markup — every rupee tracked with 100% transparency.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 pb-12">
          {plans.map((plan) => {
            const isDark = plan.theme === 'dark';

            return (
              <div
                key={plan.id}
                className={`relative rounded-md p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-ink border-2 border-gold shadow-2xl lg:-translate-y-4 ring-4 ring-gold/20'
                    : 'bg-white text-ink border border-line-lt hover:border-gold/50 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 right-6 bg-gold text-ink font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-ink" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Tier Name */}
                  <div
                    className={`font-mono text-xs font-bold tracking-[0.16em] uppercase mb-4 ${
                      isDark ? 'text-gold' : 'text-gold-deep'
                    }`}
                  >
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span
                      className={`font-display text-4xl sm:text-5xl font-black ${
                        isDark ? 'text-paper' : 'text-ink'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? 'text-muted-lt' : 'text-muted'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features Divider */}
                  <div
                    className={`pt-6 border-t ${
                      isDark ? 'border-line' : 'border-line-lt'
                    }`}
                  >
                    <ul className="space-y-3.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm">
                          <Check
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isDark ? 'text-gold' : 'text-gold-deep'
                            }`}
                          />
                          <span
                            className={
                              isDark ? 'text-[#D8D6D2]' : 'text-muted'
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <button
                    onClick={() => onOpenBooking(plan.name)}
                    className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider ${plan.ctaClass}`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 8 Add-ons Section */}
        <div className="mt-16 pt-12 border-t border-line">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-gold font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              ONE-TIME & ADD-ON SERVICES
            </div>
            <span className="text-xs text-muted-lt">Transparent flat pricing with zero surprises</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-md overflow-hidden shadow-xl">
            {addOns.map((add, aIdx) => (
              <div
                key={aIdx}
                onClick={() => onOpenBooking(add.name)}
                className="bg-ink p-5 md:p-6 flex items-center justify-between hover:bg-ink-2 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold group-hover:scale-125 transition-all" />
                  <span className="text-sm text-paper font-medium group-hover:text-gold transition-colors">
                    {add.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-gold">
                    {add.price}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-lt group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
