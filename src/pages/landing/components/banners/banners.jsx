import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/button';
import { TiltCard } from 'shared/ui/animations';
import styles from './banners.module.css';

export const Banners = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.grid}>
      <TiltCard intensity={6}>
        <div className={styles.banner} style={{ backgroundImage: "url('/images/banner-flights.png')" }}>
          <div className={styles.content}>
            <h3>Flights</h3>
            <p>Search Flights & Places Hire to our most popular destinations</p>
            <Button onClick={() => navigate('/flights/listing')}>✈ Show Flights</Button>
          </div>
        </div>
      </TiltCard>
      <TiltCard intensity={6}>
        <div className={styles.banner} style={{ backgroundImage: "url('/images/banner-hotels.png')" }}>
          <div className={styles.content}>
            <h3>Hotels</h3>
            <p>Search hotels & Places Hire to our most popular destinations</p>
            <Button onClick={() => navigate('/hotels')}>🏨 Show Hotels</Button>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};
