// export async function receiveEmail({ name, email, message }) {
//     const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
  
//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
//           template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
//           user_id: import.meta.env.VITE_EMAIL_USER_ID,
//           template_params: {
//             name: name,
//             message: message,
//             from_email: email,
//           },
//         }),
//       });
  
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Email send failed: ${response.status} ${text}`);
//       }
  
//       return true;
//     } catch (error) {
//       console.error("ReceiveEmailService failed:", error);
//       throw error; // so UI can show error
//     }
//   }

// export async function receiveEmail({ name, email, message }) {
//   const res = await fetch("/api/send-email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, message }),
//   });

//   if (!res.ok) {
//     throw new Error("Email send failed");
//   }

//   return true;
// }

export async function receiveEmail({ name, email, message }) {
  const response = await fetch("http://localhost:5050/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email send failed: ${response.status} ${text}`);
  }

  return true;
}