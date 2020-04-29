import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../img/Logo.png";
import flagEsp from "../img/Flags/arg.png";
import flagPor from "../img/Flags/por.png";
import flagEng from "../img/Flags/eng.png";

export default function BarraDeNavegacion(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo de plaquia"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Operação">
                <i class="fa fa-fw fa-cogs"></i> Operação
              </Nav.Link>
              <Nav.Link href="#Colocação">
                <i class="fas fa-tools"></i> Colocação
              </Nav.Link>
              <Nav.Link href="#Modelos">
                <i class="fas fa-shopping-cart"></i> Modelos
              </Nav.Link>
              <Nav.Link href="#Resultados">
                <i class="fas fa-camera-retro"></i> Resultados
              </Nav.Link>
              <Nav.Link href="#Distribuidores">
                <i class="fas fa-map-marked-alt"></i> Distribuidores
              </Nav.Link>
              <Nav.Link href="#Calculadora">
                <i class="fas fa-calculator"></i> Calculadora
              </Nav.Link>
              <Nav.Link href="#Contato">
                <i class="fas fa-address-book"></i> Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#">
            <img
              src={flagEsp}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Change language to English"
              onClick={() => props.CambiarIdioma("Esp")}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={flagEng}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Mudança de idioma para português"
              onClick={() => props.CambiarIdioma("Eng")}
            />
          </Navbar.Brand>
        </Navbar>
      );
    case "Eng":
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo de plaquia"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Operation">
                <i class="fa fa-fw fa-cogs"></i> Operation
              </Nav.Link>
              <Nav.Link href="#Placement">
                <i class="fas fa-tools"></i> Placement
              </Nav.Link>
              <Nav.Link href="#Models">
                <i class="fas fa-shopping-cart"></i> Models
              </Nav.Link>
              <Nav.Link href="#Results">
                <i class="fas fa-camera-retro"></i> Results
              </Nav.Link>
              <Nav.Link href="#Distributors">
                <i class="fas fa-map-marked-alt"></i> Distributors
              </Nav.Link>
              <Nav.Link href="#Calculator">
                <i class="fas fa-calculator"></i> Calculator
              </Nav.Link>
              <Nav.Link href="#Contact">
                <i class="fas fa-address-book"></i> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#">
            <img
              src={flagEsp}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Change language to English"
              onClick={() => props.CambiarIdioma("Esp")}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={flagPor}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Mudança de idioma para português"
              onClick={() => props.CambiarIdioma("Por")}
            />
          </Navbar.Brand>
        </Navbar>
      );
    default:
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo de plaquia"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Funcionamiento">
                <i class="fa fa-fw fa-cogs"></i> Funcionamiento
              </Nav.Link>
              <Nav.Link href="#Colocacion">
                <i class="fas fa-tools"></i> Colocación
              </Nav.Link>
              <Nav.Link href="#Modelos">
                <i class="fas fa-shopping-cart"></i> Modelos
              </Nav.Link>
              <Nav.Link href="#Resultados">
                <i class="fas fa-camera-retro"></i> Resultados
              </Nav.Link>
              <Nav.Link href="#Distribuidores">
                <i class="fas fa-map-marked-alt"></i> Distribuidores
              </Nav.Link>
              <Nav.Link href="#Calculadora">
                <i class="fas fa-calculator"></i> Calculadora
              </Nav.Link>
              <Nav.Link href="#Contacto">
                <i class="fas fa-address-book"></i> Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#">
            <img
              src={flagEng}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Change language to English"
              onClick={() => props.CambiarIdioma("Eng")}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <img
              src={flagPor}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Mudança de idioma para português"
              onClick={() => props.CambiarIdioma("Por")}
            />
          </Navbar.Brand>
        </Navbar>
      );
  }
}
