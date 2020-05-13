import React from "react";
import "./Top.css";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LogoEsp from "../../img/Esp/LogoCompleto.png";
import LogoEng from "../../img/Eng/LogoCompleto.png";
import LogoPor from "../../img/Por/LogoCompleto.png";

export default function SliderResultados(props) {
  const DescripcionEsp =
    "Somos la primera fábrica de placas anti-humedad en desarrollar un producto que se adapta para la venta masiva, con un envase revolucionario que facilita su estiba y comercialización. Pensada con la modalidad, ¡Hágalo usted mismo!";

  const DescripcionPor =
    "Somos a primeira fábrica de placas anti-humidade a desenvolver um produto adaptado para a venda em massa, com uma embalagem revolucionária que facilita a sua arrumação e comercialização. Pensado com a modalidade, Faça-o você mesmo!";

  const DescripcionEng =
    "We are the first factory of anti-humidity boards to develop a product that is adapted for mass sale, with a revolutionary packaging that facilitates its storage and commercialization. Thought with the modality: Do it yourself!";
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <Row>
            <Col>
              <Image id="Logo" src={LogoPor} fluid />
            </Col>
          </Row>
          <Row>
            <h4 id="DescripcionPlaquia">{DescripcionPor}</h4>
          </Row>
        </div>
      );
    case "Eng":
      return (
        <div>
          <Row>
            <Col>
              <Image id="Logo" src={LogoEng} fluid />
            </Col>
          </Row>
          <Row>
            <h4 id="DescripcionPlaquia">{DescripcionEng}</h4>
          </Row>
        </div>
      );
    default:
      return (
        <div>
          <Row>
            <Col>
              <Image id="Logo" src={LogoEsp} fluid />
            </Col>
          </Row>
          <Row>
            <h4 id="DescripcionPlaquia">{DescripcionEsp}</h4>
          </Row>
        </div>
      );
  }
}
