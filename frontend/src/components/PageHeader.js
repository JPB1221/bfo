import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

export default function PageHeader({ eyebrow, title, subtitle, bg }) {
  const [loaded, setLoaded] = useState(!bg);
  const ref = useRef(null);

  useEffect(() => {
    if (!bg) return;
    const img = new Image();
    img.src = bg;
    img.onload = () => setLoaded(true);
  }, [bg]);

  return (
    <section
      ref={ref}
      data-testid="page-header"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden scanline-overlay grid-texture"
    >
      {bg && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/90 via-[#070b16]/80 to-[#070b16]" />
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          {eyebrow && (
            <span className="inline-block font-heading text-[0.6rem] font-bold uppercase tracking-[0.25em] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 mb-6">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading font-[800] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-slate-50 leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-slate-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          <div className="line-draw w-20 mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
