import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Esp from "../../img/Footer/FooterEsp.png";

export default function Footer(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>Footer en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>Footer en ingles</p>
        </div>
      );
    default:
      return (
        <Container fluid>
          <br />
          <Row className="justify-content-md-center">
            <Col sm id="Inti">
              <Row className="justify-content-md-center">
                <img
                  width={300}
                  className="align-self-center mr-3"
                  src={Esp}
                  alt="Generic placeholder"
                />
              </Row>
            </Col>
            <Col sm id="FooterContacto">
              <Row>
                <i class="far fa-envelope" id="IconoContacto"></i>

                <h5 id="DatosContacto">Contacto@plaquia.com.ar</h5>
              </Row>
              <Row>
                <i class="fas fa-phone-alt" id="IconoContacto"></i>
                <h5 id="DatosContacto">0810 444 3216</h5>
              </Row>
              <Row>
                <i class="fas fa-map-marker-alt" id="IconoContacto"></i>
                <h5 id="DatosContacto">
                  Francisco Miguens 180 (Piso 8) - Santa Fe
                </h5>
              </Row>
            </Col>
            <Col sm id="RedesSociales">
              <Row id="Redes" className="justify-content-md-center">
                <Col>
                  <a
                    class="BotonRedSocial"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Plaquia"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </Col>
                <Col>
                  <a
                    class="BotonRedSocial"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/PlaquiaOficial"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </Col>
                <Col>
                  <a
                    class="BotonRedSocial"
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
}
