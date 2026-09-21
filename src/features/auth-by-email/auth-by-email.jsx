import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import styles from "./auth-by-email.module.css";

export const AuthByEmail = ({ mode = "login" }) => (
  <form className={styles.form}>
    {mode === "signup" && <Input placeholder="First Name" />}
    {mode === "signup" && <Input placeholder="Last Name" />}
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    {mode === "signup" && (
      <Input type="password" placeholder="Confirm Password" />
    )}
    <Button>{mode === "login" ? "Login" : "Sign up"}</Button>
  </form>
);
