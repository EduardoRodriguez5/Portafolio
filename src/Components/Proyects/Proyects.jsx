import React from "react";


import maleteo1 from "../../assets/portada.png";
import maleteo2 from "../../assets/buscador.png";
import maleteo3 from "../../assets/Guardian.png";

import musify1 from "../../assets/musify1.png";
import musify2 from "../../assets/musify2.png";
import "./Proyects.scss";

export default function Proyects() {
  return (
    <div className="container-proyects">

      <div className="proyects__title">
          <h2>Proyectos</h2>
      </div>
      <div className=" proyects__main">
          <div className="proyects__main__title">
              <h3>Maleteo</h3>
              <p>HTML | CSS | JAVASCRIPT | REACT JS | NODE JS | MONGODB | EXPRESS JS | MONGOOSE | GOOGLE MAPS API</p>
          </div>
          <div className="row">
              <div className="proyects__main__items col-sm-12 col-md-4">
                  <img src={maleteo1} />
              </div>
              <div className="proyects__main__items col-sm-12 col-md-4">
                  <img src={maleteo2} />
              </div>
              <div className="proyects__main__items col-sm-12 col-md-4">
                  <img src={maleteo3} />
              </div>
              
          </div>
          <div className="proyects__main__title">
              <h3>Musify</h3>
              <p>HTML || CSS3 || SASS || JS ||ANGULAR || NODEJS || EXPRESS || MONGODB.</p>
          </div>
          <div className="row">
              <div className="proyects__main__items col-sm-12 col-lg-6">
                  <img src={musify1} className="musify__img"/>
              </div>
              
              <div className="proyects__main__items col-sm-12 col-lg-6">
                  <img src={musify2} className="musify__img"/>
              </div>
              
              
          </div>

      </div>
    </div>
  );
}
