import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import { receiveEmail } from "../services/receiveEmail";

export default function ContactScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact PDF Tranzly - Support & Help";
  }, []);

  const isFormComplete =
    form.name.trim() && form.email.trim() && form.message.trim();

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const sendInquiry = async (event) => {
    event.preventDefault();

    if (!isFormComplete) return;

    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());

    if (!emailOk) {
      alert("Enter a valid email");
      return;
    }

    try {
      await receiveEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      alert("Inquiry sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending inquiry");
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-card">
        <form onSubmit={sendInquiry}>
          <TopNav />

          <div className="contact-top-gap" />

          <h1>Contact us for personalized support</h1>

          <div className="contact-fields-row">
            <Field
              label="Your Name"
              required
              value={form.name}
              onChange={(value) => updateField("name", value)}
            />

            <Field
              label="Your Email"
              type="email"
              required
              value={form.email}
              onChange={(value) => updateField("email", value)}
            />
          </div>

          <label className="contact-label">
            Your Message <span>*</span>
          </label>

          <textarea
            className="contact-input contact-textarea"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
          />

          <button
            className="contact-submit"
            type="submit"
            disabled={!isFormComplete}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

function Field({ label, type = "text", required, value, onChange }) {
  return (
    <div className="contact-field">
      <label className="contact-label">
        {label} {required && <span>*</span>}
      </label>

      <input
        className="contact-input"
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}