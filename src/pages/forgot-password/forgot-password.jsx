import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./forgot-password.module.css";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast("Enter a valid email");
      return;
    }
    toast("Reset code sent to your email");
    setTimeout(() => navigate("/verify-code"), 500);
  };

  return (
    <>
      <button className={styles.back} onClick={() => navigate("/login")}>
        ← Back to login
      </button>
      <h1 className={styles.title}>Forgot your password?</h1>
      <p className={styles.subtitle}>
        Don't worry, happens to all of us. Enter your email below to recover
        your password.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </form>

      <div className={styles.divider}>Or login with</div>
      <div className={styles.socialRow}>
        <button
          className={styles.socialBtn}
          style={{ color: "#1877f2" }}
          onClick={() => toast("Facebook login...")}
        >
          f
        </button>
        <button
          className={styles.socialBtn}
          style={{ color: "#ea4335" }}
          onClick={() => toast("Google login...")}
        >
          G
        </button>
        <button
          className={styles.socialBtn}
          style={{ color: "#000" }}
          onClick={() => toast("Apple login...")}
        ></button>
      </div>
    </>
  );
};
