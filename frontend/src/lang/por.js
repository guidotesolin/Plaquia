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

class RenderPor extends Component {
  render() {
    return (
      <div id="Body">
        <div>
          <Top Idioma="Por" />
        </div>
        <div id="Operação" className="Funcionamiento">
          <Container fluid>
            <h1 id="TituloSeccion">Operação</h1>
            <br />
            <Funcionamiento Idioma="Por" />
          </Container>
        </div>
        <div id="Calculadora" className="Calculadora">
          <h1 id="TituloSeccion">Calculadora</h1>
          <br />
          <Calculadora Idioma="Por" />
          <br />
        </div>
        <div id="Colocação" className="Colocacion">
          <Container>
            <h1 id="TituloSeccion">Colocação</h1>
            <br />
            <Colocacion Idioma="Por" />
          </Container>
        </div>
        <div id="Modelos" className="Modelos">
          <h1 id="TituloSeccion">Modelos</h1>
          <br />
          <Modelos Idioma="Por" />
          <br />
        </div>
        <div id="Resultados" className="Resultados">
          <h1 id="TituloSeccion">Resultados</h1>
          <br />
          <SliderResultados Idioma="Por" />
          <br />
        </div>
        <div id="Distribuidores" className="Distribuidores">
          <Container>
            <h1 id="TituloSeccion">Distribuidores</h1>
            <br />
            <Distribuidores Idioma="Por" />
          </Container>
        </div>
        <div id="Contato" className="Contacto">
          <h1 id="TituloSeccion">Contato</h1>
          <br />
          <Container>
            <Contacto Idioma="Por" />
          </Container>
        </div>
        <div id="Footer">
          <br />
          <Footer Idioma="Por" />
        </div>
      </div>
    );
  }
}

export default RenderPor;
