import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './search-flight.module.css';

export const SearchFlight = () => (
  <div className={styles.box}>
    <div className={styles.inputs}>
      <Input placeholder="From - To" />
      <Input placeholder="Trip" />
      <Input placeholder="Depart - Return" />
      <Input placeholder="Passenger - Class" />
    </div>
    <div className={styles.actions}>
      <Button>✈️ Show Flights</Button>
    </div>
  </div>
);
