import styles from "./booking-summary.module.css";

export const BookingSummary = ({
  baseFare = 240,
  discount = 0,
  taxes = 20,
  serviceFee = 5,
}) => {
  const total = baseFare - discount + taxes + serviceFee;
  return (
    <div className={styles.card}>
      <h3 style={{ marginBottom: "16px" }}>Price Details</h3>
      <div className={styles.row}>
        <span>Base Fare</span>
        <span>${baseFare.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span>Discount</span>
        <span>${discount.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span>Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className={styles.row}>
        <span>Service Fee</span>
        <span>${serviceFee.toFixed(2)}</span>
      </div>
      <div className={`${styles.row} ${styles.total}`}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
