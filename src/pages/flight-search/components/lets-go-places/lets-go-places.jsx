import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import styles from './lets-go-places.module.css';

const PLACES = [
  { id: 1, name: 'James Doe', status: 'Boarding Pass N123', img: '/images/user-1.png', cls: 'card1' },
  { id: 2, name: 'James Doe', status: 'Boarding Pass N123', img: '/images/user-2.png', cls: 'card2' },
  { id: 3, name: 'James Doe', status: 'Boarding Pass N123', img: '/images/user-3.png', cls: 'card3' },
  { id: 4, name: 'James Doe', status: 'Boarding Pass N123', img: '/images/user-4.png', cls: 'card4' },
  { id: 5, name: 'James Doe', status: 'Boarding Pass N123', img: '/images/user-5.png', cls: 'card5' },
];

export const LetsGoPlaces = () => (
  <section className={styles.section}>
    <SectionTitle
      title="Let's go places together"
      subtitle="Discover the latest offers and news and start planning your next trip with us."
      action={<Button variant="outline">See All</Button>}
    />
    <div className={styles.mapWrap}>
      <div className={styles.arrows}>
        <svg viewBox="0 0 1280 520" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="white" />
            </marker>
          </defs>
          {/* Стрелка 1: card1 → card3 */}
          <path d="M 200 90 Q 400 200 600 250" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
          {/* Стрелка 2: card2 → card3 */}
          <path d="M 320 340 Q 450 320 570 270" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
          {/* Стрелка 3: card4 → card3 */}
          <path d="M 800 120 Q 700 200 620 250" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
          {/* Стрелка 4: card5 → card4 */}
          <path d="M 990 350 Q 900 260 830 170" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
      {PLACES.map(p => (
        <div key={p.id} className={`${styles.card} ${styles[p.cls]}`}>
          <img src={p.img} alt={p.name} />
          <div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.status}>{p.status}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
