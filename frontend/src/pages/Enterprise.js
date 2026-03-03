import React from 'react';
import { Server, Cpu, Link2, BarChart3, Cloud, Zap } from 'lucide-react';
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

const ENT_BG = 'https://images.unsplash.com/photo-1694843689189-2ad1a6c4a364?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaHVkJTIwaW50ZXJmYWNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDB8fHx8MTc3MjU2NTcwOHww&ixlib=rb-4.1.0&q=85';

export default function Enterprise() {
  return (
    <>
      <PageHeader
        bg={ENT_BG}
        eyebrow="Enterprise"
        title="Digital Transformation for Enterprise Organizations"
        subtitle="We help departments and teams modernize legacy workflows, automate operations, and build data-driven systems that perform at scale."
      />

      {/* Services */}
      <section data-testid="ent-services" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Services
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              Enterprise Engineering
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div data-testid={`ent-service-${i}`} className="group bg-surface/40 border border-slate-800/50 p-7 hover:border-accent/30 transition-all duration-300 relative">
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <s.icon className="text-accent mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section data-testid="ent-diff" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                Why Enterprise Teams Choose Us
              </span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-6">
                Engineered for Scale
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Our solutions are reliable, well-documented, and maintainable long after go-live.
                We focus on delivering measurable business outcomes, not just features.
              </p>
              <div className="flex gap-4 flex-wrap">
                <BtnPrimary to="/contact" data-testid="ent-cta-contact">Start a Project</BtnPrimary>
                <BtnOutline to="/capabilities" data-testid="ent-cta-capabilities">View Capabilities</BtnOutline>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                {DIFFERENTIATORS.map((d, i) => (
                  <div key={i} data-testid={`ent-diff-${i}`} className="border-l-2 border-accent pl-5 py-2">
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
