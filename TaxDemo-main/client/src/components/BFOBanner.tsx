import { useState } from "react";

export default function BFOBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div
      role="banner"
      style={{ backgroundColor: "#0f2744", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "relative", zIndex: 100 }}
      className="flex items-center justify-center gap-3 px-6 py-3 text-center flex-wrap"
    >
      <p className="text-white/80 text-xs leading-relaxed">
        <span className="text-amber-400 font-semibold">Concept Demonstration</span>
        {" — "}
        This interface was created by{" "}
        <a href="https://bareforceone.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2">
          Bare Force One
        </a>{" "}
        to illustrate the types of digital systems we design and deploy for government agencies, enterprises, and growing organizations.
      </p>
      <a
        href="https://bareforceone.com/contact"
        className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-[#0f2744] font-semibold text-xs px-4 py-1.5 rounded transition-colors whitespace-nowrap"
      >
        Request a Similar Solution
      </a>
      <button onClick={() => setDismissed(true)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-lg leading-none" aria-label="Dismiss">×</button>
    </div>
  );
}
