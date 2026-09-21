import { useState, useMemo } from "react";
import { FilterFlights } from "features/filter-flights";
import { FlightCard } from "entities/flight";
import { MOCK_FLIGHT_LISTINGS } from "shared/api/mocks";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import { useToast } from "shared/lib/toast";
import styles from "./flight-listing.module.css";

export const FlightListingPage = () => {
  const toast = useToast();
  const [activeSort, setActiveSort] = useState("Best");
  const [extra, setExtra] = useState([]);

  const sorts = [
    { key: "Cheapest", price: "$99", time: "2h 18m" },
    { key: "Best", price: "$99", time: "2h 18m" },
    { key: "Quickest", price: "$99", time: "2h 18m" },
    { key: "Other sort", price: "", time: "" },
  ];

  const flights = useMemo(() => {
    const all = [...MOCK_FLIGHT_LISTINGS, ...extra];
    if (activeSort === "Cheapest" || activeSort === "Best") {
      return [...all].sort((a, b) => a.flights[0].price - b.flights[0].price);
    }
    return all;
  }, [activeSort, extra]);

  const handleSearch = () => toast("Searching flights...");

  const showMore = () => {
    setExtra((prev) => [...prev, ...MOCK_FLIGHT_LISTINGS]);
    toast("Loaded 4 more results");
  };

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <Input placeholder="From - To" />
        <div style={{ maxWidth: 140 }}>
          <Select placeholder="Trip" options={["Return", "One way"]} />
        </div>
        <Input placeholder="Depart - Return" />
        <div style={{ maxWidth: 220 }}>
          <Select
            placeholder="Passenger"
            options={["1 Passenger", "2 Passengers"]}
          />
        </div>
        <button
          onClick={handleSearch}
          style={{
            background: "var(--primary)",
            border: "none",
            padding: "12px 20px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          🔍
        </button>
      </div>

      <div className={styles.layout}>
        <FilterFlights />
        <div className={styles.main}>
          <div className={styles.sortTabs}>
            {sorts.map((s) => (
              <button
                key={s.key}
                className={`${styles.tab} ${activeSort === s.key ? styles.active : ""}`}
                onClick={() => {
                  setActiveSort(s.key);
                  toast(`Sorted by ${s.key}`);
                }}
              >
                {s.key}
                {s.price && (
                  <small>
                    {s.price} · {s.time}
                  </small>
                )}
              </button>
            ))}
          </div>
          <div className={styles.resultsCount}>
            <span>
              Showing {flights.length} of <b>257</b> places
            </span>
            <span>
              Sort by <b>Recommended ⌄</b>
            </span>
          </div>
          {flights.map((f) => (
            <FlightCard key={f.id + Math.random()} flight={f} />
          ))}
          <button className={styles.showMore} onClick={showMore}>
            Show more results
          </button>
        </div>
      </div>
    </div>
  );
};
