import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";
import styles from "./hero-section.module.css";

export const HeroSection = () => (
  <section className={styles.hero}>
    <h1>
      Helping Others <span>LIVE & TRAVEL</span>
    </h1>
    <p>Special offers to suit your plan</p>
    <div className={styles.searchBox}>
      <div className={styles.tabs}>
        <span className={styles.activeTab}>✈️ Flights</span>
        <span>🏨 Stays</span>
      </div>
      <div className={styles.inputs}>
        <Input placeholder="From - To" />
        <Input placeholder="Trip" />
        <Input placeholder="Depart - Return" />
        <Input placeholder="Passenger - Class" />
      </div>
      <div className={styles.actions}>
        <button className={styles.promo}>+ Add Promo Code</button>
        <Button>✈️ Show Flights</Button>
      </div>
    </div>
  </section>
);
