/* ==========================================================================
   COMPONENT: SkipToContent
   Purpose: WCAG 2.1 — keyboard skip link for screen readers and keyboard users
   ========================================================================== */

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#E8A020] focus:text-[#0D4F5C] focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Skip to main content
    </a>
  );
}
