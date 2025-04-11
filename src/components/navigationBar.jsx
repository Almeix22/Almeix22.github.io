import React from "react";
import { Icon } from "@iconify/react";

function PortfolioNavBar() {
  return (
    <header className="header">
      <a href="#accueil" className="logo">
        <img src="img/1removebg.png" alt="Logo" className="logo-image" />
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="menu">
        <Icon icon="bx:menu" id="icon-menu" />
        <Icon icon="bx:x" id="close-menu" />
      </label>

      <nav className="navbar">
        <a href="#home">Accueil</a>
        <a href="#services">Mes services</a>
        <a href="#portfolio">Réalisations</a>
        <a href="#tarif">Tarifs</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Section des icônes sociales */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/axel-fran%C3%A7ois-82474224a/?originalSubdomain=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="akar-icons:linkedin-fill" className="social-icon" />
        </a>
        <a
          href="https://github.com/Almeix22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="akar-icons:github-fill" className="social-icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61569452876118"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="akar-icons:facebook-fill" className="social-icon" />
        </a>
      </div>
    </header>
  );
}

export default PortfolioNavBar;
