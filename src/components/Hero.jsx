import { useEffect, useState } from "react";

export default function Hero() {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <h1 className={isNarrow ? "hero-title small" : "hero-title"}>
        Free Online PDF Translator
      </h1>

      <p className="hero-subtitle">
        Break language barriers in just a few clicks
      </p>
    </section>
  );
}