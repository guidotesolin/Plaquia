import React, { Component } from "react";
// Componentes de React
import Container from "react-bootstrap/Container";

// Componentes creados
import Top from "../components/Top/Top";
import Funcionamiento from "../components/Funcionamiento/Funcionamiento";
import Colocacion from "../components/Colocacion/Colocacion";
import Modelos from "../components/Modelos/Modelos";
import SliderResultados from "../components/Resultados";
import Distribuidores from "../components/Distribuidores/DistribuidoresSinBack";
import Calculadora from "../components/Calculadora/Calculadora";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";

// Css
import "../css/Body.css";

class RenderizarSpa extends Component {
  render() {
    return (
      <div id="Body">
        <div id="Top">
          <Container>
            <Top Idioma="Esp" />
          </Container>
        </div>
        <div id="Funcionamiento" className="Funcionamiento">
          <Container fluid>
            <h1 id="TituloSeccion">¿CÓMO FUNCIONA?</h1>
            <br />
            <Funcionamiento Idioma="Esp" />
          </Container>
        </div>
        <div id="Calculadora" className="Calculadora">
          <h1 id="TituloSeccion">CALCULADORA</h1>
          <br />
          <Calculadora />
          <br />
        </div>
        <div id="Colocacion" className="Colocacion">
          <Container>
            <h1 id="TituloSeccion">COLOCACIÓN</h1>
            <br />
            <Colocacion Idioma="Esp" />
          </Container>
        </div>
        <div id="Modelos" className="Modelos">
          <h1 id="TituloSeccion">MODELOS DISPONIBLES</h1>
          <br />
          <Modelos />
          <br />
        </div>
        <div id="Resultados" className="Resultados">
          <h1 id="TituloSeccion">RESULTADOS</h1>
          <br />
          <SliderResultados />
          <br />
        </div>
        <div id="Distribuidores" className="Distribuidores">
          <Container>
            <h1 id="TituloSeccion">DISTRIBUIDORES</h1>
            <br />
            <Distribuidores />
          </Container>
        </div>
        <div id="Contacto" className="Contacto">
          <h1 id="TituloSeccion">CONTACTO</h1>
          <br />
          <Container>
            <Contacto Idioma="Esp" />
          </Container>
        </div>
        <div id="Footer">
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
