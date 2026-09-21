import { useState } from 'react';
import { FilterFlights } from 'features/filter-flights';
import { FlightCard } from 'entities/flight';
import { MOCK_FLIGHT_LISTINGS } from 'shared/api/mocks';
import { Input } from 'shared/ui/input';
import styles from './flight-listing.module.css';

export const FlightListingPage = () => {
  const [activeSort, setActiveSort] = useState('Best');
  const sorts = [
    { key: 'Cheapest', price: '$99', time: '2h 18m' },
    { key: 'Best', price: '$99', time: '2h 18m' },
    { key: 'Quickest', price: '$99', time: '2h 18m' },
    { key: 'Other sort', price: '', time: '' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <Input defaultValue="Lahore - Karachi" />
        <Input defaultValue="Return" style={{ maxWidth: 120 }} />
        <Input defaultValue="07 Nov 22 - 13 Nov 22" style={{ maxWidth: 220 }} />
        <Input defaultValue="1 Passenger, Economy" style={{ maxWidth: 220 }} />
        <button style={{ background: '#8dd3bb', border: 'none', padding: '12px 20px', borderRadius: 4, cursor: 'pointer' }}>🔍</button>
      </div>

      <div className={styles.layout}>
        <FilterFlights />
        <div className={styles.main}>
          <div className={styles.sortTabs}>
            {sorts.map(s => (
              <button key={s.key} className={`${styles.tab} ${activeSort === s.key ? styles.active : ''}`} onClick={() => setActiveSort(s.key)}>
                {s.key}
                {s.price && <small>{s.price} · {s.time}</small>}
              </button>
            ))}
          </div>
          <div className={styles.resultsCount}>
            <span>Showing 4 of <b>257</b> places</span>
            <span>Sort by <b>Recommended ⌄</b></span>
          </div>
          {MOCK_FLIGHT_LISTINGS.map(f => <FlightCard key={f.id} flight={f} />)}
          <button className={styles.showMore}>Show more results</button>
        </div>
      </div>
    </div>
  );
};
