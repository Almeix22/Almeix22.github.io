import React, { useState, useEffect } from "react";
import { projectsData } from "./projectsData";
import Observer from "./observer";
import Spy from "./spyScroll";

function Projects() {
  Observer();
  Spy();

  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    "Tous les projets",
    "Création site internet",
    "Projet d'intelligence artificielle",
  ];

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      if (selectedCategory === "Tous les projets") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(
          projectsData.filter((project) => project.category === selectedCategory)
        );
      }
      setIsAnimating(false);
    }, 500);
  }, [selectedCategory]);

  return (
    <div className="projects">
      <h2 className="Portfolio_title spy" id="portfolio">MES RÉALISATIONS</h2>
      <div className="header-underline"></div>
      <p className="Portfolio_subtitle">
        Une partie des projets sur lesquels j'ai travaillé
      </p>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`portfolio_container ${isAnimating ? "is-animating" : ""}`}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              className={`project__container spy ${isAnimating ? "" : "show"}`}
              key={project.id}
            >
              <div className="project__image">
                <img src={project.img} alt={project.title} />
              </div>
              <article>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, index) => (
                    <i key={index} className={tool}></i>
                  ))}
                </div>
                <div className="main-btn">
                {project.online && (
                  <a
                    className="btn_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                  >
                    Voir le projet
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    className="btn_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.sourceCode}
                  >
                    Code Source
                  </a>
                )}
              </div>

              </article>
            </div>
          ))
        ) : (
          <p>Aucun projet trouvé pour cette catégorie.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
