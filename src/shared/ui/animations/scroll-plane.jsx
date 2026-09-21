import { useEffect, useState } from 'react';
import styles from './scroll-plane.module.css';

export const ScrollPlane = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const left = progress * 100;
  const top = 15 + Math.sin(progress * Math.PI * 2) * 8;

  return (
    <div className={styles.track}>
      <div className={styles.plane} style={{ left: `calc(${left}% - 40px)`, top: `${top}%` }}>
        <div className={styles.trail} style={{ width: `${Math.min(progress * 300, 200)}px` }} />
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>
    </div>
  );
};
