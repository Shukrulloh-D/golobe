import { useRef, useState } from 'react';
import styles from './tilt-card.module.css';

export const TiltCard = ({ children, intensity = 12, className = '' }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale(1.02)`,
    });
  };

  const handleLeave = () => setStyle({ transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)' });

  return (
    <div
      ref={ref}
      className={`${styles.tilt} ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
