import React from "react";

import "./Funcionamiento.css";

import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgAcustico from "../../img/Ventajas/Acustico.png";
import imgAntiHongos from "../../img/Ventajas/AntiHongos.png";
import imgAntihumedad from "../../img/Ventajas/Antihumedad.png";
import imgAtermico from "../../img/Ventajas/Atermico.png";
import imgDecorativo from "../../img/Ventajas/Decorativo.png";
import imgFacilMantenimiento from "../../img/Ventajas/FacilMantenimiento.png";
import imgIncombustible from "../../img/Ventajas/Incombustible.png";
import imgRapidaColocacion from "../../img/Ventajas/RapidaColocacion.png";

var LabelANTIHUMEDAD;
var LabelATERMICOS;
var LabelINCOMBUSTIBLES;
var LabelACUSTICOS;
var LabelRAPIDACOLOCACION;
var LabelANTIHONGOS;
var LabelDECORATIVOS;
var LabelFACILMANTENIMIENTO;

export default function Ventajas(props) {
  if (props.Idioma === "Por") {
    LabelANTIHUMEDAD = "ANTI-HUMIDADE";
    LabelATERMICOS = "ATÉRIC";
    LabelINCOMBUSTIBLES = "RESISTÊNCIA AO FOGO";
    LabelACUSTICOS = "ACOUSTICS";
    LabelRAPIDACOLOCACION = "INSTALAÇÃO RÁPIDA";
    LabelANTIHONGOS = "ANTI FUNGUS";
    LabelDECORATIVOS = "DECORATIVOS";
    LabelFACILMANTENIMIENTO = "FÁCIL SERVICAMENTO";
  } else if (props.Idioma === "Eng") {
    LabelANTIHUMEDAD = "ANTI-HUMIDITY";
    LabelATERMICOS = "NON-THERMAL";
    LabelINCOMBUSTIBLES = "FIREPROOF";
    LabelACUSTICOS = "ACOUSTICS";
    LabelRAPIDACOLOCACION = "QUICK INSTALLATION";
    LabelANTIHONGOS = "ANTI FUNGUS";
    LabelDECORATIVOS = "DECORATIVES";
    LabelFACILMANTENIMIENTO = "EASY MAINTENANCE";
  } else {
    LabelANTIHUMEDAD = "ANTI HUMEDAD";
    LabelATERMICOS = "ATÉRMICOS";
    LabelINCOMBUSTIBLES = "INCOMBUSTIBLES";
    LabelACUSTICOS = "ACÚSTICOS";
    LabelRAPIDACOLOCACION = "RÁPIDA COLOCACIÓN";
    LabelANTIHONGOS = "ANTI HONGOS";
    LabelDECORATIVOS = "DECORATIVOS";
    LabelFACILMANTENIMIENTO = "FÁCIL MANTENIMIENTO";
  }

  return (
    <div class="container">
      <Row>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgAntihumedad}
                id="iconoVentajas"
                alt={LabelANTIHUMEDAD}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelANTIHUMEDAD}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgRapidaColocacion}
                id="iconoVentajas"
                alt={LabelRAPIDACOLOCACION}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelRAPIDACOLOCACION}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgAtermico}
                id="iconoVentajas"
                alt={LabelATERMICOS}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelATERMICOS}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgAntiHongos}
                id="iconoVentajas"
                alt={LabelANTIHONGOS}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelANTIHONGOS}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgIncombustible}
                id="iconoVentajas"
                alt={LabelINCOMBUSTIBLES}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelINCOMBUSTIBLES}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgDecorativo}
                id="iconoVentajas"
                alt={LabelDECORATIVOS}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelDECORATIVOS}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgAcustico}
                id="iconoVentajas"
                alt={LabelACUSTICOS}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelACUSTICOS}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
        <Col>
          <div id="Ventajas">
            <Media>
              <img
                src={imgFacilMantenimiento}
                id="iconoVentajas"
                alt={LabelFACILMANTENIMIENTO}
                align="right"
              />
              <Media.Body>
                <h2 id="textoVentajas">{LabelFACILMANTENIMIENTO}</h2>
              </Media.Body>
            </Media>
          </div>
        </Col>
      </Row>
    </div>
  );
}
