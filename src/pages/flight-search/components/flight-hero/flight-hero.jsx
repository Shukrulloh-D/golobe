import { FloatingClouds, FlyingPlane } from 'shared/ui/animations';
import styles from './flight-hero.module.css';

export const FlightHero = () => (
  <section className={styles.hero}>
    <FloatingClouds />
    <FlyingPlane delay={3} />
    <h1>Make your travel <span>wishlist, we'll do the rest</span></h1>
    <p>Special offers to suit your plan</p>
  </section>
);
