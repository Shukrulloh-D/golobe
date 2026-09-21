import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "shared/ui/password-input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./reset-password.module.css";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }
    if (pwd !== confirm) {
      toast("Passwords do not match");
      return;
    }
    toast("Password reset successfully!");
    setTimeout(() => navigate("/login"), 500);
  };

  return (
    <>
      <h1 className={styles.title}>Set a password</h1>
      <p className={styles.subtitle}>
        Your previous password has been reset. Please set a new password for
        your account.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <PasswordInput
          placeholder="Create Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <PasswordInput
          placeholder="Re-enter Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button type="submit" style={{ width: "100%" }}>
          Set password
        </Button>
      </form>
    </>
  );
};
