import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "shared/ui/input";
import { PasswordInput } from "shared/ui/password-input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./signup.module.css";

export const SignupPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [agree, setAgree] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirm
    ) {
      toast("Please fill all fields");
      return;
    }
    if (!form.email.includes("@")) {
      toast("Invalid email");
      return;
    }
    if (form.password !== form.confirm) {
      toast("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }
    if (!agree) {
      toast("Please accept Terms and Privacy Policies");
      return;
    }
    toast("Account created!");
    setTimeout(() => navigate("/signup-payment"), 500);
  };

  return (
    <>
      <h1 className={styles.title}>Sign up</h1>
      <p className={styles.subtitle}>
        Let's get you all set up so you can access your personal account.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          <Input
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <Input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
        <PasswordInput
          placeholder="Password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
        />
        <PasswordInput
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={(e) => update("confirm", e.target.value)}
        />

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to all the <span className={styles.terms}>Terms</span> and{" "}
          <span className={styles.terms}>Privacy Policies</span>
        </label>

        <Button type="submit" style={{ width: "100%" }}>
          Create account
        </Button>

        <div className={styles.loginLink}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>

        <div className={styles.divider}>Or Sign up with</div>
        <div className={styles.socialRow}>
          <button
            type="button"
            className={styles.socialBtn}
            style={{ color: "#1877f2" }}
            onClick={() => toast("Facebook signup...")}
          >
            f
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            style={{ color: "#ea4335" }}
            onClick={() => toast("Google signup...")}
          >
            G
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            style={{ color: "#000" }}
            onClick={() => toast("Apple signup...")}
          ></button>
        </div>
      </form>
    </>
  );
};
