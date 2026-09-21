import { useEffect, useRef, useState } from 'react';
import styles from './count-up.module.css';

export const CountUp = ({ end, label, suffix = '', duration = 2000, start = 0 }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(start);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        const startTime = performance.now();
        const tick = (now) => {
          const elapsed = now - startTime;
          const p = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(start + (end - start) * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, start, started]);

  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.number}>
        {count.toLocaleString()}<span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
