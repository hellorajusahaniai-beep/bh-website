import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, Phone, CheckCircle, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    category: 'Retail / Store',
    phone: '',
    location: 'Kalyan West',
    service: initialService || 'Growth Strategy Plan (₹20,000/mo)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare formatted WhatsApp message
    const message = `*🚀 New Growth Strategy Inquiry for Beyond Horizon*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Business:* ${encodeURIComponent(formData.businessName)} (${encodeURIComponent(formData.category)})%0A` +
      `*Phone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Location:* ${encodeURIComponent(formData.location)}%0A` +
      `*Service/Plan:* ${encodeURIComponent(formData.service)}%0A` +
      `*Requirements/Notes:* ${encodeURIComponent(formData.notes || 'Looking for 90-day growth roadmap')}`;

    // Open WhatsApp directly
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-ink-2 border border-gold/40 rounded-lg p-6 sm:p-8 text-paper shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-lt hover:text-gold transition-colors p-1.5 rounded-full hover:bg-ink border border-line"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold text-gold flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-paper mb-2">
              Inquiry Dispatched!
            </h3>
            <p className="text-sm text-muted-lt max-w-md mx-auto mb-6">
              Thank you, <strong className="text-paper">{formData.name}</strong>. Raju Sahani (MrCool) will review your business profile and contact you within 2 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-gold px-6 py-3 text-xs font-bold uppercase tracking-wider"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gold uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                DIRECT STRATEGY CONSULTATION
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-paper">
                Book a 1-on-1 Strategy Call
              </h3>
              <p className="text-xs sm:text-sm text-muted-lt mt-1">
                One team, one point of contact. Let's scale your Kalyan business.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Raju Sahani"
                  className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Royal Dental Care"
                    className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                    Business Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Salon & Spa">Salon & Spa</option>
                    <option value="Clinic & Healthcare">Clinic & Healthcare</option>
                    <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                    <option value="Retail & Boutique">Retail & Boutique</option>
                    <option value="Real Estate / Builder">Real Estate / Builder</option>
                    <option value="Education / Coaching">Education / Coaching</option>
                    <option value="Other Business">Other Business</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                    Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Khadakpada, Kalyan West"
                    className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                  Interested Service or Plan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-ink border border-line rounded px-3.5 py-2.5 text-sm text-paper focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="GROWTH Plan (₹20,000/mo) — Most Popular">GROWTH Plan (₹20,000/mo) — Most Popular</option>
                  <option value="STARTER Plan (₹10,000/mo)">STARTER Plan (₹10,000/mo)</option>
                  <option value="SCALE Plan (₹30,000/mo)">SCALE Plan (₹30,000/mo)</option>
                  <option value="Meta & Google Ads Campaign">Meta & Google Ads Campaign</option>
                  <option value="AI Video Creation & Reels Pack">AI Video Creation & Reels Pack</option>
                  <option value="WhatsApp Automation & Chatbots">WhatsApp Automation & Chatbots</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Complete Custom Consultation">Complete Custom Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-lt mb-1.5">
                  Your Current Challenge or Monthly Target (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need 40+ new clinic appointments a month in Kalyan..."
                  className="w-full bg-ink border border-line rounded px-3.5 py-2 text-sm text-paper focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-muted-lt">
                🔒 Direct line to Raju Sahani · No spam · Instant reply within 2 hours
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
