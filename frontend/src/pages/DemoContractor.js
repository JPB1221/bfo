import React from 'react';
import { Hammer, Droplets, HardHat, Building, ArrowRight, ShieldCheck, Star, ClipboardCheck, Sun, Users, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const SERVICES = [
  { icon: Building, num: '01', title: 'Concrete Restoration', body: 'Balconies, columns, facades, and spall repairs — structural restoration to extend the life of your property.' },
  { icon: Droplets, num: '02', title: 'Waterproofing', body: 'Coatings, sealers, and joint sealing to protect structures against moisture intrusion and weather damage.' },
  { icon: Hammer, num: '03', title: 'Flatwork Concrete', body: 'Driveways, sidewalks, pool decks, and patios — precision flatwork for residential and commercial properties.' },
  { icon: HardHat, num: '04', title: 'Foundations', body: 'Pours, repairs, slabs, and grade beams — structural foundation work built to last.' },
  { icon: ArrowRight, num: '05', title: 'Paving & Driveways', body: 'Asphalt, concrete overlay, and repaving services for driveways, lots, and roadways.' },
  { icon: ClipboardCheck, num: '06', title: 'General Contracting', body: 'Multi-trade coordination, permit acquisition, and full project management from start to finish.' },
];

const WHY_US = [
  { icon: ShieldCheck, title: 'Fully Licensed & Insured', body: 'Certified general contractor with comprehensive liability and workers\' comp coverage.' },
  { icon: Star, title: 'Top-Rated Contractor', body: 'Consistently rated among the best licensed contractors in the region.' },
  { icon: ClipboardCheck, title: 'Full Project Management', body: 'From permits to final inspection — we manage every detail so you don\'t have to.' },
  { icon: Sun, title: 'Regional Climate Expertise', body: 'Materials and methods selected for local weather conditions and building codes.' },
  { icon: Users, title: 'HOA & Condo Specialists', body: 'Experienced working with HOAs, condo associations, and property managers.' },
  { icon: MapPin, title: 'Locally Based, Regionally Trusted', body: 'A local business with a reputation built on quality work and reliable service.' },
];

const CTA_URL = 'https://buy.stripe.com/dRm5kE5B0aaf8WW45J2VG01';

export default function DemoContractor() {
  return (
    <>
      <SEO
        title="Demo — Contractor Website"
        description="A demonstration contractor website created by Bare Force One LLC. See what we can build for your construction or restoration business."
        path="/demo/contractor"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/40 via-[#070b16]/60 to-[#070b16]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <Reveal direction="scale">
            <span className="inline-block font-heading text-[0.6rem] font-bold uppercase tracking-[0.25em] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-5 py-2 mb-6">
              Contractor Demo
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading font-[800] text-4xl md:text-5xl lg:text-[4.5rem] uppercase tracking-wider text-slate-50 leading-[0.95] mb-4">
              S.T.R. Concrete<br />
              <span className="gradient-text">Restoration</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Licensed general contractor specializing in concrete restoration, waterproofing, and structural repairs for residential and commercial properties.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 text-slate-500 text-xs font-mono uppercase tracking-wider">
              <span>Licensed & Insured</span>
              <span className="w-1 h-1 rounded-full bg-blue-500" />
              <span>Top Rated</span>
              <span className="w-1 h-1 rounded-full bg-blue-500" />
              <span>Free Estimates</span>
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[0.6rem] text-blue-500/50 font-bold">{s.num}</span>
                    <s.icon className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <span className="section-number block mb-3">/02</span>
                <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
                  Built on <span className="gradient-text">Trust</span>
                </h2>
                <div className="line-draw w-16 mb-6" />
                <p className="text-slate-400 text-base leading-relaxed">
                  With years of experience in concrete restoration and general contracting, we bring expertise, reliability, and attention to detail to every project. From small residential repairs to large commercial restorations, our licensed team delivers quality workmanship on time and on budget.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'up'}>
                  <div className="glow-card bg-[#0c1222]/40 border border-slate-800/40 p-6 group">
                    <w.icon className="text-blue-500 mb-3 w-5 h-5 relative z-10" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{w.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{w.body}</p>
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
              Need a Website Like <span className="gradient-text">This</span>?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed mb-8">
              Bare Force One builds professional websites for contractors, restoration companies, and service businesses — delivered in as little as 48 hours.
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
