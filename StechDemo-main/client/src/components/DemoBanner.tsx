/* ==========================================================================
   COMPONENT: DemoBanner
   Purpose: Slim BFO concept demo notice bar — sticky so fixed navbars clear it
   ========================================================================== */

import { X } from "lucide-react";
import { useState } from "react";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div
      role="banner"
      aria-label="Concept demonstration notice"
      className="relative flex items-center justify-center gap-4 px-10 py-2.5"
      style={{
        backgroundColor: "#0f2744",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 9999,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <p className="text-white/70 text-xs leading-snug">
        <span className="text-amber-400 font-semibold">Bare Force One</span>
        {" — "}
        Concept demonstration. Not a live institution.
      </p>
      <a
        href="https://bareforceone.com/contact"
        className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-[#0f2744] font-semibold text-xs px-3.5 py-1 rounded transition-colors whitespace-nowrap"
      >
        Request a Similar Solution
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors focus-visible:outline-none rounded"
        aria-label="Dismiss notice"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
