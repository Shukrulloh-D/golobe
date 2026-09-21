import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "shared/lib/toast";
import styles from "./flight-card.module.css";

export const FlightCard = ({ flight }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [liked, setLiked] = useState(false);
  const f = flight.flights[0];

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.airlineInfo}>
          <img src={f.logo} alt={f.airline} className={styles.airlineLogo} />
          <div className={styles.ratingBlock}>
            <div className={styles.ratingRow}>
              <span className={styles.ratingBadge}>{f.rating}</span>
              <span>Very Good {f.reviews} reviews</span>
            </div>
          </div>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.startFrom}>starting from</div>
          <div className={styles.price}>${f.price}</div>
        </div>
      </div>

      <div className={styles.middleRow}>
        <div className={styles.timeBlock}>
          <div className={styles.time}>{f.departTime}</div>
          <div className={styles.sub}>{f.from}</div>
        </div>
        <div className={styles.midLine}>
          <div>——— ✈ ———</div>
          <div>{f.duration}</div>
          <div>{f.stops}</div>
        </div>
        <div className={styles.timeBlock} style={{ textAlign: "right" }}>
          <div className={styles.time}>{f.arriveTime}</div>
          <div className={styles.sub}>{f.to}</div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <button
          className={styles.heart}
          style={{ color: liked ? "var(--red)" : "inherit" }}
          onClick={() => {
            setLiked(!liked);
            toast(liked ? "Removed from favourites" : "Added to favourites");
          }}
        >
          {liked ? "♥" : "♡"}
        </button>
        <button
          className={styles.dealsBtn}
          onClick={() => navigate(`/flights/${flight.id}`)}
        >
          View Deals
        </button>
      </div>
    </div>
  );
};
