
import React, {useState} from "react";

import emailjs from "emailjs-com";
import Modal from "react-bootstrap/Modal";



import "./Contact.scss";

export default function Contact() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    
    function sendEmail(e) {
    e.preventDefault();

    handleShow();
    emailjs
      .sendForm(
        "service_ujrh43f",
        "template_tqf6c2e",
        e.target,
        "user_vxccYeA5wASbvYx3sB9K8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  

  return (
    <div className="container__Contact" id="contact">
      <h2 className="container__Contact-title">Contacto</h2>
      <div className="container__Contact-mobile">
          <span class="fas fa-envelope"></span>
          <p className="email-contact">contacto@eduardorodriguezdev.com</p>
      </div>
      <div className="container__Contact-form">
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            title="El nombre no es valido"
            placeholder="Escriba su nombre"
            className="contact__form-input"
            required = "true"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Escriba su email"
            className="contact__form-input"
            required="true"

          />
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escriba su mensaje"
            className="contact__form-textarea"
            required="true"
          />
          <input type="submit" value="Enviar" className="contact__form-send"/>
          </form>

          <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Muchas gracias por ponerse en contacto conmigo. Le contestaré en la máxima brevedad posible</p>
          </Modal.Body>
        </Modal>
      </div>
     

    </div>
  );
}