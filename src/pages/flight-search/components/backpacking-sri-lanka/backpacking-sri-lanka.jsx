import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './backpacking-sri-lanka.module.css';

export const BackpackingSriLanka = () => {
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.priceTag}>From $700</span>
          <div>
            <h2>Backpacking Sri Lanka</h2>
            <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways.</p>
          </div>
          <Button variant="light" onClick={() => { toast('Booking Sri Lanka...'); navigate('/flights/1'); }}>Book Flight</Button>
        </div>
        <div className={styles.imageGrid}>
          <img src="/images/sri-lanka-1.png" alt="Sri Lanka 1" />
          <img src="/images/sri-lanka-2.png" alt="Sri Lanka 2" />
          <img src="/images/sri-lanka-3.png" alt="Sri Lanka 3" />
          <img src="/images/sri-lanka-4.png" alt="Sri Lanka 4" />
        </div>
      </div>
    </section>
  );
};
