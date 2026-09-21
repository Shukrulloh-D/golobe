import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { PasswordInput } from 'shared/ui/password-input';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './login.module.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) { toast('Please fill in all fields'); return; }
    if (!email.includes('@')) { toast('Invalid email format'); return; }
    toast('Welcome back!');
    setTimeout(() => navigate('/account'), 500);
  };

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.subtitle}>Login to access your Golobe account</p>

      <form className={styles.form} onSubmit={handleLogin}>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className={styles.row}>
          <label className={styles.checkbox}>
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            Remember me
          </label>
          <span className={styles.forgot} onClick={() => navigate('/forgot-password')} style={{ cursor: 'pointer' }}>Forgot Password</span>
        </div>

        <Button type="submit" style={{ width: '100%' }}>Login</Button>

        <div className={styles.signupLink}>
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span>
        </div>
      </form>

      <div className={styles.divider}>Or login with</div>

      <div className={styles.socialRow}>
        <button className={styles.socialBtn} style={{ color: '#1877f2' }} onClick={() => toast('Facebook login...')}>f</button>
        <button className={styles.socialBtn} style={{ color: '#ea4335' }} onClick={() => toast('Google login...')}>G</button>
        <button className={styles.socialBtn} style={{ color: '#000' }} onClick={() => toast('Apple login...')}></button>
      </div>
    </>
  );
};
