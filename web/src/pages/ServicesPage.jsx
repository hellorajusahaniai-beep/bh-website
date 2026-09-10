import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Search,
    MapPin,
    MessageCircle,
    Star,
    ArrowUpRight,
    ArrowRight,
    Check,
    Globe,
    Instagram,
    Sparkles,
    ShieldCheck,
    Zap,
    HelpCircle,
    ChevronDown
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const WHATSAPP_NUMBER = '919225301670';
const FRAME = 'p-2.5 md:p-3.5';
const FRAME_INSET = 'top-2.5 bottom-2.5 left-2.5 right-2.5 md:top-3.5 md:bottom-3.5 md:left-3.5 md:right-3.5';

function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Frame() {
    return (
        <>
            <div aria-hidden="true" className={`pointer-events-none fixed ${FRAME_INSET} z-[80] border-[3px] border-foreground`} />
            <div aria-hidden="true" className="pointer-events-none fixed left-2.5 top-2.5 z-[81] h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-primary md:left-3.5 md:top-3.5" />
        </>
    );
}

function ServicesHeader() {
    return (
        <header className="sticky top-2.5 z-[70] border-b-[3px] border-foreground bg-background md:top-3.5">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
                <Link to="/" className="flex items-baseline gap-2">
                    <span className="stretch-wide text-lg font-black uppercase leading-none tracking-tight md:text-xl">
                        Beyond Horizon
                    </span>
                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:inline">
                        Growth Partner
                    </span>
                </Link>
                <nav className="hidden items-center gap-6 lg:flex" aria-label="Services Navigation">
                    <Link to="/" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        Home
                    </Link>
                    <a href="#get-found" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        Get Found
                    </a>
                    <a href="#look-professional" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        Websites
                    </a>
                    <a href="#get-attention" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        Social & Reels
                    </a>
                    <a href="#growth-audit" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        Free Audit
                    </a>
                    <a href="#faq" className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                        FAQ
                    </a>
                </nav>
                <a
                    href={whatsappLink('Hi Beyond Horizon! I want to talk about your services and packages.')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary active:scale-[0.98]"
                >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                    WhatsApp Us
                </a>
            </div>
        </header>
    );
}

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b-[2px] border-foreground/20 py-4 transition-colors">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between text-left text-base font-bold uppercase tracking-tight md:text-lg hover:text-primary"
            >
                <span>{q}</span>
                <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    strokeWidth={2.5}
                />
            </button>
            {open && (
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/75 md:text-base">
                    {a}
                </p>
            )}
        </div>
    );
}

