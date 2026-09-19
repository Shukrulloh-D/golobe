import styles from './booking-summary.module.css';

export const BookingSummary = ({ baseFare = 400, discount = 0, taxes = 0, serviceFee = 0 }) => (
  <div className={styles.card}>
    <h3 style={{ marginBottom: '16px' }}>Price Details</h3>
    <div className={styles.row}><span>Base Fare</span><span>${baseFare}</span></div>
    <div className={styles.row}><span>Discount</span><span>${discount}</span></div>
    <div className={styles.row}><span>Taxes</span><span>${taxes}</span></div>
    <div className={styles.row}><span>Service Fee</span><span>${serviceFee}</span></div>
    <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>${baseFare - discount + taxes + serviceFee}</span></div>
  </div>
);
