import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MORNING_MENU, EVENING_MENU } from '../data/menu';
import { Search, Sparkles, Filter, Leaf, ShieldAlert, Award, Flame } from 'lucide-react';
import { MenuItem } from '../types';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'morning' | 'evening'>('morning');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get active menu items
  const menuItems = useMemo(() => {
    return activeTab === 'morning' ? MORNING_MENU : EVENING_MENU;
  }, [activeTab]);

  // Categories based on active menu
  const categories = useMemo(() => {
    const list = [{ id: 'all', label: 'הכל' }];
    if (activeTab === 'morning') {
      list.push(
        { id: 'bakery', label: 'פטיסירי ובייקרי' },
        { id: 'breakfast', label: 'בראנץ׳ וארוחות בוקר' },
        { id: 'coffee', label: 'קפה ומשקאות' }
      );
    } else {
      list.push(
        { id: 'burgers', label: 'המבורגר שף' },
        { id: 'small-plates', label: 'מנות לחלוקה' },
        { id: 'wine', label: 'יין ובוטיק' }
      );
    }
    return list;
  }, [activeTab]);

  // Reset category filter when switching morning/evening
  const handleTabChange = (tab: 'morning' | 'evening') => {
    setActiveTab(tab);
    setSelectedCategory('all');
    setSearchQuery('');
  };

  // Filter menu items by category and search
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#fbf9f4] relative overflow-hidden">
      
      {/* Background elegant line details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-warm-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-wine/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif text-sm tracking-widest text-brand-warm-gold font-bold uppercase block mb-3">
            חומרי גלם משובחים • עבודת יד
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown mb-6">
            תפריט חווייתי מתחלף
          </h2>
          <div className="w-20 h-1 bg-brand-wine mx-auto mb-6 rounded-full" />
          <p className="text-[#5a483a] text-lg font-sans leading-relaxed">
            בקפה אלה אנחנו חיים את הקצב של היום. בבוקר אנחנו פטיסירי פריזאי קלאסי בניחוח חמאה משכר, ובערב אנחנו הופכים לבר יין תוסס עם מנות שף מושחתות וערבי קונספט קולינריים.
          </p>
        </div>

        {/* Tab Selection (Morning vs. Evening) */}
        <div className="flex justify-center max-w-md sm:max-w-xl mx-auto mb-12">
          <div className="bg-[#f0e6d6] p-1.5 rounded-full flex w-full border border-[#e2d4be]">
            <button
              onClick={() => handleTabChange('morning')}
              className={`flex-1 py-3.5 px-4 sm:px-8 rounded-full text-center font-sans font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer ${
                activeTab === 'morning'
                  ? 'bg-brand-brown text-white shadow-lg'
                  : 'text-brand-brown/70 hover:text-brand-brown'
              }`}
              id="tab-morning"
            >
              <span className="w-2 h-2 rounded-full bg-brand-warm-gold animate-pulse" />
              <span>בוקר וצהריים</span>
              <span className="text-xs opacity-60 hidden sm:inline">(8:00 - 17:00)</span>
            </button>
            <button
              onClick={() => handleTabChange('evening')}
              className={`flex-1 py-3.5 px-4 sm:px-8 rounded-full text-center font-sans font-medium text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer ${
                activeTab === 'evening'
                  ? 'bg-brand-wine text-white shadow-lg'
                  : 'text-brand-brown/70 hover:text-brand-wine'
              }`}
              id="tab-evening"
            >
              <span className="w-2 h-2 rounded-full bg-[#fa697c] animate-pulse" />
              <span>ערב ובר יין</span>
              <span className="text-xs opacity-60 hidden sm:inline">(החל מ-17:00)</span>
            </button>
          </div>
        </div>

        {/* Informative timing Banner */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm text-[#8c745f] inline-flex items-center gap-2 bg-[#f3eae0] px-4 py-2 rounded-full border border-[#ebdcc9] font-medium">
            <Sparkles size={14} className="text-brand-warm-gold" />
            {activeTab === 'morning' 
              ? '🥐 תפריט הבוקר והצהריים כולל קרואסונים פריכים ומאפים שנאפים במקום, וארוחות בראנץ׳ עשירות.' 
              : '🍷 תפריט הערב כולל המבורגרים מנתחי בקר מובחרים, מנות טאפאס מעולות ומבחר יינות המותאמים אישית.'
            }
          </p>
        </div>

        {/* Filter and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white p-5 rounded-2xl border border-[#ede3d4] shadow-sm">
          
          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none space-x-reverse space-x-1.5">
            <Filter size={16} className="text-brand-warm-gold shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? activeTab === 'morning'
                      ? 'bg-brand-brown text-[#faf6f0]'
                      : 'bg-brand-wine text-white'
                    : 'bg-[#faf6f0] text-brand-brown/70 hover:bg-[#f0e6d6] hover:text-brand-brown border border-[#eaddc9]'
                }`}
                id={`cat-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="חפשו מנה, רכיב או תגית..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#dfd3be] focus:outline-none focus:ring-2 focus:ring-brand-warm-gold focus:border-transparent bg-[#faf6f0] text-sm text-brand-brown text-right placeholder-brand-brown/40"
              id="menu-search-input"
            />
            <Search size={16} className="absolute left-3.5 top-3 text-brand-brown/40 pointer-events-none" />
          </div>

        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              key={`${activeTab}-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#eedfc9] hover:border-brand-warm-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  id={`menu-card-${item.id}`}
                >
                  
                  {/* Food Image */}
                  <div className="h-56 overflow-hidden relative group">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-65" />
                    
                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-4 right-4 bg-brand-brown text-white font-display font-bold px-3.5 py-1.5 rounded-full text-base border border-brand-warm-gold/20 shadow-lg">
                      ₪{item.price}
                    </div>

                    {/* Tags on Top Left */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-[11px] font-bold rounded-full text-white shadow-sm flex items-center gap-1 ${
                            tag === 'מנת דגל'
                              ? 'bg-gradient-to-r from-brand-wine to-[#b91c1c]'
                              : tag === 'טבעוני' || tag === 'צמחוני'
                              ? 'bg-[#15803d]'
                              : 'bg-brand-warm-gold'
                          }`}
                        >
                          {tag === 'מנת דגל' && <Award size={10} />}
                          {tag === 'צמחוני' && <Leaf size={10} />}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Food Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-brown mb-2 text-right">
                        {item.name}
                      </h3>
                      <p className="text-[#5a483a] text-sm leading-relaxed text-right mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Indicator of Dietaries */}
                    <div className="pt-3 border-t border-[#f0e6d6] flex items-center justify-between text-xs text-brand-brown/50">
                      <span>עבודת יד מקומית</span>
                      <div className="flex gap-2">
                        {item.tags?.includes('ללא גלוטן') && (
                          <span className="text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-100 font-medium">גלוטן-פרי</span>
                        )}
                        {item.tags?.includes('טבעוני') && (
                          <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-100 font-medium">טבעוני</span>
                        )}
                        {item.category === 'wine' && (
                          <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100 font-medium">בוטיק</span>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl border border-[#ede3d4]"
              id="menu-no-results"
            >
              <div className="w-16 h-16 bg-[#faf6f0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-brand-brown/40" />
              </div>
              <h4 className="font-display text-lg font-bold text-brand-brown mb-2">לא נמצאו מנות התואמות לחיפוש</h4>
              <p className="text-brand-brown/60 text-sm">נסו להשתמש במילות חיפוש כלליות יותר או לשנות את הקטגוריה שנבחרה.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Chef Concept Promo Card */}
        <div className="mt-16 bg-gradient-to-l from-brand-wine to-[#421118] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-brand-warm-gold/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-warm-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 text-right">
              <span className="bg-brand-warm-gold/20 text-brand-warm-gold px-3 py-1 rounded-full text-xs font-bold border border-brand-warm-gold/30 inline-flex items-center gap-1.5 mb-4">
                <Flame size={12} className="animate-pulse" />
                ערבי קונספט יין והמבורגר שף
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                המבורגר שף ויין ללא תחתית בערבי חמישי 🍷🍔
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                מדי יום חמישי החל מהשעה 18:00, קפה אלה הופך לחגיגה קולינרית יוצאת דופן: מבחר המבורגרים מיוחדים של השף, המשלבים גבינות מיושנות, כמהין וריבות שף ייחודיות, לצד תפריט יינות בוטיק ישראלים ועולמיים פתוחים ללא הגבלה במחיר מיוחד.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a
                href="https://ontopo.com/he/il/page/22025249?date=20260511"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-warm-gold text-brand-dark hover:bg-white hover:text-brand-wine font-sans font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-center w-full sm:w-auto"
                id="promo-reserve-btn"
              >
                הבטיחו שולחן מראש לחמישי
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
