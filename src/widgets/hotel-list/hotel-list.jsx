import { HotelCard } from 'entities/hotel';
import { MOCK_HOTELS } from 'shared/api/mocks';
import styles from './hotel-list.module.css';

export const HotelList = () => (
  <div className={styles.list}>
    {MOCK_HOTELS.map(h => <HotelCard key={h.id} hotel={h} />)}
  </div>
);
