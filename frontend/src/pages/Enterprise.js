import React from 'react';
import { Server, Cpu, Link2, BarChart3, Cloud, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const SERVICES = [
  { icon: Cpu, title: 'Custom Software Development', body: 'Internal tools, dashboards, and operational platforms engineered for complex enterprise environments.' },
  { icon: Zap, title: 'Workflow Automation', body: 'Approvals, notifications, reporting, and compliance workflows that eliminate manual bottlenecks.' },
  { icon: Link2, title: 'Systems Integration', body: 'Secure connectors with CRMs, ERPs, and third-party APIs for seamless data flow across departments.' },
  { icon: BarChart3, title: 'Data & Analytics', body: 'Decision support dashboards, reporting pipelines, and AI-assisted insights that drive informed action.' },
  { icon: Cloud, title: 'Cloud Architecture', body: 'Migration, infrastructure design, and performance optimization for enterprise-scale workloads.' },
  { icon: Server, title: 'Performance Optimization', body: 'Architecture reviews, load testing, and system tuning for high-availability requirements.' },
];

const DIFFERENTIATORS = [
  'Results-driven engineering focused on efficiency',
  'Documented, maintainable systems built for long-term value',
  'Agile process with clear milestones and stakeholder visibility',
  'Secure-by-design architecture at every layer',
];

const ENT_BG = '/enterprise-bg.webp';

export default function Enterprise() {
  return (
    <>
      <SEO
        title="Enterprise Digital Transformation & Custom Software"
        description="Bare Force One delivers enterprise digital transformation, workflow automation, and custom software engineered for scale. Cloud architecture, systems integration, and AI automation for enterprise teams."
        path="/enterprise"
      />
      <PageHeader
        bg={ENT_BG}
        eyebrow="Enterprise"
        title="Digital Transformation for Enterprise Organizations"
        subtitle="We help departments and teams modernize legacy workflows, automate operations, and build data-driven systems that perform at scale."
      />

      <section data-testid="ent-services" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/01</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Enterprise <span className="gradient-text">Engineering</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div data-testid={`ent-service-${i}`} className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full">
                  <s.icon className="text-blue-500 mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="ent-diff" className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <span className="section-number block mb-3">/02</span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-6">
                Engineered for <span className="gradient-text">Scale</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Our solutions are reliable, well-documented, and maintainable long after go-live. We focus on delivering measurable business outcomes, not just features.
              </p>
              <div className="flex gap-4 flex-wrap">
                <BtnPrimary to="/contact" data-testid="ent-cta-contact">Start a Project</BtnPrimary>
                <BtnOutline to="/capabilities" data-testid="ent-cta-capabilities">View Capabilities</BtnOutline>
              </div>
            </Reveal>
            <Reveal delay={0.15} direction="left">
              <div className="space-y-4">
                {DIFFERENTIATORS.map((d, i) => (
                  <div key={i} data-testid={`ent-diff-${i}`} className="border-l-2 border-blue-500 pl-5 py-2 hover:border-slate-50 transition-colors">
                    <p className="text-slate-300 text-sm font-medium">{d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
