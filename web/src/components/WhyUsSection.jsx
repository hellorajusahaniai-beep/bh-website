import React from 'react';
import { Star, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import dentalImage from '@/assets/dental-reforms.jpg';

const benefits = [
    'We speak local business, not agency jargon',
    'One partner for everything digital — no juggling freelancers',
    'Focused on enquiries and customers, not vanity metrics',
    'Transparent work, honest timelines, plain-English reports',
    'Built for Indian markets, budgets and customer behaviour'
];

/**
 * WhyUs Section:
 * Features "A Growth Partner, Not A Distant Agency" with Dental Reforms Thane and the 120+ / 3x / 48hr Stats Band.
 * Preserved here so it can be restored to HomePage at any time.
 */
export default function WhyUsSection() {
    return (
        <section id="why-us" className="scroll-mt-24 bg-background">
            <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
                <div className="grid items-start gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div className="relative">
                            <img
                                src={dentalImage}
                                alt="Dental Reforms clinic team and patient in Thane"
                                className="aspect-[3/4] w-full border-[3px] border-foreground object-cover object-top md:-ml-8 md:w-[calc(100%+2rem)] md:max-w-none"
                                loading="lazy"
                            />
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
                            {benefits.map((b, i) => (
                                <Reveal key={b} delay={i * 0.05}>
                                    <li className="flex items-center gap-3 border-b border-foreground/15 py-4 text-sm font-semibold md:text-base">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                                            <Check className="h-4 w-4" strokeWidth={3} />
                                        </span>
                                        {b}
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats band */}
                <Reveal delay={0.1}>
                    <div className="mt-20 grid gap-px border-[3px] border-foreground bg-foreground sm:grid-cols-3">
                        {[
                            { value: 120, suffix: '+', label: 'Local businesses grown' },
                            { value: 3, suffix: 'x', label: 'Average enquiry growth' },
                            { value: 48, suffix: 'hr', label: 'Free audit turnaround' }
                        ].map(s => (
                            <div key={s.label} className="bg-background p-8 text-center">
                                <p className="stretch-wide text-5xl font-black tracking-tight text-primary md:text-6xl">
                                    <CountUp value={s.value} suffix={s.suffix} />
                                </p>
                                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
