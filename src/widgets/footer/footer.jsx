import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.logo}>golobe</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Our Destinations</h4>
            <a href="/">Canada</a>
            <a href="/">Alaska</a>
          </div>
          <div className={styles.column}>
            <h4>Our Activities</h4>
            <a href="/">Northern Lights</a>
            <a href="/">Cruising</a>
          </div>
          <div className={styles.column}>
            <h4>Travel Blogs</h4>
            <a href="/">Bali Travel Guide</a>
            <a href="/">Sri Lanka Guide</a>
          </div>
        </div>
        <div>
          <h4>Subscribe Newsletter</h4>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Input placeholder="Your email address" />
            <Button variant="dark">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
