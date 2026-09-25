import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MapPin, 
    MessageCircle, 
    Star, 
    ArrowRight, 
    Zap, 
    Check, 
    TrendingUp, 
    Phone,
    Navigation,
    Sparkles
} from 'lucide-react';
import heroThrivingImg from '@/assets/hero-local-business-thriving.webp';

const WHATSAPP_NUMBER = '919225301670';
const PORTFOLIO_URL = 'https://beyond-horizon-portfolio.pages.dev';

function whatsappLink(msg) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState(0);

    // Live customer enquiries that gently cycle every 4 seconds
    const liveEnquiries = [
        {
            name: "Aarav S.",
            source: "Google Maps · Bandra",
            text: "Hi! Found your cafe on Google Maps. Can we reserve a table for 4 tonight?",
            time: "Just now",
            badge: "Table Booking"
        },
        {
            name: "Pooja Mehta",
            source: "Google Search · Andheri",
            text: "Saw your 4.9 rating on Maps. Do you have appointments available tomorrow?",
            time: "2m ago",
            badge: "New Patient"
        },
        {
            name: "Karan Verma",
            source: "Website Lead · Colaba",
            text: "Want to enquire about your monthly package. Please call back on WhatsApp.",
            time: "5m ago",
            badge: "Service Enquiry"
        }
    ];

    const [enquiryIndex, setEnquiryIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setEnquiryIndex((prev) => (prev + 1) % liveEnquiries.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [liveEnquiries.length]);

    const activeEnquiry = liveEnquiries[enquiryIndex];

    const pillars = [
        {
            id: 'maps',
            label: 'Google Maps #1',
            icon: MapPin,
            title: 'Top 3 Map-Pack Ranking',
            stat: '+340% Calls & Directions',
            highlight: 'Cafe Irani Chai · Mumbai',
            rating: '4.9 ★★★★★ (2,890+ reviews)',
        },
        {
            id: 'web',
            label: 'Fast Website',
            icon: Zap,
            title: '0.9s Mobile-First Website',
            stat: '99+ Google PageSpeed',
            highlight: 'Instant WhatsApp Booking',
            rating: '100% SSL & Mobile Responsive',
        },
        {
            id: 'leads',
            label: 'Daily Leads',
            icon: MessageCircle,
            title: 'Direct WhatsApp Leads',
            stat: '3x More Weekly Enquiries',
            highlight: 'Zero Friction Customer Flow',
            rating: 'Live Enquiries Every Day',
        }
    ];

    const currentPillar = pillars[activeTab];

    return (
        <section id="top" className="relative overflow-hidden bg-background text-foreground border-b-[3px] border-foreground">
            {/* Subtle background dot grid pattern */}
            <div 
                aria-hidden="true" 
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(#0000000e_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-75"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-20">
                
                {/* Top Live Status Pill */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 border-2 border-foreground bg-background px-3.5 py-1.5 shadow-[3px_3px_0_0_#0A0A0A] mb-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                    <span className="text-foreground">Digital Growth Partner For Local Businesses</span>
                </motion.div>

                {/* 2-Column High Impact Hero Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    
                    {/* LEFT COLUMN: Ultra-punchy minimal text & high conversion CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 flex flex-col justify-center"
                    >
                        {/* Giant Eye-Catching Headline */}
                        <h1 className="text-[clamp(2.7rem,6.2vw,5.6rem)] font-black uppercase leading-[0.91] tracking-tight text-[#0A0A0A]">
                            Your Business.
                            <br />
                            <span className="text-primary stretch-wide">Seen By Everyone.</span>
                        </h1>

                        {/* Ultra-Concise 1-Line Description */}
                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80 font-medium max-w-xl">
                            We rank local businesses <strong className="text-foreground font-bold">#1 on Google Maps</strong>, 
                            build lightning-fast websites, and bring you <strong className="text-primary font-bold">real daily walk-in customers & WhatsApp orders</strong>.
                        </p>

                        {/* 3 Quick Visual Checkmarks */}
                        <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider text-foreground/85">
                            <span className="inline-flex items-center gap-1.5 bg-foreground/5 border border-foreground/15 px-3 py-1.5">
                                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                                Google Maps 3-Pack
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-foreground/5 border border-foreground/15 px-3 py-1.5">
                                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                                1.1s Fast Website
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-foreground/5 border border-foreground/15 px-3 py-1.5">
                                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                                WhatsApp Leads
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                            <a
                                href="#contact"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[4px_4px_0_0_#0A0A0A] transition-all hover:bg-foreground hover:shadow-[6px_6px_0_0_#0A0A0A] active:scale-[0.98]"
                            >
                                <span>Get Free Growth Audit</span>
                                <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                            </a>

                            <a
                                href={whatsappLink('Hi Beyond Horizon! I’d like to grow my local business online.')}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 border-[2.5px] border-foreground bg-background px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-foreground transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600" />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>

                        {/* Social Proof Line */}
                        <div className="mt-8 pt-5 border-t border-foreground/15 flex items-center gap-6 sm:gap-8 text-xs text-foreground/75 font-semibold">
                            <div className="flex items-center gap-1.5">
                                <div className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                                    ))}
                                </div>
                                <span className="font-bold text-foreground">4.9 / 5 Rating</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                <span>120+ Businesses Scaled</span>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT COLUMN: Ultra-Attractive Animated Showcase Canvas */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-6 relative"
                    >
                        {/* Main Media Showcase Box */}
                        <div className="relative border-[3px] border-foreground bg-background shadow-[8px_8px_0_0_#0A0A0A] overflow-hidden">
                            
                            {/* Browser / Dashboard Style Top Bar with Pillar Switcher Tabs */}
                            <div className="border-b-[2.5px] border-foreground bg-foreground/5 p-2.5 sm:p-3 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 border border-foreground inline-block" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400 border border-foreground inline-block" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 border border-foreground inline-block" />
                                </div>

                                {/* Interactive 3-Pillar Switcher Tabs */}
                                <div className="flex items-center gap-1 bg-background border border-foreground/20 p-1">
                                    {pillars.map((p, idx) => {
                                        const Icon = p.icon;
                                        const isSelected = activeTab === idx;
                                        return (
                                            <button
                                                key={p.id}
                                                type="button"
                                                onClick={() => setActiveTab(idx)}
                                                className={`flex items-center gap-1.5 py-1 px-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                                                    isSelected
                                                        ? 'bg-foreground text-background shadow-sm'
                                                        : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                                }`}
                                            >
                                                <Icon className={`h-3 w-3 ${isSelected ? 'text-primary' : ''}`} />
                                                <span>{p.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Main High-Resolution Photo Canvas */}
                            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-foreground/10">
                                <img
                                    src={heroThrivingImg}
                                    alt="Thriving local business storefront with customers entering and glowing ambiance"
                                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Subtle vignette gradient for card pop */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none" />

                                {/* Floating Badge 1 (Top Left): Live Google 3-Pack Indicator */}
                                <motion.div 
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                    className="absolute top-3 left-3 flex items-center gap-2 border-2 border-foreground bg-background px-3 py-1.5 shadow-[3px_3px_0_0_#0A0A0A] z-20"
                                >
                                    <MapPin className="h-3.5 w-3.5 text-primary fill-primary" />
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground">
                                        #1 on Google Maps
                                    </span>
                                </motion.div>

                                {/* Floating Badge 2 (Top Right): Live Traffic Growth Metric */}
                                <motion.div 
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-3 right-3 flex items-center gap-1.5 border-2 border-foreground bg-emerald-50 px-3 py-1.5 shadow-[3px_3px_0_0_#0A0A0A] z-20"
                                >
                                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.6} />
                                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                                        +340% Walk-ins
                                    </span>
                                </motion.div>

                                {/* Active Pillar Dynamic Live Spotlight (Docked inside image) */}
                                <div className="absolute inset-x-3 bottom-3 z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentPillar.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.25 }}
                                            className="border-2 border-foreground bg-background/95 backdrop-blur-md p-3.5 shadow-[4px_4px_0_0_#0A0A0A]"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <div>
                                                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                                        {currentPillar.title}
                                                    </span>
                                                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-foreground mt-0.5">
                                                        {currentPillar.highlight}
                                                    </h3>
                                                    <p className="text-[11px] font-medium text-foreground/75 mt-0.5">
                                                        {currentPillar.rating}
                                                    </p>
                                                </div>

                                                <div className="shrink-0 text-right">
                                                    <span className="inline-block bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-[2px_2px_0_0_#0A0A0A]">
                                                        {currentPillar.stat}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>

                            {/* Live Customer Enquiry Streamer (Bottom of the showcase box) */}
                            <div className="p-3 bg-background border-t-2 border-foreground flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5 overflow-hidden">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                                    </span>
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={activeEnquiry.name}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-xs text-foreground/85 font-medium truncate"
                                        >
                                            <strong className="font-bold text-foreground">{activeEnquiry.name}</strong> ({activeEnquiry.source}): “{activeEnquiry.text}”
                                        </motion.p>
                                    </AnimatePresence>
                                </div>

                                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-0.5">
                                    Live Lead
                                </span>
                            </div>

                        </div>

                        {/* Floating Decorative WhatsApp Badge Bottom-Left */}
                        <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="hidden sm:flex absolute -bottom-5 -left-5 z-30 items-center gap-2.5 border-2 border-foreground bg-background px-4 py-2 shadow-[4px_4px_0_0_#0A0A0A]"
                        >
                            <MessageCircle className="h-5 w-5 text-emerald-600 fill-emerald-600 shrink-0" />
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                                    Direct WhatsApp Enquiry
                                </p>
                                <p className="text-[9px] text-foreground/60 font-semibold uppercase tracking-widest">
                                    Verified Local Customer
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>

            </div>

            {/* Bottom Signature Cropped Word Watermark */}
            <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden pb-1">
                <p className="stretch-wide -mb-[0.22em] whitespace-nowrap text-center text-[clamp(3.8rem,14vw,12rem)] font-black uppercase leading-none tracking-tight text-foreground/[0.04]">
                    Beyond Horizon
                </p>
            </div>
        </section>
    );
}
