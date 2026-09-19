import styles from './input.module.css';
export const Input = ({ className = '', ...props }) => <input className={`${styles.input} ${className}`} {...props} />;
