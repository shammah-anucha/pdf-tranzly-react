import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";

const contactEmail = "onestopprints@gmail.com";
const lastUpdated = "2026-02-11";
const retentionDays = 30;

export default function PrivacyPolicyScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Privacy Policy - PDF Tranzly";
  }, []);

  return (
    <main className="policy-page">
      <div className="policy-container">
        <TopNav />

        <div className="policy-spacer" />

        <Header />

        <Section title="1. Overview">
          <P>
            This Privacy Policy explains how PDF Tranzly (“we”, “us”, “our”)
            handles personal data when you use PDF Tranzly.
          </P>
          <P>
            Important: We do not run ads, we do not sell personal data, and we
            do not use your personal information for advertising or marketing at
            this time.
          </P>
          <P>
            If we change how we use data, we will update this Privacy Policy and
            provide notice as required by law.
          </P>
        </Section>

        <Section title="2. Who We Are (GDPR)">
          <P>Controller: PDF Tranzly</P>
          <P>Country/region of establishment: EU/EEA</P>
          <P>Contact: {contactEmail}</P>
          <P>
            For GDPR purposes, we are generally the “data controller” for
            account and service operations data.
          </P>
        </Section>

        <Section title="3. Data We Collect">
          <P>
            We may collect account data, uploaded PDF files, translated outputs,
            and technical/log data needed for security and reliability.
          </P>
        </Section>

        <Section title="4. What We Do NOT Do">
          <Bullets
            items={[
              "We do not show ads.",
              "We do not sell your personal data.",
              "We do not use your documents to target advertising.",
              "We do not send marketing emails unless you explicitly opt in.",
            ]}
          />
        </Section>

        <Section title="5. Why We Process Data">
          <Bullets
            items={[
              "Provide PDF translation.",
              "Maintain security and prevent abuse.",
              "Provide customer support.",
              "Comply with legal obligations where applicable.",
            ]}
          />
        </Section>

        <Section title="6. Legal Bases (GDPR Article 6)">
          <P>
            Where GDPR applies, we may rely on contract, legitimate interests,
            legal obligation, or consent depending on the feature.
          </P>
        </Section>

        <Section title="7. Retention">
          <P>
            Uploaded PDFs and translation outputs may be stored temporarily and
            are intended to be deleted after approximately {retentionDays} days,
            unless legal or security reasons require otherwise.
          </P>
        </Section>

        <Section title="8. Sharing and Processors">
          <P>
            We use service providers such as Firebase and hosting providers to
            operate the Service. We do not share personal data with advertisers.
          </P>
        </Section>

        <Section title="9. International Transfers">
          <P>
            Some providers may process data outside the EU/EEA. Where required,
            appropriate safeguards are used.
          </P>
        </Section>

        <Section title="10. Security">
          <P>
            We take reasonable measures to protect your data, but no system can
            be guaranteed 100% secure.
          </P>
        </Section>

        <Section title="11. Your Rights (GDPR)">
          <Bullets
            items={[
              "Access your personal data",
              "Correct inaccurate data",
              "Delete data where applicable",
              "Restrict or object to processing",
              "Data portability",
              "Lodge a complaint with a supervisory authority",
            ]}
          />
        </Section>

        <Section title="12. Children">
          <P>
            PDF Tranzly is not intended for children under the age of majority in
            your jurisdiction.
          </P>
        </Section>

        <Section title="13. Changes to This Policy">
          <P>
            We may update this Privacy Policy from time to time. The “Last
            updated” date shows the latest version.
          </P>
        </Section>

        <Section title="14. Contact">
          <P>
            If you have questions or requests regarding privacy, contact us at{" "}
            {contactEmail}.
          </P>
        </Section>

        <div className="policy-actions">
          <button className="policy-back-button" onClick={() => navigate(-1)}>
            Back
          </button>

          <button className="policy-got-button" onClick={() => navigate(-1)}>
            Got it
          </button>
        </div>

        <p className="policy-note">
          This Privacy Policy is provided for transparency. It does not replace
          legal advice.
        </p>
      </div>
    </main>
  );
}

function Header() {
  return (
    <div className="policy-header">
      <h1>Privacy Policy</h1>
      <p>Last updated: {lastUpdated}</p>
    </div>
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

function P({ children }) {
  return <p className="policy-paragraph">{children}</p>;
}

function Bullets({ items }) {
  return (
    <ul className="policy-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}