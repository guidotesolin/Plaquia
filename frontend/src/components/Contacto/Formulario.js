import React, { Component } from "react";
import axios from "axios";

var LabelNombre;
var LabelMail;
var LabelTelefono;
var LabelConsulta;
var LabelPais;
var LabelProvincia;
var LabelLocalidad;
var LabelOtro;
var Epigrafe;
var LabelBoton;
var Enviado;
var Error;

class ContactForm extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      LabelNombre = "Nome:";
      LabelMail = "Correio:";
      LabelTelefono = "Telefone:";
      LabelConsulta = "Consulte:";
      LabelPais = "País:";
      LabelProvincia = "Província:";
      LabelLocalidad = "Cidade:";
      LabelOtro = "Outros";
      Epigrafe = "Todos os campos são de preenchimento obrigatório";
      LabelBoton = "Envie consulta";
      Enviado =
        "A mensagem foi enviada. Em breve estaremos entrando em contato com você.";
      Error =
        "Envio de erro. Por favor, entre em contato diretamente com contacto@plaquia.com.ar.";
    } else if (this.props.Idioma === "Eng") {
      LabelNombre = "Name:";
      LabelMail = "Mail:";
      LabelTelefono = "Phone:";
      LabelPais = "Country:";
      LabelProvincia = "State:";
      LabelLocalidad = "City:";
      LabelOtro = "Another";

      LabelConsulta = "Message:";
      Epigrafe = "All Labels are required";
      LabelBoton = "Send query";
      Enviado = "The message has been sent. We will be contacting you shortly.";
      Error = "Error sending. Please contact contacto@plaquia.com.ar directly.";
    } else {
      LabelNombre = "Nombre:";
      LabelMail = "Mail:";
      LabelTelefono = "Telefono:";
      LabelPais = "País:";
      LabelProvincia = "Provincia:";
      LabelLocalidad = "Ciudad:";
      LabelConsulta = "Consulta:";
      LabelOtro = "Otro";
      Epigrafe = "Todos los campos son obligatorios";
      LabelBoton = "Enviar consulta";
      Enviado =
        "Su mensaje ha sido enviado. A la brevedad nos estaremos poniendo en contacto.";
      Error =
        "Error al enviar. Comuniquese directamente a contacto@plaquia.com.ar";
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const country = document.getElementById("country").value;
    const province = document.getElementById("province").value;
    const city = document.getElementById("city").value;
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: name,
        email: email,
        phone: phone,
        country: country,
        province: province,
        city: city,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.resetForm();
        this.mostrarMensaje();
      } else if (response.data.msg === "fail") {
        alert(Error);
      }
    });
  }

  resetForm() {
    document.getElementById("FormularioContacto").reset();
  }

  mostrarMensaje() {
    document.getElementById("MensajeEnviado").style.display = "block";
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <form
          id="FormularioContacto"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div class="form-row">
            <div class="col">
              <div className="form-group">
                <label for="name">{LabelNombre}</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="email">{LabelMail}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="phone">{LabelTelefono}</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="country">{LabelPais}</label>
                <select class="form-control" id="country">
                  <option>Argentina</option>
                  <option>Bolivia</option>
                  <option>Brasil</option>
                  <option>Paraguay</option>
                  <option>Uruguay</option>
                  <option>{LabelOtro}</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="province">{LabelProvincia}</label>
                <input
                  type="text"
                  className="form-control"
                  id="province"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="city">{LabelLocalidad}</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="message">{LabelConsulta}</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              required
            ></textarea>
          </div>
          <small class="form-text text-muted">{Epigrafe}</small>
          <button
            id="BotonEnviarConsulta"
            type="submit"
            className="btn btn-primary btn-block"
          >
            {LabelBoton}
          </button>
        </form>
        <div id="MensajeEnviado" style={{ display: "none" }}>
          <br />
          <h5>{Enviado}</h5>
          <br />
        </div>
      </div>
    );
  }
}

export default ContactForm;
