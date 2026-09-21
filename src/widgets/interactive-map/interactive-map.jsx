import { useEffect, useRef, useState } from 'react';
import styles from './interactive-map.module.css';

const CITIES = [
  { id: 'ny',  name: 'New York', x: 22, y: 38 },
  { id: 'lon', name: 'London',   x: 46, y: 32 },
  { id: 'par', name: 'Paris',    x: 49, y: 35 },
  { id: 'dxb', name: 'Dubai',    x: 62, y: 50 },
  { id: 'ist', name: 'Istanbul', x: 55, y: 40 },
  { id: 'tky', name: 'Tokyo',    x: 84, y: 42 },
  { id: 'syd', name: 'Sydney',   x: 88, y: 78 },
  { id: 'ist2', name: 'Istanbul', x: 55, y: 40 },
];

const ROUTES = [
  { from: 'ny',  to: 'lon', duration: 8 },
  { from: 'lon', to: 'dxb', duration: 6 },
  { from: 'par', to: 'ist', duration: 5 },
  { from: 'tky', to: 'syd', duration: 7 },
  { from: 'ny',  to: 'dxb', duration: 10 },
];

const PlaneIcon = ({ progress, from, to }) => {
  // Bezier curve: control point offset upward
  const cx = (from.x + to.x) / 2;
  const cy = Math.min(from.y, to.y) - 15;
  const t = progress;
  const x = (1 - t) ** 2 * from.x + 2 * (1 - t) * t * cx + t ** 2 * to.x;
  const y = (1 - t) ** 2 * from.y + 2 * (1 - t) * t * cy + t ** 2 * to.y;
  const angle = Math.atan2(
    2 * (1 - t) * (cy - from.y) + 2 * t * (to.y - cy),
    2 * (1 - t) * (cx - from.x) + 2 * t * (to.x - cx)
  ) * 180 / Math.PI;

  return (
    <g style={{ transform: `translate(${x}%, ${y}%)`, transition: 'transform 0.1s linear' }}>
      <g transform={`rotate(${angle})`}>
        <text x="0" y="0" fontSize="14" fill="#8dd3bb" textAnchor="middle" dominantBaseline="middle">✈</text>
      </g>
    </g>
  );
};

export const InteractiveMap = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0]);
  const rafRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      setProgress(ROUTES.map(r => ((elapsed / 1000) / r.duration) % 1));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cityById = (id) => CITIES.find(c => c.id === id) || CITIES.find(c => c.name === id);

  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2>Where will you fly next?</h2>
        <p>Live flights around the world. Choose your destination and start your journey.</p>
      </div>

      <div className={styles.mapArea}>
        <svg className={styles.flightSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          {ROUTES.map((route, i) => {
            const from = cityById(route.from);
            const to = cityById(route.to);
            if (!from || !to) return null;
            const cx = (from.x + to.x) / 2;
            const cy = Math.min(from.y, to.y) - 15;
            return (
              <path
                key={i}
                className={styles.flightPath}
                d={`M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            );
          })}

          {ROUTES.map((route, i) => {
            const from = cityById(route.from);
            const to = cityById(route.to);
            if (!from || !to) return null;
            return <PlaneIcon key={i} progress={progress[i]} from={from} to={to} />;
          })}
        </svg>

        {CITIES.filter((c, i, arr) => arr.findIndex(x => x.name === c.name) === i).map(city => (
          <div key={city.id} className={styles.city} style={{ left: `${city.x}%`, top: `${city.y}%` }}>
            <div className={styles.dot} />
            <div className={styles.label}>{city.name}</div>
          </div>
        ))}

        <div className={styles.pricing}>
          <div className={styles.pricingItem}>
            <span className={styles.pricingDot} style={{ background: '#ff8682' }} />
            Economy · from $104
          </div>
          <div className={styles.pricingItem}>
            <span className={styles.pricingDot} style={{ background: '#8dd3bb' }} />
            Business · from $240
          </div>
          <div className={styles.pricingItem}>
            <span className={styles.pricingDot} style={{ background: '#ffd93d' }} />
            First · from $580
          </div>
        </div>
      </div>
    </section>
  );
};
