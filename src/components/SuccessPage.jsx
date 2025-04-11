import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-cancel-container">
      <h1 className="success-cancel-title success-title">✅ Paiement Réussi !</h1>
      <p className="success-cancel-text">
        Merci pour votre achat. Votre abonnement est maintenant actif.
      </p>
      <button
        className="success-cancel-button success-button"
        onClick={() => navigate("/")}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default SuccessPage;
