import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./AboutMe.scss";
import fotoCV from "../../assets/foto_CV.jpg";
import cV from "../../assets/cv-Eduardo.pdf";

export default function AbouteMe() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="aboutMe" id="aboutMe">
      <div className="description">
        <div className="description__img">
          <img src={fotoCV} className="imgCv" />
        </div>
        <div className="description__text">
          <p>
            Soy un desarrollador junior que le apasiona la programación. Soy una
            persona proactiva, aprendo con rapidez y siempre busco crear buen
            ambiente cuando trabajo en equipo. Busco una oportunidad para seguir
            creciendo en el mundo de la programación y convertirme en un gran
            desarrollador.
          </p>
        </div>
      </div>
      <div className="tecnologys">
        <Button onClick={handleShow}>Tecnologías</Button>
        <Button href={cV} download="CV-Eduardo">
          CV
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Tecnologías</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="tecnologys__items">
              <p>HTML5|</p>
              <p>CSS|</p>
              <p>SASS|</p>
              <p>JS|</p>
              <p>ANGULARJS|</p>
              <p>REACTJS|</p>
              <p>NODEJS|</p>
              <p>PHP|</p>
              <p>SYMFONY|</p>
              <p>MYSQL|</p>
              <p>MONGODB|</p>
              <p>GIT|</p>
              <p>DOCKER|</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
