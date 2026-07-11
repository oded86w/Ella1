import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, ExternalLink, Phone, HelpCircle } from 'lucide-react';

export default function ReservationSection() {
  const ontopoUrl = 'https://ontopo.com/he/il/page/22025249?date=20260511';

  return (
    <section id="reservation" className="py-24 bg-[#faf6f0] relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-warm-gold/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-wine/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-sm tracking-widest text-brand-warm-gold font-bold uppercase block mb-3">
            מארחים באהבה • הבטיחו את מקומכם
          </span>
          <h2 className="font-display text-4xl font-bold text-brand-brown">
            הזמנת שולחן אונליין
          </h2>
          <div className="w-16 h-1 bg-brand-wine mx-auto mt-4 rounded-full" />
        </div>

        {/* Ontopo Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[#eedfc9] shadow-xl p-8 sm:p-12 text-right relative overflow-hidden"
          id="ontopo-booking-card"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-l from-brand-wine via-brand-warm-gold to-brand-wine" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Information Column */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="font-display text-2xl font-bold text-brand-brown">
                הזמנה ישירה דרך מערכת Ontopo
              </h3>
              <p className="text-[#5a483a] text-sm sm:text-base leading-relaxed">
                כדי להעניק לכם את חווית השירות והאירוח הטובה ביותר, אנו מנהלים את הזמנות השולחנות של קפה אלה באמצעות מערכת <strong className="text-brand-wine font-semibold">Ontopo</strong> הרשמית והמאובטחת. 
              </p>
              <p className="text-[#5a483a] text-sm sm:text-base leading-relaxed">
                ההזמנה אונליין פשוטה, מהירה, ללא עלות ומבטיחה את מקומכם באופן מיידי באולם הפנימי הממוזג או במרפסת החיצונית הפסטורלית שלנו.
              </p>

              {/* Trust/Feature points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 justify-end text-sm text-[#5a483a] font-medium">
                  <span>אישור מיידי למייל ולנייד</span>
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-end text-sm text-[#5a483a] font-medium">
                  <span>שינוי וביטול בקליק אחד</span>
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-brand-warm-gold flex items-center justify-center shrink-0">
                    <Calendar size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Column */}
            <div className="md:col-span-5 bg-[#faf6f0] p-6 sm:p-8 rounded-2xl border border-[#ede3d4] text-center flex flex-col justify-center items-center space-y-6">
              <div className="space-y-2">
                <span className="font-serif text-[10px] tracking-widest text-brand-warm-gold font-bold uppercase block">
                  Click to Reserve
                </span>
                <h4 className="font-display text-lg font-bold text-brand-brown">
                  הבטיחו שולחן כעת
                </h4>
              </div>

              <a
                href={ontopoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-brand-wine text-white hover:bg-brand-wine/90 font-sans font-bold rounded-xl shadow-lg shadow-brand-wine/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                id="ontopo-direct-btn"
              >
                <span>הזמנת שולחן ב-Ontopo</span>
                <ExternalLink size={16} />
              </a>

              <p className="text-xs text-brand-brown/50 leading-relaxed max-w-[220px]">
                הקישור יפתח בטאב חדש בעמוד ההזמנות הרשמי של קפה אלה.
              </p>
            </div>

          </div>

          {/* Footer of the Card - Offline support */}
          <div className="mt-8 pt-6 border-t border-[#f0e6d6] flex flex-col sm:flex-row items-center justify-between text-xs text-brand-brown/60 gap-4">
            <p className="flex items-center gap-1.5 justify-end w-full sm:w-auto text-right">
              <span>לשאלות נוספות ובירורים לגבי אירועים קטנים: <strong className="font-mono text-brand-wine">03-1234567</strong></span>
              <Phone size={14} className="text-brand-warm-gold shrink-0" />
            </p>
            <p className="flex items-center gap-1.5 justify-end w-full sm:w-auto text-right">
              <span>כשר בהשגחת הרבנות באר יעקב</span>
              <HelpCircle size={14} className="text-brand-warm-gold shrink-0" />
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
