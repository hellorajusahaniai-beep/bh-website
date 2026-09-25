import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header shadow-2xl py-3' : 'bg-ink/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded bg-black/60 border border-line flex items-center justify-center p-0.5 overflow-hidden transition-transform group-hover:scale-105 group-hover:border-gold/50 shadow-md">
            <img
              src="/logo.png"
              alt="Beyond Horizon Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-white text-base tracking-tight leading-none group-hover:text-gold transition-colors">
              BEYOND HORIZON
            </span>
            <span className="font-mono text-[10px] text-muted-lt tracking-wider mt-0.5">
              MRCOOL MEDIA AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13.5px] font-medium text-muted-lt hover:text-gold transition-colors tracking-wide relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="hidden lg:flex items-center gap-2 text-xs font-mono text-muted-lt hover:text-gold transition-colors py-2 px-3 rounded border border-line"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>KALYAN WEST</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-paper p-1.5 rounded hover:bg-ink-2 transition-colors border border-line"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-t border-line px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-paper hover:text-gold py-2 border-b border-line/40 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-lt" />
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-gold w-full py-3 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Book a Call Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
