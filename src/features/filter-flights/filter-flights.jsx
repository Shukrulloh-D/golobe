import { useState } from "react";
import { useToast } from "shared/lib/toast";
import styles from "./filter-flights.module.css";

const AIRLINES = ["Emirates", "Fly Dubai", "Qatar", "Etihad"];
const TRIPS = ["Round trip", "On Way", "Multi-City", "My Dates Are Flexible"];

const formatTime = (hour) => {
  const h = Math.floor(hour);
  const m = Math.floor((hour - h) * 60);
  const suffix = h < 12 ? "Am" : "Pm";
  const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${displayH}:${m.toString().padStart(2, "0")}${suffix}`;
};

export const FilterFlights = () => {
  const toast = useToast();
  const [open, setOpen] = useState({
    price: true,
    time: true,
    rating: true,
    airlines: true,
    trips: true,
  });

  const [priceMin, setPriceMin] = useState(50);
  const [priceMax, setPriceMax] = useState(1200);
  const [timeMin, setTimeMin] = useState(0);
  const [timeMax, setTimeMax] = useState(24);
  const [minRating, setMinRating] = useState(0);
  const [airlines, setAirlines] = useState([]);
  const [trips, setTrips] = useState([]);

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleAirline = (name) => {
    setAirlines((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    );
  };

  const toggleTrip = (name) => {
    setTrips((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    );
  };

  const handlePriceChange = (type, value) => {
    if (type === "min") setPriceMin(Math.min(+value, priceMax - 50));
    else setPriceMax(Math.max(+value, priceMin + 50));
  };

  const handleTimeChange = (type, value) => {
    if (type === "min") setTimeMin(Math.min(+value, timeMax - 1));
    else setTimeMax(Math.max(+value, timeMin + 1));
  };

  return (
    <aside className={styles.sidebar}>
      {/* PRICE */}
      <div className={styles.section}>
        <h4 onClick={() => toggle("price")}>
          Price <span>{open.price ? "⌃" : "⌄"}</span>
        </h4>
        {open.price && (
          <>
            <div className={styles.dualSlider}>
              <input
                type="range"
                min="50"
                max="1200"
                step="10"
                value={priceMin}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                className={styles.rangeMin}
              />
              <input
                type="range"
                min="50"
                max="1200"
                step="10"
                value={priceMax}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                className={styles.rangeMax}
              />
            </div>
            <div className={styles.rangeLabels}>
              <span>${priceMin}</span>
              <span>${priceMax}</span>
            </div>
          </>
        )}
      </div>

      {/* DEPARTURE TIME */}
      <div className={styles.section}>
        <h4 onClick={() => toggle("time")}>
          Departure Time <span>{open.time ? "⌃" : "⌄"}</span>
        </h4>
        {open.time && (
          <>
            <div className={styles.dualSlider}>
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={timeMin}
                onChange={(e) => handleTimeChange("min", e.target.value)}
                className={styles.rangeMin}
              />
              <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={timeMax}
                onChange={(e) => handleTimeChange("max", e.target.value)}
                className={styles.rangeMax}
              />
            </div>
            <div className={styles.rangeLabels}>
              <span>{formatTime(timeMin)}</span>
              <span>{formatTime(timeMax)}</span>
            </div>
          </>
        )}
      </div>

      {/* RATING */}
      <div className={styles.section}>
        <h4 onClick={() => toggle("rating")}>
          Rating <span>{open.rating ? "⌃" : "⌄"}</span>
        </h4>
        {open.rating && (
          <div className={styles.ratingBtns}>
            {[0, 1, 2, 3, 4].map((r) => (
              <button
                key={r}
                className={`${styles.ratingBtn} ${minRating === r ? styles.ratingBtnActive : ""}`}
                onClick={() => {
                  setMinRating(r);
                  toast(`Showing ${r}+ stars`);
                }}
              >
                {r}+
              </button>
            ))}
          </div>
        )}
      </div>

      {/* AIRLINES */}
      <div className={styles.section}>
        <h4 onClick={() => toggle("airlines")}>
          Airlines <span>{open.airlines ? "⌃" : "⌄"}</span>
        </h4>
        {open.airlines &&
          AIRLINES.map((name) => (
            <label key={name} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={airlines.includes(name)}
                onChange={() => toggleAirline(name)}
              />
              <span>{name}</span>
            </label>
          ))}
      </div>

      {/* TRIPS */}
      <div className={styles.section}>
        <h4 onClick={() => toggle("trips")}>
          Trips <span>{open.trips ? "⌃" : "⌄"}</span>
        </h4>
        {open.trips &&
          TRIPS.map((name) => (
            <label key={name} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={trips.includes(name)}
                onChange={() => toggleTrip(name)}
              />
              <span>{name}</span>
            </label>
          ))}
      </div>
    </aside>
  );
};
