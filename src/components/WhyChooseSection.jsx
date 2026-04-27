const features = [
  {
    icon: "📄",
    color: "#E94B64",
    title: "All-in-one PDF editor",
    desc: "Tired of juggling countless tools to manage your documents? PDF Tranzly lets you translate, convert, modify, protect, split, and sign PDFs in one seamless interface.",
  },
  {
    icon: "🔒",
    color: "#4C5BFF",
    title: "Serious about privacy",
    desc: "PDF Tranzly uses advanced encryption to ensure your sensitive files remain secure throughout the entire translation and conversion process.",
  },
  {
    icon: "✅",
    color: "#12B76A",
    title: "No setup needed",
    desc: "Use PDF Tranzly instantly on desktop, laptop, tablet, or smartphone. No installation required—everything works directly in your browser.",
  },
  {
    icon: "▦",
    color: "#E94B64",
    title: "Simple intuitive tool",
    desc: "No technical skills required. Just upload your PDF, choose the language, and let PDF Tranzly do the rest in seconds.",
  },
  {
    icon: "📃",
    color: "#4C5BFF",
    title: "Quick and accurate translation",
    desc: "Translate your PDF documents in just a few clicks with fast, reliable, and highly accurate language conversion.",
  },
  {
    icon: "🎧",
    color: "#12B76A",
    title: "Get immediate support",
    desc: "Need a hand? Our support team is always ready to help with PDF translation and document conversion issues.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-section">
      <h2>Why choose PDF Tranzly</h2>

      <div className="why-grid">
        {features.map((item) => (
          <article className="why-card" key={item.title}>
            <div className="why-card-header">
              <div
                className="why-icon"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
            </div>

            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}