import { Link, Outlet } from 'react-router-dom';
import styles from './auth-layout.module.css';

export const AuthLayout = () => (
  <div className={styles.wrap}>
    <div className={styles.left}>
      <Link to="/" className={styles.logo}>
        <img src="/logo.svg" alt="golobe" />
      </Link>
      <div className={styles.form}><Outlet /></div>
    </div>
    <div className={styles.right}>
      <img src="/images/hero-bg.png" alt="Background" />
      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.dotActive}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  </div>
);
