/*
 * AnnouncementBar — Top announcement strip
 * Design: Navy background with gold accent links
 */

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0d2d45] text-white text-sm py-2 px-4 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
        <span className="font-semibold tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Now Offering:
        </span>
        {[
          { label: "Client Portal", href: "#" },
          { label: "Digital Copies", href: "#" },
          { label: "E-Signatures", href: "#" },
          { label: "Video Conferencing", href: "#" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 text-[#D4A843] hover:text-yellow-200 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
