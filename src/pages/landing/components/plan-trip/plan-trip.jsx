import { useNavigate } from 'react-router-dom';
import { MOCK_PLACES } from 'shared/api/mocks';
import { SectionTitle } from 'shared/ui/section-title';
import styles from './plan-trip.module.css';

export const PlanTrip = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Plan your perfect trip"
        subtitle="Search Flights & Places Hire to our most popular destinations"
        action={<button className={styles.seeAll} onClick={() => navigate('/flights/listing')}>See more places</button>}
      />
      <div className={styles.grid}>
        {MOCK_PLACES.map(place => (
          <button key={place.id} className={styles.card} onClick={() => navigate('/flights/listing')}>
            <img src={place.img} alt={place.city} />
            <div>
              <div className={styles.city}>{place.city}</div>
              <div className={styles.sub}>Flights · Hotels · Resorts</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
