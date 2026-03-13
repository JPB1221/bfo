import React from 'react';
import { Paintbrush, Shield, Film, Sun, ArrowRight, Award, Gem, Palette, Users } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const SERVICES = [
  {
    icon: Paintbrush,
    num: '01',
    title: 'Vinyl Wraps',
    subtitle: 'Full & Partial',
    features: ['Full Vehicle Wraps', 'Partial Wraps', 'Custom Designs', 'Color Changes'],
    body: 'Transform your vehicle with premium vinyl wraps — from full color changes to custom graphics and accents.',
  },
  {
    icon: Shield,
    num: '02',
    title: 'Ceramic Coating',
    subtitle: 'Paint Protection',
    features: ['9H Hardness', '3-Year Warranty', 'Hydrophobic', 'UV Protection'],
    body: 'Professional-grade ceramic coating that protects your paint with a durable, hydrophobic layer.',
  },
  {
    icon: Film,
    num: '03',
    title: 'Paint Protection Film',
    subtitle: 'PPF / Clear Bra',
    features: ['Self-Healing Film', 'Full Front Coverage', 'Custom Kits', '10-Year Warranty'],
    body: 'Invisible self-healing film that shields your vehicle from rock chips, scratches, and road debris.',
  },
  {
    icon: Sun,
    num: '04',
    title: 'Window Tinting',
    subtitle: 'Privacy & UV Block',
    features: ['Ceramic Tint', 'UV Ray Blocking', 'Heat Reduction', 'All Vehicle Types'],
    body: 'Premium ceramic window tint that blocks UV rays, reduces heat, and enhances privacy.',
  },
];

const PILLARS = [
  { icon: Award, title: 'Precision Installs', body: 'Every wrap, coat, and film applied with meticulous attention to detail.' },
  { icon: Gem, title: 'Premium Materials', body: 'Only top-tier brands — 3M, XPEL, Ceramic Pro, and more.' },
  { icon: Palette, title: 'Custom Designs', body: 'Unique color schemes, graphics, and finishes tailored to your vision.' },
  { icon: Users, title: 'Client-Focused', body: 'Transparent pricing, clear timelines, and results that exceed expectations.' },
];

const CTA_URL = 'https://buy.stripe.com/dRm5kE5B0aaf8WW45J2VG01';

export default function DemoAutomotive() {
  return (
    <>
      <SEO
        title="Demo — Automotive Website"
        description="A demonstration automotive styling website created by Bare Force One LLC. See what we can build for your car detailing or customization business."
        path="/demo/automotive"
      />

      {/* ============ BFO DEMO BANNER ============ */}
      <section className="relative pt-24 lg:pt-28 bg-[#070b16]">
        <div className="bg-blue-500/10 border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center">
            <p className="font-heading font-bold text-sm md:text-base uppercase tracking-[0.15em] text-blue-400 mb-1">
              This is a demonstration website created by Bare Force One.
            </p>
            <p className="text-slate-400 text-sm">
              We can build a website like this for your business in 48 hours.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3 px-8 mt-4 transition-all duration-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98]"
            >
              Get a Website Like This <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#070b16]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0015]/50 via-[#070b16]/60 to-[#070b16]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,212,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 40% 60%, rgba(255,45,120,0.04) 0%, transparent 50%)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <Reveal direction="scale">
            <span className="inline-block font-heading text-[0.6rem] font-bold uppercase tracking-[0.25em] text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 mb-6">
              Elite Car Styling Studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading font-[800] text-4xl md:text-5xl lg:text-[4.5rem] uppercase tracking-wider text-slate-50 leading-[0.95] mb-4">
              Miami Vice<br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Customs</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Premium automotive styling and customization. Vinyl wraps, ceramic coating, paint protection film, and window tinting — all performed by certified professionals.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 text-slate-500 text-xs font-mono uppercase tracking-wider">
              <span>Certified Installers</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span>Premium Materials</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span>Custom Builds</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/01</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Our <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[0.6rem] text-cyan-400/50 font-bold">{s.num}</span>
                    <s.icon className="text-cyan-400 w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base uppercase tracking-wider text-slate-50 mb-1 relative z-10">{s.title}</h3>
                  <span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.2em] text-cyan-400/70 block mb-3">{s.subtitle}</span>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 mb-4">{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map(f => (
                      <span key={f} className="text-[0.6rem] font-heading font-bold uppercase tracking-wider text-slate-500 bg-slate-800/40 px-3 py-1 border border-slate-700/30">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <span className="section-number block mb-3">/02</span>
                <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
                  Why <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Choose Us</span>
                </h2>
                <div className="line-draw w-16 mb-6" />
                <p className="text-slate-400 text-base leading-relaxed">
                  We combine premium materials, certified installation techniques, and custom design to deliver automotive styling that turns heads and protects your investment.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'up'}>
                  <div className="glow-card bg-[#0c1222]/40 border border-slate-800/40 p-6 group">
                    <p.icon className="text-cyan-400 mb-3 w-5 h-5 relative z-10" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FOOTER ============ */}
      <section className="relative border-b border-slate-800/30 scanline-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b16] via-[#0a1020] to-[#070b16]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 lg:py-32 text-center">
          <Reveal direction="scale">
            <h2 className="font-heading font-[800] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-50 leading-[1.02] mb-4">
              Need a Website Like <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">This</span>?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed mb-8">
              Bare Force One builds professional websites for automotive shops, detailers, and customization studios — delivered in as little as 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3.5 px-8 transition-all duration-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98]"
              >
                Get a Website Like This <ArrowRight size={14} />
              </a>
              <BtnPrimary to="/" className="border border-slate-700 !bg-transparent text-slate-400 hover:border-blue-500 hover:text-white hover:!bg-blue-500/10">
                Back to Bare Force One
              </BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
