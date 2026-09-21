import { useState } from 'react';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { Confetti } from 'shared/ui/animations';
import { addCard } from 'shared/lib/cards';
import { useToast } from 'shared/lib/toast';
import styles from './add-payment-method.module.css';

export const AddPaymentMethod = ({ onSuccess }) => {
  const toast = useToast();
  const [form, setForm] = useState({ number: '', exp: '', cvc: '', name: '', country: 'United States' });
  const [save, setSave] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.number.replace(/\s/g, '') || form.number.replace(/\s/g, '').length < 12) { toast('Enter a valid card number'); return; }
    if (!form.exp.match(/^\d{2}\/\d{2}$/)) { toast('Expiry must be MM/YY'); return; }
    if (!form.cvc || form.cvc.length < 3) { toast('CVC must be 3+ digits'); return; }
    if (!form.name) { toast('Enter name on card'); return; }

    setLoading(true);
    setTimeout(() => {
      addCard({
        number: form.number,
        last4: form.number.replace(/\s/g, '').slice(-4),
        exp: form.exp,
        name: form.name,
        country: form.country,
      });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => { onSuccess?.(); }, 1200);
    }, 700);
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <Confetti count={25} />
        <div style={{ fontSize: 60, marginBottom: 16, animation: 'fadeInScale 0.5s ease' }}>🎉</div>
        <h2 style={{ marginBottom: 8 }}>Card added!</h2>
        <p style={{ color: 'var(--gray)', fontSize: 14 }}>Your card is now saved.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a new Card</h2>
      <Input
        placeholder="Card Number"
        value={form.number}
        onChange={(e) => update('number', e.target.value.replace(/[^\d ]/g, '').slice(0, 19))}
      />
      <div className={styles.row}>
        <Input
          placeholder="Exp. Date (MM/YY)"
          value={form.exp}
          onChange={(e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 4);
            if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
            update('exp', v);
          }}
        />
        <Input
          placeholder="CVC"
          value={form.cvc}
          onChange={(e) => update('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))}
        />
      </div>
      <Input placeholder="Name on Card" value={form.name} onChange={(e) => update('name', e.target.value)} />
      <Input placeholder="Country or Region" value={form.country} onChange={(e) => update('country', e.target.value)} />
      <label className={styles.checkboxLabel}>
        <input type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} />
        Securely save my information for 1-click checkout
      </label>
      <Button type="submit" disabled={loading}>
        {loading ? <><span className="loader" /> Adding...</> : 'Add Card'}
      </Button>
      <div className={styles.disclaimer}>
        By confirming your subscription, you allow The Outbound Inn Crowd Limited to charge your card for this payment and future payments.
      </div>
    </form>
  );
};
