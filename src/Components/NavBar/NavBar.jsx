import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

import "./NavBar.scss";

export default function NavBar() {

    window.onscroll = function () {
        scrollFunction()
    };

    const toTop = () => {
        window.scroll(0,0);
    }

    function scrollFunction() {
        if (window.innerWidth > 992) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                document.getElementById("navbar").style.padding = "0px";
                document.getElementById("navbar").style.borderBottom = "5px solid #3340c3";
                document.getElementById("eduardo").style.fontSize = "20px";
            } else {
                document.getElementById("navbar").style.borderBottom = "0px";
                document.getElementById("navbar").style.padding = "90px";
                document.getElementById("eduardo").style.fontSize = "35px";
            }
        }
    }

    return (
        <Navbar collapseOnSelect={true} id="navbar" className="navbar" expand="lg">
            <Navbar.Brand><h2 onClick={toTop} className="navbar__title" id="eduardo">Eduardo Rodríguez</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="navbar__menu" id="basic-navbar-nav">
                <Nav.Link href="#aboutMe">Sobre Mi</Nav.Link>
                <Nav.Link href="#proyects">Proyectos</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
