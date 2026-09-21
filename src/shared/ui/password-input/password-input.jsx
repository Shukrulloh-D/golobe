import { useState } from 'react';
import styles from './password-input.module.css';

export const PasswordInput = ({ placeholder, value, onChange, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <input
        type={show ? 'text' : 'password'}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      <button type="button" className={styles.eye} onClick={() => setShow(!show)} aria-label="Toggle password">
        {show ? '👁' : '👁‍🗨'}
      </button>
    </div>
  );
};
