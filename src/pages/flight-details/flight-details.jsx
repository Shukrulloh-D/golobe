import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./flight-details.module.css";

export const FlightDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [liked, setLiked] = useState(false);
  const [cls, setCls] = useState("economy");

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumbs}>
        <span
          onClick={() => navigate("/flights")}
          style={{ cursor: "pointer" }}
        >
          Turkey
        </span>{" "}
        ›
        <span
          onClick={() => navigate("/flights/listing")}
          style={{ cursor: "pointer" }}
        >
          {" "}
          Istanbul
        </span>{" "}
        › CVK Park Bosphorus Hotel Istanbul
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Emirates A380 Airbus</h1>
          <p>📌 Gumussuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
          <span className={styles.badge}>4.2 · Very Good 54 reviews</span>
        </div>
        <div className={styles.actions}>
          <div
            style={{
              fontSize: "32px",
              color: "#ff8682",
              fontWeight: 700,
              marginRight: "12px",
            }}
          >
            $240
          </div>
          <button
            className={styles.iconBtn}
            style={{ color: liked ? "var(--red)" : "inherit" }}
            onClick={() => {
              setLiked(!liked);
              toast(liked ? "Removed" : "Added to favourites");
            }}
          >
            {liked ? "❤️‍🔥" : "🤍"}
          </button>
          <button
            className={styles.iconBtn}
            onClick={() => toast("Link copied to clipboard!")}
          >
            ⤴
          </button>
          <Button onClick={() => navigate(`/flights/${id}/booking`)}>
            Book now
          </Button>
        </div>
      </div>
      <img
        src="/images/emirates-a380.png"
        alt="A380"
        className={styles.image}
      />
      <div className={styles.sectionTitle}>
        <span>Basic Economy Features</span>
        <div className={styles.classes}>
          <label>
            <input
              type="radio"
              name="class"
              checked={cls === "economy"}
              onChange={() => setCls("economy")}
            />{" "}
            Economy
          </label>
          <label>
            <input
              type="radio"
              name="class"
              checked={cls === "first"}
              onChange={() => setCls("first")}
            />{" "}
            First Class
          </label>
          <label>
            <input
              type="radio"
              name="class"
              checked={cls === "business"}
              onChange={() => setCls("business")}
            />{" "}
            Business Class
          </label>
        </div>
      </div>
      <div className={styles.featureRow}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <img
            key={i}
            src={`/images/cabin-${i}.png`}
            alt={`cabin ${i}`}
            onError={(e) => (e.target.style.background = "#eee")}
          />
        ))}
      </div>
      <div className={styles.policies}>
        <span>🛡️ Pre-flight cleaning, installation of cabin HEPA filters.</span>
        <span>🛡️ Pre-flight health screening questions.</span>
      </div>
      <h3 className={styles.sectionTitle}>Return Wed, Dec 8</h3>
      {[1, 2].map((i) => (
        <div key={i} className={styles.flightCard}>
          <div className={styles.flightCardRow}>
            <div className={styles.flightLogo}>
              <img src="/images/emirates-logo.png" alt="Emirates" />
              <div>
                <strong>Emirates</strong>
                <small>Airbus A320</small>
              </div>
            </div>
            <div className={styles.flightIcons}>
              <span>✈</span>
              <span>📶</span>
              <span>🕐</span>
              <span>🍽</span>
              <span>⚡</span>
            </div>
          </div>
          <div className={styles.flightRoute}>
            <div>
              <span>12:00 pm</span>
              <small>Newark(EWR)</small>
            </div>
            <div>— ✈ —</div>
            <div>
              <span>12:00 pm</span>
              <small>Newark(EWR)</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
