import styles from './account-tabs.module.css';

export const AccountTabs = ({ tabs = ['Account', 'History', 'Payment methods'], active = 0, onChange }) => (
  <div className={styles.tabs}>
    {tabs.map((tab, i) => (
      <button key={tab} className={`${styles.tab} ${i === active ? styles.active : ''}`} onClick={() => onChange?.(i)}>
        {tab}
      </button>
    ))}
  </div>
);
