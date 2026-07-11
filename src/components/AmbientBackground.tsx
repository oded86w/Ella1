import React, { useEffect, useState } from 'react';

interface AmbientBackgroundProps {
  isActive: boolean;
}

export default function AmbientBackground({ isActive }: AmbientBackgroundProps) {
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    // Generate warm steam or glowing firefly-like particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5, // seconds
      duration: 6 + Math.random() * 6, // seconds
      size: 4 + Math.random() * 8, // pixels
    }));
    setParticles(newParticles);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Soft warm glowing background spheres to simulate candlelight / fireplace cozy atmosphere */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#fce7cc] opacity-25 blur-[120px] animate-soft-glow"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#f5d0a9] opacity-20 blur-[130px] animate-soft-glow"
        style={{ animationDelay: '3s' }}
      />
      <div 
        className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-[#ebd1b9] opacity-15 blur-[110px] animate-soft-glow"
        style={{ animationDelay: '6s' }}
      />

      {/* Floating steam particles rise upwards */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="steam-particle absolute bottom-[-20px] bg-gradient-to-t from-brand-warm-gold/20 to-transparent rounded-full blur-[2px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 2}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Vintage grainy texture overlay (very subtle) to give a high-end editorial paper / cafe menu feeling */}
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#2c1d11_1px,transparent_1px)] [background-size:16px_16px]"
      />
    </div>
  );
}
