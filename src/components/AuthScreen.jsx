import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function AuthScreen({ showSignUpScreen }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [obscure, setObscure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();

    if (!email.trim()) return alert("Email is required");
    if (!email.includes("@")) return alert("Invalid email");
    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message || "Google sign-in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <button className="auth-logo" onClick={() => navigate("/home")}>
        <span>pdf</span> tranzly
      </button>

      <form className="auth-card" onSubmit={signIn}>
        <h1>Good to see you back!</h1>
        <p>Please enter your details below to log in</p>

        <button
          type="button"
          className="google-button"
          onClick={signInWithGoogle}
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

        <div className="auth-info">
          Previously, we&apos;ve sent your login and password info to your
          email. Please check!
        </div>

        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <div className="auth-options">
          <label className="remember-row">
            <input
              className="auth-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          <button
            type="button"
            className="forgot-button"
            onClick={() => navigate("/recover-password")}
            disabled={isLoading}
          >
            Forgot password
          </button>
        </div>

        <button className="login-submit" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Log in"}
        </button>

        <p className="signup-row">
          Do not have an account yet?{" "}
          <button type="button" onClick={showSignUpScreen} disabled={isLoading}>
            Sign up
          </button>
        </p>
      </form>
    </main>
  );
}