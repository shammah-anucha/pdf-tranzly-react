import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Email endpoint
app.post("/api/send-email", async (req, res) => {
  console.log("Request received:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const payload = {
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      user_id: process.env.EMAIL_USER_ID,
      template_params: {
        name,
        message,
        from_email: email,
      },
    };

    console.log("EmailJS payload:", {
      service_id: payload.service_id,
      template_id: payload.template_id,
      user_id: payload.user_id ? "exists" : "missing",
      template_params: payload.template_params,
    });

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text();

    console.log("EmailJS response:", response.status, text);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "EmailJS failed",
        detail: text,
      });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("Send email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Start server
const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});