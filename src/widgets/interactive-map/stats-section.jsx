import { CountUp, TiltCard } from 'shared/ui/animations';
import styles from './stats-section.module.css';

const STATS = [
  { icon: '✈', end: 12500, label: 'Flights booked', suffix: '+' },
  { icon: '🌍', end: 240, label: 'Destinations', suffix: '' },
  { icon: '😊', end: 98000, label: 'Happy travelers', suffix: '+' },
  { icon: '⭐', end: 4, label: 'Average rating', suffix: '.9' },
];

export const StatsSection = () => (
  <section className={styles.wrap}>
    {STATS.map((s, i) => (
      <TiltCard key={i} intensity={8} className={styles.card}>
        <div className={styles.icon}>{s.icon}</div>
        <CountUp end={s.end} label={s.label} suffix={s.suffix} duration={2200} />
      </TiltCard>
    ))}
  </section>
);
