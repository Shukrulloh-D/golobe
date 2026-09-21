import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "shared/ui/button";
import styles from "./header.module.css";

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);
const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
);

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLanding = pathname === "/";

  return (
    <header
      className={`${styles.header} ${isLanding ? styles.transparent : ""}`}
    >
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link to="/flights">
            <PlaneIcon /> Find Flight
          </Link>
          <Link to="/hotels">
            <BedIcon /> Find Stays
          </Link>
        </nav>

        <Link to="/" className={styles.logo}>
          <img src="/Logo.svg" alt="golobe" className={styles.logoDark} />
          <img src="/Logo.svg" alt="golobe" className={styles.logoWhite} />
        </Link>

        <div className={styles.auth}>
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
          <Button
            variant={isLanding ? "light" : "dark"}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
