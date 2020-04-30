import React from "react";
import axios from "axios";

import "./Contacto.css";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

var FieldNombre;
var FieldMail;
var FieldTelefono;
var FieldConsulta;
var FieldBoton;
var Alerta;

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.asignar();

    this.state = {
      nombre: "",
      email: "",
      telefono: "",
      consulta: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  asignar() {
    if (this.props.Idioma === "Por") {
      FieldNombre = "Nome:";
      FieldMail = "Correio:";
      FieldTelefono = "Telefone:";
      FieldConsulta = "Consulte:";
      FieldBoton = "Envie consulta";
      Alerta = "Consulta enviada!";
    } else if (this.props.Idioma === "Eng") {
      FieldNombre = "Name:";
      FieldMail = "Mail:";
      FieldTelefono = "Phone:";
      FieldConsulta = "Message:";
      FieldBoton = "Send query";
      Alerta = "Query sent!";
    } else {
      FieldNombre = "Nombre";
      FieldMail = "Mail";
      FieldTelefono = "Telefono";
      FieldConsulta = "Consulta:";
      FieldBoton = "Enviar consulta";
      Alerta = "Mensaje enviado!";
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
    alert(
      "Name: " +
        this.state.nombre +
        " Email: " +
        this.state.email +
        " Telefono: " +
        this.state.telefono +
        " Consulta: " +
        this.state.consulta
    );
    alert(Alerta);
    event.preventDefault();
    document.getElementById("FormularioDeContacto").reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="FormularioDeContacto">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>{FieldNombre}</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{FieldMail}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>{FieldTelefono}</Form.Label>
            <Form.Control
              name="telefono"
              type="tel"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>{FieldConsulta}</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="consulta"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="BotonEnviarConsulta" block>
          {FieldBoton}
        </Button>
      </Form>
    );
  }
}

function Contacto(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>
            Envie-nos um e-mail para <strong>contacto@plaquia.com.ar</strong>,
            ou entre em contato conosco através do formulário abaixo.
          </p>
          <p id="EpigrafeMail">
            <i>Todos os campos são de preenchimento obrigatório</i>
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>
            Send us an email to <strong>contacto@plaquia.com.ar</strong>, or
            contact us using the form below.
          </p>
          <p id="EpigrafeMail">
            <i>All fields are required</i>
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
    default:
      return (
        <div>
          <p>
            Envienos un mail a <strong>contacto@plaquia.com.ar</strong>, o
            contactese mediante el siguiente formulario.
          </p>
          <p id="EpigrafeMail">
            <i>Todos los campos son obligatorios</i>
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
  }
}

export default Contacto;
