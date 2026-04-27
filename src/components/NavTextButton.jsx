export default function NavTextButton({ label, onClick }) {
    return (
      <button className="nav-text-button-simple" onClick={onClick}>
        {label}
      </button>
    );
  }