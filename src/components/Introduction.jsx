import React from "react";
import { Icon } from "@iconify/react";  // Si tu utilises @iconify
import { FaAngleDown } from "react-icons/fa";  // Flèche stylisée

function Introduction() {
  // Observer();
  // Spy();

  return (
    <> 
      <div id="accueil"></div>
      <div className="fond">
        <div className="myself spy" id="home">
          <img src="/img/2removebg.png" className="Me reveal-1" alt="Profile" />
        </div>
        {/* Icône de flèche */}
        <a href="#services" className="scroll-arrow">
          <Icon icon="bx:chevron-down-circle" className="arrow-icon" />
        </a>
      </div>
    </>
  );
}

export default Introduction;
