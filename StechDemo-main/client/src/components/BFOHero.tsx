export default function BFOHero() {
  return (
    <div
      className="w-full py-10 px-6"
      style={{ background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 100%)", borderBottom: "2px solid rgba(251,191,36,0.3)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Reference Solution — Bare Force One
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Education &amp; Training Portal
        </h1>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          A modern digital platform for schools and training organizations to manage students, programs, and communication.
        </p>
        <p className="text-amber-400/80 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Concept demonstration created by Bare Force One to illustrate a modern education and training portal.
        </p>
      </div>
    </div>
  );
}
