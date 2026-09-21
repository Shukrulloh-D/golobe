import styles from './confetti.module.css';

const COLORS = ['#8dd3bb', '#ff8682', '#112211', '#ffd93d', '#7ac2aa'];

export const Confetti = ({ count = 30 }) => {
  const pieces = Array.from({ length: count }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const distance = 200 + Math.random() * 300;
    return {
      id: i,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance - 100,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.2,
      type: i % 3 === 0 ? 'plane' : i % 3 === 1 ? 'heart' : 'star',
    };
  });

  return (
    <div className={styles.wrap}>
      {pieces.map(p => (
        <span
          key={p.id}
          className={`${styles.piece} ${styles[p.type]}`}
          style={{
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            background: p.type === 'star' ? p.color : 'transparent',
            color: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
