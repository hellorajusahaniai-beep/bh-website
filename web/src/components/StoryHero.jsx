import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
    MessageCircle, 
    Check, 
    AlertCircle
} from 'lucide-react';
import storefrontImg from '@/assets/hero-storefront-clean.webp';
import customersImg from '@/assets/hero-customers-clean.webp';

export default function StoryHero() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Master scroll progress across 280vh track
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // =========================================================================
    // CHOREOGRAPHED SCROLL TIMING (0.0 to 1.0)
    // 0.00 -> 0.22 : Stage 1 - Offline Reality (The Storefront alone)
    // 0.22 -> 0.40 : Stage 2A - Beam 1 fires from Storefront to Center
    // 0.40 -> 0.58 : Stage 2B - Beyond Horizon Engine activates & illuminates
    // 0.58 -> 0.78 : Stage 3 - Beam 2 fires from Center to Customers, Crowd enters
    // 0.78 -> 0.88 : Stage 4A - Complete Triad Connection Hold
    // 0.88 -> 1.00 : Stage 4B - Final Conversion Cockpit slides up
    // =========================================================================

    // =========================================================================
    // CHOREOGRAPHED SCROLL TIMING (0.0 to 1.0)
    // 1. Start: Storefront alone (Your Business) -> Text 0: Great Offline Business
    // 2. ~0.28: Beam 1 connects & Beyond Horizon logo pops up -> Text 1: The Digital Bridge
    // 3. ~0.56: Beam 2 connects & Your Customers pops up -> Text 2: The Result
    // 4. ~0.82 (Desktop only): Bottom card pops up -> Text 3: The Formula That Never Fails
    // =========================================================================

    // Stage 01: Offline Reality (0.00 -> 0.28)
    const text0Opacity = useTransform(scrollYProgress, [0, 0.24, 0.28], [1, 1, 0]);
    const text0Y = useTransform(scrollYProgress, [0, 0.24, 0.28], [0, 0, -14]);
    const text0Pointer = useTransform(scrollYProgress, (p) => (p <= 0.27 ? 'auto' : 'none'));

    // Laser Beam 1 (Storefront -> Logo)
    const beam1Scale = useTransform(scrollYProgress, [0.14, 0.28], [0, 1]);
    const beam1Opacity = useTransform(scrollYProgress, [0.14, 0.18], [0, 1]);

    // Beyond Horizon Logo Center (Pops up when Beam 1 connects)
    const logoOpacity = useTransform(scrollYProgress, [0.28, 0.34], [0, 1]);
    const logoScale = useTransform(scrollYProgress, [0.28, 0.34], [0.86, 1]);

    // Storefront Status Badge (Transforms from Unranked Warning to #1 Locked)
    const warningBadgeOpacity = useTransform(scrollYProgress, [0.18, 0.28], [1, 0]);
    const successBadgeOpacity = useTransform(scrollYProgress, [0.30, 0.38], [0, 1]);

    // Stage 02: The Digital Bridge (Enters exactly as Beyond Horizon logo pops up)
    const text1Opacity = useTransform(scrollYProgress, [0.28, 0.34, 0.52, 0.56], [0, 1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0.28, 0.34, 0.52, 0.56], [14, 0, 0, -14]);
    const text1Pointer = useTransform(scrollYProgress, (p) => (p >= 0.28 && p <= 0.55 ? 'auto' : 'none'));

    // Laser Beam 2 (Logo -> Customers)
    const beam2Scale = useTransform(scrollYProgress, [0.42, 0.56], [0, 1]);
    const beam2Opacity = useTransform(scrollYProgress, [0.42, 0.46], [0, 1]);

    // Customers Group (Pops up when Beam 2 connects)
    const customersOpacity = useTransform(scrollYProgress, [0.56, 0.64], [0, 1]);
    const customersX = useTransform(scrollYProgress, [0.56, 0.64], [isMobile ? 0 : 50, 0]);

    // Floating Customer Lead Notification Popups (Stage 3 & 4)
    const leadPopupOpacity = useTransform(scrollYProgress, [0.64, 0.72], [0, 1]);
    const leadPopupY = useTransform(scrollYProgress, [0.64, 0.72], [16, 0]);

    // Stage 03: The Influx / The Result (Enters as Customers pop up and stays locked)
    const text2Opacity = useTransform(scrollYProgress, [0.56, 0.62, 1.00], [0, 1, 1]);
    const text2Y = useTransform(scrollYProgress, [0.56, 0.62, 1.00], [14, 0, 0]);
    const text2Pointer = useTransform(scrollYProgress, (p) => (p >= 0.56 ? 'auto' : 'none'));

    return (
        <section
            ref={containerRef}
            id="top"
            className="relative bg-[#FAFAFA] text-[#0A0A0A] h-[240vh]"
            style={{ contain: 'paint' }}
        >
            {/* Sticky Viewport Canvas - locked right below sticky navbar so headline never disappears */}
            <div className="sticky top-[72px] md:top-[71px] h-[calc(100dvh-72px)] md:h-[calc(100dvh-71px)] w-full overflow-hidden flex flex-col justify-between bg-[#FAFAFA]">
                
                {/* Subtle Clean Negative Space Background Grid */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
                />

                {/* =========================================================================
                    DYNAMIC NARRATIVE HEADLINE BANNER (Continuous Scroll-Driven Transitions)
                   ========================================================================= */}
                <div className="relative z-30 px-4 sm:px-6 lg:px-10 pt-3 pb-1 sm:pt-3.5 sm:pb-1 md:pt-4 md:pb-1 text-center select-none min-h-[76px] sm:min-h-[84px] grid grid-cols-1 grid-rows-1 [&>*]:col-start-1 [&>*]:row-start-1 items-center justify-center">
                    
                    {/* Stage 01: Offline Reality */}
                    <motion.div
                        style={{ opacity: text0Opacity, y: text0Y, pointerEvents: text0Pointer }}
                        className="flex flex-col items-center justify-center"
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                            GREAT BUSINESS.{' '}
                            <span className="text-primary">NOT ENOUGH VISIBILITY.</span>
                        </h1>
                        <p className="mt-1 text-[11px] sm:text-xs md:text-sm font-semibold text-foreground/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
                            Your customers are already searching on Google & Instagram. Are they finding you?
                        </p>
                    </motion.div>

                    {/* Stage 02: Digital Bridge */}
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y, pointerEvents: text1Pointer }}
                        className="flex flex-col items-center justify-center"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                            WE CONNECT{' '}
                            <span className="text-primary">THE PIECES.</span>
                        </h2>
                        <p className="mt-1 text-[11px] sm:text-xs md:text-sm font-semibold text-foreground/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
                            Your Business ➔ Google Maps ➔ Website ➔ Instagram ➔ WhatsApp ➔ Paying Customers.
                        </p>
                    </motion.div>

                    {/* Stage 03: The Influx */}
                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y, pointerEvents: text2Pointer }}
                        className="flex flex-col items-center justify-center"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                            ONE LOCAL{' '}
                            <span className="text-emerald-600">GROWTH SYSTEM.</span>
                        </h2>
                        <p className="mt-1 text-[11px] sm:text-xs md:text-sm font-semibold text-foreground/80 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
                            Get Found • Look Professional • Get Attention • Get Customers • Automate & Grow.
                        </p>
                    </motion.div>

                </div>

                {/* =========================================================================
                    MAIN CINEMATIC ARENA (Tri-Part Connected Story)
                   ========================================================================= */}
                <div
                    className="relative flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-center my-auto"
                >
                    
                    {isMobile ? (
                        /* ================= MOBILE VERTICAL CONNECTOR CANVAS ================= */
                        <div className="relative w-full flex flex-col items-center justify-center py-1 z-20">
                            
                            {/* 1. STOREFRONT (TOP) */}
                            <div className="relative w-full max-w-[250px] flex flex-col items-center">
                                <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                                    <span className="h-2 w-2 bg-primary inline-block" />
                                    <span>Your Business</span>
                                </div>
                                <div className="relative w-full aspect-[1.15/1] overflow-hidden border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0_0_#0A0A0A]">
                                    <img
                                        src={storefrontImg}
                                        alt="Modern storefront facade representing your local offline business"
                                        className="w-full h-full object-cover object-center"
                                        loading="eager"
                                    />
                                    {/* Warning badge at start */}
                                    <motion.div
                                        style={{ opacity: warningBadgeOpacity }}
                                        className="absolute bottom-2 left-2 right-2 border border-amber-600/40 bg-amber-50/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1"
                                    >
                                        <AlertCircle className="h-3 w-3 text-amber-600 shrink-0" />
                                        <span className="truncate">Digitally Invisible</span>
                                    </motion.div>
                                    {/* Success badge after transformation */}
                                    <motion.div
                                        style={{ opacity: successBadgeOpacity }}
                                        className="absolute bottom-2 left-2 right-2 border border-emerald-600/40 bg-emerald-50/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1"
                                    >
                                        <Check className="h-3 w-3 text-emerald-600 shrink-0" strokeWidth={3} />
                                        <span className="truncate">Digitally Visible</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Vertical Laser Beam 1 (Storefront -> Logo) */}
                            <div className="relative h-6 w-[3px] bg-foreground/15 overflow-hidden my-0.5">
                                <motion.div
                                    style={{ scaleY: beam1Scale, opacity: beam1Opacity }}
                                    className="origin-top w-full h-full bg-gradient-to-b from-[#0A0A0A] to-primary shadow-[0_0_8px_#C8102E]"
                                />
                            </div>

                            {/* 2. BEYOND HORIZON LOGO (CENTER) */}
                            <motion.div
                                style={{ opacity: logoOpacity, scale: logoScale }}
                                className="relative py-1 flex flex-col items-center text-center select-none"
                            >
                                <span className="stretch-wide font-black uppercase text-lg leading-none tracking-tight text-[#0A0A0A]">
                                    BEYOND
                                </span>
                                <div className="my-1 h-[2.5px] w-10 bg-primary shadow-[0_0_8px_#C8102E]" />
                                <span className="stretch-wide font-black uppercase text-lg leading-none tracking-tight text-[#0A0A0A]">
                                    HORIZON
                                </span>
                                <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.25em] text-primary">
                                    Growth Partner
                                </span>
                            </motion.div>

                            {/* Vertical Laser Beam 2 (Logo -> Customers) */}
                            <div className="relative h-6 w-[3px] bg-foreground/15 overflow-hidden my-0.5">
                                <motion.div
                                    style={{ scaleY: beam2Scale, opacity: beam2Opacity }}
                                    className="origin-top w-full h-full bg-gradient-to-b from-primary to-emerald-600 shadow-[0_0_8px_#10B981]"
                                />
                            </div>

                            {/* 3. CUSTOMERS (BOTTOM) */}
                            <motion.div
                                style={{ opacity: customersOpacity }}
                                className="relative w-full max-w-[250px] flex flex-col items-center"
                            >
                                <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                                    <span>Your Customers</span>
                                    <span className="h-2 w-2 bg-emerald-600 inline-block" />
                                </div>
                                <div className="relative w-full aspect-[1.15/1] overflow-hidden border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0_0_#0A0A0A]">
                                    <img
                                        src={customersImg}
                                        alt="Active happy customers walking in with shopping bags"
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    ) : (
                        /* ================= DESKTOP HORIZONTAL LASER PIPELINE ================= */
                        <div className="relative w-full flex items-center justify-between z-20">
                            
                            {/* =========================================
                                LEFT NODE: STOREFRONT (~34% width)
                               ========================================= */}
                            <div className="w-[34%] max-w-[325px] xl:max-w-[355px] relative flex flex-col items-start justify-center z-20">
                                
                                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                                    <span className="inline-block h-2 w-2 bg-primary" />
                                    <span>Your Business</span>
                                </div>

                                <div className="relative w-full aspect-[1.24/1] border-[3px] border-[#0A0A0A] bg-white shadow-[6px_6px_0_0_#0A0A0A] overflow-hidden group">
                                    <img
                                        src={storefrontImg}
                                        alt="Modern business storefront facade with clean blank architectural signage representing your business"
                                        className="w-full h-full object-cover object-center select-none pointer-events-none"
                                        loading="eager"
                                    />

                                    {/* Warning Badge at Stage 1 */}
                                    <motion.div
                                        style={{ opacity: warningBadgeOpacity }}
                                        className="absolute top-2.5 left-2.5 border border-amber-600/40 bg-amber-50/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-900 shadow-sm flex items-center gap-1.5"
                                    >
                                        <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                                        <span>Digitally Invisible</span>
                                    </motion.div>

                                    {/* Success Badge after Horizon Bridge activates */}
                                    <motion.div
                                        style={{ opacity: successBadgeOpacity }}
                                        className="absolute top-2.5 left-2.5 border-2 border-emerald-600 bg-emerald-50/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-900 shadow-sm flex items-center gap-1.5"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                                        <span>Digitally Visible</span>
                                    </motion.div>

                                    {/* Laser Connection Port (Right edge of storefront) */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white shadow-[0_0_12px_#C8102E] z-30" />
                                </div>

                            </div>

                            {/* =========================================
                                CENTER PIPELINE: BRIDGE 1 + BEYOND HORIZON LOGO + BRIDGE 2
                                Shifted to align dead-center with the image pointers on both sides
                               ========================================= */}
                            <div className="flex-1 flex items-center mx-2 sm:mx-4 translate-y-[12px] z-20">

                                {/* HORIZON BRIDGE 1 (Storefront -> Logo) */}
                                <div className="relative flex-1 flex items-center overflow-visible h-6">
                                    {/* Base Track Line */}
                                    <div className="w-full h-[2px] bg-foreground/15" />
                                    
                                    {/* Active Laser Beam */}
                                    <motion.div
                                        style={{ scaleX: beam1Scale, opacity: beam1Opacity }}
                                        className="origin-left absolute inset-x-0 h-[3px] bg-gradient-to-r from-[#0A0A0A] via-primary to-primary shadow-[0_0_12px_rgba(200,16,46,0.9)]"
                                    />
                                </div>

                                {/* CENTER NODE: BEYOND HORIZON LOGO */}
                                <motion.div
                                    style={{ opacity: logoOpacity, scale: logoScale }}
                                    className="relative shrink-0 px-3.5 py-2.5 sm:px-4 sm:py-3 border-[2.5px] border-[#0A0A0A] bg-background/95 backdrop-blur-md shadow-[6px_6px_0_0_#C8102E] flex flex-col items-center justify-center text-center select-none z-30 mx-2 sm:mx-3"
                                >
                                    {/* Left connection port for incoming red laser */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white shadow-[0_0_10px_#C8102E] z-30" />

                                    <span className="stretch-wide font-black uppercase text-xl lg:text-2xl tracking-tight leading-[0.9] text-[#0A0A0A]">
                                        BEYOND
                                    </span>
                                    
                                    {/* Signature Red Horizon Beam Bar */}
                                    <div className="my-1.5 h-[3px] w-12 lg:w-14 bg-primary shadow-[0_0_12px_rgba(200,16,46,0.8)]" />

                                    <span className="stretch-wide font-black uppercase text-xl lg:text-2xl tracking-tight leading-[0.9] text-[#0A0A0A]">
                                        HORIZON
                                    </span>

                                    <span className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.3em] text-primary">
                                        Growth Partner
                                    </span>

                                    {/* Micro Pillar Tags */}
                                    <div className="mt-1.5 pt-1.5 border-t border-foreground/10 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                                        <span>Maps</span>
                                        <span>·</span>
                                        <span>Web</span>
                                        <span>·</span>
                                        <span>Leads</span>
                                    </div>

                                    {/* Right connection port for outgoing green laser */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_10px_#10B981] z-30" />
                                </motion.div>

                                {/* HORIZON BRIDGE 2 (Logo -> Customers) */}
                                <div className="relative flex-1 flex items-center overflow-visible h-6">
                                    {/* Base Track Line */}
                                    <div className="w-full h-[2px] bg-foreground/15" />
                                    
                                    {/* Active Laser Beam */}
                                    <motion.div
                                        style={{ scaleX: beam2Scale, opacity: beam2Opacity }}
                                        className="origin-left absolute inset-x-0 h-[3px] bg-gradient-to-r from-primary via-emerald-500 to-emerald-600 shadow-[0_0_12px_rgba(16,185,129,0.9)]"
                                    />
                                </div>

                            </div>

                            {/* =========================================
                                RIGHT NODE: CUSTOMERS (~34% width)
                               ========================================= */}
                            <motion.div
                                style={{ opacity: customersOpacity, x: customersX }}
                                className="w-[34%] max-w-[325px] xl:max-w-[355px] relative flex flex-col items-end justify-center z-20"
                            >
                                <div className="mb-2 flex items-center justify-end w-full gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                                    <span>Your Customers</span>
                                    <span className="inline-block h-2 w-2 bg-emerald-600" />
                                </div>

                                <div className="relative w-full aspect-[1.24/1] border-[3px] border-[#0A0A0A] bg-white shadow-[6px_6px_0_0_#0A0A0A] overflow-hidden">
                                    <img
                                        src={customersImg}
                                        alt="Active customers carrying shopping bags walking enthusiastically towards the business"
                                        className="w-full h-full object-cover object-center select-none pointer-events-none"
                                        loading="lazy"
                                    />

                                    {/* Laser Connection Port (Left edge of customer box) */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_12px_#10B981] z-30" />

                                    {/* Live Customer Signals Popup - Anchored top-right inside card, zero overlap with bottom cockpit */}
                                    <motion.div
                                        style={{ opacity: leadPopupOpacity, y: leadPopupY }}
                                        className="absolute top-2.5 right-2.5 border-2 border-[#0A0A0A] bg-background/95 backdrop-blur-sm px-2.5 py-1.5 shadow-[3px_3px_0_0_#0A0A0A] z-40 max-w-[215px] sm:max-w-xs flex items-center gap-2"
                                    >
                                        <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600 shrink-0" />
                                        <div className="text-left">
                                            <p className="text-[9.5px] font-bold uppercase tracking-wider text-foreground leading-tight">
                                                “Visiting your store right now!”
                                            </p>
                                            <p className="text-[8px] text-foreground/60 font-semibold uppercase tracking-wider">
                                                New Customer Converted · Just now
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                            </motion.div>

                        </div>
                    )}

                </div>

                {/* Bottom Signature Watermark - Clean architectural element, sits cleanly below the cards on desktop, hidden on phone */}
                <div aria-hidden="true" className="hidden md:block relative z-10 w-full select-none pointer-events-none overflow-hidden pt-1 pb-2 sm:pb-3 text-center shrink-0">
                    <p className="stretch-wide whitespace-nowrap text-center text-[clamp(2.4rem,7vw,4.8rem)] font-black uppercase leading-none tracking-tight text-[#0A0A0A]/[0.08]">
                        Beyond Horizon
                    </p>
                </div>

            </div>
        </section>
    );
}
