import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Globe, Cpu, Link2, BarChart3, ChevronRight, Lock, Zap, Target, Clock, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Testimonials from '../components/Testimonials';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const HERO_BG = 'https://images.unsplash.com/photo-1612349257727-d31e2b9f64be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwbmlnaHQlMjBjeWJlcnB1bmslMjBkYXJrfGVufDB8fHx8MTc3MjU2NTc1OHww&ixlib=rb-4.1.0&q=85';

const TRUST_ITEMS = ['SAM.gov Registered', 'Secure-by-Design', 'Cloud-Ready Architecture', 'NIST-Aligned Practices', 'Agile Delivery'];

const AUDIENCES = [
  { badge: 'Government & Defense', title: 'Public Sector', body: 'Secure, compliant systems for local and state agencies modernizing operations, procurement, and citizen services.', to: '/government', icon: Shield, num: '/0.1' },
  { badge: 'Enterprise', title: 'Enterprise Organizations', body: 'Efficiency-driven digital transformation, automation, and data-powered performance for departments and teams.', to: '/enterprise', icon: Server, num: '/0.2' },
  { badge: 'Local Business', title: 'Growth-Focused Businesses', body: 'Fast, secure websites, mobile apps, and back-office automation that save time and increase revenue.', to: '/local-business', icon: BarChart3, num: '/0.3' },
];

const CAPABILITIES = [
  { icon: Globe, title: 'Custom Software Development', body: 'Web platforms, portals, internal tools, and citizen-facing applications.' },
  { icon: Cpu, title: 'Mobile Applications', body: 'Native and cross-platform mobile apps for field teams and end users.' },
  { icon: Server, title: 'Cloud Architecture', body: 'Migration, secure deployment, compliance-ready infrastructure.' },
  { icon: Zap, title: 'AI & Automation', body: 'Document processing, intelligent search, workflow automation.' },
  { icon: Link2, title: 'Systems Integration', body: 'CRMs, ERPs, payment systems, third-party APIs.' },
  { icon: BarChart3, title: 'Digital Transformation', body: 'End-to-end modernization for legacy system replacement.' },
];

const PILLARS = [
  { icon: Lock, title: 'Secure-by-Design', body: 'Security engineered into every layer, not bolted on.', num: '01' },
  { icon: Clock, title: 'Agile Process', body: 'Rapid iteration with clear milestones and documentation.', num: '02' },
  { icon: Zap, title: 'Performance-Focused', body: 'Engineered for speed, reliability, and maintainability.', num: '03' },
  { icon: Target, title: 'Mission-Driven', body: 'Every project scoped clearly, executed precisely.', num: '04' },
];

const CASES = [
  { sector: 'Higher Education', title: 'HIPAA-Compliant mHealth Apps', body: 'Mobile health applications for the University of Colorado Anschutz Medical Campus.', result: 'HIPAA-compliant', metric: '100%', metricLabel: 'Regulatory Ready', to: '/case-studies' },
  { sector: 'Higher Education', title: '3D Digital Campus Prototype', body: 'Interactive 3D campus for the University of Wisconsin using Unity Engine.', result: 'Full prototype delivered', metric: '3D', metricLabel: 'Unity Engine', to: '/case-studies' },
  { sector: 'Enterprise', title: 'E-Commerce Middleware', body: 'Enterprise middleware for a client generating $12M annually.', result: '99.9% uptime', metric: '99.9%', metricLabel: 'Uptime Achieved', to: '/case-studies' },
];

