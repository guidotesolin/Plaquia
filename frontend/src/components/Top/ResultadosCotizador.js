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

var TextResultados;
var TextSuperficie;
var TextCajas;
var TextBaldes;
var TextCostoPlaquia;
var TextCostoPegamento;
var TextTotal;
var TextContactar;
var TextDist;
class ResultadosCotizador extends React.Component {
  Iniciar() {
    // Textos dependiendo el idioma
    if (this.props.Idioma === "Por") {
      TextResultados = "Resultados";
      TextSuperficie = "Superfície a ser coberta:";
      TextCajas = "São necessárias caixas de Plaquia:";
      TextBaldes = "Baldes de cola:";
      TextCostoPlaquia = "Custo da Plaquia:";
      TextCostoPegamento = "Cola de Custo:";
      TextTotal = "Total:";
      TextContactar = "Entre em contato com o distribuidor";
      TextDist = "Distribuidor mais próximo:";
    } else if (this.props.Idioma === "Eng") {
      TextResultados = "Results";
      TextSuperficie = "Surface to be covered:";
      TextCajas = "Plaquia boxes needed:";
      TextBaldes = "Buckets of glue:";
      TextCostoPlaquia = "Cost Plaquia:";
      TextCostoPegamento = "Cost Glue:";
      TextTotal = "Total:";
      TextContactar = "Contact the distributor";
      TextDist = "Nearest distributor:";
    } else {
      TextResultados = "Resultados";
      TextSuperficie = "Superficie a cubrir:";
      TextCajas = "Cajas de Plaquia necesarias:";
      TextBaldes = "Baldes de pegamento:";
      TextCostoPlaquia = "Costo Plaquia:";
      TextCostoPegamento = "Costo pegamento:";
      TextTotal = "Total:";
      TextContactar = "Contactar al distribuidor";
      TextDist = "Distribuidor mas cercano:";
    }
    // Cotizacion por moneda
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
        <h4>{TextResultados}</h4>
        <br />
        <Row>
          <Col>
            <p>
              {TextSuperficie} {this.props.Sup} m²
            </p>
            <p>
              {TextCajas} {this.props.Cajas}
            </p>
            <p>
              {TextBaldes} {this.props.Baldes}
            </p>
          </Col>
          <Col>
            <p>
              {TextCostoPlaquia} {SubtotalCajas} {SimboloMoneda}
            </p>
            <p>
              {TextCostoPegamento} {SubtotalPegamento} {SimboloMoneda}
            </p>
            <p>
              <strong>
                {TextTotal} {Total} {SimboloMoneda}
              </strong>
            </p>
          </Col>
        </Row>
        <Button
          variant="outline-primary"
          onClick={this.MostrarContactarDistribuidor}
        >
          {TextContactar}
        </Button>
        <div id="DivContactaDistribuidor" style={{ display: "none" }}>
          <hr />
          <p>{TextDist}</p>
          <ContactarDistribuidor
            Idioma={this.props.Idioma}
            Superficie={this.props.Sup}
            Modelo={this.props.Modelo}
            PrecioCotizado={Total}
            Moneda={SimboloMoneda}
            CantCajas={this.props.Cajas}
            CantBaldes={this.props.Baldes}
          />
        </div>
      </div>
    );
  }
}

export default ResultadosCotizador;
