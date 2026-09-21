import { useEffect, useState, useRef } from 'react';
import styles from './cursor-trail.module.css';

const ICONS = ['✈', '☁', '✦', '✈', '·'];

export const CursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const lastRef = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastRef.current < 80) return;
      lastRef.current = now;
      const id = now;
      const icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      setParticles(prev => [...prev.slice(-12), { id, x: e.clientX + offsetX, y: e.clientY + offsetY, icon }]);
      setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 1000);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className={styles.trail}>
      {particles.map(p => (
        <span key={p.id} className={`${styles.particle} ${styles.active}`} style={{ left: p.x, top: p.y }}>
          {p.icon}
        </span>
      ))}
    </div>
  );
};
