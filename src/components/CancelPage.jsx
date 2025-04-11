import React from "react";
import { useNavigate } from "react-router-dom";

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-cancel-container">
      <h1 className="success-cancel-title cancel-title">❌ Paiement Annulé</h1>
      <p className="success-cancel-text">
        Votre paiement a été annulé. Vous pouvez réessayer à tout moment.
      </p>
      <button
        className="success-cancel-button cancel-button"
        onClick={() => navigate("/")}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default CancelPage;