const STATS = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 99, suffix: '.9%', label: 'Uptime Record' },
  { value: 5, suffix: '.0', label: 'Client Rating' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

function HeroParallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            const scroll = window.scrollY;
            bgRef.current.style.transform = `translateY(${scroll * 0.3}px) scale(1.1)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 hero-bg-parallax">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b16]/70 via-[#070b16]/60 to-[#070b16]" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, #070b16 75%)' }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section data-testid="hero-section" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden scanline-overlay grid-texture">
        <HeroParallax />

        {/* Animated radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Reveal direction="scale">
            <span className="inline-block font-heading text-[0.6rem] font-bold uppercase tracking-[0.25em] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-5 py-2 mb-8">
              Software Development & Digital Transformation
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading font-[800] text-5xl md:text-6xl lg:text-[5.5rem] uppercase tracking-wider text-slate-50 leading-[0.95] mb-6">
              Mission-Ready<br/>
              Software For<br/>
              <span className="gradient-text">The Modern Era</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Bare Force One LLC builds secure, scalable software systems for
              government agencies, enterprise organizations, and growth-focused businesses.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <BtnPrimary to="/capabilities" data-testid="hero-cta-capabilities">
                View Capabilities <ArrowRight size={14} className="inline ml-1" />
              </BtnPrimary>
              <BtnOutline to="/contact" data-testid="hero-cta-contact">
                Start a Project
              </BtnOutline>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex items-center justify-center gap-3">
              <div className="pulse-dot" />
              <p className="font-mono text-xs text-slate-500 tracking-wider">
                UEI: FJRRJ6JNJ375 &middot; Fort Lauderdale, FL
              </p>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <Reveal delay={0.6}>
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/40 to-transparent mx-auto animate-pulse" />
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section data-testid="trust-bar" className="bg-[#0a0f1c] border-y border-slate-800/30 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-2">
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.25em] text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ============ STATS COUNTER ============ */}
      <section data-testid="stats-section" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} direction="scale">
                <div data-testid={`stat-${i}`} className="text-center">
                  <div className="font-heading font-[800] text-4xl md:text-5xl text-slate-50 mb-2">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO WE SERVE ============ */}
      <section data-testid="audiences-section" className="bg-[#090e1a] border-b border-slate-800/30 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left label */}
            <div className="lg:col-span-4">
              <Reveal direction="right">
                <span className="section-number block mb-4">/01</span>
                <h2 className="font-heading font-[800] text-4xl md:text-5xl uppercase tracking-wide text-slate-50 leading-[1.05] mb-4">
                  Tailored<br/><span className="gradient-text">Solutions</span>
                </h2>
                <div className="line-draw w-16 my-6" />
                <p className="text-slate-400 text-base leading-relaxed">
                  Purpose-built systems for organizations that demand performance, security, and long-term value.
                </p>
              </Reveal>
            </div>

            {/* Right cards */}
            <div className="lg:col-span-8 space-y-4">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.to} delay={i * 0.12} direction="left">
                  <Link
                    to={a.to}
                    data-testid={`audience-card-${a.badge.toLowerCase().replace(/\s+/g, '-')}`}
                    className="glow-card group flex items-start gap-6 bg-[#0c1222]/60 backdrop-blur-sm border border-slate-800/40 p-7 md:p-8 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex-shrink-0 mt-1">
                      <span className="section-number">{a.num}</span>
                      <a.icon className="text-blue-500 mt-2 w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="relative z-10">
                      <span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.2em] text-blue-400 block mb-2">{a.badge}</span>
                      <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-slate-50 mb-2">{a.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{a.body}</p>
                      <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-heading font-bold uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-300">
                        Explore <ChevronRight size={12} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section data-testid="capabilities-section" className="bg-[#070b16] border-b border-slate-800/30 relative grid-texture">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 relative z-10">
          <Reveal>
            <span className="section-number block mb-4">/02</span>
            <h2 className="font-heading font-[800] text-4xl md:text-5xl uppercase tracking-wide text-slate-50 leading-[1.05] mb-2">
              What We <span className="gradient-text">Build</span>
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed mb-4">
              High-performance, mission-driven engineering across every engagement.
            </p>
            <div className="line-draw w-24 mb-12" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div
                  data-testid={`capability-card-${i}`}
                  className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full"
                >
                  <cap.icon className="text-blue-500 mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{cap.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY BFO ============ */}
      <section data-testid="why-bfo-section" className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <span className="section-number block mb-4">/03</span>
                <h2 className="font-heading font-[800] text-4xl md:text-5xl uppercase tracking-wide text-slate-50 leading-[1.05] mb-4">
                  Built<br/><span className="gradient-text">Different</span>
                </h2>
                <div className="line-draw w-16 my-6" />
                <p className="text-slate-400 text-base leading-relaxed">
                  We treat every project like a mission — scoped clearly, executed precisely, delivered on time.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'up'}>
                  <div data-testid={`pillar-${i}`} className="glow-card bg-[#0c1222]/40 border border-slate-800/40 p-6 group">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <span className="font-mono text-[0.65rem] text-blue-500/50 font-bold">{p.num}</span>
                      <p.icon className="text-blue-500 w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CASE STUDIES ============ */}
      <section data-testid="case-studies-section" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal>
            <span className="section-number block mb-4">/04</span>
            <h2 className="font-heading font-[800] text-4xl md:text-5xl uppercase tracking-wide text-slate-50 leading-[1.05] mb-2">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed mb-4">
              Real outcomes from real engagements across government, enterprise, and business.
            </p>
            <div className="line-draw w-24 mb-12" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12} direction="up">
                <Link
                  to={c.to}
                  data-testid={`case-card-${i}`}
                  className="glow-card group block bg-[#0c1222]/50 border border-slate-800/40 overflow-hidden h-full"
                >
                  {/* Metric header */}
                  <div className="bg-[#0a1020] border-b border-slate-800/30 px-7 py-5 flex items-end justify-between">
                    <span className="font-heading font-[800] text-3xl text-slate-50">{c.metric}</span>
                    <span className="font-mono text-[0.55rem] text-blue-400 uppercase tracking-wider">{c.metricLabel}</span>
                  </div>
                  <div className="p-7 relative z-10">
                    <span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.2em] text-blue-400 block mb-3">{c.sector}</span>
                    <h3 className="font-heading font-bold text-base uppercase tracking-wide text-slate-50 mb-3">{c.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.body}</p>
                    <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-heading font-bold uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ CTA ============ */}
      <section data-testid="cta-section" className="relative border-b border-slate-800/30 scanline-overlay">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b16] via-[#0a1020] to-[#070b16]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-28 lg:py-36 text-center">
          <Reveal direction="scale">
            <span className="section-number block mb-4">/06</span>
            <h2 className="font-heading font-[800] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-slate-50 leading-[1.02] mb-6">
              Ready to Deploy<br/>Your Next <span className="gradient-text">Mission</span>?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed mb-10">
              We scope projects clearly, document systems, and build for maintainability.
              We'll propose the right approach for your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BtnPrimary to="/contact" data-testid="cta-contact">
                Contact Us <ArrowRight size={14} className="inline ml-1" />
              </BtnPrimary>
              <BtnOutline to="/case-studies" data-testid="cta-cases">
                View Case Studies
              </BtnOutline>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
