import { useState } from 'react';
import { useToast } from 'shared/lib/toast';
import styles from './filter-flights.module.css';

export const FilterFlights = () => {
  const toast = useToast();
  const [open, setOpen] = useState({ price: true, time: true, rating: true, airlines: true, trips: true });
  const [price, setPrice] = useState([50, 1200]);
  const [airlines, setAirlines] = useState([]);
  const [trips, setTrips] = useState([]);

  const toggle = (key) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  const toggleAirline = (name) => {
    setAirlines(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);
    toast(`Airline ${name} ${airlines.includes(name) ? 'removed' : 'added'}`);
  };
  const toggleTrip = (name) => {
    setTrips(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h4 onClick={() => toggle('price')}>Price <span>{open.price ? '⌃' : '⌄'}</span></h4>
        {open.price && (
          <>
            <input type="range" min="50" max="1200" value={price[1]} onChange={e => setPrice([50, +e.target.value])} className={styles.range} />
            <div className={styles.rangeLabels}><span>${price[0]}</span><span>${price[1]}</span></div>
          </>
        )}
      </div>

      <div className={styles.section}>
        <h4 onClick={() => toggle('time')}>Departure Time <span>{open.time ? '⌃' : '⌄'}</span></h4>
        {open.time && (
          <>
            <input type="range" min="0" max="24" className={styles.range} />
            <div className={styles.rangeLabels}><span>12:01Am</span><span>11:56Pm</span></div>
          </>
        )}
      </div>

      <div className={styles.section}>
        <h4 onClick={() => toggle('rating')}>Rating <span>{open.rating ? '⌃' : '⌄'}</span></h4>
        {open.rating && (
          <div className={styles.ratingBtns}>
            {[1,2,3,4].map(r => (
              <button key={r} className={styles.ratingBtn} onClick={() => toast(`Filter ${r}+ stars`)}>{r}+</button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h4 onClick={() => toggle('airlines')}>Airlines <span>{open.airlines ? '⌃' : '⌄'}</span></h4>
        {open.airlines && ['Emirates','Fly Dubai','Qatar','Etihad'].map(name => (
          <label key={name} className={styles.checkbox}>
            <input type="checkbox" checked={airlines.includes(name)} onChange={() => toggleAirline(name)} /> {name}
          </label>
        ))}
      </div>

      <div className={styles.section}>
        <h4 onClick={() => toggle('trips')}>Trips <span>{open.trips ? '⌃' : '⌄'}</span></h4>
        {open.trips && ['Round trip','On Way','Multi-City','My Dates Are Flexible'].map(name => (
          <label key={name} className={styles.checkbox}>
            <input type="checkbox" checked={trips.includes(name)} onChange={() => toggleTrip(name)} /> {name}
          </label>
        ))}
      </div>
    </aside>
  );
};
