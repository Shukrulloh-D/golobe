import styles from './scroll-indicator.module.css';

export const ScrollIndicator = () => (
  <div className={styles.wrap}>
    <div className={styles.text}>Scroll</div>
    <div className={styles.arrow}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  </div>
);
