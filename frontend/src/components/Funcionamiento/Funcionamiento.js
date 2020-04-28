import React from "react";

import "./Funcionamiento.css";

import Ventajas from "./Ventajas";

import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import FuncionamientoEsp from "../../img/Esp/Funcionamiento.jpg";

export default function SliderResultados(props) {
  switch (props.Idioma) {
    case "Por":
      return <div>sda</div>;
    case "Eng":
      return <div>sad</div>;
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
