import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

var Resultado = new Object();

function lanzarModal(resultadoCalculadora) {
  const Texto =
    "Superficie: " +
    resultadoCalculadora.superficie +
    " m². Cantidad de cajas: " +
    resultadoCalculadora.cantCajas +
    ". Cantidad de baldes: " +
    resultadoCalculadora.cantBaldes;
  alert(Texto);
}

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alto: "",
      ancho: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const a = parseFloat(this.state.alto);
    const b = parseFloat(this.state.ancho);
    Resultado.superficie = a * b;
    Resultado.cantCajas = Math.ceil(Resultado.superficie / 1.44);
    Resultado.cantBaldes = Math.ceil(Resultado.cantCajas / 5);
    event.preventDefault();
    document.getElementById("FormCalculadora").reset();
    lanzarModal(Resultado);
    return Resultado;
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} id="FormCalculadora">
          <Form.Group as={Col}>
            <Form.Label>Alto</Form.Label>
            <Form.Control
              name="alto"
              type="number"
              step="0.01"
              min="0.1"
              max="200"
              autocomplete="off"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ancho</Form.Label>
            <Form.Control
              name="ancho"
              type="number"
              step="0.01"
              min="0.1"
              max="200"
              autocomplete="off"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Calcular
          </Button>
        </Form>
      </div>
    );
  }
}

export default Calculadora;
