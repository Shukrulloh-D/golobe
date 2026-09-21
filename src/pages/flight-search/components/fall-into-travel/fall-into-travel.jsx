import { useNavigate } from 'react-router-dom';
import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import styles from './fall-into-travel.module.css';

const DESTINATIONS = [
  { id: 1, city: 'Melbourne', desc: 'An amazing journey', price: 700, img: '/images/melbourne.png' },
  { id: 2, city: 'Paris', desc: 'A Paris Adventure', price: 600, img: '/images/paris-card.png' },
  { id: 3, city: 'London', desc: 'London eye adventure', price: 350, img: '/images/london-card.png' },
  { id: 4, city: 'Columbia', desc: 'Amazing streets', price: 700, img: '/images/columbia.png' },
];

export const FallIntoTravel = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Fall into travel"
        subtitle="Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination."
        action={<Button variant="outline" onClick={() => navigate('/flights/listing')}>See All</Button>}
      />
      <div className={styles.grid}>
        {DESTINATIONS.map(d => (
          <div key={d.id} className={styles.card} style={{ backgroundImage: `url(${d.img})` }}>
            <div className={styles.content}>
              <div className={styles.topRow}>
                <div>
                  <div className={styles.city}>{d.city}</div>
                  <div className={styles.sub}>{d.desc}</div>
                </div>
                <div className={styles.price}>${d.price}</div>
              </div>
              <Button style={{ width: '100%' }} onClick={() => navigate('/flights/1')}>Book Flight</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
