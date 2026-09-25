import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import gcsImage from '@/assets/global-computer-solution.png';
import dargarCommImage from '@/assets/dargar-communication.png';

/**
 * Real Client Section:
 * Features client testimonial and storefront cards for Global Computer Solution (Kalyan West)
 * and Dargar Communication (Kalyan).
 * Can be re-enabled in HomePage.jsx at any time.
 */
export default function RealClientSection() {
    return (
        <>
            {/* Real Client Case Study & Testimonial */}
            <Reveal delay={0.1}>
                <figure className="mt-20 border-l-[6px] border-primary pl-6 md:pl-10">
                    <blockquote className="max-w-3xl text-xl font-medium leading-relaxed md:text-2xl">
                        “Earlier, only customers from our immediate lane knew we existed.
                        After Beyond Horizon set up our Google Business Profile, local SEO,
                        and digital presence, customers across Kalyan and neighbouring areas
                        find our store directly for laptop repairs, custom PC builds, and CCTV setups.
                        Enquiries have more than doubled.”
                    </blockquote>
                    <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="text-foreground">Global Computer Solution</span>
                        <span>—</span>
                        <span className="text-primary font-extrabold">IT Sales & Services, Kalyan West</span>
                    </figcaption>
                </figure>
            </Reveal>

            {/* Real Client Showcase Cards */}
            <Reveal delay={0.12}>
                <div className="mt-14">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                            Real Client Showcase · Kalyan
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                            Offline Businesses. Digitally Visible.
                        </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                        {/* Client 1: Global Computer Solution */}
                        <div className="group border-[3px] border-foreground bg-background p-4 shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all duration-300 hover:shadow-[8px_8px_0_0_hsl(var(--foreground))] md:col-span-7">
                            <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-foreground bg-black">
                                <img
                                    src={gcsImage}
                                    alt="Global Computer Solution illuminated storefront board in Kalyan West"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-2 left-2 border border-foreground bg-background/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-sm">
                                    Storefront Signboard
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-tight text-foreground">
                                        Global Computer Solution
                                    </h4>
                                    <p className="text-xs font-semibold text-muted-foreground">
                                        Kongaon, Kalyan West · CCTV, Laptops & PC Sales
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 self-start sm:self-auto border border-foreground bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                                    <Check className="h-3 w-3" strokeWidth={3} />
                                    Google Verified
                                </span>
                            </div>
                        </div>

                        {/* Client 2: Dargar Communication */}
                        <div className="group border-[3px] border-foreground bg-background p-4 shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all duration-300 hover:shadow-[8px_8px_0_0_hsl(var(--foreground))] md:col-span-5">
                            <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-foreground bg-black">
                                <img
                                    src={dargarCommImage}
                                    alt="Dargar Communication retail mobile storefront in Kalyan"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-2 left-2 border border-foreground bg-background/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-sm">
                                    Retail Storefront
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-tight text-foreground">
                                        Dargar Communication
                                    </h4>
                                    <p className="text-xs font-semibold text-muted-foreground">
                                        Kalyan · Mobile & Electronics Retail
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 self-start sm:self-auto border border-foreground bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                                    Footfall Growth
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </>
    );
}
