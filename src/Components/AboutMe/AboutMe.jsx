import React, {useState} from "react";
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
        <div className="aboutMe row col-12 mx-0 px-0" id="aboutMe">

            <div className="description col-12 col-lg-6 mx-0 px-0 column">
                <div className="description__img">
                    <img src={fotoCV} className="imgCv"/>
                </div>

                <div className="description__text">
                    <p>
                        <span className="description__text__quote">"</span>Soy un <span>desarrollador</span> junior que le apasiona la programación. Soy una
                        persona proactiva, aprendo con rapidez y siempre busco crear buen
                        ambiente cuando trabajo en equipo. Busco una oportunidad para seguir
                        creciendo en el mundo de la programación y convertirme en un gran
                        desarrollador. <span className="description__text__quote">"</span>
                    </p>
                </div>
            </div>


            <div className="tecnologys col-12 col-lg-6 mx-0 px-0">
                <div className="description__tech-button-container">
                    <button className="description__button" onClick={handleShow}>Tecnologías</button>
                </div>
                <div className="description__cv-button-container">
                    <button className="description__button" href={cV} download="CV-Eduardo">
                        CV
                    </button>

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
        </div>
    );
}
