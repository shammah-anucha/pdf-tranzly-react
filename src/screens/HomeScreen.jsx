import { useEffect } from "react";

import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import FeatureRow from "../components/FeatureRow";
import FooterLinks from "../components/FooterLinks";
import WhyChooseSection from "../components/WhyChooseSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function HomeScreen() {
  useEffect(() => {
    document.title = "PDF Tranzly - Translate PDF Online Instantly";
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F2F3F5",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Outer padding */}
      <div style={{ padding: "18px" }}>
        {/* Center container */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* White card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "34px",
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <TopNav />

            <div style={{ height: "54px" }} />

            <Hero />

            <div style={{ height: "1px" }} />

            <UploadCard />

            {/* <div style={{ height: "5px" }} /> */}

            <FeatureRow />

            <div style={{ height: "5px" }} />

            <FooterLinks />

            <div style={{ height: "10px" }} />

            <WhyChooseSection />

            <div style={{ height: "15px" }} />

            <FaqSection />

            <div style={{ height: "40px" }} />
          </div>
        </div>
      </div>

      {/* Full-width footer */}
      <Footer />
    </div>
  );
}