import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './search-box.module.css';

export const SearchBox = () => {
  const [tab, setTab] = useState('flights');
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSearch = () => {
    toast(tab === 'flights' ? 'Searching flights...' : 'Searching stays...');
    setTimeout(() => navigate(tab === 'flights' ? '/flights/listing' : '/hotels'), 400);
  };

  const applyPromo = () => {
    if (!promo.trim()) { toast('Enter a promo code'); return; }
    toast(`Promo "${promo}" applied!`);
    setPromoOpen(false);
    setPromo('');
  };

  return (
    <div className={styles.box}>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'flights' ? styles.active : ''}`} onClick={() => setTab('flights')}>✈ Flights</button>
        <button className={`${styles.tab} ${tab === 'stays' ? styles.active : ''}`} onClick={() => setTab('stays')}>🏨 Stays</button>
      </div>
      <div className={styles.inputs}>
        <Input placeholder="From - To" />
        <Select placeholder="Trip" options={['Return', 'One way', 'Multi-city']} />
        <Input placeholder="Depart - Return" />
        <Select placeholder="Passenger - Class" options={['1 Passenger, Economy', '2 Passengers, Economy', '1 Passenger, Business Class']} />
      </div>
      {promoOpen && (
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <Input placeholder="Enter promo code" value={promo} onChange={(e) => setPromo(e.target.value)} />
          <Button onClick={applyPromo}>Apply</Button>
        </div>
      )}
      <div className={styles.actions}>
        <button className={styles.promo} onClick={() => setPromoOpen(!promoOpen)}>+ {promoOpen ? 'Hide' : 'Add'} Promo Code</button>
        <Button onClick={handleSearch}>✈ Show {tab === 'flights' ? 'Flights' : 'Stays'}</Button>
      </div>
    </div>
  );
};
