import { HeroSection } from './components/hero-section/hero-section';
import { PlanTrip } from './components/plan-trip/plan-trip';
import { Banners } from './components/banners/banners';
import { Reviews } from './components/reviews/reviews';
import { useReveal } from 'shared/lib/hooks';
import styles from './landing.module.css';

const RevealSection = ({ children, delay = '' }) => {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${delay}`}>{children}</div>;
};

export const LandingPage = () => (
  <div className={styles.page}>
    <HeroSection />
    <div className={styles.sectionWrap}>
      <RevealSection><PlanTrip /></RevealSection>
      <RevealSection delay="revealDelay1"><Banners /></RevealSection>
      <RevealSection delay="revealDelay2"><Reviews /></RevealSection>
    </div>
  </div>
);
