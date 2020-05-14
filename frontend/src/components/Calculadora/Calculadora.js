import React from "react";

import "./Calculadora.css";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

import MyVerticallyCenteredModal from "./Modal";

import espPresentacion from "../../img/Esp/Presentacion.jpg";
import espRendimiento from "../../img/Esp/Rendimiento.jpg";

import engPresentacion from "../../img/Eng/Presentacion.jpg";
import engRendimiento from "../../img/Eng/Rendimiento.jpg";

import porPresentacion from "../../img/Por/Presentacion.jpg";
import porRendimiento from "../../img/Por/Rendimiento.jpg";

var Resultado = {};
var imgPresentacion;
var imgRendimiento;
var nombreAlto;
var nombreAncho;
var nombreBoton;

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alto: "",
      ancho: "",
      modalShow: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.asignar();
  }

  asignar() {
    if (this.props.Idioma === "Por") {
      imgPresentacion = porPresentacion;
      imgRendimiento = porRendimiento;
      nombreAlto = "Alto";
      nombreAncho = "Largura";
      nombreBoton = "Calcule";
    } else if (this.props.Idioma === "Eng") {
      imgPresentacion = engPresentacion;
      imgRendimiento = engRendimiento;
      nombreAlto = "High";
      nombreAncho = "Width";
      nombreBoton = "Calculate";
    } else {
      imgPresentacion = espPresentacion;
      imgRendimiento = espRendimiento;
      nombreAlto = "Alto";
      nombreAncho = "Ancho";
      nombreBoton = "Calcular";
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
    const a = parseFloat(this.state.alto);
    const b = parseFloat(this.state.ancho);
    Resultado.superficie = Math.round(a * b * 100) / 100;
    Resultado.cantCajas = Math.ceil(Resultado.superficie / 1.44);
    Resultado.cantBaldes = Math.ceil(Resultado.cantCajas / 5);
    event.preventDefault();
    document.getElementById("FormCalculadora").reset();
    this.setState({ modalShow: true });
    return Resultado;
  }

  render() {
    return (
      <div class="flex-container">
        <div class="row">
          <CardDeck>
            <Card id="CardsCalculadora">
              <div class="col align-self-center">
                <img
                  src={imgPresentacion}
                  class="img-fluid"
                  alt="..."
                  id="ImagenesCalculadora"
                ></img>
              </div>
            </Card>
            <Card id="CardsCalculadora">
              <div class="col align-self-center">
                <img
                  src={imgRendimiento}
                  class="img-fluid"
                  alt="..."
                  id="ImagenesCalculadora"
                ></img>
              </div>
            </Card>
            <div class="col align-self-center" id="DivCaluladora">
              <Card id="CardsCalculadora">
                <Form onSubmit={this.handleSubmit} id="FormCalculadora">
                  <Form.Group>
                    <Form.Label>{nombreAlto}</Form.Label>
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
                    <Form.Label>{nombreAncho}</Form.Label>
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
                      {nombreBoton}
                    </Button>
                    <br />
                    <MyVerticallyCenteredModal
                      Idioma={this.props.Idioma}
                      Datos={Resultado}
                      show={this.state.modalShow}
                      onHide={() => this.setState({ modalShow: false })}
                    />
                  </Row>
                </Form>
              </Card>
            </div>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Calculadora;
