import React from "react";
import { Icon } from '@iconify/react';
import Observer from "./observer";
import Spy from "./spyScroll";

function About() {
    Observer();
    Spy();
    return (
        <>
            <div className="about-container spy" id="about">
                <div className="about-header">
                    <h1>À PROPOS</h1>
                    <div className="header-underline"></div>
                    <p>Je suis développeur web freelance et j'aime ça !</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Un développeur web passionné !</h3>
                        <p>
                        Diplômé d’un BAC+3 en informatique, j’ai acquis une solide expérience en travaillant au sein d'entreprises spécialisées dans le développement de logiciels et de sites web sur mesure pour des clients variés. Aujourd'hui, à la tête de ma propre micro-entreprise, je mets mon expertise au service de vos projets pour vous offrir des solutions web de qualité, adaptées à vos besoins spécifiques.                        </p>
                        <p>
                        Mon objectif est de vous fournir une expérience client fluide et agréable, en vous accompagnant à chaque étape de la création de votre projet. Je mets un point d’honneur à concevoir des sites et applications web qui non seulement répondent à vos exigences techniques, mais qui reflètent également votre identité et vos valeurs.                        </p>
                    </div>
                    <div className="about-image">
                        <img src="/img/pc.png" alt="Illustration de développeur web" />
                    </div>
                    <div className="about-text">
                        <h3>Des solutions à votre image</h3>
                        <p>
                        Que vous soyez une entreprise, une association ou un particulier, je vous propose des solutions web personnalisées, allant du site vitrine au projet plus complexe. Grâce à mon expertise, je vous assure un développement sur mesure alliant performance, esthétique et expérience utilisateur optimale.                        </p>
                        <h3>Un tarif adapté à votre projet</h3>
                        <p>
                            Je propose des services web accessibles et de qualité, avec une approche flexible et transparente. Mon but est de vous offrir un tarif juste, en adéquation avec vos besoins et les spécificités de votre projet, tout en garantissant des résultats à la hauteur de vos attentes.                        </p>
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat-item">
                        <Icon icon="mdi:code-tags" width="50" height="50" color="#ff6f61" />
                        <h4>5</h4>
                        <p>ANNÉES D'EXPÉRIENCE</p>
                    </div>
                    <div className="stat-item">
                        <Icon icon="mdi:cog-outline" width="50" height="50" color="#ff6f61" />
                        <h4>15</h4>
                        <p>PROJETS RÉALISÉS</p>
                    </div>
                    <div className="stat-item">
                        <Icon icon="mdi:chart-line" width="50" height="50" color="#ff6f61" />
                        <h4>13</h4>
                        <p>CLIENTS SATISFAITS</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
