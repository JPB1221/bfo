/* ==========================================================================
   COMPONENT: DemoBanner
   Purpose: Indicates this is a UX/UI concept demo, not a live site
   ========================================================================== */

import { Info, X } from "lucide-react";
import { useState } from "react";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Concept demo notice"
      className="relative z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-center"
      style={{ backgroundColor: "#E8A020" }}
    >
      <Info className="w-4 h-4 text-[#0D4F5C] flex-shrink-0" aria-hidden="true" />
      <p
        className="text-[#0D4F5C] text-xs font-semibold"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <strong>Concept Demo:</strong> This is a UX/UI redesign proposal for a technical college website — not a live institution. All content is illustrative.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0D4F5C] hover:text-[#0D4F5C]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
        aria-label="Dismiss demo notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
