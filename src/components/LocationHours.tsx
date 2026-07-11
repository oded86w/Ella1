import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, CalendarRange, Phone, Compass, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function LocationHours() {
  const wazeUrl = 'https://waze.com/ul?q=%D7%A2%D7%9E%D7%A7%202%20%D7%91%D7%90%D7%A8%20%D7%99%D7%A2%D7%A7%D7%91';
  const googleMapsUrl = 'https://maps.google.com/?q=%D7%A2%D7%9E%D7%A7+2+%D7%91%D7%90%D7%A8+%D7%99%D7%A2%D7%A7%D7%91';

  return (
    <section id="location" className="pt-36 pb-24 bg-[#fbf9f4] border-t border-[#eaddc9]/60 relative overflow-hidden">
      
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-warm-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 text-right">
          
          {/* Section text & opening hours */}
          <div className="space-y-8 text-right flex flex-col justify-center">
            
            <div className="text-center sm:text-right">
              <span className="font-serif text-sm tracking-widest text-brand-warm-gold font-bold uppercase block mb-3">
                איפה למצוא אותנו • באר יעקב
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown">
                שעות פתיחה ומיקום
              </h2>
              <div className="w-16 h-1 bg-brand-wine mt-4 mb-2 mx-auto sm:mr-0 sm:ml-auto rounded-full" />
            </div>

            <p className="text-brand-brown/80 font-sans text-sm sm:text-base leading-relaxed text-center sm:text-right">
              קפה אלה ממוקם בלב באר יעקב ברחוב עמק 2. המקום מציע חנייה בשפע ובחינם ללקוחותינו, ונגישות מלאה. בואו לחוות בראנץ׳ בלתי נשכח או ערב יין רומנטי.
            </p>

            {/* Opening hours list */}
            <div className="bg-white rounded-2xl border border-[#eedfc9] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-4 border-b border-[#f0e6d6] pb-4">
                <div className="w-10 h-10 bg-[#faf6f0] rounded-xl flex items-center justify-center text-brand-wine shrink-0">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-brand-brown font-display text-sm sm:text-base">ימי ראשון עד חמישי</span>
                    <span className="font-mono text-sm font-bold text-brand-wine">8:00 - 23:00</span>
                  </div>
                  <p className="text-xs text-brand-brown/60 mt-0.5">תפריט ערב מיוחד מוגש החל מהשעה 17:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-[#f0e6d6] pb-4">
                <div className="w-10 h-10 bg-[#faf6f0] rounded-xl flex items-center justify-center text-[#ff9800] shrink-0">
                  <CalendarRange size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-brand-brown font-display text-sm sm:text-base">יום שישי</span>
                    <span className="font-mono text-sm font-bold text-brand-wine">8:00 - 14:30</span>
                  </div>
                  <p className="text-xs text-brand-brown/60 mt-0.5">מאפים חמים, חלות לשבת, בראנצ׳ים מפנקים וקפה איכותי</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-brand-brown font-display text-sm sm:text-base">יום שבת</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-100">סגור • כשר</span>
                  </div>
                  <p className="text-xs text-brand-brown/60 mt-0.5">קפה אלה בעל תעודת כשרות מקומית</p>
                </div>
              </div>
            </div>

            {/* Direct buttons for Navigation & Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#33f] hover:bg-[#22c] text-white font-sans font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer text-center text-sm sm:text-base"
                id="waze-nav-btn"
              >
                <Compass size={18} className="animate-spin-slow" />
                <span>ניווט ישיר ב-Waze 📍</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-[#eedfc9] text-brand-brown border border-[#eaddc9] font-sans font-bold rounded-xl shadow-md transition-all cursor-pointer text-center text-sm sm:text-base"
                id="gmaps-nav-btn"
              >
                <span>ניווט ב-Google Maps</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
