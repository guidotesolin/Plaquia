import React, { Component } from "react";

import "./Funcionamiento.css";

import Ventajas from "./Ventajas";

import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import FuncionamientoEsp from "../../img/Esp/Funcionamiento.jpg";
import FuncionamientoEng from "../../img/Eng/Funcionamiento.jpg";
import FuncionamientoPor from "../../img/Por/Funcionamiento.jpg";

var Imagen;

class Funcionamiento extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      Imagen = FuncionamientoPor;
    } else if (this.props.Idioma === "Eng") {
      Imagen = FuncionamientoEng;
    } else {
      Imagen = FuncionamientoEsp;
    }
  }
  render() {
    this.Iniciar();
    return (
      <div>
        <Row>
          <Image src={Imagen} fluid id="imgFuncionamiento" />
        </Row>
        <Ventajas Idioma={this.props.Idioma} />
      </div>
    );
  }
}

export default Funcionamiento;
