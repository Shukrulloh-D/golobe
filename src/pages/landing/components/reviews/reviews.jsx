import { useNavigate } from 'react-router-dom';
import { MOCK_REVIEWS } from 'shared/api/mocks';
import { ReviewCard } from 'entities/review';
import { SectionTitle } from 'shared/ui/section-title';
import styles from './reviews.module.css';

export const Reviews = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <SectionTitle
        title="Reviews"
        subtitle="What people says about Golobe facilities"
        action={<button onClick={() => navigate('/flights/listing')} style={{ padding: '12px 24px', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: 600, fontSize: '14px', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}>See All</button>}
      />
      <div className={styles.grid}>
        {MOCK_REVIEWS.map(r => <ReviewCard key={r.id} review={r} />)}
      </div>
    </section>
  );
};
