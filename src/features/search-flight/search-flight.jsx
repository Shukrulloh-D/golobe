import { Button } from "shared/ui/button";
import styles from "./search-flight.module.css";

export const SearchFlight = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="From - To" className={styles.input} />
      <input type="date" className={styles.input} />
      <Button>Show Flights</Button>
    </div>
  );
};
