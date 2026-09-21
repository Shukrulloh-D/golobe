import { SearchBox } from "../search-box/search-box";
import styles from "./hero-section.module.css";

export const HeroSection = () => (
  <>
    <section className={styles.hero}>
      <h1>
        Helping Others<span>LIVE & TRAVEL</span>
      </h1>
      <p>Special offers to suit your plan</p>
    </section>
    <div className={styles.searchContainer}>
      <SearchBox />
    </div>
  </>
);
