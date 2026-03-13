import { useEffect, useRef, useState } from 'react';

export default function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAnimation();
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    // Trigger immediately if already visible in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startAnimation();
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  );
}
