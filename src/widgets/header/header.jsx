import { Link } from "react-router-dom";
import { Button } from "shared/ui/button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          golobe
        </Link>
        <nav className={styles.nav}>
          <Link to="/flights">Find Flight</Link>
          <Link to="/hotels">Find Stays</Link>
        </nav>
        <div className={styles.auth}>
          <Link to="/login">Login</Link>
          <Button variant="dark">Sign up</Button>
        </div>
      </div>
    </header>
  );
};
