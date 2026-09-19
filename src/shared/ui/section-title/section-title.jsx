import styles from './section-title.module.css';
export const SectionTitle = ({ title, subtitle, action }) => (
  <div className={styles.wrap}>
    <div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
    {action}
  </div>
);
