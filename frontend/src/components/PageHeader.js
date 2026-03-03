import React from 'react';
import Reveal from './Reveal';

export default function PageHeader({ eyebrow, title, subtitle, bg }) {
  return (
    <section
      data-testid="page-header"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Background image */}
      {bg && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" />
        </div>
      )}

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          {eyebrow && (
            <span className="inline-block font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent border border-accent/25 bg-accent/5 px-4 py-1.5 rounded-sm mb-6">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading font-800 text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-slate-50 leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-slate-400 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
