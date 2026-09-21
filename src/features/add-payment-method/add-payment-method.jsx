import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './add-payment-method.module.css';

export const AddPaymentMethod = ({ onSuccess }) => (
  <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onSuccess?.(); }}>
    <h2>Add a new Card</h2>
    <Input placeholder="Card Number" defaultValue="4321 4321 4321 4321" />
    <div className={styles.row}>
      <Input placeholder="Exp. Date" defaultValue="02/27" />
      <Input placeholder="CVC" defaultValue="123" />
    </div>
    <Input placeholder="Name on Card" defaultValue="John Doe" />
    <Input placeholder="Country or Region" defaultValue="United States" />
    <label className={styles.checkboxLabel}><input type="checkbox" defaultChecked /> Securely save my information for 1-click checkout</label>
    <Button type="submit" style={{ marginTop: 8 }}>Add Card</Button>
    <div className={styles.disclaimer}>By confirming your subscription, you allow The Outbound Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms.</div>
  </form>
);
