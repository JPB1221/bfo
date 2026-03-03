import React from 'react';
import SEO from '../components/SEO';
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
    metric: '100%',
    metricLabel: 'HIPAA Compliant',
  },
  {
    sector: 'Higher Education / EdTech',
    title: 'Interactive 3D Digital Campus Prototype',
    client: 'University of Wisconsin',
    problem: 'The university sought an immersive digital experience to support prospective student engagement, campus orientation, and experimental gamified learning.',
    solution: 'Developed an interactive 3D digital campus prototype using Unity Engine with spatial navigation, gamified learning modules, and secure testing environments for pilot programs.',
    outcome: 'Full 3D prototype delivered on schedule with positive stakeholder feedback. Prototype cleared for expanded development and campus-wide rollout discussions.',
    stack: 'Unity Engine, C#, WebGL, Secure Testing',
    metric: '3D',
    metricLabel: 'Interactive Prototype',
  },
  {
    sector: 'Enterprise / E-Commerce',
    title: 'Enterprise E-Commerce Middleware Modernization',
    client: 'Enterprise E-Commerce Client',
    problem: 'An enterprise client generating $12M in annual revenue was experiencing system bottlenecks and integration failures across their middleware layer.',
    solution: 'Bare Force One designed and deployed a modernized middleware architecture with robust error handling, load distribution, and monitoring.',
    outcome: '99.9% uptime achieved across high-traffic periods. Revenue-critical integrations stabilized, supporting $12M+ annual throughput.',
    stack: 'Node.js, AWS, Redis, API Gateway',
    metric: '99.9%',
    metricLabel: 'Uptime Achieved',
  },
  {
    sector: 'Enterprise / Global Brands',
    title: 'Web Infrastructure & Localization for Global Brands',
    client: 'Duolingo, Hilary Duff Brand Portfolio',
    problem: 'High-profile global brands required scalable web infrastructure and localization services to support multi-region audiences.',
    solution: 'Built and maintained web infrastructure supporting localization workflows, multi-region CDN deployment, and brand-consistent front-end experiences.',
    outcome: 'Seamless multi-region deployment with localized content delivery. Brand consistency maintained across all digital touchpoints.',
    stack: 'React, CDN Architecture, CMS, Localization Tools',
    metric: 'Global',
    metricLabel: 'Multi-Region Deploy',
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real outcomes from real engagements. HIPAA-compliant mHealth apps, 3D campus prototypes, enterprise middleware modernization, and global brand infrastructure."
        path="/case-studies"
      />
      <PageHeader
        eyebrow="Case Studies"
        title="Proven Results"
        subtitle="Real outcomes from real engagements. Every project is scoped to deliver measurable results."
      />

      <section data-testid="case-studies-list" className="bg-[#070b16]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-28 space-y-6">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} direction={i % 2 === 0 ? 'left' : 'right'}>
              <article data-testid={`case-study-${i}`} className="glow-card bg-[#0c1222]/50 border border-slate-800/40 overflow-hidden">
                {/* Metric bar */}
                <div className="bg-[#0a1020] border-b border-slate-800/30 px-8 py-5 flex items-end justify-between relative z-10">
                  <div className="flex items-end gap-4">
                    <span className="font-heading font-[800] text-4xl text-slate-50">{c.metric}</span>
                    <span className="font-mono text-[0.6rem] text-blue-400 uppercase tracking-wider pb-1">{c.metricLabel}</span>
                  </div>
                  <span className="font-mono text-[0.55rem] text-slate-500">{c.client}</span>
                </div>

                <div className="p-8 md:p-10 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/5 border border-blue-500/20 px-3 py-1">
                      {c.sector}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl md:text-2xl uppercase tracking-wide text-slate-50 mb-6">{c.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-blue-400 mb-2">Problem</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-blue-400 mb-2">Solution</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-[0.6rem] font-bold uppercase tracking-[0.18em] text-blue-400 mb-2">Outcome</h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-medium">{c.outcome}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/30 pt-4">
                    <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider">Tech: </span>
                    <span className="font-mono text-[0.6rem] text-slate-400">{c.stack}</span>
                  </div>
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
