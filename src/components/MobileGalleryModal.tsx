import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Camera, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menu';
import { getAssetUrl } from '../utils/assets';

interface MobileGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileGalleryModal({ isOpen, onClose }: MobileGalleryModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'pastries', label: 'מאפים ומתוקים' },
    { id: 'wine', label: 'בר יין וערב' }
  ];

  const filteredItems = React.useMemo(() => {
    return selectedFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    const nextIdx = (activeImageIndex + 1) % filteredItems.length;
    setActiveImageIndex(nextIdx);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    const prevIdx = (activeImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveImageIndex(prevIdx);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex flex-col justify-between p-4 bg-[#0a0807] text-right select-none overflow-hidden"
          id="mobile-gallery-modal"
          onClick={onClose}
        >
          {/* Header */}
          <div 
            className="w-full max-w-lg mx-auto flex items-center justify-between py-3 px-2 z-20 text-white border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center justify-center"
              aria-label="סגירה"
              id="close-mobile-gallery"
            >
              <X size={20} />
            </button>

            <div className="text-right">
              <h3 className="font-display text-lg font-bold text-white">
                גלריית קפה אלה
              </h3>
              <p className="text-white/60 text-[11px] font-sans mt-0.5">
                לחצו על תמונה לצפייה והגדלה
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div 
            className="w-full max-w-lg mx-auto py-3 px-2 z-20 flex gap-2 overflow-x-auto justify-start no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setSelectedFilter(filter.id);
                  setActiveImageIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-brand-warm-gold text-brand-dark shadow-md font-semibold'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
                id={`mobile-gallery-filter-${filter.id}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Main Gallery Scrollable Area */}
          <div 
            className="flex-1 w-full max-w-lg mx-auto overflow-y-auto py-2 px-1 scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-3 pb-8">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx * 0.04, 0.4) }}
                  onClick={() => setActiveImageIndex(idx)}
                  className="aspect-square rounded-2xl overflow-hidden relative border border-white/5 bg-white/5 active:scale-98 transition-transform cursor-pointer group"
                >
                  <img
                    src={getAssetUrl(item.url)}
                    alt="קפה אלה"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-2.5">
                    <span className="text-[10px] text-white/90 font-sans flex items-center gap-1 bg-black/45 backdrop-blur-md px-2 py-1 rounded-full">
                      <Eye size={10} className="text-brand-warm-gold" />
                      <span>הגדלה</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox / Slide Overlay within Modal */}
          <AnimatePresence>
            {activeImageIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-black/98 flex flex-col justify-between p-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lightbox Header */}
                <div className="flex items-center justify-between py-3 border-b border-white/10 w-full max-w-lg mx-auto">
                  <button
                    onClick={() => setActiveImageIndex(null)}
                    className="p-2.5 rounded-full bg-white/10 text-white"
                  >
                    <X size={20} />
                  </button>
                  <div className="text-right text-white">
                    <span className="text-xs text-brand-warm-gold font-sans font-semibold">
                      {filteredItems[activeImageIndex].category === 'pastries' ? 'מאפים ומתוקים' : 'בר יין וערב'}
                    </span>
                    <p className="text-[10px] text-white/50 font-sans">
                      תמונה {activeImageIndex + 1} מתוך {filteredItems.length}
                    </p>
                  </div>
                </div>

                {/* Lightbox Main Image & Navigation Arrows */}
                <div className="flex-1 flex items-center justify-between relative max-w-lg mx-auto w-full">
                  <button
                    onClick={handlePrevImage}
                    className="p-3 rounded-full bg-black/60 border border-white/10 text-white active:scale-90"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex-1 h-[60vh] flex items-center justify-center p-2">
                    <img
                      src={getAssetUrl(filteredItems[activeImageIndex].url)}
                      alt="קפה אלה מוגדל"
                      loading="lazy"
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    />
                  </div>

                  <button
                    onClick={handleNextImage}
                    className="p-3 rounded-full bg-black/60 border border-white/10 text-white active:scale-90"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Lightbox Footer */}
                <div className="text-center py-4 text-white/40 text-[11px] font-sans w-full max-w-lg mx-auto border-t border-white/10">
                  לחצו על החצים כדי לעבור בין התמונות
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer of Modal */}
          <div 
            className="w-full max-w-lg mx-auto py-2 text-center text-white/40 text-[10px] font-sans border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            © קפה אלה באר יעקב • כשר
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
