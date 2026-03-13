/* ==========================================================================
   COMPONENT: Footer
   Design: Civic Warmth — dark teal background, 4-column layout
   Accessibility: WCAG 2.1 compliant with proper landmarks and labels
   ========================================================================== */

import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Programs & Degrees", href: "#programs" },
  { label: "Admissions", href: "#resources" },
  { label: "Financial Aid", href: "#resources" },
  { label: "Campus Tours", href: "#resources" },
  { label: "Student Portal", href: "#" },
  { label: "Academic Calendar", href: "#" },
  { label: "Library", href: "#" },
  { label: "Career Services", href: "#" },
];

const aboutLinks = [
  { label: "About STC", href: "#about" },
  { label: "Mission & Values", href: "#" },
  { label: "Leadership", href: "#" },
  { label: "Accreditation", href: "#" },
  { label: "News & Events", href: "#news" },
  { label: "Community Partnerships", href: "#" },
  { label: "Employment", href: "#" },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
      style={{ backgroundColor: "#0A1E28" }}
    >
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: Brand + contact */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded w-fit"
              aria-label="Southland Technical College — Home"
            >
              <div className="w-9 h-9 rounded-md bg-[#E8A020] flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-[#0D4F5C]" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Southland
                </span>
                <span className="block text-amber-300 text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Technical College
                </span>
              </div>
            </a>

            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Empowering students with the skills, credentials, and confidence to build meaningful careers since 1998.
            </p>

            {/* Contact info */}
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  1200 Technical Drive<br />
                  Southland, ST 00000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+15550000000"
                  className="text-white/70 hover:text-amber-300 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  (555) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@stc.edu"
                  className="text-white/70 hover:text-amber-300 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  info@stc.edu
                </a>
              </div>
            </address>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Quick links">
            <h3
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-300 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: About */}
          <nav aria-label="About the college">
            <h3
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About STC
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-300 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Connect */}
          <div>
            <h3
              className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Connect With Us
            </h3>

            {/* Social icons */}
            <div className="flex flex-wrap gap-3 mb-8" role="list" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    role="listitem"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E8A020] flex items-center justify-center transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter signup */}
            <div>
              <p
                className="text-white/70 text-sm mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get updates on programs, events, and deadlines:
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Newsletter signup"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-w-0"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="bg-[#E8A020] hover:bg-amber-400 text-[#0D4F5C] font-bold text-sm px-4 py-2.5 rounded-lg transition-colors flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-white/40 text-xs text-center md:text-left"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              &copy; 2026 Southland Technical College. All rights reserved.{" "}
              <span className="text-amber-500/60">
                This is a concept demo — not an official college website.
              </span>
            </p>

            <nav aria-label="Legal and accessibility links">
              <ul className="flex flex-wrap items-center gap-4 justify-center" role="list">
                {[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Use", href: "#" },
                  { label: "Accessibility Statement", href: "#" },
                  { label: "Non-Discrimination Policy", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-amber-300 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
