import React from "react";
import axios from "axios";

import "./Contacto.css";
import Formulario from "./Formulario";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
/*
var LabelNombre;
var LabelMail;
var LabelTelefono;
var LabelConsulta;
var LabelBoton;
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
      LabelNombre = "Nome:";
      LabelMail = "Correio:";
      LabelTelefono = "Telefone:";
      LabelConsulta = "Consulte:";
      LabelBoton = "Envie consulta";
      Alerta = "Consulta enviada!";
    } else if (this.props.Idioma === "Eng") {
      LabelNombre = "Name:";
      LabelMail = "Mail:";
      LabelTelefono = "Phone:";
      LabelConsulta = "Message:";
      LabelBoton = "Send query";
      Alerta = "Query sent!";
    } else {
      LabelNombre = "Nombre";
      LabelMail = "Mail";
      LabelTelefono = "Telefono";
      LabelConsulta = "Consulta:";
      LabelBoton = "Enviar consulta";
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
  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.nombre;
    const email = this.state.email;
    const phone = this.state.telefono;
    const message = this.state.consulta;
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: name,
        email: email,
        phone: phone,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert(Alerta);
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    document.getElementById("FormularioDeContacto").reset();
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit.bind(this)}
        id="FormularioDeContacto"
        method="POST"
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>{LabelNombre}</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>{LabelMail}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>{LabelTelefono}</Form.Label>
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
          <Form.Label>{LabelConsulta}</Form.Label>
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
          {LabelBoton}
        </Button>
      </Form>
    );
  }
}
*/
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
            <i>All Labels are required</i>
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
