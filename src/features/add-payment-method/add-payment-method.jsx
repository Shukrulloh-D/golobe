import { useState } from 'react';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './add-payment-method.module.css';

export const AddPaymentMethod = ({ onSuccess }) => {
  const toast = useToast();
  const [form, setForm] = useState({ number: '', exp: '', cvc: '', name: '', country: '' });
  const [save, setSave] = useState(true);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.number || !form.exp || !form.cvc || !form.name) { toast('Please fill all fields'); return; }
    onSuccess?.();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a new Card</h2>
      <Input placeholder="Card Number" value={form.number} onChange={(e) => update('number', e.target.value)} />
      <div className={styles.row}>
        <Input placeholder="Exp. Date" value={form.exp} onChange={(e) => update('exp', e.target.value)} />
        <Input placeholder="CVC" value={form.cvc} onChange={(e) => update('cvc', e.target.value)} />
      </div>
      <Input placeholder="Name on Card" value={form.name} onChange={(e) => update('name', e.target.value)} />
      <Input placeholder="Country or Region" value={form.country} onChange={(e) => update('country', e.target.value)} />
      <label className={styles.checkboxLabel}>
        <input type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} /> Securely save my information for 1-click checkout
      </label>
      <Button type="submit" style={{ marginTop: 8 }}>Add Card</Button>
      <div className={styles.disclaimer}>By confirming your subscription, you allow The Outbound Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms.</div>
    </form>
  );
};
