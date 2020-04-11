import React from "react";

import Image from "react-bootstrap/Image";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import imgAcustico from "../img/ventajas/Acustico.png";
import imgAntiHongos from "../img/ventajas/AntiHongos.png";
import imgAntihumedad from "../img/ventajas/Antihumedad.png";
import imgAtermico from "../img/ventajas/Atermico.png";
import imgDecorativo from "../img/ventajas/Decorativo.png";
import imgFacilMantenimiento from "../img/ventajas/FacilMantenimiento.png";
import imgIncombustible from "../img/ventajas/Incombustible.png";
import imgRapidaColocacion from "../img/ventajas/RapidaColocacion.png";

export default function Ventajas(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>Ventajas en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>Ventajas en ingles</p>
        </div>
      );
    default:
      return (
        <div>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgAntihumedad}
                style={{ width: 40 }}
                alt="ANTIHUMEDAD"
              />
            </Col-1>
            <Col>
              <h2>ANTI HUMEDAD</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image src={imgAtermico} style={{ width: 40 }} alt="ATÉRMICOS" />
            </Col-1>
            <Col>
              <h2>ATÉRMICOS</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgIncombustible}
                style={{ width: 40 }}
                alt="INCOMBUSTIBLES"
              />
            </Col-1>
            <Col>
              <h2>INCOMBUSTIBLES</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image src={imgAcustico} style={{ width: 40 }} alt="ACÚSTICOS" />
            </Col-1>
            <Col>
              <h2>ACÚSTICOS</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgRapidaColocacion}
                style={{ width: 40 }}
                alt="RÁPIDA COLOCACIÓN
              "
              />
            </Col-1>
            <Col>
              <h2>RÁPIDA COLOCACIÓN</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgAntiHongos}
                style={{ width: 40 }}
                alt="ANTIHONGOS"
              />
            </Col-1>
            <Col>
              <h2>ANTI HONGOS</h2>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgDecorativo}
                style={{ width: 40 }}
                alt="DECORATIVOS"
              />
            </Col-1>
            <Col>
              <h2>DECORATIVOS</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col-1>
              <Image
                src={imgFacilMantenimiento}
                style={{ width: 40 }}
                alt="FÁCIL MANTENIMIENTO"
              />
            </Col-1>
            <Col>
              <h2>FÁCIL MANTENIMIENTO</h2>
            </Col>
          </Row>
        </div>
      );
  }
}
