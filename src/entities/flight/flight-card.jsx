import { Button } from 'shared/ui/button';
import styles from './flight-card.module.css';

export const FlightCard = ({ flight }) => (
  <div className={styles.card}>
    <div className={styles.info}>
      <h4>✈️ {flight.airline}</h4>
      <p>{flight.from} — {flight.to}</p>
      <p>{flight.time}</p>
      <p>⭐ {flight.rating}</p>
    </div>
    <div>
      <div className={styles.price}>${flight.price}</div>
      <Button>View Details</Button>
    </div>
  </div>
);
