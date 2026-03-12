/* =============================================================
   STATS BAR — Industrial Brutalist Precision
   Dark band with large numerals and animated counters
   ============================================================= */

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years in Business", sub: "Established & Trusted" },
  { value: 100, suffix: "+", label: "Projects Completed", sub: "Across the Region" },
  { value: 90, suffix: "th", label: "Percentile Ranking", sub: "Top-Rated Contractor" },
  { value: 400, suffix: "K+", label: "Largest Project Value", sub: "Major Commercial Work" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "oklch(0.18 0.01 260)" }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center py-8 px-4"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid oklch(0.28 0.01 260)" : "none",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: "oklch(0.62 0.19 42)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "white",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.7rem",
                  color: "oklch(0.55 0.012 260)",
                  marginTop: "0.25rem",
                  letterSpacing: "0.03em",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
