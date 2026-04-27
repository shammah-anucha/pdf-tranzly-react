import { useNavigate } from "react-router-dom";

export default function FooterLinks() {
  const navigate = useNavigate();

  return (
    <div className="footer-links">
      <span>By uploading a file, you agree to our</span>

      <button
        className="footer-link"
        onClick={() => navigate("/terms")}
      >
        Terms of Use
      </button>

      <span>and</span>

      <button
        className="footer-link"
        onClick={() => navigate("/privacy")}
      >
        Privacy Policy
      </button>
    </div>
  );
}