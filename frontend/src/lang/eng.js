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
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";

// Css
import "../css/Body.css";

class RenderEng extends Component {
  render() {
    return (
      <div id="Body">
        <div>
          <Top Idioma="Eng" />
        </div>
        <div id="Operation" className="Funcionamiento">
          <Container fluid>
            <h1 id="TituloSeccion">HOW IT WORKS?</h1>
            <br />
            <Funcionamiento Idioma="Eng" />
          </Container>
        </div>
        <div id="Placement" className="Colocacion">
          <Container>
            <h1 id="TituloSeccion">PLACEMENT</h1>
            <br />
            <Colocacion Idioma="Eng" />
          </Container>
        </div>
        <div id="Models" className="Modelos">
          <h1 id="TituloSeccion">MODELS</h1>
          <br />
          <Modelos Idioma="Eng" />
          <br />
        </div>
        <div id="Results" className="Resultados">
          <h1 id="TituloSeccion">RESULTS</h1>
          <br />
          <SliderResultados Idioma="Eng" />
          <br />
        </div>
        <div id="Distributors" className="Distribuidores">
          <Container>
            <h1 id="TituloSeccion">DISTRIBUITORS</h1>
            <br />
            <Distribuidores Idioma="Eng" />
          </Container>
        </div>

        <div id="Contact" className="Contacto">
          <h1 id="TituloSeccion">CONTACT</h1>
          <br />
          <Container>
            <Contacto Idioma="Eng" />
          </Container>
        </div>
        <div id="Footer">
          <br />
          <Footer Idioma="Eng" />
        </div>
      </div>
    );
  }
}

export default RenderEng;
