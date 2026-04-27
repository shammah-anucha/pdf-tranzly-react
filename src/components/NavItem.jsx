export default function NavItem({ title, onClick }) {
    return (
      <button className="nav-item" onClick={onClick}>
        {title}
      </button>
    );
  }