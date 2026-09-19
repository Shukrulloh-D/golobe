import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './subscribe-newsletter.module.css';

export const SubscribeNewsletter = () => (
  <section className={styles.wrap}>
    <div>
      <h2>Subscribe Newsletter</h2>
      <p>The Travel — Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
      <div className={styles.row}>
        <Input placeholder="Your email address" />
        <Button variant="dark">Subscribe</Button>
      </div>
    </div>
  </section>
);
