export default function BFOFooter() {
  return (
    <div className="w-full py-4 px-6 text-center" style={{ backgroundColor: "#0a1a2e", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        This concept platform was created by{" "}
        <a href="https://bareforceone.com" target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-400 transition-colors">
          Bare Force One
        </a>{" "}
        as an example of the digital solutions we design and build for clients.
      </p>
    </div>
  );
}
