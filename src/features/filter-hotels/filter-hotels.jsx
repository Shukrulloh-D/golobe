import styles from './filter-hotels.module.css';

export const FilterHotels = () => (
  <aside className={styles.sidebar}>
    <div className={styles.section}>
      <h4>Price</h4>
      <input type="range" min="50" max="1000" />
    </div>
    <div className={styles.section}>
      <h4>Amenities</h4>
      <label className={styles.checkbox}><input type="checkbox" /> Free breakfast</label>
      <label className={styles.checkbox}><input type="checkbox" /> Free parking</label>
      <label className={styles.checkbox}><input type="checkbox" /> Free internet</label>
    </div>
  </aside>
);
