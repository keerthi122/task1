import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Loginpage";
import SignupPage from "./SignupPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import VerificationPage from "./VerificationPage";
import ResetPasswordPage from "./ResetPasswordPage";
import PasswordChangedPage from "./PasswordChangedPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
         <Route path="/verify" element={<VerificationPage />} />
         <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password-changed" element={<PasswordChangedPage />} />

      </Routes>
    </Router>
  );
};

export default App;

