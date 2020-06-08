import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Resultados from "./ResultadosCotizador";

class Cotizador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alto: "",
      ancho: "",
      superficie: "",
      cantCajas: "",
      cantBaldes: "",
      moneda: "",
      mostrarResultado: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Iniciar();
  }
  Iniciar() {
    if (this.props.Idioma === "Por") {
      //
    } else if (this.props.Idioma === "Eng") {
      //
    } else {
      //
    }
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
    event.preventDefault();
    const a = parseFloat(this.state.alto);
    const b = parseFloat(this.state.ancho);
    const Moneda = document.getElementById("CotizadorMoneda").value;
    Resultado.superficie = Math.round(a * b * 100) / 100;
    Resultado.cantCajas = Math.ceil(Resultado.superficie / 1.44);
    Resultado.cantBaldes = Math.ceil(Resultado.cantCajas / 5);
    this.setState({ superficie: Resultado.superficie });
    this.setState({ cantCajas: Resultado.cantCajas });
    this.setState({ cantBaldes: Resultado.cantBaldes });
    this.setState({ moneda: Moneda });
    document.getElementById("DivResultadosCotizador").style.display = "block";
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cotizador online de Plaquia
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label>Alto</Form.Label>
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
                  <Form.Label>Ancho</Form.Label>
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
              <Col>
                <Form.Group>
                  <Form.Label>Moneda</Form.Label>
                  <Form.Control as="select" required id="CotizadorMoneda">
                    <option value="" disabled selected hidden>
                      Seleccione moneda
                    </option>
                    <option value="ARG">Peso argentino</option>
                    <option value="BOL">Boliviano</option>
                    <option value="BRA">Real</option>
                    <option value="USD">Dólar</option>
                    <option value="PAR">Guaraní</option>
                    <option value="URU">Peso uruguayo</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Button type="submit">Calcular</Button>
          </Form>
          <div id="DivResultadosCotizador" style={{ display: "none" }}>
            <Resultados
              Idioma={this.props.Idioma}
              Sup={this.state.superficie}
              Cajas={this.state.cantCajas}
              Baldes={this.state.cantBaldes}
              Moneda={this.state.moneda}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Volver</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Cotizador;
