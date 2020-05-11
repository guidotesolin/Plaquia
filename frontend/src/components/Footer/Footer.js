import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Esp from "../../img/Esp/Footer.png";
import Eng from "../../img/Eng/Footer.png";
import Por from "../../img/Por/Footer.png";

var Img;
var Alt;

export default function Footer(props) {
  if (props.Idioma === "Por") {
    Alt = "Certificação INTI, Impermeabilização, Indústria Argentina";
    Img = Por;
  } else if (props.Idioma === "Eng") {
    Alt = "INTI Certification, Fireproofing, Argentine Industry";
    Img = Eng;
  } else {
    Alt = "Certificacion INTI, Incombustibilidad, Industria Argentina";
    Img = Esp;
  }
  return (
    <Container fluid>
      <br />
      <Row className="justify-content-md-center">
        <Col sm id="Inti">
          <Row className="justify-content-md-center">
            <img
              width={300}
              className="align-self-center mr-3"
              src={Img}
              alt={Alt}
            />
          </Row>
        </Col>
        <Col sm id="FooterContacto">
          <Row>
            <a href="mailto:contacto@plaquia.com.ar">
              <i class="far fa-envelope" id="IconoContacto"></i>
            </a>
            <h5 id="DatosContacto">contacto@plaquia.com.ar</h5>
          </Row>
          <Row>
            <a href="tel:08104443216">
              <i class="fas fa-phone-alt" id="IconoContacto"></i>
            </a>
            <h5 id="DatosContacto">0810 444 3216</h5>
          </Row>
          <Row>
            <a
              rel="noopener noreferrer"
              href="https://g.page/SeccomatCentro?share"
              target="_blank"
            >
              <i class="fas fa-map-marker-alt" id="IconoContacto"></i>
            </a>
            <h5 id="DatosContacto">
              25 de mayo y Cándido Pujato - Santa Fe - Argentina
            </h5>
          </Row>
        </Col>
        <Col sm id="RedesSociales">
          <Row id="Redes" className="justify-content-md-center">
            <Col>
              <a
                class="iconoFb"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Plaquia"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </Col>
            <Col>
              <a
                class="iconoIg"
                rel="noopener noreferrer"
                href="https://www.instagram.com/PlaquiaOficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </Col>
            <Col>
              <a
                class="iconoLd"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/plaquia/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
    </Container>
  );
}
