import styles from "./filter-flights.module.css";

export const FilterFlights = () => (
  <aside className={styles.sidebar}>
    <div className={styles.section}>
      <h4>
        Price <span>⌃</span>
      </h4>
      <input type="range" min="50" max="1200" className={styles.range} />
      <div className={styles.rangeLabels}>
        <span>$50</span>
        <span>$1200</span>
      </div>
    </div>
    <div className={styles.section}>
      <h4>
        Departure Time <span>⌃</span>
      </h4>
      <input type="range" min="0" max="24" className={styles.range} />
      <div className={styles.rangeLabels}>
        <span>12:01Am</span>
        <span>11:56Pm</span>
      </div>
    </div>
    <div className={styles.section}>
      <h4>
        Rating <span>⌃</span>
      </h4>
      <div className={styles.ratingBtns}>
        {[1, 2, 3, 4].map((r) => (
          <button key={r} className={styles.ratingBtn}>
            {r}+
          </button>
        ))}
      </div>
    </div>
    <div className={styles.section}>
      <h4>
        Airlines <span>⌃</span>
      </h4>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Emirates
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Fly Dubai
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Qatar
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Etihad
      </label>
    </div>
    <div className={styles.section}>
      <h4>
        Trips <span>⌃</span>
      </h4>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Round trip
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> On Way
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> Multi-City
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" /> My Dates Are Flexible
      </label>
    </div>
  </aside>
);
