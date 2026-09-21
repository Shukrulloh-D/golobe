import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./auth-layout.module.css";

const PAGE_IMAGES = {
  "/login": "/images/login.png",
  "/signup": "/images/villa.png",
  "/signup-payment": "/images/login.png",
  "/forgot-password": "/images/villa.png",
  "/verify-code": "/images/villa.png",
  "/reset-password": "/images/banner-hotels.png",
};

export const AuthLayout = () => {
  const { pathname } = useLocation();
  const bgImage = PAGE_IMAGES[pathname] || "/images/banner-hotels.png";

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="golobe" />
        </Link>
        <div className={styles.form}>
          <Outlet />
        </div>
      </div>
      <div className={styles.right}>
        <img src={bgImage} alt="Background" className={styles.bgImage} />
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
};
