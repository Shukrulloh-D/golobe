import styles from './review-card.module.css';

export const ReviewCard = ({ review }) => (
  <div className={styles.card}>
    <h4 className={styles.title}>{review.title}</h4>
    <p className={styles.text}>{review.text}</p>
    <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
    <div>
      <div className={styles.author}>{review.author}</div>
      <div className={styles.company}>{review.company}</div>
    </div>
    <img className={styles.img} src={review.img} alt={review.author} />
  </div>
);
