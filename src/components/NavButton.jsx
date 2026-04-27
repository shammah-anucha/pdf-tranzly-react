export default function NavButton({ icon, label, trailing, onClick }) {
    return (
      <button className="nav-button-simple" onClick={onClick}>
        <span className="nav-icon">{icon}</span>
        <span>{label}</span>
        {trailing && <span className="nav-trailing">{trailing}</span>}
      </button>
    );
  }