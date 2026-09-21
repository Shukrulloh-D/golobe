import styles from './floating-clouds.module.css';

const Cloud = () => (
  <svg viewBox="0 0 100 50" fill="white">
    <ellipse cx="25" cy="35" rx="20" ry="14" />
    <ellipse cx="50" cy="25" rx="28" ry="20" />
    <ellipse cx="75" cy="35" rx="22" ry="15" />
  </svg>
);

export const FloatingClouds = () => (
  <div className={styles.wrap}>
    <div className={`${styles.cloud} ${styles.c1}`}><Cloud /></div>
    <div className={`${styles.cloud} ${styles.c2}`}><Cloud /></div>
    <div className={`${styles.cloud} ${styles.c3}`}><Cloud /></div>
    <div className={`${styles.cloud} ${styles.c4}`}><Cloud /></div>
    <div className={`${styles.cloud} ${styles.c5}`}><Cloud /></div>
  </div>
);
