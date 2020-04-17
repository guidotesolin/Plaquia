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
import imgFuncionamiento from "../img/esp/Funcionamiento.png";

class RenderizarSpa extends Component {
  render() {
    return (
      <div>
        <div id="Calculadora">
          <h1>CALCULADORA</h1>
          <Calculadora />
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
