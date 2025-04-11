import { useState } from "react";

const Subscription = ({ email }) => {
  const [emailInput, setEmailInput] = useState(email || "");
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const offers = [
    {
      duration: "3 MOIS",
      price: "25€ / mois",
      total: "75€",
      priceId: "price_1R1ZYnRolLGUgdRCxDPQKtWu",
      description: "Idéal pour un suivi court-terme, corriger d'éventuels bugs et apporter des modifications mineures.",
    },
    {
      duration: "6 MOIS",
      price: "23€ / mois",
      total: "138€",
      priceId: "price_1R1ZakRolLGUgdRC4bZvWF0v",
      description: "Un accompagnement semi-annuel pour assurer la sécurité et la mise à jour régulière de votre site.",
    },
    {
      duration: "9 MOIS",
      price: "21€ / mois",
      total: "189€",
      priceId: "price_1R1ZbnRolLGUgdRCB9Hajtpo",
      description: "Idéal pour un suivi à long terme avec mises à jour périodiques et intégration d'améliorations fonctionnelles.",
    },
    {
      duration: "12 MOIS",
      price: "19€ / mois",
      total: "228€",
      priceId: "price_1R1ZcnRolLGUgdRCHw2QpwWH",
      description: "Une sérénité totale avec un suivi annuel complet, comprenant toutes les mises à jour nécessaires et un support prioritaire.",
    }
  ];

  const handleSubscribe = async (priceId) => {
    if (!emailInput || !emailValid) {
      alert("Veuillez entrer un email valide !");
      return;
    }

    setLoading(true);

    const selectedOffer = offers.find((offer) => offer.priceId === priceId);
    const productName = selectedOffer ? `Contrat de maintenance de ${selectedOffer.duration}` : "Abonnement";

    try {
      const response = await fetch("/api/checkout/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, priceId, productName }),
      });

      if (!response.ok) throw new Error("Erreur serveur. Veuillez réessayer.");

      const data = await response.json();
      if (!data.url) throw new Error("URL de paiement non reçue. Vérifiez le serveur.");

      window.location.href = data.url;
    } catch (error) {
      console.error("Erreur lors de l'abonnement :", error);
      alert(error.message);
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailInput(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(value));
  };

  return (
    <div className="tarifs-container spy" id="subscription">
      <h1 className="tarifs-title">S'ABONNER À NOS OFFRES DE MAINTENANCE</h1>
      <div className="header-underline"></div>
      <p className="tarifs-subtitle">
        Assurez la pérennité et la performance de votre site web avec nos offres de maintenance adaptées à vos besoins !
      </p>
      <div className="email-input-container">
        <input
          type="email"
          placeholder="Entrez votre email"
          value={emailInput}
          onChange={handleEmailChange}
          className={`tarifs-email-input ${emailValid ? "valid" : "invalid"}`}
        />
        {!emailValid && emailInput && (
          <p className="error-message">Veuillez entrer un email valide</p>
        )}
        <p>Veuillez saisir votre email pour accéder à nos offres de maintenance</p>
      </div>
      <div className="tarifs-grid">
        {offers.map((offer) => (
          <div
            className={`tarifs-card ${!emailValid ? "disabled-card" : ""}`}
            key={offer.duration}
          >
            <h2 className="tarifs-card-title">{offer.duration}</h2>
            <p className="tarifs-price">{offer.price}</p>
            <p className="tarifs-description">Total : {offer.total}</p>
            <ul className="tarifs-list">
              <li>Corrections de bugs et mises à jour de sécurité</li>
              <li>Modifications mineures (texte, images, contenu)</li>
              <li>Ajout de nouveaux articles ou produits</li>
              <li>Support technique et assistance</li>
            </ul>
            <p className="tarifs-extra">{offer.description}</p>
            <button
              className="tarifs-btn"
              onClick={() => handleSubscribe(offer.priceId)}
              disabled={!emailValid || loading}
            >
              {loading ? "Redirection..." : "S'abonner"}
            </button>
          </div>
        ))}
      </div>
      <br />
      <p className="tarifs-footer">
        *Nos offres de maintenance vous garantissent un site toujours fonctionnel et optimisé. Un site bien entretenu est un site qui convertit mieux !
      </p>
    </div>
  );
};

export default Subscription;
