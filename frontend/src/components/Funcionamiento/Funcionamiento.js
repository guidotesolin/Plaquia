import React from "react";

import "./Funcionamiento.css";

import Ventajas from "./Ventajas";

import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import FuncionamientoEsp from "../../img/Esp/Funcionamiento.jpg";
import FuncionamientoEng from "../../img/Eng/Funcionamiento.png";
import FuncionamientoPor from "../../img/Por/Funcionamiento.png";

export default function SliderResultados(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <Row>
            <Image src={FuncionamientoPor} fluid id="imgFuncionamiento" />
          </Row>
          <Ventajas Idioma="Por" />
        </div>
      );
    case "Eng":
      return (
        <div>
          <Row>
            <Image src={FuncionamientoEng} fluid id="imgFuncionamiento" />
          </Row>
          <Ventajas Idioma="Eng" />
        </div>
      );
    default:
      return (
        <div>
          <Row>
            <Image src={FuncionamientoEsp} fluid id="imgFuncionamiento" />
          </Row>
          <Ventajas Idioma="Esp" />
        </div>
      );
  }
}
