import { MOCK_PLACES } from 'shared/api/mocks';
import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import styles from './plan-trip.module.css';

export const PlanTrip = () => (
  <section className={styles.section}>
    <SectionTitle
      title="Plan your perfect trip"
      subtitle="Search Flights & Places Hire to our most popular destinations"
      action={<Button variant="outline" className={styles.seeAll}>See more places</Button>}
    />
    <div className={styles.grid}>
      {MOCK_PLACES.map(place => (
        <div key={place.id} className={styles.card}>
          <img src={place.img} alt={place.city} />
          <div>
            <h4>{place.city}</h4>
            <p>Flights • Hotels • Resorts</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
