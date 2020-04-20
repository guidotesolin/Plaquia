import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
      telefono: "",
      consulta: "",
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
    event.preventDefault();
    document.getElementById("FormularioDeContacto").reset();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="FormularioDeContacto">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Telefono</Form.Label>
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
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="consulta"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar consulta
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
          <p>Contacto en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>Contacto en ingles</p>
        </div>
      );
    default:
      return (
        <div>
          <Formulario />
        </div>
      );
  }
}

export default Contacto;
