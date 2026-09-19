import styles from './filter-flights.module.css';

export const FilterFlights = () => (
  <aside className={styles.sidebar}>
    <div className={styles.section}>
      <h4>Price</h4>
      <input type="range" min="50" max="1200" />
    </div>
    <div className={styles.section}>
      <h4>Airlines</h4>
      <label className={styles.checkbox}><input type="checkbox" /> Emirates</label>
      <label className={styles.checkbox}><input type="checkbox" /> Fly Dubai</label>
      <label className={styles.checkbox}><input type="checkbox" /> Qatar</label>
    </div>
  </aside>
);
