import React from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const CASES = [
  {
    sector: 'Higher Education / Healthcare',
    title: 'HIPAA-Compliant mHealth Applications',
    client: 'University of Colorado — Anschutz Medical Campus',
    problem: 'The university required mobile health applications capable of processing sensitive patient data under strict HIPAA regulatory standards, with no room for security gaps.',
    solution: 'Bare Force One engineered a suite of mobile health (mHealth) applications with end-to-end encryption, role-based access control, and full audit logging — deployed within a HIPAA-compliant cloud environment.',
    outcome: 'Fully HIPAA-compliant platform processing regulated health data with zero security incidents. Platform approved for active clinical use.',
    stack: 'React Native, AWS, Node.js, PostgreSQL',
  },
  {
    sector: 'Higher Education / EdTech',
    title: 'Interactive 3D Digital Campus Prototype',
    client: 'University of Wisconsin',
    problem: 'The university sought an immersive digital experience to support prospective student engagement, campus orientation, and experimental gamified learning — without relying on physical tours.',
    solution: 'Developed an interactive 3D digital campus prototype using Unity Engine with spatial navigation, gamified learning modules, and secure testing environments for pilot programs.',
    outcome: 'Full 3D prototype delivered on schedule with positive stakeholder feedback. Prototype cleared for expanded development and campus-wide rollout discussions.',
    stack: 'Unity Engine, C#, WebGL, Secure Testing',
  },
  {
    sector: 'Enterprise / E-Commerce',
    title: 'Enterprise E-Commerce Middleware Modernization',
    client: 'Enterprise E-Commerce Client',
    problem: 'An enterprise client generating $12M in annual revenue was experiencing system bottlenecks and integration failures across their middleware layer, threatening uptime and customer experience.',
    solution: 'Bare Force One designed and deployed a modernized middleware architecture with robust error handling, load distribution, and monitoring — achieving enterprise-grade stability.',
    outcome: '99.9% uptime achieved across high-traffic periods. Revenue-critical integrations stabilized, supporting $12M+ annual throughput without disruption.',
    stack: 'Node.js, AWS, Redis, API Gateway',
  },
  {
    sector: 'Enterprise / Global Brands',
    title: 'Web Infrastructure & Localization for Global Brands',
    client: 'Duolingo, Hilary Duff Brand Portfolio',
    problem: 'High-profile global brands required scalable web infrastructure and localization services to support multi-region audiences with consistent brand experiences.',
    solution: 'Built and maintained web infrastructure supporting localization workflows, multi-region CDN deployment, and brand-consistent front-end experiences across diverse product lines.',
    outcome: 'Seamless multi-region deployment with localized content delivery. Brand consistency maintained across all digital touchpoints.',
    stack: 'React, CDN Architecture, CMS, Localization Tools',
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Proven Results"
        subtitle="Real outcomes from real engagements. Every project is scoped to deliver measurable results for our clients."
      />

      <section data-testid="case-studies-list" className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 space-y-8">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article data-testid={`case-study-${i}`} className="bg-surface/40 border border-slate-800/50 p-8 md:p-10 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent bg-accent/5 border border-accent/20 px-3 py-1">
                    {c.sector}
                  </span>
                  <span className="font-mono text-[0.65rem] text-slate-500">{c.client}</span>
                </div>

                <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-wide text-slate-50 mb-6">
                  {c.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent mb-2">Problem</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent mb-2">Solution</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent mb-2">Outcome</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{c.outcome}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800/40 pt-4">
                  <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">Tech: </span>
                  <span className="font-mono text-[0.65rem] text-slate-400">{c.stack}</span>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="text-center pt-8">
              <p className="text-slate-400 text-sm mb-6">Have a project in mind? We'd like to hear about it.</p>
              <BtnPrimary to="/contact" data-testid="cs-cta-contact">Start a Conversation</BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
