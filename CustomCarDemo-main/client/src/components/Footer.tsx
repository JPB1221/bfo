/* =============================================================
   FOOTER — Miami Vice Customs
   Dark Retrowave Luxury: minimal footer with gradient logo,
   nav links, and social links.
   ============================================================= */
import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "#060910",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-display text-2xl tracking-widest text-white">YOUR BRAND</p>
              <p
                className="font-display text-sm tracking-[0.35em]"
                style={{
                  background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CUSTOMS
              </p>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Elite Car Styling Studio. Cutting-edge designs and high-quality installs.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:0000000000"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={13} className="text-[#00d4ff]" />
                (000) 000-0000
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <Instagram size={13} className="text-[#ff2d78]" />
                @yourbrand
              </a>
              <p className="text-white/30 text-xs">Your City, State</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/25 text-xs">
            © {year} Your Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff2d78]" />
            <p className="text-white/20 text-xs ml-1">Your City</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
