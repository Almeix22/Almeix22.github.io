import React from "react";
import Observer from "./observer";
import Spy from "./spyScroll";

export default function Tarifs() {
  Observer();
  Spy();
  return (
    <div className="tarifs-container spy" id="tarif">
      <h1 className="tarifs-title">TARIFS</h1>
      <div className="header-underline"></div>
      <p className="tarifs-subtitle">Un tarif adapté à un site internet de qualité !</p>
      <div className="tarifs-cta">
        <a href="#contact" className="tarifs-btn_projet">
          UNE IDÉE ? UN PROJET ? N’HÉSITEZ PAS À DEMANDER UN DEVIS ! [GRATUIT]
        </a>
      </div>
      <div className="tarifs-grid">
        {/* Site Vitrine Simple */}
        <div className="tarifs-card">
          <h2>SITE VITRINE SIMPLE (One Page)</h2>
          <p className="tarifs-price">À PARTIR DE <span>400€*</span></p>
          <p className="tarifs-description">
            <strong>
              Parfait pour les petites entreprises ou indépendants ayant besoin d’un site simple et professionnel.
            </strong>
          </p>
          <br />
          <ul>
            <li>Développement sous WORDPRESS, basé sur un thème optimisé</li>
            <li>Design simple respectant votre charte graphique</li>
            <li>Site responsive, adapté aux mobiles et tablettes</li>
            <li>Mise en place d’un formulaire de contact et des informations essentielles</li>
            <li>Contenu fourni par le client (textes et images)</li>
          </ul>
          <a href="#contact" className="tarifs-btn">
          <strong>DÉMARREZ VOTRE PROJET</strong>
          </a>
        </div>

        {/* Boutique en ligne */}
        <div className="tarifs-card">
          <h2>PLATEFORME E-COMMERCE</h2>
          <p className="tarifs-price">À PARTIR DE <span>800€*</span></p>
          <p className="tarifs-description">
            <strong>
              Solution clé en main pour démarrer votre activité e-commerce avec un budget abordable.
            </strong>
          </p>
          <br />
          <ul>
            <li>Développement avec WooCommerce, Prestashop ou Shopify (au choix)</li>
            <li>Design personnalisé aligné avec votre identité visuelle</li>
            <li>Mise en place des premiers produits (10 produits inclus)</li>
            <li>Configuration des modes de paiement et des options de livraison</li>
            <li>Formation pour l’utilisation de la boutique en ligne</li>
          </ul>
          <a href="#contact" className="tarifs-btn">
          <strong>DÉMARREZ VOTRE PROJET</strong>
          </a>
        </div>

        {/* Site Personnalisé Avancé */}
        <div className="tarifs-card">
          <h2>SITE PERSONNALISÉ AVANCÉ</h2>
          <p className="tarifs-price">À PARTIR DE <span>1200€*</span></p>
          <p className="tarifs-description">
            <strong>
              Site entièrement personnalisé, conçu sur-mesure pour répondre à vos besoins spécifiques et vous démarquer de la concurrence.
            </strong>
          </p>
          <br />
          <ul>
            <li>Développement sur-mesure (codage manuel)</li>
            <li>Création d’une charte graphique unique et possibilité d’inclure un logo</li>
            <li>Fonctionnalités spécifiques (réservations, formulaires complexes, animations, etc.)</li>
            <li>Optimisation SEO avancée et assistance technique pendant 6 mois après la livraison</li>
          </ul>
          <a href="#contact" className="tarifs-btn">
          <strong>DÉMARREZ VOTRE PROJET</strong>
          </a>
        </div>
      </div>
      <br />
      <br />
      {/* Informations supplémentaires (une seule fois en dessous des cartes) */}
      <p className="tarifs-footer">
        *Les prix indiqués sont indicatif et peuvent varier selon vos besoins spécifiques et les fonctionnalités demandées.
        Des options supplémentaires, comme la création de contenus, des traductions ou un suivi régulier, peuvent être ajoutées en fonction des besoins.
      </p>
    </div>
  );
}
