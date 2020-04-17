import React, { Component } from "react";
// Componentes de React
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Componentes creados
import Ventajas from "../components/ventajas";
import SliderColocacion from "../components/colocacion/colocacion";
import ModelosPlacas from "../components/modelos/modelos";
import SliderResultados from "../components/resultados";
import Distribuidores from "../components/distribuidores";
import Contacto from "../components/formulario/contacto";
import Calculadora from "../components/Calculadora/Padre";
// Imagenes
import Logo from "../img/esp/LogoCompleto.png";
import imgFuncionamiento from "../img/esp/Funcionamiento.jpg";

class RenderizarSpa extends Component {
  render() {
    return (
      <div>
        <div id="Distribuidores">
          <Container>
            <h1>DISTRIBUIDORES</h1>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/d/u/0/embed?mid=1qeeBbHhgLSC6DD5eiDsElU6enZRMQa4w"
              width="640"
              height="480"
            ></iframe>
            <Distribuidores />
          </Container>
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
