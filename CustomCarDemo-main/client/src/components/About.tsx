/* =============================================================
   ABOUT — Miami Vice Customs
   Dark Retrowave Luxury: split layout with AI-generated car photo,
   brand story, and key differentiators.
   ============================================================= */
import { motion } from "framer-motion";

const REAL_SIDE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/hero-car-9SVNfyeC3azkBRiwteNLT9.webp";

const pillars = [
  {
    title: "Precision Installs",
    desc: "Every wrap, coat, and film is applied by hand with obsessive attention to detail.",
    color: "#00d4ff",
  },
  {
    title: "Premium Materials",
    desc: "We use only top-tier vinyl, ceramic, and PPF products from industry-leading brands.",
    color: "#ff2d78",
  },
  {
    title: "Custom Designs",
    desc: "No two builds are the same. We work with you to create something truly unique.",
    color: "#00d4ff",
  },
  {
    title: "Client-Focused",
    desc: "Your vision drives every decision. We work closely with you from concept to completion.",
    color: "#ff2d78",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #080c14 100%)" }}
    >
      {/* Diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(0,212,255,0.3) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[3/4]">
              <img
                src={REAL_SIDE}
                alt="Miami Vice Customs — McLaren build"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 lg:bottom-8 lg:-right-8 px-6 py-4 rounded-sm"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
              }}
            >
              <p className="font-display text-3xl text-white leading-none">10+</p>
              <p className="text-white/80 text-xs tracking-widest uppercase mt-1">
                Years Experience
              </p>
            </div>


          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00d4ff]">
                Who We Are
              </span>
            </div>

            <h2 className="font-display text-6xl lg:text-7xl text-white leading-none mb-6">
              BUILT ON
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PASSION
              </span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-4">
              We are an elite car styling studio specializing in transforming vehicles through
              cutting-edge vinyl wraps, ceramic coatings, paint protection film, and custom designs.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              From supercars to daily drivers — every build gets the same obsessive attention to
              detail. Reach out to bring your vision to life.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-sm"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-6 h-0.5 mb-3 rounded-full"
                    style={{ background: p.color }}
                  />
                  <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
