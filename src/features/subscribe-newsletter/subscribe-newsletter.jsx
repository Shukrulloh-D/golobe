import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import styles from "./subscribe-newsletter.module.css";

export const SubscribeNewsletter = () => (
  <section className={styles.wrap}>
    <div className={styles.left}>
      <h2>Subscribe Newsletter</h2>
      <div className={styles.sub}>The Travel</div>
      <div className={styles.text}>
        Get inspired! Receive travel discounts, tips and behind the scenes
        stories.
      </div>
      <div className={styles.row}>
        <Input placeholder="Your email address" />
        <Button variant="dark">Subscribe</Button>
      </div>
    </div>
    <div className={styles.right}>
      <img
        src="/images/mailbox.png"
        alt="Subscribe"
        className={styles.mailImg}
      />
    </div>
  </section>
);
