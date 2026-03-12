/* =============================================================
   GALLERY — Miami Vice Customs
   AI-generated automotive detailing imagery.
   Asymmetric grid with hover overlays and gradient borders.
   ============================================================= */
import { motion } from "framer-motion";


const galleryItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/hero-car-9SVNfyeC3azkBRiwteNLT9.webp",
    label: "Lamborghini Huracan",
    tag: "Full Build",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-wrap-JDNnT8SBAFzpVuBfboJ79s.webp",
    label: "Ferrari 488",
    tag: "Vinyl Wrap",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-ceramic-cThoZwepKWzsvDRH4kxnN7.webp",
    label: "Porsche 911 GT3",
    tag: "Ceramic Coating",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-ppf2-JZAcM3HVcQdJq9tGHXWZkp.webp",
    label: "McLaren 720S",
    tag: "PPF Install",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-tint-Ln6cfJsgCVvaQ8y9Ayi3mP.webp",
    label: "BMW 8 Series",
    tag: "Window Tint",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/gallery-wrap-JDNnT8SBAFzpVuBfboJ79s.webp",
    label: "Custom Wrap Detail",
    tag: "Precision Install",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative"
      style={{ background: "linear-gradient(180deg, #080c14 0%, #0a0f1e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00d4ff]">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-6xl lg:text-8xl text-white leading-none">
              THE
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GALLERY
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white rounded-sm border border-white/20 hover:border-white/40 transition-all duration-300 self-start sm:self-auto"
          >
            View All Work
          </a>
        </motion.div>

        {/* Asymmetric grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
          }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ objectPosition: "center" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/85 via-[#080c14]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                    color: "#fff",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm tracking-wide">{item.label}</p>
              </div>

              {/* Gradient border glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,212,255,0.5)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm mb-4">
            Interested in a custom build for your vehicle?
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase text-white rounded-sm transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)" }}
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
