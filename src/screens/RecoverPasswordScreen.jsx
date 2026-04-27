import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function RecoverPasswordScreen() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const passwordReset = async (e) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      alert("Invalid email!");
      return;
    }

    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());

      alert(
        "If an account with this email exists, a password reset link has been sent. Please check your inbox and spam folder."
      );
    } catch (error) {
      alert(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="recover-page">
      <button className="recover-back" onClick={() => navigate(-1)}>
        ←
      </button>

      <form className="recover-card" onSubmit={passwordReset}>
        <h1>Forgot your Password?</h1>

        <h2>Enter your E-Mail Address</h2>

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isLoading ? (
          <p className="recover-loading">Loading...</p>
        ) : (
          <button type="submit">SUBMIT</button>
        )}
      </form>
    </main>
  );
}