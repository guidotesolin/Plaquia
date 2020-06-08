import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import ContactarDistribuidor from "./Contactar";

var SimboloMoneda;
var CostoCajaPlaquia;
var CostoBaldePlaquia;

var SubtotalCajas;
var SubtotalPegamento;
var Total;

class ResultadosCotizador extends React.Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      //
    } else if (this.props.Idioma === "Eng") {
      //
    } else {
      //
    }
    switch (this.props.Moneda) {
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
    SubtotalCajas = this.props.Cajas * CostoCajaPlaquia;
    SubtotalPegamento = this.props.Baldes * CostoBaldePlaquia;
    Total = SubtotalPegamento + SubtotalCajas;
  }

  MostrarContactarDistribuidor() {
    document.getElementById("DivContactaDistribuidor").style.display = "block";
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <br />
        <h4>Resultados</h4>
        <br />
        <Row>
          <Col>
            <p>Superficie a cubrir: {this.props.Sup} m²</p>
            <p>Cajas de Plaquia necesarias: {this.props.Cajas}</p>
            <p>Baldes de pegamento: {this.props.Baldes}</p>
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
        <Button onClick={this.MostrarContactarDistribuidor}>
          Contactar al distribuidor
        </Button>
        <div id="DivContactaDistribuidor" style={{ display: "none" }}>
          <br />
          <p>Distribuidor mas cercano:</p>
          <ContactarDistribuidor
            Modelo={this.props.Modelo}
            CantCajas={this.props.Cajas}
            CantBaldes={this.props.Baldes}
          />
        </div>
      </div>
    );
  }
}

export default ResultadosCotizador;
