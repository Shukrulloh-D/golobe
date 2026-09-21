import { Button } from "shared/ui/button";
import styles from "./hotel-card.module.css";

export const HotelCard = ({ hotel }) => (
  <div className={styles.card}>
    <div className={styles.img} />
    <div className={styles.info}>
      <h4>{hotel.name}</h4>
      <p>📌 {hotel.location}</p>
      <p>⭐ {hotel.rating} · Very Good</p>
      <div className={styles.row}>
        <span className={styles.price}>${hotel.price}/night</span>
        <Button>View Place</Button>
      </div>
    </div>
  </div>
);
