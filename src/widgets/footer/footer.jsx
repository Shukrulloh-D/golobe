import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div>
        <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px' }}>golobe</h2>
        <div style={{ display: 'flex', gap: '16px', fontSize: '20px' }}>
          <span>📘</span><span>🐦</span><span>📺</span><span>📷</span>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.column}>
          <h4>Our Destinations</h4>
          <a href="/">Canada</a><a href="/">Alaska</a><a href="/">France</a><a href="/">Iceland</a>
        </div>
        <div className={styles.column}>
          <h4>Our Activities</h4>
          <a href="/">Northern Lights</a><a href="/">Cruising</a><a href="/">Multi-activities</a><a href="/">Kayaking</a>
        </div>
        <div className={styles.column}>
          <h4>Travel Blogs</h4>
          <a href="/">Bali Guide</a><a href="/">Sri Lanka Guide</a><a href="/">Peru Guide</a>
        </div>
        <div className={styles.column}>
          <h4>About Us</h4>
          <a href="/">Our Story</a><a href="/">Work with us</a>
        </div>
      </div>
      <div className={styles.subscribe}>
        <h4>Subscribe Newsletter</h4>
        <div className={styles['subscribe-row']}>
          <Input placeholder="Your email address" />
          <Button variant="dark">Subscribe</Button>
        </div>
      </div>
    </div>
  </footer>
);
