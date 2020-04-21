import React from "react";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

import INTI from "../img/Footer/INTI.png";
import Arg from "../img/Footer/Arg.png";
import Incombustibilidad from "../img/Footer/Incombustibilidad.png";

import Mail from "../img/Footer/Mail.png";
import Telefono from "../img/Footer/Telefono.png";
import Ubicacion from "../img/Footer/Ubicacion.png";

import Facebook from "../img/Footer/facebook.png";
import Linkedin from "../img/Footer/linkedin.png";

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
                <Col>
                  <Image src={INTI} width="100px" />
                </Col>
                <Col>
                  <Image src={Arg} width="100px" />
                </Col>
                <Col>
                  <Image src={Incombustibilidad} width="100px" />
                </Col>
              </Row>
            </Col>
            <hr></hr>
            <Col sm id="FooterContacto">
              <Row>
                <Media>
                  <img
                    width={40}
                    height={40}
                    className="align-self-center mr-3"
                    src={Mail}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h5>Contacto@plaquia.com.ar</h5>
                  </Media.Body>
                </Media>
              </Row>
              <Row>
                <Media>
                  <img
                    width={40}
                    height={40}
                    className="align-self-center mr-3"
                    src={Telefono}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h5>0810 444 3216</h5>
                  </Media.Body>
                </Media>
              </Row>
              <Row>
                <Media>
                  <img
                    width={40}
                    height={40}
                    className="align-self-center mr-3"
                    src={Ubicacion}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h5>Francisco Miguens 180 (Piso 8) - Santa Fe</h5>
                  </Media.Body>
                </Media>
              </Row>
            </Col>
            <hr></hr>
            <Col sm id="RedesSociales">
              <Row className="justify-content-md-center">
                <Col>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Plaquia"
                    target="_blank"
                  >
                    <Image src={Facebook} width="60px" />
                  </a>
                </Col>
                <Col>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/plaquia/"
                    target="_blank"
                  >
                    <Image src={Linkedin} width="60px" />
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
