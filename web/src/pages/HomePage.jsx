import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
    Search, MapPin, Instagram, Globe, MessageCircle, Star, ArrowRight, ArrowUpRight, 
    Check, X, Megaphone, Camera, Sparkles, Phone, Zap, ShieldCheck, Video, 
    Smartphone, Users, Clock, Utensils, Scissors, Stethoscope, ShoppingBag, 
    Briefcase, Dumbbell, Laptop, Eye, HelpCircle, ArrowDownRight, Award
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import StoryHero from '@/components/StoryHero';

// Real Client & Explainer Assets
import googleMapsExplainerImg from '@/assets/google-maps-seo-explainer.jpg';
import websiteExplainerImg from '@/assets/website-conversion-explainer.jpg';
import beyondHorizonShootImg from '@/assets/beyond-horizon-video-shoot.jpg';
import dentalReelImg from '@/assets/dental-reel-cover.png';
import dentalCarouselImg from '@/assets/dental-carousel-slide.png';
import dargarQrImg from '@/assets/dargar-review-qr.png';
import siddhiDentalImg from '@/assets/siddhi-dental-treating.jpg';
import dargarCommImg from '@/assets/dargar-communication.png';
import gcsImg from '@/assets/global-computer-solution.png';
import localCustomerAdsImg from '@/assets/local-customer-ads.jpg';
import whatsappCrmImg from '@/assets/whatsapp-crm-automation.jpg';
import dentalTreatmentImg from '@/assets/dental-reforms-treatment.jpg';
import dentalHappyPatientImg from '@/assets/dental-reforms-happy-patient.jpg';

const WHATSAPP_NUMBER = '919225301670';
const PORTFOLIO_URL = 'https://beyond-horizon-portfolio.pages.dev';
const GOOGLE_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzWesK8MJo2oeqR8ZtIMuXj7DWYU5eqPxIpVTn-wwq5PuVXxn4agBjS96rqkDqh-Evr/exec';

