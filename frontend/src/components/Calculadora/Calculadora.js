import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

import ModalPlaquia from "./LanzarModal";

import imgPresentacion from "../../img/esp/Presentacion.jpg";
import imgRendimiento from "../../img/esp/Rendimiento.png";

var Resultado = {};

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
    return Resultado;
  }

  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={imgPresentacion} height="400" />
          </Card>
          <Card>
            <Card.Img variant="top" src={imgRendimiento} height="400" />
          </Card>
          <Card id="ContenedorCalculadora">
            <Card.Body>
              <br />
              <br />
              <br />
              <br />
              <Form onSubmit={this.handleSubmit} id="FormCalculadora">
                <Form.Group as={Col}>
                  <Form.Label>Alto</Form.Label>
                  <Form.Control
                    id="InputCalculadora"
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
                    id="InputCalculadora"
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
                <Row className="justify-content-md-center">
                  <Button variant="primary" type="submit" id="BotonCalcular">
                    Calcular
                  </Button>
                  <br />
                  <ModalPlaquia Datos={Resultado} />
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Calculadora;
