import { useEffect } from "react";
import TopNav from "../components/TopNav";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function FaqMainScreen() {
  useEffect(() => {
    document.title =
      "PDF Tranzly Help - Get Help to Frequently asked Questions";
  }, []);

  return (
    <div style={{ backgroundColor: "#F2F3F5", minHeight: "100vh" }}>
      <div style={{ padding: "18px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "34px",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TopNav />

            <div style={{ height: "54px" }} />

            <FaqSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}