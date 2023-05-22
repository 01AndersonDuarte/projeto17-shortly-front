import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from './contexts/AuthContext';

import RankingPage from "./pages/RankingPage/RankingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RankingPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home-user" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}