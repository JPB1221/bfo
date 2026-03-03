import React from 'react';
import { Shield, Lock, Cloud, FileCheck, Users, Eye } from 'lucide-react';
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

import { Globe, Link2 } from 'lucide-react';

const SECURITY_FEATURES = [
  'Role-Based Access Control (RBAC)',
  'Multi-Factor Authentication',
  'Encryption at Rest and in Transit',
  'Comprehensive Audit Logging',
  'NIST-Informed Security Practices',
  'Structured Project Governance',
];

const GOV_BG = 'https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHw0fHxzYXRlbGxpdGUlMjBvcmJpdCUyMGVhcnRoJTIwbmV0d29yayUyMGNvbm5lY3Rpb258ZW58MHx8fHwxNzcyNTY1NzA3fDA&ixlib=rb-4.1.0&q=85';

export default function Government() {
  return (
    <>
      <PageHeader
        bg={GOV_BG}
        eyebrow="Government & Defense"
        title="Digital Modernization for the Public Sector"
        subtitle="We partner with local and state agencies to replace aging, paper-heavy workflows with secure, compliant online systems."
      />

      {/* Services */}
      <section data-testid="gov-services" className="bg-navy border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
              Services
            </span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-12">
              What We Deliver
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div data-testid={`gov-service-${i}`} className="group bg-surface/40 border border-slate-800/50 p-7 hover:border-accent/30 transition-all duration-300 relative">
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

      {/* Security */}
      <section data-testid="gov-security" className="bg-surface/30 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                Security & Governance
              </span>
              <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-4">
                Security-First Engineering
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Our engineering process incorporates security at every stage of the development lifecycle.
                We build systems informed by NIST guidelines and federal security best practices, deployed
                on secure cloud infrastructure.
              </p>
              <div className="flex gap-4 flex-wrap">
                <BtnPrimary to="/contact" data-testid="gov-cta-contact">Start a Project</BtnPrimary>
                <BtnOutline to="/capabilities" data-testid="gov-cta-capabilities">View Capabilities</BtnOutline>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                {SECURITY_FEATURES.map((feat, i) => (
                  <div key={i} data-testid={`gov-security-${i}`} className="flex items-start gap-4 bg-surface/40 border border-slate-800/50 p-5">
                    <Lock className="text-accent flex-shrink-0 mt-0.5 w-4 h-4" strokeWidth={1.5} />
                    <span className="text-slate-300 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Authority note */}
      <section className="bg-navy border-b border-slate-800/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 text-center">
          <Reveal>
            <Eye className="text-accent mx-auto mb-4 w-6 h-6" strokeWidth={1.5} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              For federal opportunities, Bare Force One LLC collaborates with larger prime contractors
              as a specialized subcontractor, bringing focused engineering capabilities and secure
              development practices to high-profile programs.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
