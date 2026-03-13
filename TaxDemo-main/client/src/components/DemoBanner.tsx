/*
 * DemoBanner — Top banner identifying this as a BFO demonstration website
 */

export default function DemoBanner() {
  return (
    <div className="bg-[#1B4F72] text-white py-3 px-4 text-center">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <span className="font-bold">This is a demonstration website created by Bare Force One.</span>{" "}
          <span className="text-white/80">We can build a website like this for your business in 48 hours.</span>
        </p>
        <a
          href="https://buy.stripe.com/dRm5kE5B0aaf8WW45J2VG01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] font-bold text-sm px-4 py-1.5 rounded-lg transition-colors whitespace-nowrap"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Get Started →
        </a>
      </div>
    </div>
  );
}
