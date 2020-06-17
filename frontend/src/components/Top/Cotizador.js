import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";

import Resultados from "./ResultadosCotizador";

var TituloCotizador;
var LabelAlto;
var LabelAncho;
var LabelModelo;
var LabelMoneda;
var LabelSeleccionar;
var LabelCalcular;
var LabelVolver;

class Cotizador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alto: "",
      ancho: "",
      superficie: "",
      cantCajas: "",
      cantBaldes: "",
      modelo: "",
      moneda: "",
      ListaMonedas: [],
      PrecioCaja: "",
      PrecioBalde: "",
      cargarDatos: false,
    };
    this.getMonedas();
    this.Iniciar();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  Iniciar() {
    if (this.props.Idioma === "Por") {
      TituloCotizador = "Cotação Online para Plaquia";
      LabelAlto = "Alto";
      LabelAncho = "Largura";
      LabelModelo = "Modelo";
      LabelMoneda = "Moeda";
      LabelSeleccionar = "Selecione";
      LabelCalcular = "Calcule";
      LabelVolver = "Voltar";
    } else if (this.props.Idioma === "Eng") {
      TituloCotizador = "Plaquia's online  calculator";
      LabelAlto = "High";
      LabelAncho = "Width";
      LabelModelo = "Model";
      LabelMoneda = "Money";
      LabelSeleccionar = "Select";
      LabelCalcular = "Calculate";
      LabelVolver = "Back";
    } else {
      TituloCotizador = "Cotizador online de Plaquia";
      LabelAlto = "Alto";
      LabelAncho = "Ancho";
      LabelModelo = "Modelo";
      LabelMoneda = "Moneda";
      LabelSeleccionar = "Seleccionar";
      LabelCalcular = "Calcular";
      LabelVolver = "Volver";
    }
  }

  getMonedas() {
    axios
      //.get("http://localhost:3000/monedas/list")
      .get("https://plaquia.herokuapp.com/monedas/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ ListaMonedas: data });
        this.setState({ cargarDatos: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const Resultado = {};
    const Monedas = this.state.ListaMonedas;
    event.preventDefault();
    const a = parseFloat(this.state.alto);
    const b = parseFloat(this.state.ancho);
    const idMoneda = document.getElementById("CotizadorMoneda").value;
    const Modelo = document.getElementById("CotizadorModelo").value;
    Resultado.superficie = Math.round(a * b * 100) / 100;
    Resultado.cantCajas = Math.ceil(Resultado.superficie / 1.44);
    Resultado.cantBaldes = Math.ceil(Resultado.cantCajas / 5);
    this.setState({ superficie: Resultado.superficie });
    this.setState({ cantCajas: Resultado.cantCajas });
    this.setState({ cantBaldes: Resultado.cantBaldes });
    this.setState({ moneda: Monedas[idMoneda].Denominacion });
    this.setState({ PrecioCaja: Monedas[idMoneda].PrecioCaja });
    this.setState({ PrecioBalde: Monedas[idMoneda].PrecioPegamento });
    this.setState({ modelo: Modelo });
    document.getElementById("DivResultadosCotizador").style.display = "block";
  }

  render() {
    if (this.state.cargarDatos) {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {TituloCotizador}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>{LabelAlto}</Form.Label>
                    <Form.Control
                      name="alto"
                      type="number"
                      step="0.01"
                      min="0.1"
                      max="200"
                      autocomplete="off"
                      required
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>{LabelAncho}</Form.Label>
                    <Form.Control
                      name="ancho"
                      type="number"
                      step="0.01"
                      min="0.1"
                      max="200"
                      autocomplete="off"
                      required
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>{LabelModelo}</Form.Label>
                    <Form.Control as="select" required id="CotizadorModelo">
                      <option value="" disabled selected hidden>
                        {LabelSeleccionar}
                      </option>
                      <option value="Onice">Onice</option>
                      <option value="Cuarzo">Cuarzo</option>
                      <option value="Jade">Jade</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>{LabelMoneda}</Form.Label>
                    <Form.Control as="select" required id="CotizadorMoneda">
                      <option value="" disabled selected hidden>
                        {LabelSeleccionar}
                      </option>
                      <option value="0">Peso argentino</option>
                      <option value="1">Dólar</option>
                      <option value="2">Boliviano</option>

                      <option value="4">Guaraní</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button variant="outline-primary" type="submit">
                {LabelCalcular}
              </Button>
            </Form>
            <div id="DivResultadosCotizador" style={{ display: "none" }}>
              <hr />
              <Resultados
                Idioma={this.props.Idioma}
                Sup={this.state.superficie}
                Cajas={this.state.cantCajas}
                Baldes={this.state.cantBaldes}
                Moneda={this.state.moneda}
                Modelo={this.state.modelo}
                PrecioCaja={this.state.PrecioCaja}
                PrecioBalde={this.state.PrecioBalde}
                Ocultar={this.props.onHide}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={this.props.onHide}>
              {LabelVolver}
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return (
        <div id="cargando" style={{ display: "none" }}>
          <br />
        </div>
      );
    }
  }
}

export default Cotizador;
//<option value="5">Peso uruguayo</option>
// <option value="3">Real</option>
