import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  const instagramUrl = 'https://www.instagram.com/ella_patisserie_wine/';

  return (
    <section id="instagram" className="py-12 bg-[#faf6f0] border-t border-[#eedfc9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Header Card */}
        <div className="bg-white rounded-3xl border border-[#eedfc9] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-right flex-col sm:flex-row group hover:opacity-95 transition-opacity"
            id="instagram-card-link"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Instagram size={32} />
            </div>
            <div className="text-center sm:text-right">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-brown group-hover:text-brand-wine transition-colors">
                עקבו אחרינו באינסטגרם
              </h3>
              <p className="font-mono text-brand-warm-gold font-bold text-sm sm:text-base mt-0.5" dir="ltr">
                @ella_patisserie_wine
              </p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
