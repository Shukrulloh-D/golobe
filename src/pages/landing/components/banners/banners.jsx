import { Button } from "shared/ui/button";
import styles from "./banners.module.css";

export const Banners = () => (
  <div className={styles.grid}>
    <div
      className={styles.banner}
      style={{ backgroundImage: "url('/images/banner1.png')" }}
    >
      <div className={styles.content}>
        <h3>Flights</h3>
        <p>Search Flights & Places Hire to our most popular destinations</p>
        <Button>✈️ Show Flights</Button>
      </div>
    </div>
    <div
      className={styles.banner}
      style={{ backgroundImage: "url('/images/banner2.png')" }}
    >
      <div className={styles.content}>
        <h3>Hotels</h3>
        <p>Search hotels & Places Hire to our most popular destinations</p>
        <Button>🏨 Show Hotels</Button>
      </div>
    </div>
  </div>
);
