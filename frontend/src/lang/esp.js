import React, { Component } from "react";
// Componentes de React
import Container from "react-bootstrap/Container";

// Componentes creados
import Top from "../components/Top/Top";
import Funcionamiento from "../components/Funcionamiento/Funcionamiento";
import Colocacion from "../components/Colocacion/Colocacion";
import Modelos from "../components/Modelos/Modelos";
import SliderResultados from "../components/Resultados";
import Distribuidores from "../components/Distribuidores/Distribuidores";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";

// Css
import "../css/Body.css";

class RenderizarSpa extends Component {
  render() {
    return (
      <div id="Body">
        <div>
          <Top Idioma="Esp" />
        </div>
        <Container fluid id="Funcionamiento" className="Funcionamiento">
          <Container fluid>
            <h1 id="TituloSeccion">¿CÓMO FUNCIONA?</h1>
            <br />
            <Funcionamiento Idioma="Esp" />
          </Container>
        </Container>
        <Container fluid id="Colocacion" className="Colocacion">
          <Container>
            <h1 id="TituloSeccion">COLOCACIÓN</h1>
            <br />
            <Colocacion Idioma="Esp" />
          </Container>
        </Container>
        <Container fluid id="Modelos" className="Modelos">
          <h1 id="TituloSeccion">MODELOS DISPONIBLES</h1>
          <br />
          <Modelos />
          <br />
        </Container>
        <Container fluid id="Resultados" className="Resultados">
          <h1 id="TituloSeccion">RESULTADOS</h1>
          <br />
          <SliderResultados />
          <br />
        </Container>
        <Container fluid id="Distribuidores" className="Distribuidores">
          <Container>
            <h1 id="TituloSeccion">DISTRIBUIDORES</h1>
            <br />
            <Distribuidores />
          </Container>
        </Container>
        <Container fluid id="Contacto" className="Contacto">
          <h1 id="TituloSeccion">CONTACTO</h1>
          <br />
          <Container>
            <Contacto Idioma="Esp" />
          </Container>
        </Container>
        <div id="Footer">
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
