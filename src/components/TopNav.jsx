import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import NavButton from "./NavButton";
import NavTextButton from "./NavTextButton";
import NavItem from "./NavItem";

export default function TopNav() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const goHome = () => {
    navigate("/home", { replace: true });
  };

  const goContact = () => {
    navigate("/contact", { replace: true });
  };

  const handleAuthAction = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    await signOut(auth);
    alert("Signed out successfully");
  };

  return (
    <header className="top-nav">
      <button className="brand-button" onClick={goHome}>
        <span className="brand-blue">pdf</span>
        <span className="brand-black"> tranzly</span>
      </button>

      <nav className="desktop-nav">
        <div className="tools-wrapper">
          <NavButton
            icon="▦"
            label="Tools"
            trailing="⌄"
            onClick={() => setToolsOpen((open) => !open)}
          />

          {toolsOpen && (
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => {
                  setToolsOpen(false);
                  goHome();
                }}
              >
                <span>🌐</span>
                <span>Translate PDF</span>
              </button>
            </div>
          )}
        </div>

        <NavTextButton label="Contact Us" onClick={goContact} />
      </nav>

      <div className="mobile-nav">
        <button
          className="menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          ☰
        </button>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <p className="mobile-menu-title">Tools</p>

            <button
              className="dropdown-item"
              onClick={() => {
                setMobileMenuOpen(false);
                goHome();
              }}
            >
              <span>🌐</span>
              <span>Translate PDF</span>
            </button>

            <hr />

            <button
              className="dropdown-item"
              onClick={() => {
                setMobileMenuOpen(false);
                goContact();
              }}
            >
              <span>✉️</span>
              <span>Contact Us</span>
            </button>
          </div>
        )}
      </div>

      <div className="nav-spacer" />

      <NavItem
        title={user ? "Log Out" : "Log in"}
        onClick={handleAuthAction}
      />
    </header>
  );
}