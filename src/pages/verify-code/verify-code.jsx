import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "shared/ui/password-input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./verify-code.module.css";

export const VerifyCodePage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length < 4) {
      toast("Enter a valid code");
      return;
    }
    toast("Code verified!");
    setTimeout(() => navigate("/reset-password"), 500);
  };

  return (
    <>
      <button
        className={styles.back}
        onClick={() => navigate("/forgot-password")}
      >
        ← Back to login
      </button>
      <h1 className={styles.title}>Verify code</h1>
      <p className={styles.subtitle}>
        An authentication code has been sent to your email.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <PasswordInput
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className={styles.resend}>
          Didn't receive a code?{" "}
          <button
            className={styles.resendBtn}
            onClick={() => toast("Code resent!")}
          >
            Resend
          </button>
        </div>
        <Button type="submit" style={{ width: "100%" }}>
          Verify
        </Button>
      </form>
    </>
  );
};
