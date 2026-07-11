import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/menu';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const getAssetUrl = (url: string) => {
    let base = import.meta.env.BASE_URL;
    if (!base.endsWith('/')) base += '/';
    
    const cleanUrl = url.startsWith('./') ? url.substring(2) : url.startsWith('/') ? url.substring(1) : url;
    
    if (base === './') {
      return './' + cleanUrl;
    }
    return base + cleanUrl;
  };

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

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const nextIdx = (activeImageIndex + 1) % filteredItems.length;
    setActiveImageIndex(nextIdx);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    const prevIdx = (activeImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveImageIndex(prevIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-[#faf6f0] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-widest text-brand-warm-gold font-bold uppercase block mb-3">
            רגעים של טעם • קפה אלה
          </span>
          <h2 className="font-display text-4xl font-bold text-brand-brown">
            גלריה ורגעים יפים
          </h2>
          <div className="w-16 h-1 bg-brand-wine mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-brand-brown/70 font-sans text-sm sm:text-base leading-relaxed">
            מוזמנים להתרשם מהמאפים שנאפים במקום באהבה גדולה, המנות הצבעוניות ואווירת הבוטיק הייחודית של קפה אלה.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-brand-brown text-[#faf6f0] shadow-md shadow-brand-brown/10'
                  : 'bg-white text-brand-brown/70 hover:bg-[#eedfc9] hover:text-brand-brown border border-[#eaddc9]'
              }`}
              id={`gallery-filter-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Bento/Grid Gallery Items */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#f0e6d6]"
                id={`gallery-item-${item.id}`}
              >
                {/* Food/Interior Photo */}
                <img
                  src={getAssetUrl(item.url)}
                  alt="גלריית קפה אלה"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Backdrop Mask on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-right transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-brand-warm-gold text-xs font-bold uppercase mb-2">
                    <Camera size={12} />
                    <span>
                      {item.category === 'pastries' && 'מאפים ומתוקים'}
                      {item.category === 'wine' && 'בר יין וערב'}
                    </span>
                  </div>
                  
                  {/* Expand icon appearing on hover */}
                  <span className="text-white/60 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={12} />
                    <span>להגדלת התמונה</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIndex(null)}
              className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out select-none"
              id="gallery-lightbox"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                id="close-lightbox"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
                id="prev-lightbox-btn"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
                id="next-lightbox-btn"
              >
                <ChevronRight size={24} />
              </button>

              {/* Modal Image Box */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center cursor-default"
              >
                <img
                  src={getAssetUrl(filteredItems[activeImageIndex].url)}
                  alt="גלריית קפה אלה"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                />
              </motion.div>

              {/* Swipe/Tap helper text on mobile */}
              <div className="absolute bottom-6 left-6 right-6 text-center sm:hidden text-white/50 text-xs">
                לחצו בצדדי המסך כדי לדפדף בין התמונות
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
