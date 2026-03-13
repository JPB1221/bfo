import React from 'react';
import { Calculator, FileText, Briefcase, Building, Shield, BarChart3, BookOpen, DollarSign, Scale, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';

const SERVICES = [
  { icon: Calculator, title: 'Tax Preparation & Planning', body: 'Individual and business tax preparation with strategic year-round planning to minimize your liability.' },
  { icon: FileText, title: 'Accounting & Bookkeeping', body: 'Comprehensive bookkeeping, financial records management, and monthly reconciliation services.' },
  { icon: Briefcase, title: 'Business Consulting', body: 'Strategic guidance on entity selection, incorporation, and operational efficiency for growing businesses.' },
  { icon: BarChart3, title: 'Financial Analysis', body: 'Detailed financial analysis and reporting to support informed business decisions.' },
  { icon: Shield, title: 'IRS Representation', body: 'Enrolled agents admitted to practice before the IRS — audit support and resolution services.' },
  { icon: DollarSign, title: 'Payroll Services', body: 'Payroll processing, tax deposits, quarterly filings, and year-end W-2 preparation.' },
  { icon: Scale, title: 'Estate & Trust Tax Preparation', body: 'Specialized tax preparation for estates, trusts, and fiduciary returns.' },
  { icon: Building, title: 'Financial Statements', body: 'Compilations, reviews, and audit-ready financial statements for businesses of all sizes.' },
  { icon: BookOpen, title: 'Financial Education', body: 'Financial literacy programs and personalized guidance, especially for seniors and first-time filers.' },
];

const VALUES = [
  { title: 'Family-Owned Since 1965', body: 'Three generations of trusted service to our community.' },
  { title: 'Enrolled Agents', body: 'Admitted to practice before the IRS with extensive tax expertise.' },
  { title: 'Personalized Attention', body: 'Every client gets the dedicated, one-on-one service they deserve.' },
  { title: 'Community Focused', body: 'Proudly serving families and small businesses in our community for over 60 years.' },
];

const CTA_URL = 'https://buy.stripe.com/dRm5kE5B0aaf8WW45J2VG01';

export default function DemoTax() {
  return (
    <>
      <SEO
        title="Demo — Tax Services Website"
        description="A demonstration tax and accounting firm website created by Bare Force One LLC. See what we can build for your tax or financial services business."
        path="/demo/tax"
      />

      {/* ============ BFO DEMO BANNER ============ */}
      <section className="relative pt-24 lg:pt-28 bg-[#070b16]">
        <div className="bg-blue-500/10 border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center">
            <p className="font-heading font-bold text-sm md:text-base uppercase tracking-[0.15em] text-blue-400 mb-1">
              This is a demonstration website created by Bare Force One.
            </p>
            <p className="text-slate-400 text-sm">
              We can build a website like this for your business in 48 hours.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3 px-8 mt-4 transition-all duration-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98]"
            >
              Get a Website Like This <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#070b16]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a2e]/40 via-[#070b16]/60 to-[#070b16]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(212,168,67,0.04) 0%, transparent 70%)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <Reveal direction="scale">
            <span className="inline-block font-heading text-[0.6rem] font-bold uppercase tracking-[0.25em] text-amber-400 border border-amber-500/20 bg-amber-500/5 px-5 py-2 mb-6">
              Tax & Accounting Demo
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading font-[800] text-4xl md:text-5xl lg:text-[4.5rem] uppercase tracking-wider text-slate-50 leading-[0.95] mb-4">
              Santos<br />
              <span className="text-amber-400">Associates</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-slate-300 text-xl md:text-2xl font-heading uppercase tracking-wider mb-4">
              Tax &amp; Accounting Services
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              A family business since 1965. Personalized tax preparation, accounting, and financial planning services — trusted by our community for over 60 years.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 text-slate-500 text-xs font-mono uppercase tracking-wider">
              <span>Est. 1965</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>Enrolled Agents</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>IRS Authorized</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-[#090e1a] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/01</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg leading-relaxed mb-2">
              Comprehensive tax and financial services for individuals, families, and businesses.
            </p>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} direction={i % 2 === 0 ? 'up' : 'scale'}>
                <div className="glow-card bg-[#0c1222]/50 border border-slate-800/40 p-7 h-full group">
                  <s.icon className="text-amber-400 mb-4 w-5 h-5 relative z-10" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-50 mb-2 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="bg-[#070b16] border-b border-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <span className="section-number block mb-3">/02</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50 mb-2">
              Why <span className="text-amber-400">Choose Us</span>
            </h2>
            <div className="line-draw w-16 mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} direction="left">
                <div className="border-l-2 border-amber-400 pl-6 py-3 hover:border-slate-50 transition-colors">
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-slate-50 mb-1">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FOOTER ============ */}
      <section className="relative border-b border-slate-800/30 scanline-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b16] via-[#0a1020] to-[#070b16]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 lg:py-32 text-center">
          <Reveal direction="scale">
            <h2 className="font-heading font-[800] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-50 leading-[1.02] mb-4">
              Need a Website Like <span className="text-amber-400">This</span>?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed mb-8">
              Bare Force One builds professional websites for tax firms, accountants, and financial service providers — delivered in as little as 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-heading font-bold text-[0.65rem] uppercase tracking-[0.2em] py-3.5 px-8 transition-all duration-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] active:scale-[0.98]"
              >
                Get a Website Like This <ArrowRight size={14} />
              </a>
              <BtnPrimary to="/" className="border border-slate-700 !bg-transparent text-slate-400 hover:border-blue-500 hover:text-white hover:!bg-blue-500/10">
                Back to Bare Force One
              </BtnPrimary>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
