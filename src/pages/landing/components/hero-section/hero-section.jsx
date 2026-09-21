import { SearchBox } from '../search-box/search-box';
import { FloatingClouds, FlyingPlane, ScrollIndicator } from 'shared/ui/animations';
import styles from './hero-section.module.css';

export const HeroSection = () => (
  <>
    <section className={styles.hero}>
      <FloatingClouds />
      <FlyingPlane delay={0} />
      <FlyingPlane delay={9} />
      <h1>Helping Others<span>LIVE & TRAVEL</span></h1>
      <p>Special offers to suit your plan</p>
      <ScrollIndicator />
    </section>
    <div className={styles.searchContainer}>
      <SearchBox />
    </div>
  </>
);
