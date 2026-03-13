import React from 'react';
import { Shield, Lock, Cloud, FileCheck, Users, Eye, Globe, Link2, ExternalLink, Monitor, LayoutDashboard, GitBranch } from 'lucide-react';
import SEO from '../components/SEO';
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
      <SEO
        title="Government Solutions"
        description="Secure, compliant software systems for local and state government agencies. NIST-informed security practices, cloud deployment, and digital modernization."
        path="/government"
      />
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

      {/* Reference Government Solution — Permit Portal */}
      <section data-testid="gov-reference-solution" className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/03</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Reference Government <span className="gradient-text">Solution</span>
            </h2>
            <div className="line-draw w-16 mb-4" />
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-12">
              The following platform was designed and built by Bare Force One to demonstrate the type of municipal digital infrastructure we deliver for government clients.
            </p>
          </Reveal>

          <Reveal direction="up">
            <div className="bg-[#0c1222]/60 border border-slate-800/50 hover:border-blue-500/30 transition-colors overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Info */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 mb-6 uppercase tracking-wider">
                      Municipal Government Platform
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-slate-50 mb-3">City of Maplewood — Permit &amp; Inspection Portal</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      A full-stack municipal permitting system with a citizen-facing portal, staff dashboard, and permit workflow tracker. Designed to replace paper-based processes with a secure, auditable digital platform.
                    </p>
                    <div className="space-y-3 mb-8">
                      {[
                        { icon: Monitor, label: 'Citizen Portal', desc: 'Online permit applications, status tracking, and document upload' },
                        { icon: LayoutDashboard, label: 'Staff Dashboard', desc: 'Permit queue management, inspection scheduling, and GIS map integration' },
                        { icon: GitBranch, label: 'Permit Workflow', desc: 'End-to-end permit lifecycle with multi-stage approval and audit trail' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <item.icon className="text-blue-500 flex-shrink-0 w-4 h-4 mt-0.5" strokeWidth={1.5} />
                          <div>
                            <span className="text-slate-200 text-sm font-semibold">{item.label}</span>
                            <span className="text-slate-500 text-sm"> — {item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="/demo/permit-portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                    >
                      View Concept Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-slate-100 text-sm font-semibold px-5 py-2.5 transition-colors"
                    >
                      Request a Similar Solution
                    </a>
                  </div>
                </div>
                {/* Right: Preview panels */}
                <div className="bg-[#070b16] border-l border-slate-800/50 p-6 flex flex-col gap-4">
                  <div className="text-xs text-slate-600 uppercase tracking-widest mb-1 font-semibold">Platform Preview</div>
                  {[
                    { href: '/demo/permit-portal', label: 'Citizen Portal', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
                    { href: '/demo/permit-portal/dashboard', label: 'Staff Dashboard', color: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
                    { href: '/demo/permit-portal/workflow', label: 'Permit Workflow', color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
                  ].map((panel) => (
                    <a
                      key={panel.label}
                      href={panel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-4 border ${panel.color} hover:opacity-80 transition-opacity`}
                    >
                      <span className="text-sm font-semibold">{panel.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ))}
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    Concept demonstration created by Bare Force One to illustrate a modern municipal permitting system.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
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
