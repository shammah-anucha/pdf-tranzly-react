import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/shammahanucha", "_blank");
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-logo">pdf tranzly</div>

        <FooterSection title="Tools">
          <FooterLink label="Translate PDF" onClick={() => navigate("/home")} />
        </FooterSection>

        <FooterSection title="Company">
          <FooterLink label="Contact Us" onClick={() => navigate("/contact")} />
          <FooterLink label="FAQ" onClick={() => navigate("/faq")} />
        </FooterSection>

        <FooterSection title="Legal Information">
          <FooterLink label="Terms of Use" onClick={() => navigate("/terms")} />
          <FooterLink
            label="Privacy Policy"
            onClick={() => navigate("/privacy")}
          />
        </FooterSection>

        <FooterSection title="Follow Us">
          <FooterLink label="LinkedIn" icon="💼" onClick={openLinkedIn} />
        </FooterSection>
      </div>
    </footer>
  );
}

function FooterSection({ title, children }) {
  return (
    <section className="footer-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function FooterLink({ label, onClick, icon }) {
  return (
    <button className="footer-nav-link" onClick={onClick}>
      {icon && <span className="footer-link-icon">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}