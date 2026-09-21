import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './signup-payment.module.css';

export const SignupPaymentPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({ number: '', exp: '', cvc: '', name: '', country: '' });
  const [save, setSave] = useState(true);
  const update = (k, v) => setForm({ ...form, [k]: v });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.number || !form.exp || !form.cvc || !form.name) { toast('Please fill all fields'); return; }
    toast('Payment method added!');
    setTimeout(() => navigate('/account'), 500);
  };

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>← Back</button>
      <h1 className={styles.title}>Add a payment method</h1>
      <p className={styles.subtitle}>Let's get you all set up so you can access your personal account.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input placeholder="Card Number" value={form.number} onChange={(e) => update('number', e.target.value)} />
        <div className={styles.row}>
          <Input placeholder="Exp. Date" value={form.exp} onChange={(e) => update('exp', e.target.value)} />
          <Input placeholder="CVC" value={form.cvc} onChange={(e) => update('cvc', e.target.value)} />
        </div>
        <Input placeholder="Name on Card" value={form.name} onChange={(e) => update('name', e.target.value)} />
        <Select placeholder="Country or Region" options={['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan']} value={form.country} onChange={(v) => update('country', v)} />

        <label className={styles.checkbox}>
          <input type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} />
          Securely save my information for 1-click checkout
        </label>

        <Button type="submit" style={{ width: '100%' }}>Add payment method</Button>
        <div className={styles.disclaimer}>By confirming your subscription, you allow The Outbound Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms.</div>
      </form>
    </>
  );
};
