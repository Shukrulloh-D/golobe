import { useState, useRef, useEffect } from 'react';
import styles from './select.module.css';

export const Select = ({ options = [], placeholder = 'Select...', value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || '');
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (opt) => { setSelected(opt); setOpen(false); onChange?.(opt); };

  return (
    <div className={styles.wrap} ref={ref}>
      <button type="button" className={`${styles.trigger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
        <span className={selected ? '' : styles.placeholder}>{selected || placeholder}</span>
        <span className={`${styles.caret} ${open ? styles.open : ''}`}>▼</span>
      </button>
      {open && (
        <div className={styles.menu}>
          {options.map(opt => (
            <button key={opt} type="button" className={`${styles.option} ${selected === opt ? styles.selected : ''}`} onClick={() => handleSelect(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
