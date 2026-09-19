import styles from './user-avatar.module.css';
export const UserAvatar = ({ name = 'John Doe' }) => (
  <div className={styles.avatar}>{name.charAt(0)}</div>
);
