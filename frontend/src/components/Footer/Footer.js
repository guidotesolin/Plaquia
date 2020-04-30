import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Esp from "../../img/Esp/Footer.png";
import Eng from "../../img/Eng/Footer.png";
import Por from "../../img/Por/Footer.png";

export default function Footer(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <Container fluid>
          <br />
          <Row className="justify-content-md-center">
            <Col sm id="Inti">
              <Row className="justify-content-md-center">
                <img
                  width={300}
                  className="align-self-center mr-3"
                  src={Por}
                  alt="Certificação INTI, Impermeabilização, Indústria Argentina"
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
                  Francisco Miguens 180 (8º andar) - Santa Fe
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
    case "Eng":
      return (
        <Container fluid>
          <br />
          <Row className="justify-content-md-center">
            <Col sm id="Inti">
              <Row className="justify-content-md-center">
                <img
                  width={300}
                  className="align-self-center mr-3"
                  src={Eng}
                  alt="INTI Certification, Fireproofing, Argentine Industry"
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
                  Francisco Miguens 180 (8th floor) - Santa Fe
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
                  alt="Certificacion INTI, Incombustibilidad, Industria Argentina"
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
}
