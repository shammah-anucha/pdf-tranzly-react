import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

const companyEmail = "onestopprints@gmail.com";
const lastUpdated = "2026-02-11";
const retentionDays = 30;

const sections = [
  {
    title: "1. About These Terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of the PDF translation service operated by PDF Tranzly.",
      "By using the Service, you agree to these Terms. If you do not agree, do not use the Service.",
    ],
  },
  {
    title: "2. Company Information",
    paragraphs: [
      "Provider: PDF Tranzly",
      `Contact email: ${companyEmail}`,
      "Country of establishment: EU/EEA",
    ],
  },
  {
    title: "3. The Service",
    paragraphs: [
      "The Service allows you to upload PDF documents and receive translated output.",
      "Machine translation may contain inaccuracies and may not preserve original formatting perfectly.",
    ],
  },
  {
    title: "4. Accounts and Security",
    paragraphs: [
      "If you create an account, you must provide accurate information and keep your login credentials secure.",
      "You are responsible for all activities that occur under your account.",
    ],
  },
  {
    title: "5. Your Content and Rights",
    paragraphs: [
      "You retain ownership of documents, text, images, or other material you upload.",
      "You grant us a limited license to process your content only as needed to provide the Service.",
    ],
  },
  {
    title: "6. Prohibited Use",
    bullets: [
      "Upload content you do not have the right to use or share.",
      "Upload illegal, malicious, harmful, hateful, or harassing content.",
      "Attempt to disrupt, scrape, reverse engineer, or bypass security limits.",
      "Represent machine translations as certified translations where certification is legally required.",
    ],
  },
  {
    title: "7. Translation Quality",
    paragraphs: [
      "Translations are provided as is and may contain errors.",
      "You must verify translations before relying on them for legal, medical, financial, immigration, safety, or compliance documents.",
    ],
  },
  {
    title: "8. Uploaded Files, Storage, and Retention",
    paragraphs: [
      `We aim to delete uploaded files and translated outputs after approximately ${retentionDays} days, unless legal or security reasons require otherwise.`,
      "Do not upload highly sensitive personal data unless you have assessed the risks.",
    ],
  },
  {
    title: "9. GDPR Rights",
    paragraphs: [
      "Where applicable, you may have rights to access, rectification, erasure, restriction, portability, and objection.",
      `To exercise rights, contact ${companyEmail}.`,
    ],
  },
  {
    title: "10. Intellectual Property",
    paragraphs: [
      "The Service, including software, interfaces, trademarks, and branding, is owned by us or our licensors.",
    ],
  },
  {
    title: "11. Service Availability",
    paragraphs: [
      "We may change, suspend, or discontinue any part of the Service at any time.",
      "We do not guarantee uninterrupted or error-free operation.",
    ],
  },
  {
    title: "12. Contact",
    paragraphs: [`Questions about these Terms? Contact us at ${companyEmail}.`],
  },
];

export default function TermsOfUseScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Terms of Use - PDF Tranzly";
  }, []);

  return (
    <main className="policy-page">
      <div className="policy-container">
        <TopNav />

        <div className="policy-spacer" />

        <div className="policy-header">
          <h1>Terms and Conditions of Use (EU)</h1>
          <p>Last updated: {lastUpdated}</p>
        </div>

        {sections.map((section) => (
          <Section key={section.title} title={section.title}>
            {section.paragraphs?.map((text) => (
              <p className="policy-paragraph" key={text}>
                {text}
              </p>
            ))}

            {section.bullets && (
              <ul className="policy-bullets">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Section>
        ))}

        <div className="policy-actions">
          <button className="policy-back-button" onClick={() => navigate(-1)}>
            Back
          </button>

          <button className="policy-got-button" onClick={() => navigate(-1)}>
            I Agree
          </button>
        </div>

        <p className="policy-note">
          By continuing to use the Service, you acknowledge that you have read,
          understood, and agreed to these Terms in their entirety.
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}