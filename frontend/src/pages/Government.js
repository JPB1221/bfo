import React from 'react';
import { Shield, Lock, Cloud, FileCheck, Users, Eye, Globe, Link2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

const SERVICES = [
  { icon: Globe, title: 'Government Portals', body: 'Procurement portals, permit and application portals, citizen-facing web applications.' },
  { icon: FileCheck, title: 'Workflow Automation', body: 'Digital forms, approvals, notifications, reporting, and audit-ready document trails.' },
  { icon: Link2, title: 'Integrations & Data', body: 'Secure connectors with CRM/ERP systems, payments, GIS mapping, and document management.' },
  { icon: Cloud, title: 'Cloud Migration & Hosting', body: 'AWS and Azure deployment within government-compliant environments.' },
  { icon: Shield, title: 'Security Engineering', body: 'Role-based access control, MFA, encryption at rest and in transit, audit logging.' },
  { icon: Users, title: 'Modernization Strategy', body: 'End-to-end planning for legacy system replacement with clear milestones and governance.' },
];

const SECURITY_FEATURES = [
  'Role-Based Access Control (RBAC)',
  'Multi-Factor Authentication',
  'Encryption at Rest and in Transit',
  'Comprehensive Audit Logging',
  'NIST-Informed Security Practices',
  'Structured Project Governance',
];

const GOV_BG = 'https://static.prod-images.emergentagent.com/jobs/64593ea8-c63b-4b2f-ba8f-f4321e869c80/images/4e5d915539e2595e27a5da74b9248f49471a403e580981ac6c4fd2fe37850060.png';

export default function Government() {
  return (
    <>
      <PageHeader
        bg={GOV_BG}
        eyebrow="Government & Defense"
        title="Digital Modernization for the Public Sector"
        subtitle="We partner with local and state agencies to replace aging, paper-heavy workflows with secure, compliant online systems."
      />

      <section data-testid="gov-services" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/01</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">What We Deliver</h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div data-testid={`gov-service-${i}`} className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full">
                  <s.icon className="text-blue-500 mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="gov-security" className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal direction="right">
              <span className="section-number block mb-3">/02</span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
                Security-First <span className="gradient-text">Engineering</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Our engineering process incorporates security at every stage of the development lifecycle. We build systems informed by NIST guidelines and federal security best practices.
              </p>
              <div className="flex gap-4 flex-wrap">
                <BtnPrimary to="/contact" data-testid="gov-cta-contact">Start a Project</BtnPrimary>
                <BtnOutline to="/capabilities" data-testid="gov-cta-capabilities">View Capabilities</BtnOutline>
              </div>
            </Reveal>
            <Reveal delay={0.15} direction="left">
              <div className="space-y-3">
                {SECURITY_FEATURES.map((feat, i) => (
                  <div key={i} data-testid={`gov-security-${i}`} className="flex items-center gap-4 bg-[#0c1222]/50 border border-slate-800/40 p-5 hover:border-blue-500/20 transition-colors">
                    <Lock className="text-blue-500 flex-shrink-0 w-4 h-4" strokeWidth={1.5} />
                    <span className="text-slate-300 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 text-center">
          <Reveal direction="scale">
            <Eye className="text-blue-500 mx-auto mb-4 w-6 h-6" strokeWidth={1.5} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              For federal opportunities, Bare Force One LLC collaborates with larger prime contractors as a specialized subcontractor.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
