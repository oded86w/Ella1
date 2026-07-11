/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Wine, Sparkles, MapPin, Phone, Instagram, Clock, Star, Heart, ScrollText } from 'lucide-react';
import Navbar from './components/Navbar';
import AmbientBackground from './components/AmbientBackground';
import { getAssetUrl } from './utils/assets';

import GallerySection from './components/GallerySection';
import LocationHours from './components/LocationHours';
import InstagramFeed from './components/InstagramFeed';
import MenuImagesModal from './components/MenuImagesModal';
import MobileGalleryModal from './components/MobileGalleryModal';

const CAROUSEL_RAW_IMAGES = [
  './pic/2.jpg',
  './pic/1.jpg',
  './pic/3.jpg',
  './pic/4.jpg',
  './pic/5.jpg',
  './pic/6.jpg',
  './pic/7.jpg',
  './pic/night/1.jpg',
  './pic/night/2.jpg',
  './pic/night/3.jpg',
  './pic/night/4.jpg'
];

export default function App() {
  const carouselImages = React.useMemo(() => {
    return CAROUSEL_RAW_IMAGES.map(getAssetUrl);
  }, []);

  const [ambientActive, setAmbientActive] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [menuImagesModalOpen, setMenuImagesModalOpen] = useState<boolean>(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState<boolean>(false);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages]);

  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    activeMenu: 'morning' | 'evening' | 'closed';
    message: string;
  }>({ isOpen: false, activeMenu: 'closed', message: '' });

  // Compute live cafe status based on actual time
  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeDecimal = hour + minute / 60;

      // Saturday = Closed (Kosher)
      if (day === 6) {
        setCurrentStatus({
          isOpen: false,
          activeMenu: 'closed',
          message: 'סגור כעת לכבוד שבת • נפתח בראשון ב-08:00',
        });
        return;
      }

      // Friday: 8:00 - 14:30 (Morning only)
      if (day === 5) {
        if (timeDecimal >= 8 && timeDecimal < 14.5) {
          setCurrentStatus({
            isOpen: true,
            activeMenu: 'morning',
            message: 'פתוח כעת! בראנץ׳ ומאפים חמים ליום שישי 🥐',
          });
        } else {
          setCurrentStatus({
            isOpen: false,
            activeMenu: 'closed',
            message: 'סגור כעת • שבת שלום 🍷',
          });
        }
        return;
      }

      // Sunday - Thursday: 8:00 - 23:00
      if (timeDecimal >= 8 && timeDecimal < 23) {
        if (timeDecimal >= 17) {
          setCurrentStatus({
            isOpen: true,
            activeMenu: 'evening',
            message: 'פתוח כעת! בר יין ואווירת ערב קסומה 🍷✨',
          });
        } else {
          setCurrentStatus({
            isOpen: true,
            activeMenu: 'morning',
            message: 'פתוח כעת! פטיסירי, קפה ובראנץ׳ של בוקר 🥐☕️',
          });
        }
      } else {
        setCurrentStatus({
          isOpen: false,
          activeMenu: 'closed',
          message: 'סגור כעת • נפתח מחר בשעה 08:00',
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-brand-brown font-sans overflow-x-hidden selection:bg-brand-warm-gold/30 selection:text-brand-wine">
      
      {/* Premium ambient particle background simulation */}
      <AmbientBackground isActive={ambientActive} />

      {/* Elegant Header & Responsive Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenReservation={() => {
          window.open('https://ontopo.com/he/il/page/22025249?date=20260511', '_blank', 'noopener,noreferrer');
        }}
        onOpenMenuModal={() => setMenuImagesModalOpen(true)}
        onOpenGalleryModal={() => setMobileGalleryOpen(true)}
      />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Full screen layout backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('./pic/ella.jpg')}
            alt="קפה אלה - אווירה רומנטית"
            fetchPriority="high"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf6f0] via-transparent to-black/40" />
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-xl">
              <span className={`w-2.5 h-2.5 rounded-full ${currentStatus.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span>{currentStatus.message}</span>
            </div>

            {/* Display Typography Title */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider text-white">
              קפה אלה
            </h1>
            
            {/* Elegant Subheadings */}
            <div className="flex flex-col items-center">
              <p className="font-serif text-lg sm:text-2xl lg:text-3xl text-brand-warm-gold tracking-widest font-semibold uppercase">
                Patisserie • Bakery • Wine Bar
              </p>
              <div className="w-16 h-0.5 bg-brand-warm-gold my-4 rounded-full" />
              <p className="text-white/90 text-sm sm:text-lg max-w-xl leading-relaxed font-sans font-light">
                בבוקר פטיסירי צרפתי בעבודת יד עם מאפים חמים וחמאת משכר, ובערב בר יין אינטימי עם תפריט שף וערבי קונספט.
              </p>
            </div>

          </motion.div>
        </div>

      </section>

      {/* STORY / ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#faf6f0] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <span className="font-serif text-sm tracking-widest text-brand-warm-gold font-bold uppercase block mb-2">
                הסיפור של קפה אלה • Ella Patisserie & Wine
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown">
                מבוקר פריזאי חמים לבר יין רומנטי
              </h2>
              <div className="w-16 h-1 bg-brand-wine rounded-full" />
              
              <div className="space-y-4 text-brand-brown/80 text-sm sm:text-base leading-relaxed">
                <p>
                  קפה אלה נולד מתוך תשוקה אמיתית לאפייה מסורתית צרפתית ותרבות אירוח חמה. המקום שלנו בבאר יעקב עוצב בקפידה רבה כדי להעניק לכם מפלט של שלווה, איכות ואסתטיקה מרהיבה בכל שעה ביום.
                </p>
                <p>
                  <strong className="text-brand-wine">בחלקו הראשון של היום,</strong> אנחנו פטיסירי ובייקרי תוסס. ריח החמאה הלוהט שעולה מתנורי האבן שלנו מדי בוקר יקבל את פניכם לצד קפה ספשלטי מובחר. כל מאפה שמרים, קרואסון, ודניש מיוצר בעבודת יד מוקפדת מחומרי הגלם הטובים בעולם.
                </p>
                <p>
                  <strong className="text-brand-wine">עם רדת החשכה (החל מ-17:00),</strong> האורות מעומעמים, הנרות נדלקים והמוזיקה משתנה. קפה אלה הופך לבר יין אינטימי ואיכותי. אנו מציעים חוויית בר יין רומנטית ואינטימית עם ערבי קונספט מיוחדים, לצד תפריט יינות בוטיק ישראליים מקומיים ועולמיים שנבחרו עבורכם בקפידה.
                </p>
              </div>

              {/* Value points / Bento benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="bg-white p-5 rounded-2xl border border-[#eedfc9] shadow-sm text-center">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-brand-warm-gold mx-auto mb-3">
                    <Coffee size={24} />
                  </div>
                  <h4 className="font-display font-bold text-[#2c1d11] text-sm sm:text-base">100% עבודת יד</h4>
                  <p className="text-xs text-brand-brown/60 mt-1">כל הבצקים והמילויים מיוצרים אצלנו מאפס</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#eedfc9] shadow-sm text-center">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-brand-wine mx-auto mb-3">
                    <Wine size={24} />
                  </div>
                  <h4 className="font-display font-bold text-[#2c1d11] text-sm sm:text-base">בר יין רומנטי</h4>
                  <p className="text-xs text-brand-brown/60 mt-1">תפריט יין ומשקאות עשיר ומוקפד</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#eedfc9] shadow-sm text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700 mx-auto mb-3">
                    <Star size={24} />
                  </div>
                  <h4 className="font-display font-bold text-[#2c1d11] text-sm sm:text-base">כשר בהשגחה</h4>
                  <p className="text-xs text-brand-brown/60 mt-1">כשר בהשגחת הרבנות באר יעקב</p>
                </div>
              </div>

            </div>

            {/* Side visual representation - Automatic Gallery Slideshow */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white relative bg-[#faf6f0]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={carouselIndex}
                    src={carouselImages[carouselIndex]}
                    alt="גלריית קפה אלה"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                {/* Micro pagination dots inside the carousel */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === carouselIndex ? 'bg-white w-4' : 'bg-white/55 hover:bg-white'
                      }`}
                      aria-label={`עבור לתמונה ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* PHOTO GALLERY LIGHTBOX */}
      <div className="hidden md:block">
        <GallerySection />
      </div>

      {/* LOCATION & HOURS SECTION */}
      <LocationHours />

      {/* INSTAGRAM LIVE MOCK SECTION */}
      <InstagramFeed />

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white/90 pt-16 pb-8 border-t border-brand-warm-gold/20 relative z-10 text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-12 mb-10">
            
            {/* Branding Column */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-display text-2xl font-bold tracking-widest text-white">קפה אלה</h3>
              <p className="font-serif text-brand-warm-gold text-xs uppercase tracking-widest font-semibold">
                Ella Patisserie • Bakery • Wine
              </p>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                מקום מפגש ייחודי בבאר יעקב המשלב פטיסירי בוטיק צרפתי בבוקר ובר יין רומנטי אינטמי בערב. מחויבים לחומרי הגלם הטובים ביותר ולאירוח מכל הלב.
              </p>
              <div className="flex gap-3 justify-end pt-2">
                <a
                  href="https://www.instagram.com/ella_patisserie_wine/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-warm-gold/20 text-brand-warm-gold hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Direct Contacts Column */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white border-b border-brand-warm-gold/20 pb-2 inline-block">
                צור קשר
              </h4>
              <ul className="space-y-3.5 text-sm text-white/70">
                <li className="flex items-center gap-2 justify-end">
                  <a href="tel:050-7355424" className="font-mono hover:text-brand-warm-gold transition-colors">050-7355424</a>
                  <Phone size={14} className="text-brand-warm-gold" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>עמק 2, באר יעקב (מרכז מסחרי)</span>
                  <MapPin size={14} className="text-brand-warm-gold" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>כשר בהשגחת הרבנות באר יעקב</span>
                  <Heart size={14} className="text-brand-warm-gold" />
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom copyright notice */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
            <p>
              © {new Date().getFullYear()} קפה אלה - פטיסירי, בייקרי ובר יין. כל הזכויות שמורות.
            </p>
          </div>

        </div>
      </footer>

      <MenuImagesModal isOpen={menuImagesModalOpen} onClose={() => setMenuImagesModalOpen(false)} />
      <MobileGalleryModal isOpen={mobileGalleryOpen} onClose={() => setMobileGalleryOpen(false)} />
    </div>
  );
}
