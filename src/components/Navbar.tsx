import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, Wine, Clock, MapPin, Sparkles, ChevronLeft, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenReservation: () => void;
  onOpenMenuModal: () => void;
  onOpenGalleryModal: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  onOpenReservation,
  onOpenMenuModal,
  onOpenGalleryModal,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection to make navbar compact or background solid
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'הסיפור שלנו' },
    { id: 'menu', label: 'תפריט' },
    { id: 'gallery', label: 'גלריית תמונות' },
    { id: 'location', label: 'שעות ומיקום' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    if (id === 'reservation') {
      window.open('https://ontopo.com/he/il/page/22025249?date=20260511', '_blank', 'noopener,noreferrer');
      return;
    }
    if (id === 'menu') {
      onOpenMenuModal();
      return;
    }
    if (id === 'gallery' && window.innerWidth < 768) {
      onOpenGalleryModal();
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#faf6f0]/95 shadow-md py-3 backdrop-blur-md border-b border-[#e9dfd0]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile hamburger menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'text-brand-brown hover:text-brand-wine hover:bg-brand-warm-gold/10' 
                  : 'text-white hover:text-brand-warm-gold hover:bg-white/10'
              }`}
              aria-label="תפריט ניווט"
              id="menu-toggle-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo & Subtitle */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex flex-col items-center cursor-pointer select-none text-right"
          >
            <h1 className={`font-display text-2xl sm:text-3xl font-bold tracking-wider transition-colors flex items-center gap-2 ${
              isScrolled ? 'text-brand-brown hover:text-brand-wine' : 'text-white hover:text-brand-warm-gold'
            }`}>
              <span>קפה אלה</span>
            </h1>
            <span className={`font-serif text-[10px] sm:text-xs tracking-[0.1em] font-semibold -mt-1 uppercase transition-colors ${
              isScrolled ? 'text-brand-warm-gold' : 'text-[#f5ebd9] drop-shadow-sm'
            }`}>
              אלה פטיסרי ויין
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-12 lg:space-x-16">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans font-medium text-sm transition-all relative py-2 cursor-pointer ${
                  activeSection === link.id
                    ? isScrolled ? 'text-brand-wine font-semibold' : 'text-brand-warm-gold font-semibold'
                    : isScrolled ? 'text-brand-brown/80 hover:text-brand-wine' : 'text-white hover:text-[#eedfc9]'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? 'bg-brand-wine' : 'bg-brand-warm-gold'
                    }`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call To Actions: Reserve Table */}
          <div className="flex items-center gap-4">
            {/* Quick Reservation Button */}
            <button
              onClick={() => handleLinkClick('reservation')}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-wine rounded-full shadow-lg shadow-brand-wine/20 hover:bg-brand-wine/90 hover:shadow-xl hover:shadow-brand-wine/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              id="quick-reserve-btn"
            >
              הזמנת שולחן
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-[#faf6f0] shadow-2xl z-50 md:hidden p-6 flex flex-col justify-between border-l border-[#e9dfd0]"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e9dfd0]">
                  <div className="text-right">
                    <h2 className="font-display text-xl font-bold text-brand-brown">קפה אלה</h2>
                    <span className="font-serif text-[10px] tracking-widest text-brand-warm-gold font-bold">
                      אלה פטיסרי ויין
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-brand-warm-gold/10 text-brand-brown"
                    id="close-drawer-btn"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between p-3 rounded-xl text-right font-medium text-base transition-all ${
                        activeSection === link.id
                          ? 'bg-brand-wine/5 text-brand-wine font-semibold'
                          : 'text-brand-brown hover:bg-brand-warm-gold/5'
                      }`}
                      id={`drawer-link-${link.id}`}
                    >
                      <span>{link.label}</span>
                      <ChevronLeft size={16} className="text-brand-warm-gold" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Footer */}
              <div className="pt-6 border-t border-[#e9dfd0] space-y-4">
                <div className="flex items-center gap-3 text-xs text-brand-brown/70">
                  <Clock size={14} className="text-brand-warm-gold" />
                  <span>כשר • א׳-ה׳ 8:00-23:00 | ו׳ 8:00-14:30</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-brown/70">
                  <MapPin size={14} className="text-brand-warm-gold" />
                  <span>עמק 2, באר יעקב</span>
                </div>
                
                <a
                  href="tel:03-1234567" // Placeholder or friendly prompt
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-brand-warm-gold text-brand-wine font-medium text-sm hover:bg-brand-warm-gold/5 transition-all text-center"
                >
                  <Phone size={14} />
                  <span>חיוג טלפוני לבירורים</span>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
