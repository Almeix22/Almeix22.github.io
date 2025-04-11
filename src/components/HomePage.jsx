import React from "react";
import PortfolioNavBar from "../components/navigationBar";
import Introduction from "../components/Introduction";
import Contact from "../components/contact";
import MesServices from "../components/MesServices";
import FooterApp from "../components/footer";
import Projects from "../components/portfolio";
import About from "../components/about";
import Citation from "../components/citation";
import Workflow from "../components/workflow";
import Tarifs from "../components/tarif";
import Subscription from "../components/subscription";

const HomePage = () => {
  return (
    <div className="app">
      <PortfolioNavBar />
      <div className="parallax">
        <div className="parallax__bg"></div>
        <div className="parallax__content">
          <main className="app__main">
            <Introduction />
            <MesServices />
            <Citation 
              text="Chaque entreprise est unique, et son site web doit en être le reflet." 
              author="Jeffrey Zeldman" 
            />
            <Projects />
            <Workflow />
            <div className="tarif-subscription">
              <Tarifs />
              <Subscription />
            </div>
            <Citation 
              text="Les sites web sont la vitrine du 21ème siècle, mais leur véritable valeur réside dans la façon dont ils répondent aux besoins des utilisateurs." 
              author="Ethan Marcotte" 
            />
            <About />
            <Contact />
            <FooterApp />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
