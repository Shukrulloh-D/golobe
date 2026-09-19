import { FlightCard } from 'entities/flight';
import { MOCK_FLIGHTS } from 'shared/api/mocks';
import styles from './flight-list.module.css';

export const FlightList = () => (
  <div className={styles.list}>
    {MOCK_FLIGHTS.map(f => <FlightCard key={f.id} flight={f} />)}
  </div>
);
