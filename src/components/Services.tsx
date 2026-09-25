import React from 'react';
import {
  Megaphone,
  Search,
  Instagram,
  Video,
  PenTool,
  Camera,
  Compass,
  Bot,
  Code2,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const services = [
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      icon: Megaphone,
      desc: 'Instagram & Facebook campaigns built to bring paying customers, not just vanity likes.',
      tag: 'Paid Traffic'
    },
    {
      id: 'google-ads',
      title: 'Google Ads & Maps',
      icon: Search,
      desc: 'High-intent Search and Maps campaigns that put your store in front of people ready to buy right now.',
      tag: 'High Intent'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      icon: Instagram,
      desc: 'Daily posting, community replies, comment management, and an active calendar that keeps your brand alive.',
      tag: 'Organic Growth'
    },
    {
      id: 'ai-video',
      title: 'AI Video Creation',
      icon: Video,
      desc: 'Scroll-stopping viral reels, TikToks, and ad creatives produced fast with cutting-edge AI-assisted workflows.',
      tag: 'Viral Reach'
    },
    {
      id: 'content-creation',
      title: 'Content & Copywriting',
      icon: PenTool,
      desc: 'Brand graphics, sharp captions, and persuasive copy crafted for how local Indian customers actually talk and buy.',
      tag: 'Conversion'
    },
    {
      id: 'video-shooting',
      title: 'On-Site Video Shooting',
      icon: Camera,
      desc: 'High-production shoots for your clinic, salon, restaurant menu, or store — 100% authentic, zero generic stock footage.',
      tag: 'Authenticity'
    },
    {
      id: 'seo',
      title: 'Local SEO & Rankings',
      icon: Compass,
      desc: 'Local search engine and Google Map Pack optimization so you rank #1 when customers search nearby in Kalyan & beyond.',
      tag: 'Rankings'
    },
    {
      id: 'ai-automation',
      title: 'AI & WhatsApp Automation',
      icon: Bot,
      desc: 'Smart WhatsApp chatbots, automated lead qualification, and instant appointment reminders so zero leads slip away.',
      tag: 'Instant Retention'
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      icon: Code2,
      desc: 'Ultra-fast, mobile-first, high-converting digital storefronts built to turn random clicks into paying clients.',
      tag: 'Digital Asset'
    },
  ];

  return (
    <section id="services" className="py-28 bg-ink border-t border-line relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-gold uppercase tracking-[0.18em] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            WHAT WE DO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-paper tracking-tight leading-tight">
            Nine ways we move the needle
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-lt leading-relaxed">
            Every growth channel a local business needs to dominate — executed by one specialized team that coordinates seamlessly.
          </p>
        </div>

        {/* 3x3 Grid with 1px border separation effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-md overflow-hidden shadow-2xl">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => onOpenBooking(svc.title)}
                className="group bg-ink p-8 md:p-10 flex flex-col justify-between hover:bg-ink-2 transition-all duration-300 cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.6]" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-lt border border-line px-2 py-0.5 rounded uppercase tracking-wider group-hover:border-gold/40 group-hover:text-gold transition-colors">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg md:text-xl text-paper mb-3 group-hover:text-gold transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-muted-lt leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-muted-lt group-hover:text-gold transition-colors">
                  <span>DEPLOY FOR YOUR BRAND</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
