import styles from './button.module.css';
export const Button = ({ children, variant = 'primary', className = '', ...props }) => (
  <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>{children}</button>
);
