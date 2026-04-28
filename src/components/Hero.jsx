import { useEffect, useState } from "react";

export default function Hero() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <h1 className={isNarrow ? "hero-title small" : "hero-title"}>
        Free Online PDF Translator
      </h1>

      <p className="hero-subtitle">
        Translate PDF documents from one language to another for free — fast,
        simple, and online.
      </p>
    </section>
  );
}