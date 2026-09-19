import { HeroSection } from './components/hero-section/hero-section';
import { PlanTrip } from './components/plan-trip/plan-trip';
import { Reviews } from './components/reviews/reviews';
import { Banners } from './components/banners/banners';
import { SubscribeNewsletter } from 'features/subscribe-newsletter';
import styles from './landing.module.css';

export const LandingPage = () => (
  <div className={styles.page}>
    <HeroSection />
    <PlanTrip />
    <Banners />
    <Reviews />
    <SubscribeNewsletter />
  </div>
);
