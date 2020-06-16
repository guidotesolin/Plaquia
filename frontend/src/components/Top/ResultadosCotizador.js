import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import ContactarDistribuidor from "./Contactar";

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
  }

  MostrarContactarDistribuidor() {
    document.getElementById("DivContactaDistribuidor").style.display = "block";
  }

  Calcular() {
    SubtotalCajas =
      Math.round(this.props.Cajas * this.props.PrecioCaja * 100) / 100;
    SubtotalPegamento =
      Math.round(this.props.Baldes * this.props.PrecioBalde * 100) / 100;
    Total = Math.round(((SubtotalPegamento + SubtotalCajas) * 100) / 100);
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <h4>{TextResultados}</h4>
        <br />
        {this.Calcular()}
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
              {TextCostoPlaquia} {SubtotalCajas} {this.props.Moneda}
            </p>
            <p>
              {TextCostoPegamento} {SubtotalPegamento} {this.props.Moneda}
            </p>
            <p>
              <strong>
                {TextTotal} {Total} {this.props.Moneda}
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
            Moneda={this.props.Moneda}
            CantCajas={this.props.Cajas}
            CantBaldes={this.props.Baldes}
          />
        </div>
      </div>
    );
  }
}

export default ResultadosCotizador;
