import { useState } from "react";

export default function BFOBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div
      role="banner"
      style={{
        backgroundColor: "#0f2744",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        position: "relative",
        zIndex: 100,
      }}
      className="flex items-center justify-center gap-4 px-10 py-2.5"
    >
      <p className="text-white/70 text-xs leading-snug">
        <span className="text-amber-400 font-semibold">Bare Force One</span>
        {" — "}
        Concept demonstration. Not a live business.
      </p>
      <a
        href="https://bareforceone.com/contact"
        className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-[#0f2744] font-semibold text-xs px-3.5 py-1 rounded transition-colors whitespace-nowrap"
      >
        Request a Similar Solution
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 text-base leading-none transition-colors"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
