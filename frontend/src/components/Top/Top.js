import React, { Component } from "react";
import "./Top.css";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LogoEsp from "../../img/Esp/LogoCompleto.png";
import LogoEng from "../../img/Eng/LogoCompleto.png";
import LogoPor from "../../img/Por/LogoCompleto.png";

var Descripcion;
var Logo;

class Top extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      Logo = LogoPor;
      Descripcion =
        "Somos a primeira fábrica de placas anti-humidade a desenvolver um produto adaptado para a venda em massa, com uma embalagem revolucionária que facilita a sua arrumação e comercialização. Pensado com a modalidade, Faça-o você mesmo!";
    } else if (this.props.Idioma === "Eng") {
      Logo = LogoEng;
      Descripcion =
        "We are the first factory of anti-humidity boards to develop a product that is adapted for mass sale, with a revolutionary packaging that facilitates its storage and commercialization. Thought with the modality: Do it yourself!";
    } else {
      Descripcion =
        "Somos la primera fábrica de placas anti-humedad en desarrollar un producto que se adapta para la venta masiva, con un envase revolucionario que facilita su estiba y comercialización. Pensada con la modalidad, ¡Hágalo usted mismo!";
      Logo = LogoEsp;
    }
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <Row>
          <Col>
            <Image id="Logo" src={Logo} fluid />
          </Col>
        </Row>
        <Row>
          <h4 id="DescripcionPlaquia">{Descripcion}</h4>
        </Row>
      </div>
    );
  }
}

export default Top;
