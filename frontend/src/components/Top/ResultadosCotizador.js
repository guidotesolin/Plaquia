import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

var SimboloMoneda;
var CostoCajaPlaquia;
var CostoBaldePlaquia;

export default function ResultadosCotizador(props) {
  if (props.Idioma === "Por") {
    //
  } else if (props.Idioma === "Eng") {
    //
  } else {
    //
  }
  switch (props.Moneda) {
    case "URU":
      SimboloMoneda = "UYU";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
      break;
    case "BOL":
      SimboloMoneda = "BOV";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
      break;
    case "BRA":
      SimboloMoneda = "BRL";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
      break;
    case "USD":
      SimboloMoneda = "USD";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
      break;
    case "PAR":
      SimboloMoneda = "PYG";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
      break;
    default:
      //Peso argentino
      SimboloMoneda = "ARS";
      CostoCajaPlaquia = 3;
      CostoBaldePlaquia = 2;
  }
  const SubtotalCajas = props.Cajas * CostoCajaPlaquia;
  const SubtotalPegamento = props.Baldes * CostoBaldePlaquia;
  const Total = SubtotalPegamento + SubtotalCajas;
  return (
    <div>
      <br />
      <h4>Resultados</h4>
      <br />
      <Row>
        <Col>
          <p>Superficie a cubrir: {props.Sup} m²</p>
          <p>Cajas de Plaquia necesarias: {props.Cajas}</p>
          <p>Baldes de pegamento: {props.Baldes}</p>
        </Col>
        <Col>
          <p>
            Costo Plaquia: {SubtotalCajas} {SimboloMoneda}
          </p>
          <p>
            Costo Pegamento: {SubtotalPegamento} {SimboloMoneda}
          </p>
          <p>
            <strong>
              Total: {Total} {SimboloMoneda}
            </strong>
          </p>
        </Col>
      </Row>
    </div>
  );
}
