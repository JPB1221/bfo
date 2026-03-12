/* =============================================================
   SERVICES — Miami Vice Customs
   Dark Retrowave Luxury: glassmorphism cards with gradient
   borders, staggered entrance animations.
   Featured card uses AI-generated automotive imagery.
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Shield, Eye, Droplets } from "lucide-react";

const REAL_CAR =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-wrap-JDNnT8SBAFzpVuBfboJ79s.webp";
const REAL_FRONT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-ceramic-cThoZwepKWzsvDRH4kxnN7.webp";
const REAL_HOOD =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-ppf2-JZAcM3HVcQdJq9tGHXWZkp.webp";
const REAL_WHEEL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-tint-Ln6cfJsgCVvaQ8y9Ayi3mP.webp";

const services = [
  {
    number: "01",
    icon: Layers,
    title: "Vinyl Wraps",
    subtitle: "Full & Partial",
    description:
      "Transform your vehicle with premium vinyl wraps. Full color changes, custom designs, and partial accents — all installed with precision and care.",
    features: ["Full Vehicle Wraps", "Partial Wraps", "Custom Designs", "Color Changes"],
    image: REAL_CAR,
    accentColor: "#00d4ff",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Ceramic Coating",
    subtitle: "Paint Protection",
    description:
      "Professional-grade ceramic coatings that provide years of protection with a mirror-like finish. Hydrophobic, scratch-resistant, and UV-stable.",
    features: ["9H Hardness Coating", "3-Year Warranty", "Hydrophobic Finish", "UV Protection"],
    image: REAL_FRONT,
    accentColor: "#ff2d78",
  },
  {
    number: "03",
    icon: Shield,
    title: "Paint Protection Film",
    subtitle: "PPF / Clear Bra",
    description:
      "Invisible armor for your paint. Our PPF installations protect against rock chips, scratches, and road debris while maintaining your car's original look.",
    features: ["Self-Healing Film", "Full Front Coverage", "Custom Cut Kits", "10-Year Warranty"],
    image: REAL_HOOD,
    accentColor: "#00d4ff",
  },
  {
    number: "04",
    icon: Eye,
    title: "Window Tinting",
    subtitle: "Privacy & UV Block",
    description:
      "Premium window films that reduce heat, block UV rays, and enhance privacy. Available in multiple shades to match your style and local regulations.",
    features: ["Ceramic Tint Film", "UV Ray Blocking", "Heat Reduction", "All Vehicle Types"],
    image: REAL_WHEEL,
    accentColor: "#ff2d78",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      className="group relative rounded-sm overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/30 to-transparent" />

        {/* Number watermark */}
        <span
          className="absolute top-4 right-4 font-display text-6xl opacity-15 select-none"
          style={{ color: service.accentColor }}
        >
          {service.number}
        </span>

        {/* Icon badge */}
        <div
          className="absolute bottom-4 left-4 w-10 h-10 rounded-sm flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
          }}
        >
          <Icon size={18} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-1 block"
          style={{ color: service.accentColor }}
        >
          {service.subtitle}
        </span>
        <h3 className="font-display text-3xl text-white tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/65">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: service.accentColor }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom gradient line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative"
      style={{ background: "#080c14" }}
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00d4ff]">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-6xl lg:text-8xl text-white leading-none">
            OUR
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SERVICES
            </span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl">
            Every install is handled with precision and passion. Reach out to bring your vision to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Additional services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 rounded-sm flex flex-wrap gap-4 items-center justify-between"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Also Available</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Custom Starlight Headliners",
                "Wheel & Caliper Coating",
                "Paint Correction",
                "Interior Detailing",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-medium text-white/65 rounded-sm"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-white rounded-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)" }}
          >
            Get a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
