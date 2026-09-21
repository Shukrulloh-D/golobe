import { FlightHero } from './components/flight-hero/flight-hero';
import { SearchBox } from 'pages/landing/components/search-box/search-box';
import { LetsGoPlaces } from './components/lets-go-places/lets-go-places';
import { FallIntoTravel } from './components/fall-into-travel/fall-into-travel';
import { BackpackingSriLanka } from './components/backpacking-sri-lanka/backpacking-sri-lanka';
import { useReveal } from 'shared/lib/hooks';
import styles from './flight-search.module.css';

const RevealSection = ({ children, delay = '' }) => {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${delay}`}>{children}</div>;
};

export const FlightSearchPage = () => (
  <div className={styles.page}>
    <FlightHero />
    <div className={styles.container} style={{ position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '-80px auto 0', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <SearchBox />
      </div>
    </div>
    <RevealSection><LetsGoPlaces /></RevealSection>
    <RevealSection delay="revealDelay1"><BackpackingSriLanka /></RevealSection>
    <RevealSection delay="revealDelay2"><FallIntoTravel /></RevealSection>
  </div>
);
