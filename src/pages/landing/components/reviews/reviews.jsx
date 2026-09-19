import { MOCK_REVIEWS } from 'shared/api/mocks';
import { ReviewCard } from 'entities/review';
import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import styles from './reviews.module.css';

export const Reviews = () => (
  <section className={styles.section}>
    <SectionTitle
      title="Reviews"
      subtitle="What people says about Golobe facilities"
      action={<Button variant="outline">See All</Button>}
    />
    <div className={styles.grid}>
      {MOCK_REVIEWS.map(r => <ReviewCard key={r.id} review={r} />)}
    </div>
  </section>
);
