import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Button } from 'shared/ui/button';
import styles from './search-box.module.css';

export const SearchBox = () => {
  const [tab, setTab] = useState('flights');
  const navigate = useNavigate();
  const [trip, setTrip] = useState('');
  const [passenger, setPassenger] = useState('');

  return (
    <div className={styles.box}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'flights' ? styles.active : ''}`} onClick={() => setTab('flights')}>✈ Flights</button>
        <button className={`${styles.tab} ${tab === 'stays' ? styles.active : ''}`} onClick={() => setTab('stays')}>🏨 Stays</button>
      </div>
      <div className={styles.inputs}>
        <Input placeholder="From - To" />
        <Select placeholder="Trip" value={trip} onChange={setTrip} options={['Return', 'One way', 'Multi-city']} />
        <Input placeholder="Depart - Return" />
        <Select placeholder="Passenger - Class" value={passenger} onChange={setPassenger} options={['1 Passenger, Economy', '2 Passengers, Economy', '1 Passenger, Business Class']} />
      </div>
      <div className={styles.actions}>
        <button className={styles.promo}>+ Add Promo Code</button>
        <Button onClick={() => navigate(tab === 'flights' ? '/flights/listing' : '/hotels')}>✈ Show {tab === 'flights' ? 'Flights' : 'Stays'}</Button>
      </div>
    </div>
  );
};
