import styles from "./input.module.css";
export const Input = ({ className = "", ...props }) => {
  return <input className={`${styles.input} ${className}`} {...props} />;
};
