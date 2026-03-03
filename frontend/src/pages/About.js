import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import { BtnPrimary } from '../components/Buttons';

const TEAM_BG = 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHRlYW0lMjBzZXJpb3VzfGVufDB8fHx8MTc3MjU2NTcwOXww&ixlib=rb-4.1.0&q=85';

export default function About() {
  return (
    <>
      <PageHeader
        bg={TEAM_BG}
        eyebrow="About"
        title="Bare Force One LLC"
        subtitle="Software development and digital transformation firm specializing in mission-ready solutions for government, enterprise, and growth-focused businesses."
      />

      {/* What we are + What we are not */}
      <section data-testid="about-identity" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal direction="right">
              <span className="section-number block mb-3">/01</span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-6">
                High-Performance, <span className="gradient-text">Mission-Driven</span> Engineers
              </h2>
              <div className="line-draw w-16 mb-6" />
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                We design and build custom software, mobile applications, and cloud-based systems engineered for performance and security. Our systems are documented, maintainable, and built to last.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Bare Force One LLC brings focused engineering capabilities to complex technical challenges — from modernizing government operations to building enterprise-scale automation.
              </p>
            </Reveal>

            <Reveal delay={0.15} direction="left">
              <span className="section-number block mb-3">/02</span>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-slate-50 mb-6">What We Are Not</h3>
              <div className="space-y-3">
                {['Not a flashy design agency', 'Not a generic web dev freelancer', 'Not overly corporate and stiff', 'Not playful SaaS startup pastel branding'].map((item, i) => (
                  <div key={i} data-testid={`about-not-${i}`} className="border-l-2 border-slate-700 hover:border-blue-500 pl-5 py-2 transition-colors">
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 25, suffix: '+', label: 'Projects' },
              { value: 10, suffix: '+', label: 'Years' },
              { value: 5, suffix: '.0', label: 'Rating' },
              { value: 99, suffix: '%', label: 'On-Time' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} direction="scale">
                <div className="text-center">
                  <div className="font-heading font-[800] text-3xl text-slate-50 mb-1">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-slate-500">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section data-testid="about-info" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Company', main: 'Bare Force One LLC', sub: 'U.S.-Registered Limited Liability Company' },
                { label: 'Location', main: 'Fort Lauderdale, Florida', sub: 'UEI: FJRRJ6JNJ375' },
                { label: 'Contact', main: 'contracts@bareforceone.com', sub: '954-296-9953', href: 'mailto:contracts@bareforceone.com' },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 0.1} direction="up">
                  <div className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-8 relative z-10">
                    <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-blue-400 mb-4">{c.label}</h3>
                    {c.href ? (
                      <a href={c.href} className="text-slate-300 text-sm font-medium hover:text-blue-400 transition-colors block mb-1">{c.main}</a>
                    ) : (
                      <p className="text-slate-300 text-sm font-medium mb-1">{c.main}</p>
                    )}
                    <p className="text-slate-500 text-xs font-mono">{c.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
              <BtnPrimary to="/contact" data-testid="about-cta-contact">Start a Project</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
