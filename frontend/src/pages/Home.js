import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Globe, Cpu, Link2, BarChart3, ChevronRight, Lock, Zap, Target, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const HERO_BG = 'https://images.unsplash.com/photo-1704773988833-af2f8709a831?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxhZXJpYWwlMjB2aWV3JTIwY2l0eSUyMG5pZ2h0JTIwY3liZXIlMjBmdXR1cmV8ZW58MHx8fHwxNzcyNTY1NzA2fDA&ixlib=rb-4.1.0&q=85';

const TRUST_ITEMS = [
  'SAM.gov Registered',
  'Secure-by-Design',
  'Cloud-Ready Architecture',
  'NIST-Aligned Practices',
  'Agile Delivery',
];

const AUDIENCES = [
  {
    badge: 'Government & Defense',
    title: 'Public Sector',
    body: 'Secure, compliant systems for local and state agencies modernizing operations, procurement, and citizen services.',
    to: '/government',
    icon: Shield,
  },
  {
    badge: 'Enterprise',
    title: 'Enterprise Organizations',
    body: 'Efficiency-driven digital transformation, automation, and data-powered performance for departments and teams.',
    to: '/enterprise',
    icon: Server,
  },
  {
    badge: 'Local Business',
    title: 'Growth-Focused Businesses',
    body: 'Fast, secure websites, mobile apps, and back-office automation that save time and increase revenue.',
    to: '/local-business',
    icon: BarChart3,
  },
];

const CAPABILITIES = [
  { icon: Globe, title: 'Custom Software Development', body: 'Web platforms, portals, internal tools, and citizen-facing applications designed for reliability and scale.' },
  { icon: Cpu, title: 'Mobile Application Development', body: 'Native and cross-platform mobile apps that put critical tools in the hands of field teams and end users.' },
  { icon: Server, title: 'Cloud Architecture', body: 'Cloud migration, secure deployment, and infrastructure designed for compliance and performance.' },
  { icon: Zap, title: 'AI & Automation', body: 'Document processing, intelligent search, decision support, and workflow automation that improve speed and accuracy.' },
  { icon: Link2, title: 'Systems Integration', body: 'Secure connectors with CRMs, ERPs, payment systems, document management, and third-party APIs.' },
  { icon: BarChart3, title: 'Digital Transformation Strategy', body: 'End-to-end modernization planning and execution for organizations replacing legacy systems.' },
];

const PILLARS = [
  { icon: Lock, title: 'Secure-by-Design', body: 'Security is engineered into every layer, not bolted on after the fact.' },
  { icon: Clock, title: 'Agile Process', body: 'Rapid iteration with clear milestones, documentation, and stakeholder visibility.' },
  { icon: Zap, title: 'Performance-Focused', body: 'Systems engineered for speed, reliability, and long-term maintainability.' },
  { icon: Target, title: 'Mission-Driven', body: 'Every project scoped clearly, executed precisely, delivered on time.' },
];

const CASES = [
  {
    sector: 'Higher Education',
    title: 'HIPAA-Compliant mHealth Applications',
    body: 'Engineered mobile health applications for the University of Colorado Anschutz Medical Campus, processing sensitive patient data under strict regulatory standards.',
    result: 'HIPAA-compliant, Regulatory-ready',
    to: '/case-studies',
  },
  {
    sector: 'Higher Education',
    title: 'Interactive 3D Digital Campus',
    body: 'Developed an interactive 3D digital campus prototype for the University of Wisconsin using Unity Engine with spatial navigation and gamified learning.',
    result: 'Full 3D prototype delivered',
    to: '/case-studies',
  },
  {
    sector: 'Enterprise',
    title: 'E-Commerce Middleware Modernization',
    body: 'Built enterprise middleware for a client generating $12M annually, achieving 99.9% uptime across high-traffic environments.',
    result: '99.9% uptime, $12M revenue',
    to: '/case-studies',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section data-testid="hero-section" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/75 to-navy" />
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0a0f1c 80%)' }} />
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.06] blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent border border-accent/25 bg-accent/5 px-5 py-2 mb-8">
              Software Development & Digital Transformation
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading font-[800] text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide text-slate-50 leading-[1.02] mb-6">
              Mission-Ready Software for<br className="hidden md:block" />
              <span className="text-accent">Government, Enterprise</span><br className="hidden md:block" />
              & Growth-Focused Businesses
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Bare Force One LLC builds secure, scalable software systems for government agencies,
              enterprise organizations, and growth-focused businesses.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <BtnPrimary to="/capabilities" data-testid="hero-cta-capabilities">
                View Capabilities
              </BtnPrimary>
              <BtnOutline to="/contact" data-testid="hero-cta-contact">
                Start a Project
              </BtnOutline>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-mono text-xs text-slate-500 tracking-wider">
              UEI: FJRRJ6JNJ375 &middot; Fort Lauderdale, Florida
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section data-testid="trust-bar" className="bg-surface border-y border-slate-800/40 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section data-testid="audiences-section" className="bg-void/50 border-b border-slate-800/40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Who We Serve
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
              Tailored Solutions
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed mb-12">
              Purpose-built systems for organizations that demand performance, security, and long-term value.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.to} delay={i * 0.1}>
                <Link
                  to={a.to}
                  data-testid={`audience-card-${a.badge.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block bg-surface/50 backdrop-blur-sm border border-slate-800/50 p-8 hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a.icon className="text-accent mb-4 w-6 h-6" strokeWidth={1.5} />
                  <span className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent block mb-3">
                    {a.badge}
                  </span>
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-slate-50 mb-3">
                    {a.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{a.body}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs font-medium uppercase tracking-wider group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section data-testid="capabilities-section" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Core Capabilities
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
              What We Build
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed mb-12">
              High-performance, mission-driven engineering across every engagement.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.08}>
                <div
                  data-testid={`capability-card-${i}`}
                  className="group bg-surface/40 border border-slate-800/50 p-7 hover:border-accent/30 transition-all duration-300 relative"
                >
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <cap.icon className="text-accent mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BFO */}
      <section data-testid="why-bfo-section" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Why Bare Force One
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              Built Different
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div data-testid={`pillar-${i}`} className="border-l-2 border-accent pl-5 hover:border-slate-50 transition-colors">
                  <p.icon className="text-accent mb-3 w-5 h-5" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section data-testid="case-studies-section" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Case Studies
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
              Proven Results
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed mb-12">
              Real outcomes from real engagements across government, enterprise, and local business.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <Link
                  to={c.to}
                  data-testid={`case-card-${i}`}
                  className="group block bg-surface/40 border border-slate-800/50 p-7 hover:border-accent/30 transition-all duration-300"
                >
                  <span className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent block mb-3">
                    {c.sector}
                  </span>
                  <h3 className="font-heading font-bold text-base uppercase tracking-wide text-slate-50 mb-3">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{c.body}</p>
                  <div className="border-t border-slate-800/50 pt-4">
                    <p className="font-mono text-xs font-medium text-accent">{c.result}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section data-testid="cta-section" className="relative border-b border-slate-800/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32 text-center">
          <Reveal>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-50 mb-4">
              Ready to Deploy Your<br />Next Mission?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed mb-10">
              We scope projects clearly, document systems, and build for maintainability.
              Whether you need a streamlined application or a full modernization initiative,
              we'll propose the right approach for your budget and timeline.
            </p>
            <BtnPrimary to="/contact" data-testid="cta-contact">
              Contact Us
            </BtnPrimary>
          </Reveal>
        </div>
      </section>
    </>
  );
}
