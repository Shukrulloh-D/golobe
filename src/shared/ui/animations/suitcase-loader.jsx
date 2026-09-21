import styles from './suitcase-loader.module.css';

export const SuitcaseLoader = ({ label = 'Loading your trip...' }) => (
  <div className={styles.wrap}>
    <div className={styles.track}>
      <div className={styles.suitcase}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
          <line x1="3" y1="13" x2="21" y2="13" />
        </svg>
      </div>
      <div className={styles.road} />
    </div>
    <div className={styles.label}>{label}</div>
  </div>
);
