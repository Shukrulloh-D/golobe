import styles from './floating-balloon.module.css';

export const FloatingBalloon = ({ side = 'right' }) => (
  <div className={`${styles.wrap} ${side === 'left' ? styles.wrapLeft : ''}`}>
    <div className={styles.balloon}>
      <svg viewBox="0 0 60 90" fill="none">
        <ellipse cx="30" cy="30" rx="25" ry="30" fill="#ff8682" />
        <ellipse cx="22" cy="20" rx="6" ry="10" fill="rgba(255,255,255,0.4)" />
        <path d="M22 55 L30 65 L38 55" stroke="#112211" strokeWidth="1.5" fill="none" />
        <path d="M30 65 L30 85" stroke="#112211" strokeWidth="1.5" />
        <rect x="25" y="78" width="10" height="8" fill="#8dd3bb" rx="1" />
      </svg>
    </div>
  </div>
);
