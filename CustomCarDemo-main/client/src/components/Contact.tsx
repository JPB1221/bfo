/* =============================================================
   CONTACT — Miami Vice Customs
   Dark Retrowave Luxury: split layout, contact info left,
   form right, gradient accents throughout.
   ============================================================= */
import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch shortly.", {
        style: { background: "#0a0f1e", border: "1px solid rgba(0,212,255,0.3)", color: "#fff" },
      });
      setForm({ name: "", phone: "", vehicle: "", service: "", message: "" });
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3 text-sm text-white placeholder-white/30 rounded-sm outline-none transition-all duration-200 focus:border-[#00d4ff]/60 bg-white/[0.04] border border-white/10 focus:bg-white/[0.06]";

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative"
      style={{ background: "#080c14" }}
    >
      {/* Glow accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00d4ff]">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-6xl lg:text-8xl text-white leading-none">
            LET'S
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BUILD
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-white/55 leading-relaxed text-sm">
              Ready to transform your vehicle? Reach out via phone, Instagram DM, or fill out
              the form and we'll get back to you with a free quote.
            </p>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "(000) 000-0000",
                href: "tel:0000000000",
                color: "#00d4ff",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@yourbrand",
                href: "#",
                color: "#ff2d78",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Your City, State",
                href: null,
                color: "#00d4ff",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Sat: 9AM – 6PM",
                href: null,
                color: "#ff2d78",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="flex items-start gap-4 p-4 rounded-sm transition-colors duration-200 hover:bg-white/[0.03]"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(305) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">
                  Your Vehicle
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2023 McLaren 720S"
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">
                  Service Interested In
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass}
                  style={{ appearance: "none" }}
                >
                  <option value="" style={{ background: "#080c14" }}>Select a service...</option>
                  <option value="wrap" style={{ background: "#080c14" }}>Vinyl Wrap</option>
                  <option value="ceramic" style={{ background: "#080c14" }}>Ceramic Coating</option>
                  <option value="ppf" style={{ background: "#080c14" }}>Paint Protection Film</option>
                  <option value="tint" style={{ background: "#080c14" }}>Window Tinting</option>
                  <option value="other" style={{ background: "#080c14" }}>Other / Multiple</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 text-sm font-semibold tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00d4ff]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                }}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
