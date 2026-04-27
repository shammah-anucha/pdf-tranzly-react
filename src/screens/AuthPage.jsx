import { useState } from "react";
import AuthScreen from "../components/AuthScreen";
import SignUpScreen from "../components/SignUpScreen";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <AuthScreen showSignUpScreen={() => setIsLogin(false)} />
  ) : (
    <SignUpScreen showAuthScreen={() => setIsLogin(true)} />
  );
}