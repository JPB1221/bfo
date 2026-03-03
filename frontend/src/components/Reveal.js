import React, { useEffect, useRef, useCallback } from 'react';

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);

  const handleIntersect = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('revealed');
      }
    });
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: '-40px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  const dirClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    none: 'reveal-fade',
  }[direction] || 'reveal-up';

  return (
    <div ref={ref} className={`reveal-base ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
