import React from "react";
import { Icon } from "@iconify/react";
import ContactForm from "./contactForm";

function Contact() {
  const handlePhone = () => {
    window.location.href = "tel:+33772409962";
  };

  const handleMail = () => {
    window.location.href = "mailto:francoisaxel13@gmail.com";
  };

  const handleMap = () => {
    window.open(
      "https://www.google.com/maps?q=Châlons-en-Champagne,France",
      "_blank"
    );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title spy" id="contact">CONTACTEZ-MOI</h1>
      <p className="contact-subtitle">
        UNE IDÉE ? UN PROJET ? N'HÉSITEZ PAS À DEMANDER UN DEVIS ! [GRATUIT]
      </p>
      <div className="contact-container">
        {/* Détails de contact */}
        <div className="contact-left">
          <div className="contact-details">
            <div className="contact-item" onClick={handleMail}>
              <Icon
                className="contact-icon"
                icon="clarity:email-solid"
                color="#252a3a"
                width="50"
                height="50"
              />
              <p>axelfrancoispro22@gmail.com</p>
            </div>
            <div className="contact-item" onClick={handlePhone}>
              <Icon
                className="contact-icon"
                icon="bi:phone-fill"
                color="#252a3a"
                width="50"
                height="50"
              />
              <p>07 72 40 99 62</p>
            </div>
            <div className="contact-item" onClick={handleMap}>
              <Icon
                className="contact-icon"
                icon="gis:position"
                color="#252a3a"
                width="50"
                height="50"
              />
              <p>Châlons-en-Champagne, France</p>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="contact-map">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.444257988632!2d4.361308815657166!3d48.95710240305917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eb6b57f53e6f15%3A0x5b4e1a7ed0b61ad2!2sCh%C3%A2lons-en-Champagne%2C%20France!5e0!3m2!1sen!2sfr!4v1679654123374!5m2!1sen!2sfr"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Formulaire */}
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
