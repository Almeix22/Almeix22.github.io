import React from "react";
import { Icon } from '@iconify/react';
import Observer from "./observer";

function FooterApp() {
  Observer()
  
  return (
    <footer>
      <div>
        <div className="footer_link reveal-1">
          <div className="line1"></div>
            <a href="https://www.linkedin.com/in/axel-fran%C3%A7ois-82474224a/?originalSubdomain=fr"> <Icon className="Icon" icon="mdi:linkedin" id="linkedin"/></a>
            <a href="https://github.com/Almeix22"><Icon className="Icon" icon="line-md:github-twotone" id="github"/></a>
            <a href="https://www.facebook.com/profile.php?id=61569452876118"><Icon className="Icon" icon="akar-icons:facebook-fill" id="facebook"/></a>
          <div className="line2"></div>
        </div>
        <p className="reveal-2"> Copyright &copy; 2024 François Axel E-portfolio</p>
      </div>
    </footer>
  );
}

export default FooterApp;
