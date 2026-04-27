const features = [
    { icon: "🛡️", label: "Privacy-Focused" },
    { icon: "✏️", label: "Easy to Use" },
    { icon: "⚡", label: "Lightning-Fast" },
  ];
  
  export default function FeatureRow() {
    return (
      <div className="feature-row">
        {features.map((item) => (
          <Feature key={item.label} {...item} />
        ))}
      </div>
    );
  }
  
  function Feature({ icon, label }) {
    return (
      <div className="feature-item">
        <span className="feature-icon">{icon}</span>
        <span className="feature-label">{label}</span>
      </div>
    );
  }