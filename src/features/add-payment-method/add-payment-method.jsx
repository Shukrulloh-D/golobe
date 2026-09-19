import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import styles from './add-payment-method.module.css';

export const AddPaymentMethod = () => (
  <form className={styles.form}>
    <h2>Add a new Card</h2>
    <Input placeholder="Card Number" />
    <div className={styles.row}>
      <Input placeholder="Exp. Date" />
      <Input placeholder="CVC" />
    </div>
    <Input placeholder="Name on Card" />
    <Input placeholder="Country or Region" />
    <label><input type="checkbox" /> Securely save my information for 1-click checkout</label>
    <Button>Add Card</Button>
  </form>
);
