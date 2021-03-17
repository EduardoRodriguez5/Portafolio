
import React from "react";

import emailjs from "emailjs-com";


import "./Contact.scss";

export default function Contact() {

    if(document.getElementById("btnModal")){
        var modal = document.getElementById("tvesModal");
        var btn = document.getElementById("btn-send");
        var span = document.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];
    
        btn.onClick = function() {
            modal.style.display = "block";
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        }
    
        span.onclick = function() {
            modal.style.display = "none";
    
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
    
                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        }
    }
    
    function sendEmail(e) {
    e.preventDefault();

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
    <div className="container__Contact" id="ContactComponent">
      <h2 className="container__Contact-title">Contacto</h2>
      <div className="container__Contact-mobile">
          <span class="fas fa-mobile"></span>
          <p>626146104</p>
      </div>
      <div className="container__Contact-form">
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            placeholder="Escriba su nombre"
            className="contact__form-input"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Escriba su email"
            className="contact__form-input"
          />
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escriba su mensaje"
            className="contact__form-textarea"
          />
           <div id="tvesModal" className="modalContainer">
            <div className="modal-content">
                <span className="close">×</span>
                <h2>Modal</h2>
                <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>
            </div>
	        </div>
          <input type="submit" id ="btn-send" value="Enviar" className="contact__form-send"/>
        </form>
      </div>
     

    </div>
  );
}