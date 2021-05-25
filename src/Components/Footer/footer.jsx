import React from "react";

import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <p>Eduardo Rodríguez González © 2021</p>
      <div className="rrss">
        <a
          className="span-rrss-a"
          href="https://www.linkedin.com/in/eduardorodriguezgonzalez/"
          target="_blank"
        >
          <span className="fab fa-linkedin span-rrss"></span>
        </a>
        <a
          className="span-rrss-a"
          href="https://github.com/EduardoRodriguez5"
          target="_blank"
        >
          <span className="fab fa-github span-rrss"></span>
        </a>
      </div>
    </div>
  );
}
