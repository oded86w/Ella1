import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

interface MenuImagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuImagesModal({ isOpen, onClose }: MenuImagesModalProps) {
  const getAssetUrl = (url: string) => {
    let base = import.meta.env.BASE_URL;
    if (!base.endsWith('/')) base += '/';
    
    const cleanUrl = url.startsWith('./') ? url.substring(2) : url.startsWith('/') ? url.substring(1) : url;
    
    if (base === './') {
      return './' + cleanUrl;
    }
    return base + cleanUrl;
  };

  const menus = [
    {
      id: 'brunch',
      title: 'תפריט בראנץ׳ ובוקר',
      url: './menu/Brunch .webp', // Note: trailing space in filename as uploaded
    },
    {
      id: 'friday',
      title: 'תפריט שישי',
      url: './menu/Friday.webp',
    },
    {
      id: 'drinks',
      title: 'תפריט משקאות ויין',
      url: './menu/Drinks.webp',
    }
  ].map(item => ({ ...item, url: getAssetUrl(item.url) }));

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % menus.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + menus.length) % menus.length);
  };

  const activeMenu = menus[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex flex-col justify-between p-4 bg-black/98 backdrop-blur-lg text-right select-none"
          id="menu-images-modal"
          onClick={onClose}
        >
          {/* Top Control Bar */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-3 px-4 z-20 text-white border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center justify-center"
              aria-label="סגירה"
              id="close-menu-modal"
            >
              <X size={22} />
            </button>

            <div className="text-center sm:text-right">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                {activeMenu.title}
              </h3>
              <p className="text-white/60 text-xs mt-0.5 font-sans">
                דף {currentIndex + 1} מתוך {menus.length} • החליקו או לחצו לניווט
              </p>
            </div>
          </div>

          {/* Main Slide / Swipe Area */}
          <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-between relative px-2 sm:px-8" onClick={(e) => e.stopPropagation()}>
            {/* Prev button (left arrow) */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="הקודם"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Middle Container for the image */}
            <div className="w-full h-[72vh] md:h-[78vh] flex items-center justify-center overflow-hidden py-2 px-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full flex items-center justify-center"
                >
                  <img
                    src={activeMenu.url}
                    alt={activeMenu.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="max-w-full max-h-[70vh] md:max-h-[76vh] object-contain rounded-lg shadow-2xl border border-white/5 cursor-zoom-in"
                    onClick={() => window.open(activeMenu.url, '_blank')}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button (right arrow) */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="הבא"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Footer controls & info */}
          <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-4 z-20 text-white/60 text-xs font-sans border-t border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 order-last sm:order-first mt-2 sm:mt-0">
              <a
                href={activeMenu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
              >
                <Maximize2 size={13} />
                <span>פתיחה במסך מלא</span>
              </a>
            </div>

            <div className="text-center sm:text-right">
              <span>ניתן לפתוח את התמונה במסך מלא לצפייה מוגדלת • כשר בהשגחת הרבנות</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

