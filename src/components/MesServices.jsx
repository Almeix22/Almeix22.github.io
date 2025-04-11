import { Icon } from "@iconify/react";
import React from "react";
import Observer from "./observer";
import Spy from "./spyScroll";

function MesServices() {
  Observer();
  Spy();
  const servicesData = [
    {
      id: 1,
      title: "Développement Web Sur-Mesure",
      description:
        "Je crée des sites web uniques, parfaitement adaptés à vos besoins, en utilisant les dernières technologies pour offrir une expérience optimale à vos utilisateurs.",
      logoSrc: "mdi:web",
      color: "#34495e",
      width: "60",
      height: "60",
    },
    {
      id: 2,
      title: "Sites Vitrine WordPress à votre image",
      description:
        "Je vous aide à lancer votre présence en ligne avec un site vitrine WordPress : flexible, rapide et conçu pour attirer et fidéliser vos visiteurs.",
      logoSrc: "mdi:wordpress",
      color: "#34495e",
      width: "60",
      height: "60",
    },
    {
      id: 3,
      title: "Sites E-commerce Performants",
      description:
        "Je développe des boutiques en ligne performantes, sécurisées et faciles à gérer, pour vous aider à vendre vos produits efficacement et booster vos ventes.",
      logoSrc: "mdi:cart-outline",
      color: "#34495e",
      width: "60",
      height: "60",
    },
    {
      id: 4,
      title: "Maintenance & Support Proactifs",
      description:
        "Je vous assure la longévité de votre site avec un service de maintenance et de support, garantissant son bon fonctionnement et sa sécurité en continu.",
      logoSrc: "mdi:tools",
      color: "#34495e",
      width: "60",
      height: "60",
    },
  ];
  

  return (
    <div className="background">
      <h2 className="services-title spy" id="services">MES SERVICES</h2>
      <div className="services-train"></div> {/* Le petit train sous le titre */}
      <p className="services-subtitle">Des solutions web sur-mesure pour votre entreprise.</p>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-wrapper">
              <Icon
                icon={service.logoSrc}
                color={service.color}
                width={service.width}
                height={service.height}
              />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MesServices;