export default function ServicesPage() {
    const jumpLinks = [
        { href: '#get-found', label: '01 · Get Found (GBP & Maps)', icon: MapPin },
        { href: '#look-professional', label: '02 · Look Professional (Websites)', icon: Globe },
        { href: '#get-attention', label: '03 · Get Attention (Social & Reels)', icon: Instagram },
    ];

    const faqs = [
        {
            q: 'Do you guarantee the #1 ranking on Google Maps?',
            a: 'Google’s algorithm changes dynamically based on user location, query intent, and proximity. Any agency guaranteeing a permanent #1 spot is using black-hat tricks that can get your listing suspended. We use compliant, data-driven local SEO (keyword optimization, consistent NAP citations, category tuning, and authentic review velocity) to systematically position you in the top-3 Local 3-Pack where over 70% of real calls happen.'
        },
        {
            q: 'Video shoot aur editing ka kya process hota hai?',
            a: 'Social Starter plan mein hum aapko exact shot-list, hook, aur scripting dete hain jiske mutabiq aap mobile se raw video shoot karke bhejte hain — aur hum use high-retention reel format mein professionally edit karte hain. Social Growth aur Custom plans mein monthly shoot coordination aur on-site shoot planning shamil hoti hai.'
        },
        {
            q: 'Website live hone ke baad kya koi hidden monthly fee hai?',
            a: 'Bilkul nahi. Website development ek one-time fee hai. Domain aur high-speed hosting renewal charges directly hosting providers (Hostinger, Cloudflare etc.) ke standard rates par hote hain bina kisi agency markup ke. Agar aap ongoing updates chahte hain, toh hamare paas optional support packages available hain.'
        },
        {
            q: 'Kya hum multiple services (e.g. Website + GBP) ko bundle kar sakte hain?',
            a: 'Haan! Agar aap ek se zyada services ek saath start karte hain (jaise Starter Website ke saath GBP Foundation ya Monthly Local Growth), toh hum bundled discount offer karte hain. Hamare saath WhatsApp par connect karke custom package discuss kar sakte hain.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Services & Transparent Pricing — Beyond Horizon</title>
                <meta
                    name="description"
                    content="Transparent pricing for local business growth. Google Business Profile setup from ₹2,000, monthly local SEO, high-speed business websites from ₹5,000, and reel marketing."
                />
            </Helmet>
            <Seo
                title="Services & Transparent Pricing — Beyond Horizon"
                description="Transparent pricing and packages for Google Business Profile optimization, local business websites, and social media growth."
                image="/og-image.jpg"
                siteName="Beyond Horizon"
                url="https://beyondhorizon.co.in/services"
            />
            <Frame />
            <div className={`min-h-[100dvh] bg-foreground ${FRAME}`}>
                <div className="bg-background">
                    <ServicesHeader />

                    <main>
                        {/* Hero Section */}
                        <section className="border-b-[3px] border-foreground px-4 py-16 md:px-8 md:py-24">
                            <div className="mx-auto max-w-6xl">
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary/50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                                        Transparent Growth Systems · No Agency Fluff
                                    </div>
                                    <h1 className="mt-6 max-w-4xl text-[clamp(2.2rem,5.5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-tight">
                                        Clear Packages.{' '}
                                        <span className="text-primary">Real Results.</span>
                                        <br />
                                        Built for Local Businesses.
                                    </h1>
                                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
                                        We don’t sell vanity metrics or hollow post counts. We build local visibility,
                                        credibility, and real enquiries for Indian restaurants, salons, clinics, and shops.
                                    </p>
                                </Reveal>

                                {/* Quick Jump Links */}
                                <Reveal delay={0.1}>
                                    <div className="mt-10 flex flex-wrap items-center gap-3">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                            Jump to:
                                        </span>
                                        {jumpLinks.map(j => (
                                            <a
                                                key={j.href}
                                                href={j.href}
                                                className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
                                            >
                                                <j.icon className="h-3.5 w-3.5 text-primary" />
                                                {j.label}
                                            </a>
                                        ))}
                                    </div>
                                </Reveal>
                            </div>
                        </section>

                        {/* SECTION 01: GET FOUND */}
                        <section id="get-found" className="scroll-mt-20 border-b-[3px] border-foreground bg-background px-4 py-20 md:px-8 md:py-28">
                            <div className="mx-auto max-w-6xl">
                                <Reveal>
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                        01 — Local SEO • Google Maps • GBP • AI Search
                                    </span>
                                    <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[1] tracking-tight">
                                        Dominate Local Google Search & Maps.
                                    </h2>
                                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/70">
                                        <strong className="text-foreground">We don’t just sell posts — we build local visibility.</strong> When nearby customers search for what you sell, your business should be the first name they see and call.
                                    </p>
                                </Reveal>

                                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                    {/* Plan 1: GBP Foundation */}
                                    <Reveal delay={0.05} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-6 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    One-Time Setup
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-xl font-black uppercase tracking-tight">
                                                    GBP Foundation
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Best for businesses whose profile exists but is poorly optimized or losing calls.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black tracking-tight text-foreground">₹2,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">one-time</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Complete GBP profile audit & health check</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Accurate category & sub-category mapping</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Keyword-optimized business description</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Geo-tagged photo upload & naming optimization</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Direct Google Review link & printable QR code</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Hours, attributes & contact verification check</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to get the GBP Foundation Setup (₹2,000 one-time) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Start with ₹2,000
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Plan 2: Local Visibility */}
                                    <Reveal delay={0.1} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-6 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Monthly Retainer
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-xl font-black uppercase tracking-tight">
                                                    Local Visibility
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Best for local businesses that want consistent, active Google presence and steady enquiries.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black tracking-tight text-foreground">₹5,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Active Google Business Profile management</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>8 Local Google posts & promo updates / mo</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Weekly photo & product/service updates</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Review monitoring & reply recommendations</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Basic local search keyword tracking</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly performance & enquiry report</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to enquire about the Local Visibility Plan (₹5,000/month) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Choose ₹5K/mo
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Plan 3: Local Growth (BEST VALUE) */}
                                    <Reveal delay={0.15} className="h-full">
                                        <div className="relative flex h-full flex-col justify-between border-[3px] border-primary bg-background p-6 shadow-[6px_6px_0_0_hsl(var(--primary))] transition-all">
                                            <div className="absolute -top-3.5 right-4 bg-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
                                                Best Value ⭐
                                            </div>
                                            <div>
                                                <span className="inline-block bg-primary/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                                                    Aggressive Growth
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-xl font-black uppercase tracking-tight">
                                                    Local Growth
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Best for businesses aiming to dominate top 3 spots on Google Maps in their area.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black tracking-tight text-primary">₹10,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span><strong>Everything in Local Visibility</strong></span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>16 High-impact Google posts & offer creatives</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Competitor ranking monitoring & local tracking</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Local citation & NAP consistency audit</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Website local SEO & Maps embed optimization</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly 1-on-1 strategy call & action roadmap</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to get the Local Growth Plan (₹10,000/month) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground active:scale-[0.98]"
                                            >
                                                Choose ₹10K/mo
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Plan 4: Local Authority */}
                                    <Reveal delay={0.2} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-6 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Full Authority
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-xl font-black uppercase tracking-tight">
                                                    Local Authority
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    High-competition niches, multi-location clinics, or premium local brands.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black tracking-tight text-foreground">₹15,000+</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Advanced local search dominance & strategy</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>20–30 Local content updates & custom assets</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Local landing page SEO & on-page technical fixes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Deep competitor keyword gap & search radius attack</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Active review velocity & reputation management</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Dedicated account lead & custom SLA</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to discuss the Local Authority Plan (₹15,000+/month) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Discuss Custom Scope
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 02: LOOK PROFESSIONAL */}
                        <section id="look-professional" className="scroll-mt-20 border-b-[3px] border-foreground bg-secondary/30 px-4 py-20 md:px-8 md:py-28">
                            <div className="mx-auto max-w-6xl">
                                <Reveal>
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                        02 — Websites • Landing Pages • Branding • Design
                                    </span>
                                    <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[1] tracking-tight">
                                        Websites That Build Immediate Trust.
                                    </h2>
                                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/70">
                                        Slow, outdated, or messy websites quietly push real customers to your competitors. We build fast, high-converting digital storefronts designed for Indian mobile users.
                                    </p>
                                </Reveal>

                                <div className="mt-14 grid gap-8 md:grid-cols-3">
                                    {/* Web Plan 1 */}
                                    <Reveal delay={0.05} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-7 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Fast 1-Pager
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Starter Business Website
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Clean, high-converting single-page digital home for clinics, cafes, or consultants.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-foreground">₹5,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">one-time</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Ultra-fast, mobile-first responsive single-page design</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Direct WhatsApp chat & click-to-call integration</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Contact enquiry lead capture form & Google Map embed</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Services overview / digital menu & photo showcase</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Basic on-page local SEO & social profile linking</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Delivered ready in 3 to 5 business days</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to get the Starter Business Website (₹5,000) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-3 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Build for ₹5,000
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Web Plan 2 */}
                                    <Reveal delay={0.1} className="h-full">
                                        <div className="relative flex h-full flex-col justify-between border-[3px] border-primary bg-background p-7 shadow-[6px_6px_0_0_hsl(var(--primary))] transition-all">
                                            <div className="absolute -top-3.5 right-4 bg-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
                                                Most Popular ⭐
                                            </div>
                                            <div>
                                                <span className="inline-block bg-primary/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                                                    Full Business Site
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Growth Business Website
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Multi-page structured website engineered to establish high authority and rank on Google.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-primary">₹10,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">one-time</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Up to 4–5 dedicated pages (Home, About, Services, Reviews, Contact)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Copywriting guidance & conversion-focused section layout</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Brand identity styling (custom color palette, typography & assets)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Google Analytics & Google Search Console integration</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Google Reviews & customer testimonials showcase</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Technical speed optimization across all screen sizes</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to discuss the Growth Business Website (₹10,000) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground active:scale-[0.98]"
                                            >
                                                Build for ₹10,000
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Web Plan 3 */}
                                    <Reveal delay={0.15} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-7 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Flagship Presence
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Custom Brand & Web
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Bespoke digital platform and visual branding for premium clinics and expanding stores.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-foreground">₹18,000+</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">one-time</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Completely custom architecture with bespoke micro-interactions</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Dedicated local SEO landing pages for each service or branch</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Brand identity kit: logo polish, font system & social templates</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Advanced Lead CRM & automated email/WhatsApp webhook setup</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Priority deployment schedule & dedicated developer support</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to discuss the Custom Brand & Web Presence (₹18,000+) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-3 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Discuss Custom Build
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 03: GET ATTENTION */}
                        <section id="get-attention" className="scroll-mt-20 border-b-[3px] border-foreground bg-background px-4 py-20 md:px-8 md:py-28">
                            <div className="mx-auto max-w-6xl">
                                <Reveal>
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                        03 — Instagram • Facebook • Reels • Content • UGC
                                    </span>
                                    <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[1] tracking-tight">
                                        Content & Reels That Bring Real Customers.
                                    </h2>
                                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/70">
                                        Random boosted posts burn cash without enquiries. We build structured local social media calendars designed for reach, trust, and real footfalls.
                                    </p>
                                    {/* Scope transparency callout */}
                                    <div className="mt-6 inline-flex items-center gap-2 border-l-4 border-primary bg-secondary/60 px-4 py-2.5 text-xs font-semibold text-foreground/85">
                                        <span><strong>Scope Clarity:</strong> Client provides raw video/photos as per our monthly shot list, or on-site shoot coordination is scheduled upfront based on location.</span>
                                    </div>
                                </Reveal>

                                <div className="mt-14 grid gap-8 md:grid-cols-3">
                                    {/* Social Plan 1 */}
                                    <Reveal delay={0.05} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-7 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Consistency
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Social Starter
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Stay active, modern, and credible on Instagram & Facebook every single week.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-foreground">₹8,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>8 Curated Reels + 5 Static/Carousel feed posts</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly content planning & hook scripting guides</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>High-engagement local captions & hashtag strategy</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Scheduled publishing & profile bio optimization</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly reach, engagement & follower growth report</span>
                                                    </li>
                                                    <li className="flex items-start gap-2 text-muted-foreground">
                                                        <span className="font-bold text-primary">·</span>
                                                        <span>Raw video/photos supplied by client per script</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to get the Social Starter Plan (₹8,000/month) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-3 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Choose ₹8K/mo
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Social Plan 2 */}
                                    <Reveal delay={0.1} className="h-full">
                                        <div className="relative flex h-full flex-col justify-between border-[3px] border-primary bg-background p-7 shadow-[6px_6px_0_0_hsl(var(--primary))] transition-all">
                                            <div className="absolute -top-3.5 right-4 bg-primary px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
                                                Recommended ⭐
                                            </div>
                                            <div>
                                                <span className="inline-block bg-primary/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                                                    Local Reach Engine
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Social Growth
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Designed to create viral local reach, engagement spikes, and direct customer DMs.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-primary">₹15,000</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>12–15 High-retention Reels + 5–8 Feed posts / graphics</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Trending audio research & niche viral hook formulas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly shoot coordination & detailed shot list plan</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Stories strategy, poll prompts & customer DM triggers</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Festive offers & promotional launch creatives</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Monthly strategy review & content pivot call</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to get the Social Growth Plan (₹15,000/month) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground active:scale-[0.98]"
                                            >
                                                Choose ₹15K/mo
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>

                                    {/* Social Plan 3 */}
                                    <Reveal delay={0.15} className="h-full">
                                        <div className="flex h-full flex-col justify-between border-[3px] border-foreground bg-background p-7 transition-all hover:shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                                            <div>
                                                <span className="inline-block bg-secondary px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground">
                                                    Omnipresence
                                                </span>
                                                <h3 className="stretch-wide mt-4 text-2xl font-black uppercase tracking-tight">
                                                    Omnipresence & Scale
                                                </h3>
                                                <p className="mt-2 text-xs font-medium text-foreground/60">
                                                    Aggressive content velocity, creator collaboration, and paid ad integration.
                                                </p>
                                                <div className="mt-6 border-y-2 border-foreground/15 py-4">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black tracking-tight text-foreground">₹25,000+</span>
                                                        <span className="text-xs font-bold uppercase text-muted-foreground">/ month</span>
                                                    </div>
                                                </div>
                                                <ul className="mt-6 space-y-3 text-xs font-semibold text-foreground/80">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>20+ High-impact Reels & daily story rhythm</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Local UGC & creator outreach / collaboration</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Meta Ads (Instagram/Facebook) creative setup & testing</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Multi-platform distribution (Instagram, FB, Shorts)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                                        <span>Dedicated content director & rapid turnarounds</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href={whatsappLink('Hi Beyond Horizon! I want to discuss the Omnipresence & Scale Social Plan (₹25,000+/mo) for my business.')}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-8 inline-flex w-full items-center justify-center gap-2 border-2 border-foreground bg-foreground py-3 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:border-primary active:scale-[0.98]"
                                            >
                                                Discuss Omnipresence
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 04: THE SALES FUNNEL (GROWTH AUDIT) */}
                        <section id="growth-audit" className="scroll-mt-20 border-b-[3px] border-foreground bg-foreground text-background px-4 py-20 md:px-8 md:py-28">
                            <div className="mx-auto max-w-5xl text-center">
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 border-2 border-primary bg-primary/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                        <Zap className="h-4 w-4" />
                                        Your Custom Growth Plan
                                    </div>
                                    <h2 className="stretch-wide mt-6 text-[clamp(2rem,5vw,4.2rem)] font-black uppercase leading-[1] tracking-tight text-background">
                                        Not Sure What Your Business Needs?
                                    </h2>
                                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg">
                                        Every business is at a different stage. Some need a simple Google Maps cleanup to immediately double calls, while others need a professional website before running ads. We will audit your current presence and recommend the exact roadmap.
                                    </p>
                                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                        <a
                                            href={whatsappLink('Hi Beyond Horizon! I’d like a free growth audit and custom plan recommendation for my business.')}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-background hover:text-foreground active:scale-[0.98]"
                                        >
                                            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                                            Get My Free Growth Plan
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                        <Link
                                            to="/#contact"
                                            className="inline-flex min-h-[52px] items-center justify-center gap-2 border-2 border-background/40 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:border-background hover:bg-background/10"
                                        >
                                            Fill Audit Form on Home
                                        </Link>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-background/50">
                                        Free 48-hour turnaround · No spam, no aggressive sales calls
                                    </p>
                                </Reveal>
                            </div>
                        </section>

                        {/* SECTION 05: FAQ ACCORDION */}
                        <section id="faq" className="scroll-mt-20 border-b-[3px] border-foreground bg-background px-4 py-20 md:px-8 md:py-28">
                            <div className="mx-auto max-w-4xl">
                                <Reveal>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                        <HelpCircle className="h-4 w-4" />
                                        Honest Answers
                                    </div>
                                    <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-black uppercase leading-[1.02] tracking-tight">
                                        Frequently Asked Questions.
                                    </h2>
                                    <p className="mt-3 text-base text-foreground/70">
                                        Have questions about how we work and deliver results? Here are straightforward answers.
                                    </p>
                                </Reveal>

                                <div className="mt-10 divide-y-0">
                                    {faqs.map((f, i) => (
                                        <Reveal key={f.q} delay={i * 0.05}>
                                            <FaqItem q={f.q} a={f.a} />
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="bg-foreground text-background">
                        <div className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:px-8">
                            <div className="flex flex-col justify-between gap-10 md:flex-row">
                                <div className="max-w-sm">
                                    <Link to="/" className="stretch-wide text-xl font-black uppercase tracking-tight text-background">
                                        Beyond Horizon
                                    </Link>
                                    <p className="mt-3 text-sm leading-relaxed text-background/60">
                                        Digital growth partner for local businesses. Get found, look professional, attract attention, win customers — and automate the rest.
                                    </p>
                                </div>
                                <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footer Navigation">
                                    <Link to="/" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Home
                                    </Link>
                                    <a href="#get-found" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Get Found
                                    </a>
                                    <a href="#look-professional" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Websites
                                    </a>
                                    <a href="#get-attention" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Social & Reels
                                    </a>
                                    <Link to="/#audit" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Free Audit
                                    </Link>
                                    <Link to="/#contact" className="font-semibold text-background/70 transition-colors hover:text-primary">
                                        Contact Us
                                    </Link>
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
                                        +91 9225301670
                                    </a>
                                    <p className="mt-2 text-xs text-background/60">
                                        growwithbeyondhorizon@gmail.com
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
                            <p className="stretch-wide -mb-[0.22em] whitespace-nowrap text-center text-[clamp(4rem,15vw,14rem)] font-black uppercase leading-none tracking-tight text-background/[0.08]">
                                Horizon Horizon
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
