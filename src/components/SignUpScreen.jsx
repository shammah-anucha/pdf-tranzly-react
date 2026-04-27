import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function SignUpScreen({ showAuthScreen }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [obscure, setObscure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const formLooksFilled = email.trim() && password.trim();

  const signUp = async (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      return alert("Enter a valid email");
    }

    if (password.length < 8) {
      return alert("Password must be at least 8 characters");
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message || "Sign-up failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithGoogle = async () => {
    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message || "Google sign-up failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <button className="auth-logo" onClick={() => navigate("/home")}>
        <span>pdf</span> tranzly
      </button>

      <form className="auth-card" onSubmit={signUp}>
        <h1>Create a FREE Account</h1>

        <p>
          Unlimited Downloads, Shares, And Printing.
          <br />
          Join 1.5 millions monthly users using this tool.
        </p>

        <button
          type="button"
          className="google-button"
          onClick={signUpWithGoogle}
          disabled={isLoading}
        >
          <span>G</span>
          Continue with Google
        </button>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {/* EMAIL */}
        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <label className="auth-label">Password</label>
        <div className="password-field">
          <input
            className="auth-input password-input"
            type={obscure ? "password" : "text"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="password-toggle"
            type="button"
            onClick={() => setObscure((v) => !v)}
          >
            {obscure ? "Show" : "Hide"}
          </button>
        </div>

        <p className="password-help">
          Password must contain at least 8 characters
        </p>

        {/* SUBMIT */}
        <button
          className="create-account-button"
          type="submit"
          disabled={isLoading || !formLooksFilled}
        >
          {isLoading ? "Loading..." : "Create account"}
        </button>

        {/* LOGIN */}
        <p className="signup-row">
          Already have an account?{" "}
          <button type="button" onClick={showAuthScreen} disabled={isLoading}>
            Log in
          </button>
        </p>

        {/* TERMS */}
        <p className="terms-row">
          By proceeding, you confirm that you have read and agreed to our{" "}
          <button type="button" onClick={() => navigate("/terms")}>
            Terms of Use
          </button>{" "}
          and{" "}
          <button type="button" onClick={() => navigate("/privacy")}>
            Privacy Policy
          </button>
        </p>
      </form>
    </main>
  );
}