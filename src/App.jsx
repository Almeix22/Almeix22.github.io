import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import HomePage from "./components/HomePage";  // Import de la page d'accueil
import SuccessPage from "./components/SuccessPage";  // Import de la page de succès
import CancelPage from "./components/CancelPage";  // Import de la page d'annulation

// Clé publique Stripe (remplace par ta vraie clé)
const stripePromise = loadStripe("pk_test_51R0po9RolLGUgdRCZT48uVblefAYFAeXjAyMaScOhS4Xio96oSguuXhdqIidkHotG5h18mzpvVuXewcgE3ppOuLQ006Co32l2C");

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<HomePage />} />   {/* Page principale */}
          <Route path="/success" element={<SuccessPage />} />   {/* Page succès */}
          <Route path="/cancel" element={<CancelPage />} />   {/* Page annulation */}
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;
