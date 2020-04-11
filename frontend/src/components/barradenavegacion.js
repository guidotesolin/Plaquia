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
              <Nav.Link href="#Operação">Operação</Nav.Link>
              <Nav.Link href="#Colocação">Colocação</Nav.Link>
              <Nav.Link href="#Modelos">Modelos</Nav.Link>
              <Nav.Link href="#Resultados">Resultados</Nav.Link>
              <Nav.Link href="#Distribuidores">Distribuidores</Nav.Link>
              <Nav.Link href="#Calculadora">Calculadora</Nav.Link>
              <Nav.Link href="#Contato">Contato</Nav.Link>
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
              <Nav.Link href="#Operation">Operation</Nav.Link>
              <Nav.Link href="#Placement">Placement</Nav.Link>
              <Nav.Link href="#Models">Models</Nav.Link>
              <Nav.Link href="#Results">Results</Nav.Link>
              <Nav.Link href="#Distributors">Distributors</Nav.Link>
              <Nav.Link href="#Calculator">Calculator</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
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
              <Nav.Link href="#Funcionamiento">Funcionamiento</Nav.Link>
              <Nav.Link href="#Colocacion">Colocación</Nav.Link>
              <Nav.Link href="#Modelos">Modelos</Nav.Link>
              <Nav.Link href="#Resultados">Resultados</Nav.Link>
              <Nav.Link href="#Distribuidores">Distribuidores</Nav.Link>
              <Nav.Link href="#Calculadora">Calculadora</Nav.Link>
              <Nav.Link href="#Contacto">Contacto</Nav.Link>
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
