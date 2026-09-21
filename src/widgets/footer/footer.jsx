import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.5 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
  </svg>
);
const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brand}>
        <Link to="/" className={styles.logo}>
          <img src="/Logo.svg" alt="golobe" />
        </Link>
        <div className={styles.socials}>
          <a href="/" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="/" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="/" aria-label="YouTube">
            <YoutubeIcon />
          </a>
          <a href="/" aria-label="Instagram">
            <InstaIcon />
          </a>
        </div>
      </div>
      <div className={styles.column}>
        <h4>Our Destinations</h4>
        <a href="/">Canada</a>
        <a href="/">Alaska</a>
        <a href="/">France</a>
        <a href="/">Iceland</a>
      </div>
      <div className={styles.column}>
        <h4>Our Activities</h4>
        <a href="/">Northern Lights</a>
        <a href="/">Cruising & sailing</a>
        <a href="/">Multi-activities</a>
        <a href="/">Kayaking</a>
      </div>
      <div className={styles.column}>
        <h4>Travel Blogs</h4>
        <a href="/">Bali Travel Guide</a>
        <a href="/">Sri Lanka Travel Guide</a>
        <a href="/">Peru Travel Guide</a>
        <a href="/">Bali Travel Guide</a>
      </div>
      <div className={styles.column}>
        <h4>About Us</h4>
        <a href="/">Our Story</a>
        <a href="/">Work with us</a>
      </div>
    </div>
  </footer>
);
