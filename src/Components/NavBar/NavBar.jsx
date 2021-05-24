import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

import "./NavBar.scss";
export default function NavBar(){



    return(
        <div className="navbar">
            <Navbar expand="lg">
                <Navbar.Brand className="logo-title">Eduardo Rodríguez</Navbar.Brand>
                <Navbar.Toggle  className="burguer" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="navbar__typo" href="#aboutMe">Sobre Mi</Nav.Link>
                       <Nav.Link className="navbar__typo" href="#proyects">Proyectos</Nav.Link>
                       <Nav.Link className="navbar__typo" href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}