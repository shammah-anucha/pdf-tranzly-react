// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./firebase";


import { AuthProvider } from "./context/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AuthPage from "./screens/AuthPage";
import TermsOfUseScreen from "./screens/TermsOfUseScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import FaqMainScreen from "./screens/FaqMainScreen";
import RecoverPasswordScreen from "./screens/RecoverPasswordScreen";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/home", element: <HomeScreen /> },
  { path: "/contact", element: <ContactScreen /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/terms", element: <TermsOfUseScreen /> },
  { path: "/privacy", element: <PrivacyPolicyScreen /> },
  { path: "/faq", element: <FaqMainScreen /> },
  { path: "/recover-password", element: <RecoverPasswordScreen /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);