function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// =========================================================================
// 1. HEADER (Navigation)
// =========================================================================
function Header() {
    const links = [
        { href: '#problem', label: 'The Problem' },
        { href: '#who-we-help', label: 'Who We Help' },
        { href: '#services', label: 'What We Do' },
        { href: '#work', label: 'Real Work' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#process', label: 'How It Works' },
        { href: PORTFOLIO_URL, label: 'Live Portfolio ↗', isExternal: true },
    ];

    return (
        <header className="sticky top-0 z-[70] border-b-[3px] border-foreground bg-background">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
                <a href="#top" className="flex items-baseline gap-2">
                    <span className="stretch-wide whitespace-nowrap text-base font-black uppercase leading-none tracking-tight sm:text-lg md:text-xl">
                        Beyond Horizon
                    </span>
                    <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:inline">
                        Growth Partner
                    </span>
                </a>

                <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
                    {links.map(l => (
                        l.isExternal ? (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-foreground"
                            >
                                {l.label}
                            </a>
                        ) : (
                            <a
                                key={l.label}
                                href={l.href}
                                className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-primary"
                            >
                                {l.label}
                            </a>
                        )
                    ))}
                </nav>

                <a
                    href={whatsappLink('Hi Beyond Horizon! I want to talk about growing my local business.')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                    <span>WhatsApp Us</span>
                </a>
            </div>
        </header>
    );
}

// =========================================================================
// 2. HERO + HERO INTRO ACTION STRIP
// =========================================================================
function Hero() {
    return (
        <>
            <StoryHero />

            {/* Immediately Below Hero: Clear 30-Second Positioning & Single Main CTAs */}
            <section className="border-b-[3px] border-foreground bg-secondary/30 py-8 md:py-10">
                <div className="mx-auto max-w-6xl px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="inline-block border-2 border-foreground bg-primary px-2.5 py-0.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--foreground))] mb-2">
                                For Local Businesses in India
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground leading-tight">
                                Your Business Deserves To Be Found.
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-foreground/75 leading-relaxed">
                                We help dentists, salons, gyms, restaurants & retail stores get found on Google, look professional online, and turn attention into real customer enquiries.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                            <a
                                href="#contact"
                                className="inline-flex min-h-[50px] items-center justify-center gap-2 border-2 border-foreground bg-primary px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
                            >
                                <span>Get My Free Growth Audit</span>
                                <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                            </a>
                            <a
                                href={whatsappLink('Hi Beyond Horizon! I’d like to see how you can help my business grow.')}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[50px] items-center justify-center gap-2 border-2 border-foreground bg-background px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all hover:bg-secondary active:scale-[0.98]"
                            >
                                <MessageCircle className="h-4 w-4 text-primary" strokeWidth={2.4} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// =========================================================================
// 3. THE PROBLEM (Grounded Reality - No Unverified Claims)
// =========================================================================
function Problem() {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            id: 'clinic',
            name: 'Dentists & Clinics',
            icon: Stethoscope,
            leak: 'Patients in your locality search for toothache, root canal, or teeth cleaning on Google Maps. If your clinic profile has few reviews, old photos, or an inactive page, they call the clinic down the street.',
            fix: [
                'Verified Google Maps profile optimized for local patient searches',
                'Patient 5-star review collection system for your reception counter',
                'Clean, fast mobile landing page with 1-tap WhatsApp consultation booking',
                'Informational treatment reels explaining procedures simply'
            ],
            auditPrefill: 'Hi Beyond Horizon! I run a Dental / Healthcare Clinic. I want more nearby patients and better Google Maps ranking. Can you audit my clinic?'
        },
        {
            id: 'salon',
            name: 'Salons & Spas',
            icon: Scissors,
            leak: 'People check Instagram before booking haircuts, bridal makeup, or skin treatments. Inactive feeds or blurry posters make high-paying clients choose the trending salon nearby.',
            fix: [
                'On-location 4K transformation reels showing your real work & stylists',
                'Google Maps optimization so people searching "best salon near me" see you first',
                'Countertop Google review QR stands to collect 5-star reviews daily',
                'Direct 1-tap WhatsApp appointment scheduling flow'
            ],
            auditPrefill: 'Hi Beyond Horizon! I run a Salon / Spa. I want consistent Instagram Reels and more appointment bookings. Can you audit my salon?'
        },
        {
            id: 'restaurant',
            name: 'Restaurants & Cafes',
            icon: Utensils,
            leak: 'Diners search for places to eat nearby on weekends. An unoptimized Google listing with outdated menus or poor photos pushes diners straight into your competitor 300 meters away.',
            fix: [
                'Google Maps 3-Pack ranking optimization for high-intent food searches',
                'Mouth-watering 4K food & ambiance video reels shot directly at your venue',
                'Clear digital menu with 1-tap WhatsApp table booking & delivery enquiries',
                'Active weekend promotional campaigns targeting nearby residents'
            ],
            auditPrefill: 'Hi Beyond Horizon! I run a Restaurant / Cafe. I want more weekend diners and better Google Maps visibility. Can you audit my restaurant?'
        },
        {
            id: 'gym',
            name: 'Gyms & Fitness',
            icon: Dumbbell,
            leak: 'Locals looking to get fit search Google reviews and check Instagram for gym vibes. Zero active reels, confusing pricing, or no easy trial booking means walk-ins walk elsewhere.',
            fix: [
                'High-energy on-site workout & facility video reels showing your equipment',
                'Member transformation spotlights that build instant local authority',
                'Targeted local Meta ads focused on a 3km radius for Free 1-Day Trial Passes',
                'WhatsApp enquiry follow-up pipeline so trial leads don’t go cold'
            ],
            auditPrefill: 'Hi Beyond Horizon! I run a Gym / Fitness Center. I want more trial enquiries and strong local social media. Can you audit my gym?'
        },
        {
            id: 'retail',
            name: 'Retail & Electronics',
            icon: ShoppingBag,
            leak: 'Shoppers check online first to see if your store is open and what brands you carry. Without updated products or visual proof, they default to Amazon or the shopping mall.',
            fix: [
                'Updated Google Business product catalog with store directions & hours',
                'Product unboxing and store walk-through reels on Instagram',
                'Google Review QR standees on your cash billing counter',
                'Direct WhatsApp catalog for instant customer stock & price queries'
            ],
            auditPrefill: 'Hi Beyond Horizon! I own a Retail / Electronics Store. I want more in-store footfall and local online presence. Can you audit my store?'
        },
        {
            id: 'services',
            name: 'Local Services',
            icon: Briefcase,
            leak: 'When someone needs CCTV setup, laptop repair, tax filing, or interior design, they need trust immediately. If your phone number isn’t verified with reviews, they call the first result.',
            fix: [
                'Top-ranking local search presence for your specific service keywords',
                'Fast, professional mobile landing page that earns trust in 3 seconds',
                'Instant WhatsApp enquiry notifications sent directly to your phone',
                'Customer testimonial showcases that prove your reliability'
            ],
            auditPrefill: 'Hi Beyond Horizon! I provide Local Professional Services. I want more inbound calls and a professional online presence. Can you audit my business?'
        }
    ];

    const current = categories[activeTab];

    return (
        <section id="problem" className="scroll-mt-24 border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                {/* Header */}
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            The Local Reality
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Your Customers Are{' '}
                            <span className="text-primary">Already Searching.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-3xl">
                            When nearby people search on Google Maps & Instagram, who are they finding — your business, or the competitor down the road?
                        </p>
                    </div>
                </Reveal>

                {/* Industry Selectors */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        const isSelected = activeTab === idx;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(idx)}
                                className={`inline-flex items-center gap-2 border-2 border-foreground px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                                    isSelected
                                        ? 'bg-foreground text-background shadow-[3px_3px_0_0_hsl(var(--primary))]'
                                        : 'bg-background text-foreground hover:bg-secondary/60'
                                }`}
                            >
                                <Icon className={`h-4 w-4 ${isSelected ? 'text-primary' : 'text-foreground'}`} strokeWidth={2.4} />
                                <span>{cat.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Comparative Diagnostic Card */}
                <Reveal delay={0.06}>
                    <div className="mt-8 border-[3px] border-foreground bg-background shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-foreground">
                            {/* Left: The Digital Leak */}
                            <div className="p-6 sm:p-8 bg-secondary/20 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 border border-foreground/30 bg-background px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-muted-foreground mb-4">
                                        <X className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                                        <span>Your Current Digital Leak</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                                        Why Nearby Customers Choose Other Options
                                    </h3>
                                    <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-foreground/80">
                                        {current.leak}
                                    </p>
                                </div>
                                <div className="mt-6 border-t-2 border-foreground/15 pt-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                    Result: High-intent local revenue walks into competitors
                                </div>
                            </div>

                            {/* Right: What Beyond Horizon Fixes */}
                            <div className="p-6 sm:p-8 flex flex-col justify-between bg-background">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 border border-foreground/30 bg-primary/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-primary mb-4">
                                        <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                                        <span>What Beyond Horizon Fixes</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                                        The Complete Local Growth Fix
                                    </h3>
                                    <ul className="mt-4 space-y-2.5">
                                        {current.fix.map(item => (
                                            <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-foreground/85">
                                                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" strokeWidth={3} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-4 border-t-2 border-foreground/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                    <a
                                        href={whatsappLink(current.auditPrefill)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-primary px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
                                    >
                                        <span>Get Free Audit For My {current.name}</span>
                                        <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// =========================================================================
// 4. WHO WE HELP (Specific Local Business Focus)
// =========================================================================
function WhoWeHelp() {
    const clientsWeHelp = [
        {
            icon: Stethoscope,
            title: 'Dentists & Clinics',
            desc: 'Get discovered when patients in your neighborhood search for dental care, implants, or specialist treatments.'
        },
        {
            icon: Scissors,
            title: 'Salons & Spas',
            desc: 'Showcase real transformations and turn Instagram attention into daily booked appointments.'
        },
        {
            icon: Utensils,
            title: 'Restaurants & Cafes',
            desc: 'Get found when people search for places to eat nearby and build consistent weekday and weekend rush.'
        },
        {
            icon: Dumbbell,
            title: 'Gyms & Fitness',
            desc: 'Build local awareness across your area and generate trial workout enquiries from nearby fitness enthusiasts.'
        },
        {
            icon: ShoppingBag,
            title: 'Retail & Electronics',
            desc: 'Turn Google Maps + Instagram + WhatsApp into a steady footfall engine for your physical store.'
        },
        {
            icon: Briefcase,
            title: 'Local Services',
            desc: 'Be the first trusted name and phone number residents call when they need urgent local services.'
        }
    ];

    return (
        <section id="who-we-help" className="scroll-mt-24 border-b-[3px] border-foreground bg-secondary/30 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            Who This Is For
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Built Specifically For{' '}
                            <span className="text-primary">Local Businesses.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-3xl">
                            We don't work with generic tech startups or international apps. We specialize in businesses with physical doors, real products, and local walk-in customers.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientsWeHelp.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Reveal key={item.title} delay={idx * 0.05}>
                                <div className="h-full border-[3px] border-foreground bg-background p-6 shadow-[5px_5px_0_0_hsl(var(--foreground))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_hsl(var(--primary))] flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex p-3 border-2 border-foreground bg-secondary/50 mb-4 shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                                            <Icon className="h-6 w-6 text-primary" strokeWidth={2.4} />
                                        </div>
                                        <h3 className="text-lg font-black uppercase tracking-tight text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-foreground/75">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t-2 border-foreground/15">
                                        <a
                                            href={whatsappLink(`Hi Beyond Horizon! I run a ${item.title} business. I want to discuss growing my local presence.`)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary hover:text-foreground transition-colors"
                                        >
                                            <span>Discuss Your Growth</span>
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 5. THE 5-PILLAR SYSTEM (Outcome Language, No Agency Jargon)
// =========================================================================
function Services() {
    const systemPillars = [
        {
            num: '01',
            title: 'GET FOUND',
            tag: 'Google • Maps • Local SEO',
            outcome: 'So nearby customers can find your business when they are searching.',
            desc: 'When high-intent local buyers search for your services on Google, we ensure your business shows up in the Top Google Maps 3-Pack with verified credentials and genuine 5-star customer reviews.',
            deliverables: [
                'Google Business Profile setup, verification & optimization',
                'Local keyword ranking so you show up for high-intent searches',
                'Countertop 5-star Google review collection strategy',
                'Consistent photos, opening hours, and service updates'
            ],
            chips: ['Google Maps', 'Search Keywords', 'Verified GBP', '5★ Reviews'],
            image: googleMapsExplainerImg,
            imageAlt: 'Google Maps 3-pack local business discovery guide'
        },
        {
            num: '02',
            title: 'LOOK PROFESSIONAL',
            tag: 'Website • Branding • Photos',
            outcome: 'Turn visitors into enquiries with a fast, mobile-friendly digital storefront.',
            desc: 'A clunky, slow website or an outdated page destroys trust within 3 seconds. We build custom, ultra-fast web pages optimized for mobile phones with direct 1-tap WhatsApp booking.',
            deliverables: [
                'Clean, lightning-fast mobile website (Zero slow WordPress templates)',
                '1-Tap direct WhatsApp enquiry and appointment booking flow',
                'Professional branding, typography & digital menu/catalog setup',
                'Mobile-first layout optimized for easy thumb navigation'
            ],
            chips: ['Fast Mobile Web', 'WhatsApp Booking', 'Professional Brand', 'SSL Security'],
            image: websiteExplainerImg,
            imageAlt: 'High-converting mobile website with WhatsApp lead capture'
        },
        {
            num: '03',
            title: 'GET ATTENTION',
            tag: 'Instagram • Reels • Content',
            outcome: 'Show people what makes your business worth choosing with real 4K footage.',
            desc: 'Stop posting dull downloaded flyers that get zero likes. Our production team travels directly to your business with cinema cameras and wireless audio to shoot scroll-stopping reels.',
            deliverables: [
                'On-location 4K video shoots at your store/clinic with cinema gear',
                'Hook-driven viral Reels edited for Instagram & YouTube Shorts',
                'Informative graphic carousels that answer customer questions',
                'Monthly content calendar so your social pages never go silent'
            ],
            chips: ['4K Video Shoots', 'Viral Reels', 'Monthly Calendar', 'On-Location'],
            image: beyondHorizonShootImg,
            imageAlt: 'Beyond Horizon camera production crew on location'
        },
        {
            num: '04',
            title: 'GET CUSTOMERS',
            tag: 'Meta & Google Ads • Local Targeting',
            outcome: 'Reach people in your pin code who are ready to book or buy.',
            desc: 'We run laser-targeted local ads on Instagram, Facebook, and Google that specifically target residents within a 3–5 km radius of your location, driving real calls and WhatsApp chats.',
            deliverables: [
                'Radius-targeted Meta ads for your exact pin codes and neighborhood',
                'Offer creatives and promotional hooks designed to drive walk-ins',
                'Direct-to-WhatsApp message ad campaigns with instant lead alerts',
                'Budget management to ensure every rupee invested produces inquiries'
            ],
            chips: ['Pin-Code Ads', 'Meta Ad Campaigns', 'Direct Inquiries', 'Local Radius'],
            image: localCustomerAdsImg,
            imageAlt: 'Local store customer looking at targeted smartphone offer and ad'
        },
        {
            num: '05',
            title: 'AUTOMATE & GROW',
            tag: 'WhatsApp • CRM • Follow-ups',
            outcome: 'Follow up with leads and collect reviews without doing everything manually.',
            desc: 'Never lose a customer because you were too busy working. We set up automated WhatsApp replies, review follow-ups, and lead capture systems that work 24/7.',
            deliverables: [
                'Automated instant WhatsApp greetings when a customer enquires',
                'Pre-filled consultation and service inquiry message links',
                'Post-visit review request automation to grow your 5-star count',
                'Simple lead tracking so no customer call or message gets lost'
            ],
            chips: ['WhatsApp CRM', 'Instant Replies', 'Review Automation', 'Lead Tracking'],
            image: whatsappCrmImg,
            imageAlt: 'Business owner managing automated WhatsApp leads, reviews, and customer CRM'
        }
    ];

    return (
        <section id="services" className="scroll-mt-24 border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                {/* Header */}
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            The 5-Stage Growth System
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Everything You Need To{' '}
                            <span className="text-primary">Grow Online.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-3xl">
                            You don't need five different freelancers. You need one connected system where each piece feeds directly into the next.
                        </p>
                    </div>
                </Reveal>

                {/* 5 Stacked Pillars */}
                <div className="mt-12 space-y-10">
                    {systemPillars.map((pillar, idx) => (
                        <Reveal key={pillar.num} delay={0.05}>
                            <div className="border-[3px] border-foreground bg-background shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-all duration-300 hover:shadow-[10px_10px_0_0_hsl(var(--primary))]">
                                {/* Pillar Top Bar */}
                                <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-foreground bg-secondary/40 px-5 py-3 sm:px-6">
                                    <div className="flex items-center gap-3">
                                        <span className="border-2 border-foreground bg-foreground px-2.5 py-0.5 text-xs font-black tracking-widest text-background">
                                            {pillar.num}
                                        </span>
                                        <span className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-foreground">
                                            {pillar.title}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                        {pillar.tag}
                                    </span>
                                </div>

                                {/* Pillar Body */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                                    {/* Left: Outcome & Details (7 cols) */}
                                    <div className="lg:col-span-7 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary">
                                                {pillar.outcome}
                                            </h3>
                                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/80 font-medium">
                                                {pillar.desc}
                                            </p>

                                            {/* Deliverables Checklist */}
                                            <div className="mt-5 border-t-2 border-foreground/15 pt-4">
                                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
                                                    What We Implement For You:
                                                </p>
                                                <ul className="space-y-2">
                                                    {pillar.deliverables.map(del => (
                                                        <li key={del} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-foreground/85">
                                                            <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" strokeWidth={3} />
                                                            <span>{del}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Chips */}
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {pillar.chips.map(chip => (
                                                    <span
                                                        key={chip}
                                                        className="border border-foreground/30 bg-secondary/50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground"
                                                    >
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-2">
                                            <a
                                                href="#contact"
                                                className="inline-flex items-center gap-2 border-2 border-foreground bg-foreground text-background px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_0_hsl(var(--foreground))] transition-all hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                <span>Get My Free Growth Audit</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right: Real Visual Showcase (5 cols) */}
                                    <div className="lg:col-span-5">
                                        <div className="border-2 border-foreground bg-background shadow-[4px_4px_0_0_hsl(var(--foreground))] overflow-hidden">
                                            <img
                                                src={pillar.image}
                                                alt={pillar.imageAlt}
                                                className="aspect-[16/11] w-full object-cover object-center"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Grounding Unifying Line */}
                <Reveal delay={0.1}>
                    <div className="mt-14 border-[3px] border-foreground bg-foreground p-6 sm:p-8 text-background shadow-[6px_6px_0_0_hsl(var(--primary))] text-center">
                        <p className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-background">
                            “You don't need five different agencies. You need one connected system.”
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-background/70 font-medium">
                            Beyond Horizon acts as your complete in-house digital growth team for a fraction of the cost.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// =========================================================================
// 6. WHAT WE ACTUALLY DO EVERY MONTH (Tangible Deliverables)
// =========================================================================
function WhatWeDoMonthly() {
    const monthlyItems = [
        {
            category: 'GOOGLE',
            items: [
                'Google Business Profile updates',
                'Local search ranking & keyword monitoring',
                '5-Star review response templates',
                'Fresh photo uploads & geo-tagging'
            ]
        },
        {
            category: 'CONTENT',
            items: [
                'On-location camera shoots at your venue',
                'High-retention Reels filmed & edited',
                'Educational customer carousels',
                'Full monthly content calendar'
            ]
        },
        {
            category: 'WEBSITE',
            items: [
                'Fast mobile-friendly landing pages',
                '1-Tap direct WhatsApp booking buttons',
                'Hosting, SSL security & speed check',
                'Menu, service & pricing updates'
            ]
        },
        {
            category: 'ADS',
            items: [
                'Targeted Meta & Instagram local ads',
                'Local pin-code radius targeting (3-5 km)',
                'High-converting offer creatives',
                'Direct enquiry lead generation'
            ]
        },
        {
            category: 'FOLLOW-UP',
            items: [
                'Instant WhatsApp enquiry notifications',
                'Countertop Google review QR standees',
                'Customer lead tracking & qualification',
                'Plain-English fortnightly growth reports'
            ]
        }
    ];

    return (
        <section className="border-b-[3px] border-foreground bg-secondary/30 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            Tangible Deliverables
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            What We Actually Do{' '}
                            <span className="text-primary">Every Month.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-3xl">
                            No vague marketing jargon. Depending on your plan, here is the concrete work we execute for your business month after month:
                        </p>
                    </div>
                </Reveal>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {monthlyItems.map((col, idx) => (
                        <Reveal key={col.category} delay={idx * 0.05}>
                            <div className="h-full border-[3px] border-foreground bg-background p-5 shadow-[4px_4px_0_0_hsl(var(--foreground))] flex flex-col justify-between">
                                <div>
                                    <div className="border-b-2 border-foreground pb-2.5 mb-4">
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                                            {col.category}
                                        </span>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {col.items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-xs font-semibold text-foreground/80 leading-snug">
                                                <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" strokeWidth={3} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 7. REAL WORK. REAL BUSINESSES. (Client Proof of Work)
// =========================================================================
function RealWork() {
    const clientProjects = [
        {
            name: 'Dental Reforms',
            category: 'Dental Clinic & Implants Center',
            location: 'Thane, Maharashtra',
            deliverables: 'Local SEO • 4K Implants Video Shoot • Educational Carousels • Review Workflow',
            image: dentalHappyPatientImg,
            imagePosition: 'object-[center_20%]',
            imageCaption: 'Happy Patient & Dr. Dipika Dodeja Following Treatment at Dental Reforms Clinic',
            badge: 'Healthcare Client'
        },
        {
            name: 'Dargar Communication',
            category: 'Mobile & Electronics Retail',
            location: 'Kalyan',
            deliverables: 'Retail Storefront Branding • Google Maps Optimization • Countertop Review QR Scanner',
            image: dargarCommImg,
            imageCaption: 'Physical Retail Storefront & In-Store Google QR Review Scanner',
            badge: 'Retail Storefront'
        },
        {
            name: 'Global Computer Solution',
            category: 'IT Sales, Custom PC Builds & CCTV',
            location: 'Kongaon, Kalyan West',
            deliverables: 'Google Business Profile Setup • Local Search Dominance • Target Service Ads',
            image: gcsImg,
            imageCaption: 'Illuminated Storefront Board & Verified Google Business Presence',
            badge: 'IT & Hardware'
        },
        {
            name: 'Siddhi Dental Clinic',
            category: 'Advanced Dental Hospital',
            location: 'Badlapur',
            deliverables: 'High-Converting Clinic Website • On-Site Photography • Online Patient Booking',
            image: siddhiDentalImg,
            imageCaption: 'Real Doctor & Patient Treatment Session Captured for Website',
            badge: 'Clinical Practice'
        }
    ];

    return (
        <section id="work" className="scroll-mt-24 border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-[3px] border-foreground pb-6">
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                                Proof of Work
                            </span>
                            <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                                Real Businesses.{' '}
                                <span className="text-primary">Real Work.</span>
                            </h2>
                            <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-2xl">
                                We don’t show fake mockups. Here is real work we have created, filmed, and launched for actual offline businesses:
                            </p>
                        </div>
                        <a
                            href={PORTFOLIO_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[46px] items-center gap-2 border-2 border-foreground bg-foreground px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-background transition-colors hover:bg-primary active:scale-[0.98] shrink-0"
                        >
                            <span>Explore Live Portfolio Site</span>
                            <ArrowUpRight className="h-4 w-4 text-primary" strokeWidth={2.4} />
                        </a>
                    </div>
                </Reveal>

                {/* 4 Client Showcase Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {clientProjects.map((client, idx) => (
                        <Reveal key={client.name} delay={idx * 0.08}>
                            <div className="group border-[3px] border-foreground bg-background p-5 sm:p-6 shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-all duration-300 hover:shadow-[10px_10px_0_0_hsl(var(--primary))] flex flex-col justify-between h-full">
                                <div>
                                    {/* Visual Image */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-foreground bg-secondary/40">
                                        <div className="absolute top-2.5 right-2.5 z-10 border border-foreground bg-background px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-foreground shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                                            {client.badge}
                                        </div>
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className={`h-full w-full object-cover ${client.imagePosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-background/95 border-t border-foreground px-3 py-1.5 text-[10px] font-bold text-foreground">
                                            {client.imageCaption}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-5">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                            {client.location}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground mt-0.5">
                                            {client.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                                            {client.category}
                                        </p>
                                        <div className="mt-3 border-t border-foreground/15 pt-3">
                                            <p className="text-xs font-semibold text-foreground/85">
                                                <strong className="text-foreground">Work Executed:</strong> {client.deliverables}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-3 border-t-2 border-foreground/15 flex items-center justify-between">
                                    <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">
                                        Active Client
                                    </span>
                                    <a
                                        href={PORTFOLIO_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-primary hover:text-foreground transition-colors"
                                    >
                                        <span>View Case Details</span>
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 8. BEFORE ➔ AFTER (The Simple Transformation)
// =========================================================================
function BeforeAfter() {
    return (
        <section className="border-b-[3px] border-foreground bg-secondary/30 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6 text-center max-w-3xl mx-auto">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            The Transformation
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            From Invisible{' '}
                            <span className="text-primary">➔ Discoverable.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium">
                            Here is what actually changes when you replace random marketing with one connected growth system:
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.06}>
                    <div className="mt-10 border-[3px] border-foreground bg-background shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-foreground">
                            {/* Left: BEFORE */}
                            <div className="p-6 sm:p-8 bg-red-50/20">
                                <div className="inline-flex items-center gap-1.5 border-2 border-foreground bg-background px-3 py-1 text-xs font-black uppercase tracking-wider text-foreground mb-6 shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                                    <X className="h-4 w-4 text-primary" strokeWidth={3} />
                                    <span>Before Beyond Horizon</span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Google & Maps:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/80">
                                            ❌ Unverified listing, old photos from 3 years ago, 4 reviews, buried below competitors on local searches.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Instagram & Social:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/80">
                                            ❌ Random flyers downloaded off Google, weeks without posting, zero local engagement or followers.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Website & Booking:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/80">
                                            ❌ Broken layout on mobile phones, loads slowly, no easy way for a customer to WhatsApp or book.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Overall Result:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-bold text-primary">
                                            Total reliance on existing word-of-mouth. New residents moving into the area don't even know you exist.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: AFTER */}
                            <div className="p-6 sm:p-8 bg-emerald-50/20">
                                <div className="inline-flex items-center gap-1.5 border-2 border-foreground bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground mb-6 shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                                    <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                                    <span>After Beyond Horizon</span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Google & Maps:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/90">
                                            ✓ Verified profile in top local results, fresh weekly photos, automated 5-star customer review collection.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Instagram & Social:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/90">
                                            ✓ Cinema-grade 4K reels showing real products, team & transformations that stop the local feed.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Website & Booking:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground/90">
                                            ✓ Clean, modern, loads under 1.5 seconds, with 1-tap direct WhatsApp booking buttons.
                                        </p>
                                    </div>
                                    <div className="border-t border-foreground/15 pt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Overall Result:</p>
                                        <p className="mt-1 text-xs sm:text-sm font-bold text-emerald-700">
                                            A predictable digital pipeline bringing new inquiries, direct phone calls, and steady weekly walk-ins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

// =========================================================================
// 9. HOW IT WORKS (Simple 5-Step Process)
// =========================================================================
function Process() {
    const processSteps = [
        {
            num: '01',
            title: 'Free Growth Audit',
            desc: 'We review your current Google profile, search visibility, reviews, and social media presence for free.'
        },
        {
            num: '02',
            title: 'Clear Action Plan',
            desc: 'We share a straightforward 90-day roadmap in plain English — no technical jargon or confusing spreadsheets.'
        },
        {
            num: '03',
            title: 'On-Site Shoot & Setup',
            desc: 'Our team visits your business with cinema gear to film real content and build your high-converting web pages.'
        },
        {
            num: '04',
            title: 'Launch & Drive Traffic',
            desc: 'We optimize your Google Maps ranking, launch high-retention Reels, and activate targeted local ads.'
        },
        {
            num: '05',
            title: 'Track, Report & Scale',
            desc: 'Bi-weekly WhatsApp updates showing real customer inquiries, phone calls, and footfall progress.'
        }
    ];

    return (
        <section id="process" className="scroll-mt-24 border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            How It Works
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Simple. Transparent.{' '}
                            <span className="text-primary">Step-by-Step.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium max-w-3xl">
                            How we partner with your business to build your digital presence from day one:
                        </p>
                    </div>
                </Reveal>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {processSteps.map((step, idx) => (
                        <Reveal key={step.num} delay={idx * 0.05}>
                            <div className="h-full border-[3px] border-foreground bg-background p-5 shadow-[4px_4px_0_0_hsl(var(--foreground))] flex flex-col justify-between">
                                <div>
                                    <span className="inline-block border-2 border-foreground bg-primary px-2.5 py-0.5 text-xs font-black text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--foreground))] mb-3">
                                        Step {step.num}
                                    </span>
                                    <h3 className="text-base font-black uppercase tracking-tight text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-xs font-semibold leading-relaxed text-foreground/75">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 10. TRANSPARENT LOCAL PRICING (Filtered, Scalable, Realistic)
// =========================================================================
function Pricing() {
    const plans = [
        {
            name: 'GET FOUND',
            price: '₹6,999',
            period: '/ month',
            tagline: 'Be discoverable.',
            summary: 'Google par nearby customers ke saamne visible raho.',
            forWho: 'Best for: Clinics • Local Shops • Services',
            features: [
                'Google Business Profile complete management',
                'Local SEO & Google Maps ranking optimization',
                'Local search keyword optimization',
                'Regular GBP updates & promotional posts',
                'Review collection guidance & reputation strategy',
                'Plain-English monthly visibility report'
            ],
            setupNote: 'One-time GBP setup: ₹2,999',
            highlighted: false,
            ctaPrefill: 'Hi Beyond Horizon! I want to start with the Get Found plan (₹6,999/mo) for my business.'
        },
        {
            name: 'GET ATTENTION',
            price: '₹9,999',
            period: '/ month',
            tagline: 'Be remembered.',
            summary: 'Instagram par professional presence + consistent content.',
            forWho: 'Best for: Salons • Cafes • Gyms • Retail • Local Brands',
            features: [
                'Instagram + Facebook complete management',
                'Local content strategy & monthly calendar',
                '4 High-retention Reels (scripted & edited)',
                '4 Carousels / Static brand creatives',
                'Captions, local hashtags & scheduled publishing',
                'Basic community management & DM lead routing'
            ],
            setupNote: 'Shoot not included (Add-on from ₹4,999/session)',
            highlighted: false,
            ctaPrefill: 'Hi Beyond Horizon! I want to start with the Get Attention plan (₹9,999/mo) for my business.'
        },
        {
            name: 'LOCAL GROWTH',
            price: '₹15,999',
            period: '/ month',
            tagline: 'Turn visibility into enquiries.',
            summary: 'Google + Social + Content — one connected system.',
            forWho: 'Best for: Businesses that want consistent local growth without juggling freelancers.',
            features: [
                'Google Business Profile & Maps optimization',
                'Instagram + Facebook complete management',
                '8 High-retention Reels (scripted & edited)',
                '4 Carousels / Graphic brand creatives',
                'Weekly GBP posts & photo updates',
                'Monthly local growth strategy review',
                'Review collection guidance & reputation strategy',
                'Comprehensive monthly performance report'
            ],
            setupNote: 'Add-ons: Shoots from ₹4,999 • Ads from ₹4,999/mo',
            highlighted: true,
            badge: 'MOST POPULAR',
            ctaPrefill: 'Hi Beyond Horizon! I want to start with the Local Growth plan (₹15,999/mo) for my business.'
        }
    ];

    const addOnCategories = [
        {
            category: 'WEBSITE BUILDS',
            badge: 'ONE-TIME',
            desc: 'High-speed, mobile-first websites built to turn visitors into WhatsApp leads.',
            items: [
                { title: 'Starter Website', price: '₹9,999', detail: 'Clean 1-page mobile presence, WhatsApp booking button, fast loading.' },
                { title: 'Growth Website', price: '₹19,999', detail: 'Custom multi-section design, lead capture, SEO basics & Google analytics.' },
                { title: 'Custom Website', price: '₹29,999+', detail: 'Bespoke functionality, custom design system & multi-service architecture.' }
            ]
        },
        {
            category: 'CONTENT SHOOTS',
            badge: 'PER SESSION',
            desc: 'On-location video & photo shoots so you have an authentic media library.',
            items: [
                { title: 'Basic Shoot', price: '₹4,999', detail: '1 location, up to ~2 hours, 4K mobile/camera capture of treatments & store.' },
                { title: 'Cinematic Shoot', price: '₹7,999+', detail: 'Planned storyboard, cinema camera gear, B-roll & multi-reel footage.' }
            ]
        },
        {
            category: 'PAID ADS MANAGEMENT',
            badge: 'MONTHLY',
            desc: 'Targeted local ads reaching ready-to-buy customers in your pincode.',
            items: [
                { title: 'Meta Ads Management', price: '₹4,999/mo', detail: 'Targeted Instagram & Facebook lead ads. Ad budget paid directly by client.' },
                { title: 'Google Ads Management', price: '₹4,999/mo', detail: 'High-intent local search ads for instant calls. Ad budget paid directly.' }
            ]
        },
        {
            category: 'PROFILE SETUP',
            badge: 'ONE-TIME',
            desc: 'Get your local digital foundation verified and optimized from day one.',
            items: [
                { title: 'GBP Setup & Verification', price: '₹2,999', detail: 'Complete setup, categories, geo-tagged photos, NAP sync & verification support.' }
            ]
        }
    ];

    return (
        <section id="pricing" className="scroll-mt-24 border-b-[3px] border-foreground bg-secondary/30 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                {/* Section Header */}
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6 text-center max-w-3xl mx-auto">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            Local Growth Pricing
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Plans That Scale With{' '}
                            <span className="text-primary">Your Business.</span>
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium">
                            No bloated agency retainers. No hidden shoot costs. Transparent, structured pricing designed for real local businesses:
                        </p>
                    </div>
                </Reveal>

                {/* 3 Main Monthly Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, idx) => (
                        <Reveal key={plan.name} delay={idx * 0.08}>
                            <div
                                className={`h-full border-[3px] border-foreground p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                                    plan.highlighted
                                        ? 'bg-background shadow-[8px_8px_0_0_hsl(var(--primary))] -translate-y-2'
                                        : 'bg-background shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:-translate-y-1'
                                }`}
                            >
                                <div>
                                    {plan.badge && (
                                        <div className="mb-4 inline-block border-2 border-foreground bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-black uppercase tracking-wider text-foreground">
                                            {plan.name}
                                        </h3>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                            {plan.tagline}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-baseline gap-1.5 border-b-2 border-foreground/15 pb-4">
                                        <span className="text-3xl sm:text-4xl font-black tracking-tight text-primary">
                                            {plan.price}
                                        </span>
                                        <span className="text-xs font-bold text-muted-foreground uppercase">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-xs font-bold text-foreground leading-relaxed">
                                        {plan.summary}
                                    </p>

                                    <p className="mt-1.5 text-[11px] font-medium text-muted-foreground">
                                        {plan.forWho}
                                    </p>

                                    {/* Features list */}
                                    <div className="mt-5 border-t-2 border-foreground/15 pt-4">
                                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-3">
                                            What’s Included:
                                        </p>
                                        <ul className="space-y-2.5">
                                            {plan.features.map(f => (
                                                <li key={f} className="flex items-start gap-2.5 text-xs font-semibold text-foreground/85 leading-snug">
                                                    <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" strokeWidth={3} />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Note on shoot / setup */}
                                    <div className="mt-5 border-t border-dashed border-foreground/20 pt-3">
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                                            {plan.setupNote}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t-2 border-foreground/15">
                                    <a
                                        href={whatsappLink(plan.ctaPrefill)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-full inline-flex min-h-[46px] items-center justify-center gap-2 border-2 border-foreground px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition-all active:scale-[0.98] ${
                                            plan.highlighted
                                                ? 'bg-primary text-primary-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:bg-foreground hover:text-background'
                                                : 'bg-foreground text-background shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:bg-primary'
                                        }`}
                                    >
                                        <span>Get Started →</span>
                                        <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* 4. GROWTH PARTNER (Custom / System Tier) */}
                <Reveal delay={0.15}>
                    <div className="mt-12 border-[3px] border-foreground bg-foreground text-background p-6 sm:p-10 shadow-[8px_8px_0_0_hsl(var(--primary))]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Info (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="inline-block border-2 border-background bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--background))]">
                                    Full In-House Growth System
                                </div>
                                <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-background">
                                    GROWTH PARTNER
                                </h3>
                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className="text-3xl sm:text-4xl font-black text-primary">
                                        Starting ₹24,999
                                    </span>
                                    <span className="text-xs font-bold text-background/70 uppercase">
                                        / month
                                    </span>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-background/80 font-medium leading-relaxed">
                                    For businesses that want Beyond Horizon to act as their complete digital growth department. We connect every piece from Google Maps to Instagram, ads, website and lead automation.
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-background/20 pt-5">
                                    <div className="space-y-2 text-xs font-semibold text-background/90">
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Local SEO + Google Maps</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Social Media & Content Strategy</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>High-Retention Reels & Creatives</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Website Conversion Optimisation</span>
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-xs font-semibold text-background/90">
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Meta & Instagram Ads Management</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>WhatsApp Lead Flow & Quick Follow-Up</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Dedicated Growth Lead</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>Monthly Strategy & Performance Review</span>
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-[10px] sm:text-[11px] text-background/60 italic">
                                    *Website development, professional shoots and direct ad spend are quoted separately based on exact scope.
                                </p>
                            </div>

                            {/* Right Action (5 cols) */}
                            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
                                <div className="border-2 border-background/30 bg-background/5 p-6 w-full text-center">
                                    <p className="text-xs font-bold uppercase tracking-wider text-background/70">
                                        Have Unique Requirements?
                                    </p>
                                    <p className="mt-1 text-sm font-black uppercase text-background">
                                        Custom Growth Roadmap
                                    </p>
                                    <a
                                        href={whatsappLink('Hi Beyond Horizon! I want to build a custom Growth Partner plan (Starting ₹24,999/mo) for my business.')}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-5 w-full inline-flex min-h-[48px] items-center justify-center gap-2 border-2 border-primary bg-primary px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--background))] transition-all hover:bg-background hover:text-foreground active:scale-[0.98]"
                                    >
                                        <span>Build My Growth Plan →</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* 5. TRANSPARENT ADD-ONS & ONE-TIME SERVICES */}
                <div className="mt-16 border-t-[3px] border-foreground pt-12">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                                Complete Transparency
                            </span>
                            <h3 className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight">
                                One-Time Builds & Specialized Add-Ons
                            </h3>
                            <p className="mt-1.5 text-xs sm:text-sm text-foreground/75 font-medium">
                                No surprise bills or hidden markups. Add services as your business expands:
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {addOnCategories.map((cat, i) => (
                            <Reveal key={cat.category} delay={i * 0.05}>
                                <div className="border-2 border-foreground bg-background p-5 shadow-[4px_4px_0_0_hsl(var(--foreground))] flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center justify-between border-b-2 border-foreground/15 pb-2.5">
                                            <h4 className="text-xs font-black uppercase tracking-wider text-foreground">
                                                {cat.category}
                                            </h4>
                                            <span className="border border-foreground bg-secondary px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-foreground">
                                                {cat.badge}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-[11px] font-medium text-foreground/70 leading-snug">
                                            {cat.desc}
                                        </p>

                                        <div className="mt-4 space-y-3">
                                            {cat.items.map(item => (
                                                <div key={item.title} className="border-t border-foreground/10 pt-2">
                                                    <div className="flex items-baseline justify-between gap-1">
                                                        <span className="text-xs font-bold text-foreground">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-xs font-black text-primary">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                    <p className="mt-0.5 text-[10px] text-muted-foreground leading-snug">
                                                        {item.detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-5 pt-3 border-t border-foreground/15">
                                        <a
                                            href={whatsappLink(`Hi Beyond Horizon! I want to enquire about ${cat.category}.`)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[10px] font-black uppercase tracking-wider text-primary flex items-center justify-between hover:underline"
                                        >
                                            <span>Enquire Add-On</span>
                                            <ArrowUpRight className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 11. WHY BEYOND HORIZON
// =========================================================================
function WhyUs() {
    const reasons = [
        {
            title: 'One Partner, Everything Handled',
            desc: 'No juggling a website freelancer, a video editor, and an ad person. We manage your entire digital presence under one roof.'
        },
        {
            title: 'We Speak Local Business',
            desc: 'No corporate agency jargon or vanity metrics. We focus on phone calls, direction taps, and direct WhatsApp customer enquiries.'
        },
        {
            title: 'Real On-Location Production',
            desc: 'We bring cinema cameras, wireless audio, and lighting straight to your business location. No generic internet stock templates.'
        },
        {
            title: 'Transparent Plain-English Updates',
            desc: 'Bi-weekly updates sent directly on WhatsApp so you always know what is being built and how your presence is growing.'
        }
    ];

    return (
        <section className="border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <Reveal>
                    <div className="border-b-[3px] border-foreground pb-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            Why Us
                        </span>
                        <h2 className="mt-3 text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                            Built For Indian Markets &{' '}
                            <span className="text-primary">Real Footfalls.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, idx) => (
                        <Reveal key={r.title} delay={idx * 0.05}>
                            <div className="h-full border-[3px] border-foreground bg-secondary/30 p-6 shadow-[5px_5px_0_0_hsl(var(--foreground))] flex flex-col justify-between">
                                <div>
                                    <div className="h-2.5 w-8 bg-primary mb-4" />
                                    <h3 className="text-base font-black uppercase tracking-tight text-foreground">
                                        {r.title}
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-foreground/75">
                                        {r.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 12. STREAMLINED 5-FIELD CONTACT / AUDIT FORM
// =========================================================================
function Contact() {
    const [form, setForm] = useState({
        name: '',
        business: '',
        phone: '',
        type: 'Dentist / Healthcare',
        need: 'Everything (Complete Growth System)'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const update = key => e => setForm({
        ...form,
        [key]: e.target.value
    });

    const buildLeadParams = () => {
        return new URLSearchParams({
            name: form.name.trim(),
            business: form.business.trim(),
            phone: form.phone.trim(),
            type: form.type,
            need: form.need,
            message: `Business: ${form.business} (${form.type})\nNeed: ${form.need}`,
            source: 'Beyond Horizon Website'
        });
    };

    const submit = async e => {
        e.preventDefault();
        if (isSending) return;
        setIsSending(true);

        const params = buildLeadParams();
        try {
            // Send to Google Form / Sheets
            let iframe = document.getElementById('bh-sheet-iframe');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'bh-sheet-iframe';
                iframe.name = 'bh-sheet-iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }
            const sheetForm = document.createElement('form');
            sheetForm.method = 'POST';
            sheetForm.action = GOOGLE_FORM_ENDPOINT;
            sheetForm.target = 'bh-sheet-iframe';
            sheetForm.enctype = 'application/x-www-form-urlencoded';
            params.forEach((value, key) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                sheetForm.appendChild(input);
            });
            document.body.appendChild(sheetForm);
            sheetForm.submit();
            setTimeout(() => {
                sheetForm.remove();
            }, 1200);

            setIsSubmitted(true);
        } catch {
            // Fail softly
        } finally {
            const text = [
                'Hi Beyond Horizon! I’d like my free growth audit.',
                `Name: ${form.name}`,
                `Business: ${form.business}`,
                `Phone: ${form.phone}`,
                `Business Type: ${form.type}`,
                `Need Help With: ${form.need}`
            ].join('\n');
            window.open(whatsappLink(text), '_blank', 'noopener');
            setIsSending(false);
        }
    };

    const inputCls = 'w-full border-2 border-foreground bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none transition-colors focus:border-primary';

    return (
        <section id="contact" className="scroll-mt-24 border-b-[3px] border-foreground bg-background py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="grid gap-12 lg:grid-cols-12 items-start">
                    {/* Left: Explainer */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                                Free Audit
                            </span>
                            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-tight">
                                Get My Free Growth Audit.
                            </h2>
                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/75 font-medium">
                                Fill in 5 quick details. We’ll analyze your Google Maps ranking, Instagram profile, and local area competition and send you a personalized action plan on WhatsApp within 48 hours.
                            </p>

                            <div className="mt-8 space-y-4">
                                <a
                                    href={whatsappLink('Hi Beyond Horizon! I want to talk directly about growing my business.')}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-[48px] items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                >
                                    <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                                    <span>Prefer Talking? WhatsApp Us</span>
                                </a>
                                <p className="flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground">
                                    <Phone className="h-4 w-4 text-primary" strokeWidth={2.4} />
                                    <span>+91 92253 01670 · Mon–Sat, 10am–7pm IST</span>
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Clean 5-Field Form */}
                    <div className="lg:col-span-7">
                        <Reveal delay={0.08}>
                            <form
                                onSubmit={submit}
                                className="border-[3px] border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                            >
                                <div className="space-y-5">
                                    {isSubmitted && (
                                        <div className="border-2 border-primary bg-primary/10 p-4 text-xs sm:text-sm font-bold text-foreground">
                                            ✓ Thank you! Details received. Opening WhatsApp to connect with your growth lead...
                                        </div>
                                    )}

                                    {/* 1. Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="name" className="text-xs font-black uppercase tracking-wider">
                                            Your Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={update('name')}
                                            placeholder="e.g. Rahul Sharma"
                                            className={inputCls}
                                        />
                                    </div>

                                    {/* 2. Business Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="business" className="text-xs font-black uppercase tracking-wider">
                                            Business Name *
                                        </label>
                                        <input
                                            id="business"
                                            type="text"
                                            required
                                            value={form.business}
                                            onChange={update('business')}
                                            placeholder="e.g. Apex Dental Clinic / Sharma Sweets"
                                            className={inputCls}
                                        />
                                    </div>

                                    {/* 3. Phone / WhatsApp */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="phone" className="text-xs font-black uppercase tracking-wider">
                                            WhatsApp Number *
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={update('phone')}
                                            placeholder="+91 98765 43210"
                                            className={inputCls}
                                        />
                                    </div>

                                    {/* 4. Business Type Dropdown */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="type" className="text-xs font-black uppercase tracking-wider">
                                            Business Type *
                                        </label>
                                        <select
                                            id="type"
                                            value={form.type}
                                            onChange={update('type')}
                                            className={`${inputCls} cursor-pointer`}
                                        >
                                            <option>Dentist / Healthcare</option>
                                            <option>Salon / Spa</option>
                                            <option>Restaurant / Cafe</option>
                                            <option>Gym / Fitness Center</option>
                                            <option>Retail / Electronics Store</option>
                                            <option>Local Professional Services</option>
                                            <option>Other Local Business</option>
                                        </select>
                                    </div>

                                    {/* 5. Need Dropdown */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="need" className="text-xs font-black uppercase tracking-wider">
                                            What Do You Need Help With? *
                                        </label>
                                        <select
                                            id="need"
                                            value={form.need}
                                            onChange={update('need')}
                                            className={`${inputCls} cursor-pointer`}
                                        >
                                            <option>Everything (Complete Growth System)</option>
                                            <option>Google Maps Ranking & Local SEO</option>
                                            <option>Instagram Management & 4K Reels</option>
                                            <option>Fast Mobile Website & WhatsApp Booking</option>
                                            <option>Targeted Local Meta Ads</option>
                                        </select>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="w-full inline-flex min-h-[50px] items-center justify-center gap-2 border-2 border-foreground bg-primary px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all hover:bg-foreground hover:text-background active:scale-[0.98] cursor-pointer"
                                        >
                                            <span>Get My Free Growth Audit</span>
                                            <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                                        </button>
                                        <p className="mt-2.5 text-center text-[11px] font-semibold text-muted-foreground">
                                            Submitting opens WhatsApp with your audit details pre-filled. No spam, ever.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

// =========================================================================
// 13. FOOTER
// =========================================================================
function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:px-8">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="max-w-sm">
                        <p className="stretch-wide text-xl font-black uppercase tracking-tight text-background">
                            Beyond Horizon
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                            Growth Partner for Local Businesses
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-background/60">
                            We help dentists, salons, gyms, restaurants & retail stores get found on Google, look professional online, and turn attention into real customer enquiries.
                        </p>
                    </div>

                    <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footer">
                        {[
                            ['#problem', 'The Problem'],
                            ['#who-we-help', 'Who We Help'],
                            ['#services', 'What We Do'],
                            ['#work', 'Real Work'],
                            ['#pricing', 'Pricing'],
                            ['#process', 'How It Works'],
                            [PORTFOLIO_URL, 'Live Portfolio ↗'],
                            ['#contact', 'Free Audit']
                        ].map(([href, label]) => (
                            href.startsWith('http') ? (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-primary transition-colors hover:underline"
                                >
                                    {label}
                                </a>
                            ) : (
                                <a
                                    key={href}
                                    href={href}
                                    className="font-semibold text-background/70 transition-colors hover:text-primary"
                                >
                                    {label}
                                </a>
                            )
                        ))}
                    </nav>

                    <div className="text-sm">
                        <p className="font-bold uppercase tracking-[0.15em] text-background/50">Reach us</p>
                        <a
                            href={whatsappLink('Hi Beyond Horizon!')}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-2 font-semibold text-background/80 transition-colors hover:text-primary"
                        >
                            <MessageCircle className="h-4 w-4 text-primary" strokeWidth={2.4} />
                            <span>+91 92253 01670</span>
                        </a>
                        <p className="mt-2 text-xs text-background/60">
                            growwithbeyondhorizon@gmail.com
                        </p>
                        <p className="mt-1 text-xs text-background/50">
                            Kalyan • Thane • Mumbai • Maharashtra
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/50 sm:flex-row sm:items-center">
                    <p>© {new Date().getFullYear()} Beyond Horizon. All rights reserved.</p>
                    <p className="font-semibold uppercase tracking-[0.2em]">
                        Built for local businesses. Focused on real growth.
                    </p>
                </div>
            </div>

            <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
                <p className="stretch-wide -mb-[0.22em] whitespace-nowrap text-center text-[clamp(4rem,15vw,14rem)] font-black uppercase leading-none tracking-tight text-background/[0.07]">
                    Beyond Horizon
                </p>
            </div>
        </footer>
    );
}

// =========================================================================
// MAIN HOMEPAGE COMPONENT
// =========================================================================
export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Beyond Horizon — Digital Growth for Local Businesses</title>
                <meta
                    name="description"
                    content="Beyond Horizon is a digital growth partner for local dentists, salons, gyms, restaurants and retail stores. Get found on Google, look professional online, and turn attention into real customer enquiries. Get your free growth audit."
                />
            </Helmet>
            <Seo
                title="Beyond Horizon — Digital Growth for Local Businesses"
                description="We help local businesses get found on Google, look professional online, and turn attention into real customer enquiries."
                image="/og-image.jpg"
                siteName="Beyond Horizon"
                url="https://beyondhorizon.co.in/"
            />
            <div className="min-h-[100dvh] bg-background">
                <Header />
                <main>
                    <Hero />
                    <Problem />
                    <WhoWeHelp />
                    <Services />
                    <WhatWeDoMonthly />
                    <RealWork />
                    <BeforeAfter />
                    <Process />
                    <Pricing />
                    <WhyUs />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
