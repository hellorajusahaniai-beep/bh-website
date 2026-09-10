import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Search, MapPin, Instagram, Facebook, Globe, MessageCircle, Star, ArrowRight, ArrowUpRight, Check, Megaphone, Camera, PenTool, LayoutGrid, Sparkles, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import dentalImage from '@/assets/dental-reforms.jpg';
const WHATSAPP_NUMBER = '919225301670';
const GOOGLE_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzWesK8MJo2oeqR8ZtIMuXj7DWYU5eqPxIpVTn-wwq5PuVXxn4agBjS96rqkDqh-Evr/exec';
const HERO_IMAGE = 'https://images.hostinger.com/31ba9dfc-bb01-4f4d-9857-e71a5f58dce9.png';
const DENTAL_IMAGE = dentalImage;
const SHOP_IMAGE = 'https://images.hostinger.com/ea829d74-0677-4306-ab81-f93e15f2fc11.png';
const FRAME = 'p-2.5 md:p-3.5';
const FRAME_INSET = 'top-2.5 bottom-2.5 left-2.5 right-2.5 md:top-3.5 md:bottom-3.5 md:left-3.5 md:right-3.5';
const problems = [{
    title: 'You’re invisible on Google',
    desc: 'Customers nearby search for what you sell — and find someone else.'
}, {
    title: 'Social profiles gone quiet',
    desc: 'An inactive Instagram or Facebook page makes a good business look closed.'
}, {
    title: 'A website that doesn’t build trust',
    desc: 'Slow, outdated or missing websites quietly push real customers away.'
}, {
    title: 'Competitors appear first',
    desc: 'They’re not better than you. They’re just easier to find online.'
}, {
    title: 'Ad money, poor-quality leads',
    desc: 'Boosted posts and random ads burn budget without bringing real enquiries.'
}, {
    title: 'Everything falls on you',
    desc: 'You run the business all day — who has time to also run the internet?'
}];
const services = [{
    word: 'GET FOUND',
    tag: 'SEO + Google + Maps + AI Search',
    cta: 'Explore Packages',
    link: '/services#get-found',
    items: ['Local SEO', 'Google Business Profile', 'Google Maps optimisation', 'Local keyword strategy', 'Website SEO', 'AI search visibility', 'Reviews & reputation strategy']
}, {
    word: 'LOOK PROFESSIONAL',
    tag: 'Branding + Website + Design + Photography',
    cta: 'Explore Packages',
    link: '/services#look-professional',
    items: ['Website development', 'Landing pages', 'Branding & identity', 'Graphic design', 'Business photography', 'Creative assets', 'Website optimisation']
}, {
    word: 'GET ATTENTION',
    tag: 'Instagram + Facebook + Content + Reels + UGC',
    cta: 'Explore Packages',
    link: '/services#get-attention',
    items: ['Instagram & Facebook management', 'Content strategy & calendars', 'Reels & short-form video', 'UGC & creator content', 'Community engagement', 'Offers & campaign creatives']
}];
const growthEngines = [{
    icon: Megaphone,
    label: 'Paid Advertising'
}, {
    icon: MessageCircle,
    label: 'WhatsApp Marketing'
}, {
    icon: LayoutGrid,
    label: 'CRM & Follow-ups'
}, {
    icon: Sparkles,
    label: 'Automation'
}];
const steps = [{
    n: '01',
    title: 'Make you visible',
    desc: 'Show up on Google, Maps and AI search when locals look for you.'
}, {
    n: '02',
    title: 'Make you look professional',
    desc: 'A brand, website and photos that earn trust at first glance.'
}, {
    n: '03',
    title: 'Get attention',
    desc: 'Content, reels and ads that put your business in local feeds.'
}, {
    n: '04',
    title: 'Generate customers',
    desc: 'Turn attention into calls, WhatsApp messages and walk-ins.'
}, {
    n: '05',
    title: 'Automate & grow',
    desc: 'CRM, follow-ups and systems that keep growth running without you.'
}];
const benefits = ['We speak local business, not agency jargon', 'One partner for everything digital — no juggling freelancers', 'Focused on enquiries and customers, not vanity metrics', 'Transparent work, honest timelines, plain-English reports', 'Built for Indian markets, budgets and customer behaviour'];
const auditIncludes = ['Google & Maps visibility check', 'Website and social profile review', 'Competitor comparison in your area', 'A clear 90-day growth action plan'];
function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Frame() {
    return <>
        <div aria-hidden="true" className={`pointer-events-none fixed ${FRAME_INSET} z-[80] border-[3px] border-foreground`} />
        <div aria-hidden="true" className="pointer-events-none fixed left-2.5 top-2.5 z-[81] h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-primary md:left-3.5 md:top-3.5" />
    </>;
}
function Header() {
    const links = [{
        href: '#problem',
        label: 'The Problem'
    }, {
        href: '#services',
        label: 'Services'
    }, {
        href: '/services',
        label: 'Pricing'
    }, {
        href: '#process',
        label: 'Process'
    }, {
        href: '#why-us',
        label: 'Why Us'
    }];
    return <header className="sticky top-2.5 z-[70] border-b-[3px] border-foreground bg-background md:top-3.5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
            <a href="#top" className="flex items-baseline gap-2">
                <span className="stretch-wide text-lg font-black uppercase leading-none tracking-tight md:text-xl">
                    Beyond Horizon
                </span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:inline">
                    Growth Partner
                </span>
            </a>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
                {links.map(l => (
                    l.href.startsWith('/') ? (
                        <Link key={l.href} to={l.href} className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                            {l.label}
                        </Link>
                    ) : (
                        <a key={l.href} href={l.href} className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-primary">
                            {l.label}
                        </a>
                    )
                ))}
            </nav>
            <a href={whatsappLink('Hi Beyond Horizon! I’d like to talk about growing my business online.')} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary active:scale-[0.98]">
                <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                WhatsApp Us
            </a>
        </div>
    </header>;
}
function Hero() {
    const chips = [{
        icon: Search,
        label: 'Google Search',
        pos: 'left-[2%] top-[12%]',
        delay: '0s'
    }, {
        icon: MapPin,
        label: 'Google Maps',
        pos: 'right-[3%] top-[8%]',
        delay: '0.8s'
    }, {
        icon: Instagram,
        label: 'Instagram',
        pos: 'left-[4%] bottom-[22%]',
        delay: '1.6s'
    }, {
        icon: Facebook,
        label: 'Facebook',
        pos: 'right-[5%] bottom-[30%]',
        delay: '2.2s'
    }, {
        icon: MessageCircle,
        label: 'New enquiry on WhatsApp',
        pos: 'right-[10%] bottom-[8%]',
        delay: '1.1s'
    }, {
        icon: Star,
        label: '4.9 rating · 120+ reviews',
        pos: 'left-[12%] top-[52%] hidden md:flex',
        delay: '2.8s'
    }];
    return <section id="top" className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:px-8 md:pt-20">
            <Reveal>
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                    <span className="inline-block h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                    Digital Growth for Local Businesses
                </p>
            </Reveal>
            <Reveal delay={0.08}>
                <h1 className="mt-6 text-[clamp(2.6rem,7.5vw,6.5rem)] font-black uppercase leading-[0.95] tracking-tight">
                    Your Business
                    <br />
                    Deserves to Be{' '}
                    <span className="stretch-wide text-primary">Seen</span>
                    <br />
                    Online.
                </h1>
            </Reveal>
            <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
                    We help local businesses get found on Google, look professional on
                    social media, and turn online attention into real customers.
                </p>
            </Reveal>
            <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a href="#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-primary px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-foreground active:scale-[0.98]">
                        Get Your Free Growth Audit
                        <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                    </a>
                    <a href="#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 border-[3px] border-foreground px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-foreground hover:text-background active:scale-[0.98]">
                        Talk to Us
                    </a>
                </div>
            </Reveal>
            <Reveal delay={0.3}>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Built for local businesses. Focused on real growth.
                </p>
            </Reveal>
        </div>

        {/* Oversized media, cropped past its container, with floating digital cues */}
        <Reveal delay={0.15} y={40}>
            <div className="relative mx-auto max-w-6xl px-4 md:px-8">
                <div className="relative -mx-4 md:-mx-16">
                    <img src={HERO_IMAGE} alt="A local restaurant owner in Mumbai standing proudly at the entrance of his warmly lit eatery" className="h-[52vh] w-full object-cover object-center md:h-[68vh]" loading="eager" />
                    {chips.map(c => <div key={c.label} className={`bh-float absolute ${c.pos} flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2 text-[11px] font-bold uppercase tracking-wide shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-transform duration-200 hover:scale-110`} style={{
                        animationDelay: c.delay
                    }}>
                        <c.icon className="h-4 w-4 text-primary" strokeWidth={2.4} />
                        {c.label}
                    </div>)}
                </div>
            </div>
        </Reveal>

        {/* Signature cropped word */}
        <div aria-hidden="true" className="pointer-events-none relative select-none overflow-hidden">
            <p className="stretch-wide -mb-[0.23em] whitespace-nowrap text-center text-[clamp(4rem,14vw,13rem)] font-black uppercase leading-none tracking-tight text-foreground/[0.07]">
                Horizon Horizon
            </p>
        </div>
    </section>;
}
function Problem() {
    return <section id="problem" className="scroll-mt-24 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                    The Problem
                </p>
                <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight">
                    Great Business.
                    <br />
                    <span className="text-background/40">Weak Online Presence?</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-background/65">
                    You’ve built something worth finding. But online, none of that
                    quality shows. Sound familiar?
                </p>
            </Reveal>
            <div className="mt-12 border-t border-background/15">
                {problems.map((p, i) => <Reveal key={p.title} delay={i * 0.05}>
                    <div className="group flex items-start gap-5 border-b border-background/15 py-6 transition-colors duration-200 hover:bg-background/5 md:items-center md:gap-10">
                        <span className="stretch-wide pt-1 text-sm font-black text-primary md:pt-0 md:text-base">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                            <h3 className="text-lg font-bold uppercase tracking-tight transition-colors duration-200 group-hover:text-primary md:text-2xl">
                                {p.title}
                            </h3>
                            <p className="max-w-md text-sm leading-relaxed text-background/60">
                                {p.desc}
                            </p>
                        </div>
                    </div>
                </Reveal>)}
            </div>
            <Reveal delay={0.1}>
                <p className="mt-10 max-w-2xl text-base leading-relaxed text-background/70">
                    None of this means your business isn’t good enough. It means your
                    growth needs a partner.{' '}
                    <a href="#services" className="font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-background">
                        See how we fix it
                    </a>
                </p>
            </Reveal>
        </div>
    </section>;
}
function Services() {
    return <section id="services" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                    What We Do
                </p>
                <h2 className="mt-4 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight">
                    Everything You Need to{' '}
                    <span className="text-primary">Grow Online.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
                    One team, one plan, everything handled — so you can focus on
                    running your business.
                </p>
            </Reveal>

            <div className="mt-14 space-y-0 border-t-[3px] border-foreground">
                {services.map((s, i) => <Reveal key={s.word} delay={i * 0.06}>
                    <div className="group grid gap-6 border-b-[3px] border-foreground py-10 transition-colors duration-300 hover:bg-foreground md:grid-cols-12 md:gap-8 md:py-12">
                        <div className="md:col-span-5">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                {String(i + 1).padStart(2, '0')} — {s.tag}
                            </span>
                            <h3 className="stretch-wide mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-black uppercase leading-[0.95] tracking-tight transition-colors duration-300 group-hover:text-background">
                                {s.word}
                            </h3>
                            <Link to={s.link} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-background">
                                {s.cta}
                                <ArrowUpRight className="h-4 w-4 text-primary" strokeWidth={2.6} />
                            </Link>
                        </div>
                        <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 md:col-span-7 md:content-center">
                            {s.items.map(item => <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/75 transition-colors duration-300 group-hover:text-background/75">
                                <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                                {item}
                            </li>)}
                        </ul>
                    </div>
                </Reveal>)}
            </div>

            <Reveal delay={0.1}>
                <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Plus, growth engines —
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {growthEngines.map(g => <span key={g.label} className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary">
                            <g.icon className="h-4 w-4" strokeWidth={2.4} />
                            {g.label}
                        </span>)}
                    </div>
                </div>
            </Reveal>
        </div>
    </section>;
}
function Process() {
    return <section id="process" className="scroll-mt-24 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                    How Growth Happens
                </p>
                <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight">
                    A Simple Process.
                    <br />
                    <span className="text-background/40">Built Around You.</span>
                </h2>
            </Reveal>
            <div className="mt-14 grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-5">
                {steps.map((s, i) => <Reveal key={s.n} delay={i * 0.07} className="h-full">
                    <div className="group flex h-full flex-col bg-foreground p-6 transition-colors duration-300 hover:bg-primary md:p-7">
                        <span className="stretch-wide text-4xl font-black text-primary transition-colors duration-300 group-hover:text-primary-foreground md:text-5xl">
                            {s.n}
                        </span>
                        <h3 className="mt-6 text-base font-bold uppercase tracking-tight md:text-lg">
                            {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-background/60 transition-colors duration-300 group-hover:text-primary-foreground/85">
                            {s.desc}
                        </p>
                    </div>
                </Reveal>)}
            </div>
        </div>
    </section>;
}
function AuditCta() {
    return <section id="audit" className="relative scroll-mt-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <div className="grid items-start gap-10 md:grid-cols-2">
                <Reveal>
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] md:text-xs">
                        Free Growth Audit
                    </p>
                    <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight">
                        Not Sure Where to Start? Start Here — Free.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/85">
                        We review your Google presence, social media, website and ads —
                        and show you exactly what’s blocking your growth. No jargon, no
                        obligation.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href="#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-foreground px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-background transition-transform hover:-translate-y-0.5 active:scale-[0.98]">
                            Get Your Free Growth Audit
                            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                        </a>
                        <a href={whatsappLink('Hi Beyond Horizon! I’d like my free growth audit.')} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 border-[3px] border-primary-foreground px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-primary-foreground hover:text-primary active:scale-[0.98]">
                            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                            WhatsApp Us
                        </a>
                    </div>
                </Reveal>
                <Reveal delay={0.12}>
                    <ul className="divide-y divide-primary-foreground/25 border-y-2 border-primary-foreground/40">
                        {auditIncludes.map(item => <li key={item} className="flex items-center gap-3 py-4 text-sm font-semibold uppercase tracking-wide md:text-base">
                            <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
                            {item}
                        </li>)}
                    </ul>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                        Delivered within 48 hours. Plain English. Zero pressure.
                    </p>
                </Reveal>
            </div>
        </div>
    </section>;
}
function WhyUs() {
    return <section id="why-us" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
                <Reveal>
                    <div className="relative">
                        <img src={DENTAL_IMAGE} alt="Dental Reforms clinic team and patient in Thane" className="aspect-[3/4] w-full border-[3px] border-foreground object-cover object-top md:-ml-8 md:w-[calc(100%+2rem)] md:max-w-none" loading="lazy" />
                        <div className="absolute -bottom-5 -right-2 border-2 border-foreground bg-background px-4 py-3 shadow-[4px_4px_0_0_hsl(var(--foreground))] md:right-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.15em]">
                                Dental Reforms · Thane
                            </p>
                            <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-primary">
                                <Star className="h-3.5 w-3.5 fill-primary" />
                                Fully booked appointments
                            </p>
                        </div>
                    </div>
                </Reveal>
                <div>
                    <Reveal>
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                            Why Beyond Horizon
                        </p>
                        <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-tight">
                            A Growth Partner, Not a Distant Agency.
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
                            We work with restaurants, salons, clinics, retail shops and
                            service businesses across India — owners who are great at what
                            they do and simply need to be seen. We treat your business
                            like our own neighbourhood depends on it. Because it does.
                        </p>
                    </Reveal>
                    <ul className="mt-8 space-y-0 border-t-[3px] border-foreground">
                        {benefits.map((b, i) => <Reveal key={b} delay={i * 0.05}>
                            <li className="flex items-center gap-3 border-b border-foreground/15 py-4 text-sm font-semibold md:text-base">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                                    <Check className="h-4 w-4" strokeWidth={3} />
                                </span>
                                {b}
                            </li>
                        </Reveal>)}
                    </ul>
                </div>
            </div>

            {/* Stats band */}
            <Reveal delay={0.1}>
                <div className="mt-20 grid gap-px border-[3px] border-foreground bg-foreground sm:grid-cols-3">
                    {[{
                        value: 120,
                        suffix: '+',
                        label: 'Local businesses grown'
                    }, {
                        value: 3,
                        suffix: 'x',
                        label: 'Average enquiry growth'
                    }, {
                        value: 48,
                        suffix: 'hr',
                        label: 'Free audit turnaround'
                    }].map(s => <div key={s.label} className="bg-background p-8 text-center">
                        <p className="stretch-wide text-5xl font-black tracking-tight text-primary md:text-6xl">
                            <CountUp value={s.value} suffix={s.suffix} />
                        </p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            {s.label}
                        </p>
                    </div>)}
                </div>
            </Reveal>

            {/* Testimonial broadsheet */}
            <Reveal delay={0.1}>
                <figure className="mt-20 border-l-[6px] border-primary pl-6 md:pl-10">
                    <blockquote className="max-w-3xl text-xl font-medium leading-relaxed md:text-2xl">
                        “Earlier, only our regulars knew us. Now people walk in saying
                        they found us on Google or saw our reels. Weekends are full, and
                        I finally stopped worrying about marketing.”
                    </blockquote>
                    <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Ramesh Iyer — Restaurant Owner, Pune
                    </figcaption>
                </figure>
            </Reveal>

            <Reveal delay={0.12}>
                <div className="relative mt-20 -mx-4 md:-mx-16">
                    <img src={SHOP_IMAGE} alt="A small retail storefront in Delhi glowing warmly at dusk with customers passing by" className="h-[40vh] w-full object-cover object-center md:h-[52vh]" loading="lazy" />
                    <p className="absolute bottom-4 left-6 border-2 border-foreground bg-background px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] md:bottom-6 md:left-20">
                        Offline business. Digitally visible.
                    </p>
                </div>
            </Reveal>
        </div>
    </section>;
}
function Contact() {
    const [form, setForm] = useState({
        name: '',
        business: '',
        phone: '',
        email: '',
        type: 'Restaurant / Café',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const update = key => e => setForm({
        ...form,
        [key]: e.target.value
    });

    // Post lead fields that match the Google Sheet headers:
    // Timestamp | Name | Phone | Email | Business | Message | Source
    // (Timestamp is usually set inside the Apps Script.)
    const buildLeadParams = () => {
        const messageWithType = [form.message?.trim(), form.type ? `Business type: ${form.type}` : ''].filter(Boolean).join('\n');
        return new URLSearchParams({
            // lowercase keys (common in doPost e.parameter)
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            business: form.business.trim(),
            message: messageWithType,
            source: 'Beyond Horizon website',
            type: form.type,
            // Title-case keys matching sheet column headers exactly
            Name: form.name.trim(),
            Phone: form.phone.trim(),
            Email: form.email.trim(),
            Business: form.business.trim(),
            Message: messageWithType,
            Source: 'Beyond Horizon website'
        });
    };
    const postLeadToSheet = params => {
        // Google Apps Script web apps don't send CORS headers, so fetch() from the
        // browser fails (status 0). The classic, reliable trick is a real form POST
        // targeting a hidden iframe — a same-document navigation that bypasses CORS
        // entirely (no preflight, no opaque response). We also fire a no-cors GET as
        // a backup for deployments that only expose doGet.
        return new Promise(resolve => {
            let iframe = document.getElementById('bh-sheet-iframe');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'bh-sheet-iframe';
                iframe.name = 'bh-sheet-iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = GOOGLE_FORM_ENDPOINT;
            form.target = 'bh-sheet-iframe';
            form.enctype = 'application/x-www-form-urlencoded';
            params.forEach((value, key) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            document.body.appendChild(form);
            form.submit();
            setTimeout(() => {
                form.remove();
                resolve();
            }, 1200);

            // Backup: no-cors GET for doGet-only deployments.
            fetch(`${GOOGLE_FORM_ENDPOINT}?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors',
                redirect: 'follow'
            }).catch(() => { });
        });
    };
    const submit = async e => {
        e.preventDefault();
        if (isSending) return;
        setIsSending(true);
        const params = buildLeadParams();
        try {
            await postLeadToSheet(params);
            setIsSubmitted(true);
        } catch {
            // Still open WhatsApp so the lead is not lost if the sheet call fails
        } finally {
            const text = ['Hi Beyond Horizon! I’d like my free growth audit.', `Name: ${form.name}`, `Business: ${form.business} (${form.type})`, `Phone: ${form.phone}`, form.email ? `Email: ${form.email}` : '', form.message ? `About my business: ${form.message}` : ''].filter(Boolean).join('\n');
            window.open(whatsappLink(text), '_blank', 'noopener');
            setIsSending(false);
        }
    };
    const inputCls = 'w-full border-b-2 border-foreground/30 bg-transparent py-3 text-base outline-none transition-colors placeholder:text-foreground/35 focus:border-primary';
    return <section id="contact" className="scroll-mt-24 border-t-[3px] border-foreground bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
                <Reveal>
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary md:text-xs">
                        Contact
                    </p>
                    <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[1.02] tracking-tight">
                        Tell Us About Your Business.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70">
                        Fill in the form and we’ll reply on WhatsApp with your free
                        growth audit — usually within 48 hours. Prefer talking? Message
                        us directly.
                    </p>
                    <div className="mt-8 space-y-4">
                        <a href={whatsappLink('Hi Beyond Horizon! I’d like to talk about growing my business online.')} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center gap-2 bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-background transition-colors hover:bg-primary active:scale-[0.98]">
                            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                            Chat on WhatsApp
                        </a>
                        <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><Phone className="h-4 w-4 text-primary" strokeWidth={2.4} />+91 92253 01670 · Mon–Sat, 10am–7pm IST</p>
                    </div>
                </Reveal>

                <Reveal delay={0.12}>
                    <form onSubmit={submit} className="border-[3px] border-foreground p-6 md:p-8" noValidate={false}>
                        <div className="space-y-6">
                            {isSubmitted && <p className="border-2 border-primary bg-primary/10 px-4 py-3 text-sm font-semibold" role="status">Thanks — your details have been received. We’ll be in touch shortly.</p>}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.15em]">
                                    Your Name
                                </label>
                                <input id="name" type="text" required value={form.name} onChange={update('name')} placeholder="e.g. Priya Sharma" className={inputCls} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="business" className="text-xs font-bold uppercase tracking-[0.15em]">
                                    Business Name
                                </label>
                                <input id="business" type="text" required value={form.business} onChange={update('business')} placeholder="e.g. Sharma’s Kitchen" className={inputCls} />
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.15em]">
                                        Phone / WhatsApp
                                    </label>
                                    <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} placeholder="+91 …" className={inputCls} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.15em]">
                                        Email <span className="text-muted-foreground">(optional)</span>
                                    </label>
                                    <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="you@business.com" className={inputCls} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="type" className="text-xs font-bold uppercase tracking-[0.15em]">
                                    Business Type
                                </label>
                                <select id="type" value={form.type} onChange={update('type')} className={`${inputCls} cursor-pointer`}>
                                    <option>Restaurant / Café</option>
                                    <option>Salon / Spa</option>
                                    <option>Clinic / Healthcare</option>
                                    <option>Retail Shop</option>
                                    <option>Other Service Business</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.15em]">
                                    What’s your biggest challenge online? <span className="text-muted-foreground">(optional)</span>
                                </label>
                                <textarea id="message" rows={3} value={form.message} onChange={update('message')} placeholder="e.g. We don’t show up on Google Maps…" className={`${inputCls} resize-none`} />
                            </div>
                            <button type="submit" className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-primary px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-foreground active:scale-[0.98]">
                                Send & Get My Free Audit
                                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                            </button>
                            <p className="text-center text-xs text-muted-foreground">
                                Submitting opens WhatsApp with your details pre-filled. No spam, ever.
                            </p>
                        </div>
                    </form>
                </Reveal>
            </div>
        </div>
    </section>;
}
function Footer() {
    return <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:px-8">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
                <div className="max-w-sm">
                    <p className="stretch-wide text-xl font-black uppercase tracking-tight">
                        Beyond Horizon
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-background/60">
                        Digital growth for local businesses. Get found, look
                        professional, attract attention, win customers — and automate
                        the rest.
                    </p>
                </div>
                <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm" aria-label="Footer">
                    {[['#problem', 'The Problem'], ['/services', 'Services & Pricing'], ['#process', 'Process'], ['#audit', 'Free Audit'], ['#why-us', 'Why Us'], ['#contact', 'Contact']].map(([href, label]) => (
                        href.startsWith('/') ? (
                            <Link key={href} to={href} className="font-semibold text-background/70 transition-colors hover:text-primary">
                                {label}
                            </Link>
                        ) : (
                            <a key={href} href={href} className="font-semibold text-background/70 transition-colors hover:text-primary">
                                {label}
                            </a>
                        )
                    ))}
                </nav>
                <div className="text-sm">
                    <p className="font-bold uppercase tracking-[0.15em] text-background/50">Reach us</p>
                    <a href={whatsappLink('Hi Beyond Horizon!')} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold text-background/80 transition-colors hover:text-primary"><MessageCircle className="h-4 w-4 text-primary" strokeWidth={2.4} />+91 9225301670</a>
                    <p className="mt-2 text-background/60" style={{
                        textAlign: "left"
                    }}><span style={{
                        fontSize: "12px",
                        lineHeight: "normal"
                    }}>growwithbeyondhorizon@gmail.com</span></p>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/15 pt-6 text-xs text-background/50 sm:flex-row sm:items-center">
                <p>© {new Date().getFullYear()} Beyond Horizon. All rights reserved.</p>
                <p className="font-semibold uppercase tracking-[0.2em]">
                    Built for local businesses. Focused on real growth.
                </p>
            </div>
        </div>
        {/* Signature cropped word, recurring */}
        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
            <p className="stretch-wide -mb-[0.22em] whitespace-nowrap text-center text-[clamp(4rem,15vw,14rem)] font-black uppercase leading-none tracking-tight text-background/[0.08]">
                Horizon Horizon
            </p>
        </div>
    </footer>;
}
export default function HomePage() {
    return <>
        <Helmet>
            <title>Beyond Horizon — Digital Growth for Local Businesses</title>
            <meta name="description" content="Beyond Horizon is a local business growth partner for Indian restaurants, salons, clinics and shops. We help you get found on Google, look professional online, and turn attention into real customers. Get your free growth audit." />
        </Helmet>
        <Seo title="Beyond Horizon — Digital Growth for Local Businesses" description="We help Indian local businesses get found on Google, look professional on social media, and turn online attention into real customers." image="/og-image.jpg" siteName="Beyond Horizon" url="https://beyondhorizon.co.in/" />
        <Frame />
        <div className={`min-h-[100dvh] bg-foreground ${FRAME}`}>
            <div className="bg-background">
                <Header />
                <main>
                    <Hero />
                    <Problem />
                    <Services />
                    <Process />
                    <AuditCta />
                    <WhyUs />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    </>;
}