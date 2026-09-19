import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './search-hotel.module.css';

export const SearchHotel = () => (
  <div className={styles.box}>
    <div className={styles.inputs}>
      <Input placeholder="Enter Destination" />
      <Input placeholder="Check In" />
      <Input placeholder="Check Out" />
      <Input placeholder="Rooms & Guests" />
    </div>
    <div className={styles.actions}>
      <Button>🏨 Show Hotels</Button>
    </div>
  </div>
);
